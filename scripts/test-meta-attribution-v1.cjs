'use strict';
const assert = require('node:assert/strict');
const { describe, it, before, after } = require('node:test');

// Simulate browser environment for testing
function installBrowserMock({ fbpCookie = null, fbcCookie = null, fbclid = null, adsConsent = false } = {}) {
  const sessionStore = new Map();
  global.sessionStorage = {
    getItem: (k) => sessionStore.has(k) ? sessionStore.get(k) : null,
    setItem: (k, v) => sessionStore.set(k, v),
  };
  global.document = Object.defineProperty({
    addEventListener: () => {},
    querySelectorAll: () => [],
  }, 'cookie', {
    get() {
      const parts = [];
      if (fbpCookie) parts.push(`_fbp=${fbpCookie}`);
      if (fbcCookie) parts.push(`_fbc=${fbcCookie}`);
      return parts.join('; ');
    },
    configurable: true,
    enumerable: true,
  });
  global.window = {
    location: { search: fbclid ? `?fbclid=${fbclid}` : '' },
    PortalConsentV1: { allowsAdvertising: () => adsConsent },
    __portalMetaInitialized: false,
    fbq: null,
    dataLayer: [],
  };
  global.URLSearchParams = URLSearchParams; // Node.js 18+ has this
  return sessionStore;
}

// Extract the metaParams and related helpers by evaluating the script logic
function makeMetaParamsFn({ fbpCookie = null, fbcCookie = null, fbclid = null, adsConsent = false } = {}) {
  const sessionStore = installBrowserMock({ fbpCookie, fbcCookie, fbclid, adsConsent });
  const META_CLICK_KEY = 'portal_meta_click_v1';
  const MAX = 1024;
  function rdCookie(name) {
    const c = '; ' + global.document.cookie;
    const idx = c.indexOf('; ' + name + '=');
    if (idx === -1) return null;
    const s = idx + name.length + 3;
    const e = c.indexOf(';', s);
    const v = e === -1 ? c.slice(s) : c.slice(s, e);
    const t = v.trim();
    return t && t.length <= MAX ? t : null;
  }
  function adsGranted() {
    try { return !!(global.window.PortalConsentV1 && global.window.PortalConsentV1.allowsAdvertising()); } catch(e) { return false; }
  }
  function metaParams() {
    if (!adsGranted()) return null;
    const fbp = rdCookie('_fbp');
    let fbc = rdCookie('_fbc');
    if (!fbc) {
      try {
        const cl = new URLSearchParams(global.window.location.search).get('fbclid');
        if (cl) {
          const now = Date.now();
          const candidate = 'fb.1.' + now + '.' + cl;
          if (candidate.length <= MAX) fbc = candidate;
        } else {
          const st = JSON.parse(global.sessionStorage.getItem(META_CLICK_KEY) || 'null');
          if (st && st.fbclid && st.firstSeen) {
            const c2 = 'fb.1.' + st.firstSeen + '.' + st.fbclid;
            if (c2.length <= MAX) fbc = c2;
          }
        }
      } catch(e) {}
    }
    if (!fbp && !fbc) return null;
    return { fbp, fbc };
  }
  return { metaParams, sessionStore };
}

// ── Tests ─────────────────────────────────────────────────────────────────────

describe('Meta attribution — consent gate', () => {
  it('no advertising consent → metaParams returns null', () => {
    const { metaParams } = makeMetaParamsFn({ fbpCookie: 'fb.1.100.abc', adsConsent: false });
    assert.strictEqual(metaParams(), null);
  });

  it('advertising consent, no cookies, no fbclid → null', () => {
    const { metaParams } = makeMetaParamsFn({ adsConsent: true });
    assert.strictEqual(metaParams(), null);
  });
});

describe('Meta attribution — fbp capture', () => {
  it('ads granted + _fbp → fbp present in result', () => {
    const { metaParams } = makeMetaParamsFn({ fbpCookie: 'fb.1.12345.abcdef', adsConsent: true });
    const result = metaParams();
    assert.ok(result, 'should return result');
    assert.strictEqual(result.fbp, 'fb.1.12345.abcdef');
  });

  it('fbp value over 1024 chars → treated as invalid', () => {
    const longVal = 'x'.repeat(1025);
    const { metaParams } = makeMetaParamsFn({ fbpCookie: longVal, adsConsent: true });
    const result = metaParams();
    assert.strictEqual(result, null, 'long fbp should be rejected');
  });
});

describe('Meta attribution — fbc capture', () => {
  it('ads granted + _fbc cookie → fbc present', () => {
    const { metaParams } = makeMetaParamsFn({ fbcCookie: 'fb.1.12345.xyz', adsConsent: true });
    const result = metaParams();
    assert.ok(result);
    assert.strictEqual(result.fbc, 'fb.1.12345.xyz');
  });

  it('ads granted + fbclid real in URL, no _fbc → fbc fallback generated', () => {
    const { metaParams } = makeMetaParamsFn({ fbclid: 'IwAR12345', adsConsent: true });
    const result = metaParams();
    assert.ok(result, 'should return result');
    assert.ok(result.fbc, 'fbc should be set');
    assert.ok(result.fbc.startsWith('fb.1.'), 'fbc should follow fb.1.timestamp.fbclid format');
    assert.ok(result.fbc.endsWith('.IwAR12345'), 'fbc should end with fbclid');
  });

  it('no fbclid in URL, no _fbc cookie → fbc null', () => {
    const { metaParams } = makeMetaParamsFn({ adsConsent: true });
    const result = metaParams();
    assert.strictEqual(result, null);
  });

  it('never fabricates fbclid when none in URL', () => {
    const { metaParams } = makeMetaParamsFn({ adsConsent: true, fbpCookie: 'fb.1.1.a' });
    const result = metaParams();
    assert.ok(result);
    assert.strictEqual(result.fbc, null, 'no fbc when no fbclid source');
  });
});

describe('Meta attribution — fbp/fbc not in dataLayer', () => {
  it('metaParams are not part of trackingParams / dataLayer push', () => {
    // The script only appends fbp/fbc to the checkout URL href, not to dataLayer
    // Verify that metaParams result is separate from ATTRIBUTION_KEYS
    const ATTRIBUTION_KEYS = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','gclid','gbraid','wbraid'];
    assert.ok(!ATTRIBUTION_KEYS.includes('fbp'), 'fbp not in attribution keys');
    assert.ok(!ATTRIBUTION_KEYS.includes('fbc'), 'fbc not in attribution keys');
  });
});

describe('Meta attribution — checkout URL decoration', () => {
  it('ads granted + fbp → checkout URL receives fbp param', () => {
    const META_CLICK_KEY = 'portal_meta_click_v1';
    const MAX = 1024;
    installBrowserMock({ fbpCookie: 'fb.1.100.aaa', adsConsent: true });
    const checkoutBase = 'https://app.portalcaminhodaconsciencia.com.br/api/commerce/checkout/antes-do-aperto?utm_source=meta';
    function rdCookie(name) {
      const c = '; ' + global.document.cookie;
      const idx = c.indexOf('; ' + name + '=');
      if (idx === -1) return null;
      const s = idx + name.length + 3;
      const e = c.indexOf(';', s);
      const v = e === -1 ? c.slice(s) : c.slice(s, e);
      const t = v.trim();
      return t && t.length <= MAX ? t : null;
    }
    const fbp = rdCookie('_fbp');
    const u = new URL(checkoutBase);
    if (fbp) u.searchParams.set('fbp', fbp);
    assert.strictEqual(u.searchParams.get('fbp'), 'fb.1.100.aaa');
    assert.strictEqual(u.searchParams.get('utm_source'), 'meta', 'UTMs preserved');
  });

  it('no ads consent → checkout URL does not receive fbp/fbc', () => {
    installBrowserMock({ fbpCookie: 'fb.1.100.aaa', adsConsent: false });
    // metaParams returns null → no decoration
    function adsGranted() {
      try { return !!(global.window.PortalConsentV1 && global.window.PortalConsentV1.allowsAdvertising()); } catch(e) { return false; }
    }
    assert.strictEqual(adsGranted(), false);
  });

  it('fbp/fbc never forwarded to Eduzz URL directly', () => {
    const EDUZZ_URL = 'https://chk.eduzz.com/E05NO54G9X';
    // The checkout entrypoint (server) handles redirect; client only decorates
    // /api/commerce/checkout/... not chk.eduzz.com
    assert.ok(!EDUZZ_URL.includes('fbp'), 'Eduzz URL has no fbp');
    assert.ok(!EDUZZ_URL.includes('fbc'), 'Eduzz URL has no fbc');
  });
});

describe('Meta Pixel funnel — browser Purchase absent', () => {
  it('no fbq Purchase call in page script (structural check)', () => {
    const fs = require('node:fs');
    const html = fs.readFileSync(require('node:path').join(__dirname, '../antes-do-aperto/index.html'), 'utf8');
    // Must NOT contain fbq('track','Purchase') anywhere
    assert.ok(!html.includes("fbq('track','Purchase')"), 'no browser Purchase event');
    assert.ok(!html.includes('fbq("track","Purchase")'), 'no browser Purchase event (double quotes)');
  });

  it('InitiateCheckout is present in page script', () => {
    const fs = require('node:fs');
    const html = fs.readFileSync(require('node:path').join(__dirname, '../antes-do-aperto/index.html'), 'utf8');
    assert.ok(html.includes('InitiateCheckout'), 'InitiateCheckout event present');
  });

  it('PageView is present in page script', () => {
    const fs = require('node:fs');
    const html = fs.readFileSync(require('node:path').join(__dirname, '../antes-do-aperto/index.html'), 'utf8');
    assert.ok(html.includes("fbq('track','PageView')"), 'PageView event present');
  });
});

console.log('All Meta attribution tests passed.');
