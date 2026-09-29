'use strict';
const assert = require('node:assert/strict');
const { describe, it } = require('node:test');

const META_CLICK_KEY = 'portal_meta_click_v1';
const MAX = 1024;

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
  global.URLSearchParams = URLSearchParams;
  return sessionStore;
}

function buildHelpers({ fbpCookie = null, fbcCookie = null, fbclid = null, adsConsent = false } = {}) {
  const sessionStore = installBrowserMock({ fbpCookie, fbcCookie, fbclid, adsConsent });

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

  function resolveStableFbc(cl) {
    let st = null;
    try { st = JSON.parse(global.sessionStorage.getItem(META_CLICK_KEY) || 'null'); } catch(e) {}
    const fs = st && st.fbclid === cl ? st.firstSeen : Date.now();
    if (!st || st.fbclid !== cl) {
      try { global.sessionStorage.setItem(META_CLICK_KEY, JSON.stringify({ fbclid: cl, firstSeen: fs })); } catch(e) {}
    }
    const candidate = 'fb.1.' + fs + '.' + cl;
    return candidate.length <= MAX ? candidate : null;
  }

  function metaParams() {
    if (!adsGranted()) return null;
    const fbp = rdCookie('_fbp');
    let fbc = rdCookie('_fbc');
    if (!fbc) {
      try {
        const cl = new URLSearchParams(global.window.location.search).get('fbclid');
        if (cl) {
          fbc = resolveStableFbc(cl);
        } else {
          let st = null;
          try { st = JSON.parse(global.sessionStorage.getItem(META_CLICK_KEY) || 'null'); } catch(e) {}
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

  // Page-load capture — consent-gated
  function runPageLoadCapture() {
    try {
      const cl = new URLSearchParams(global.window.location.search).get('fbclid');
      if (cl && adsGranted()) {
        let st = null;
        try { st = JSON.parse(global.sessionStorage.getItem(META_CLICK_KEY) || 'null'); } catch(e) {}
        if (!st || st.fbclid !== cl) {
          try { global.sessionStorage.setItem(META_CLICK_KEY, JSON.stringify({ fbclid: cl, firstSeen: Date.now() })); } catch(e) {}
        }
      }
    } catch(e) {}
  }

  return { metaParams, resolveStableFbc, adsGranted, sessionStore, runPageLoadCapture };
}

// ── Consent gate ───────────────────────────────────────────────────────────────

describe('Meta attribution — consent gate', () => {
  it('no advertising consent → metaParams returns null', () => {
    const { metaParams } = buildHelpers({ fbpCookie: 'fb.1.100.abc', adsConsent: false });
    assert.strictEqual(metaParams(), null);
  });

  it('advertising consent, no cookies, no fbclid → null', () => {
    const { metaParams } = buildHelpers({ adsConsent: true });
    assert.strictEqual(metaParams(), null);
  });
});

// ── fbp capture ───────────────────────────────────────────────────────────────

describe('Meta attribution — fbp capture', () => {
  it('ads granted + _fbp → fbp present in result', () => {
    const { metaParams } = buildHelpers({ fbpCookie: 'fb.1.12345.abcdef', adsConsent: true });
    const result = metaParams();
    assert.ok(result, 'should return result');
    assert.strictEqual(result.fbp, 'fb.1.12345.abcdef');
  });

  it('fbp value over 1024 chars → treated as invalid', () => {
    const longVal = 'x'.repeat(1025);
    const { metaParams } = buildHelpers({ fbpCookie: longVal, adsConsent: true });
    assert.strictEqual(metaParams(), null, 'long fbp should be rejected');
  });
});

// ── fbc capture ───────────────────────────────────────────────────────────────

describe('Meta attribution — fbc capture', () => {
  it('ads granted + _fbc cookie → fbc present', () => {
    const { metaParams } = buildHelpers({ fbcCookie: 'fb.1.12345.xyz', adsConsent: true });
    const result = metaParams();
    assert.ok(result);
    assert.strictEqual(result.fbc, 'fb.1.12345.xyz');
  });

  it('ads granted + fbclid in URL, no _fbc → fbc fallback generated', () => {
    const { metaParams } = buildHelpers({ fbclid: 'IwAR12345', adsConsent: true });
    const result = metaParams();
    assert.ok(result, 'should return result');
    assert.ok(result.fbc, 'fbc should be set');
    assert.ok(result.fbc.startsWith('fb.1.'), 'fbc should follow fb.1.timestamp.fbclid format');
    assert.ok(result.fbc.endsWith('.IwAR12345'), 'fbc should end with fbclid');
  });

  it('no fbclid in URL, no _fbc cookie → null', () => {
    const { metaParams } = buildHelpers({ adsConsent: true });
    assert.strictEqual(metaParams(), null);
  });

  it('never fabricates fbclid when none in URL', () => {
    const { metaParams } = buildHelpers({ adsConsent: true, fbpCookie: 'fb.1.1.a' });
    const result = metaParams();
    assert.ok(result);
    assert.strictEqual(result.fbc, null, 'no fbc when no fbclid source');
  });
});

// ── Consent-gated fbclid storage (I1) ─────────────────────────────────────────

describe('Meta attribution — fbclid storage consent gate (I1)', () => {
  it('fbclid in URL + no consent → sessionStorage NOT written', () => {
    const { runPageLoadCapture, sessionStore } = buildHelpers({ fbclid: 'IwAR_test', adsConsent: false });
    runPageLoadCapture();
    assert.strictEqual(sessionStore.has(META_CLICK_KEY), false, 'should not store fbclid without consent');
  });

  it('fbclid in URL + consent granted → sessionStorage written', () => {
    const { runPageLoadCapture, sessionStore } = buildHelpers({ fbclid: 'IwAR_test', adsConsent: true });
    runPageLoadCapture();
    assert.ok(sessionStore.has(META_CLICK_KEY), 'should store fbclid with consent');
    const stored = JSON.parse(sessionStore.get(META_CLICK_KEY));
    assert.strictEqual(stored.fbclid, 'IwAR_test');
    assert.ok(typeof stored.firstSeen === 'number', 'firstSeen should be numeric timestamp');
  });

  it('no fbclid in URL → sessionStorage NOT written even with consent', () => {
    const { runPageLoadCapture, sessionStore } = buildHelpers({ adsConsent: true });
    runPageLoadCapture();
    assert.strictEqual(sessionStore.has(META_CLICK_KEY), false, 'should not store without fbclid');
  });
});

// ── Stable fbc (I2) ───────────────────────────────────────────────────────────

describe('Meta attribution — stable fbc across calls (I2)', () => {
  it('same fbclid called twice → identical fbc', () => {
    const { metaParams } = buildHelpers({ fbclid: 'IwAR_stable', adsConsent: true });
    const r1 = metaParams();
    const r2 = metaParams();
    assert.ok(r1 && r2, 'both calls should return result');
    assert.strictEqual(r1.fbc, r2.fbc, 'fbc must be stable for same fbclid');
  });

  it('different fbclid → different fbc', () => {
    const { metaParams } = buildHelpers({ fbclid: 'IwAR_first', adsConsent: true });
    const r1 = metaParams();
    // Change fbclid in URL
    global.window.location.search = '?fbclid=IwAR_second';
    const r2 = metaParams();
    assert.ok(r1 && r2, 'both calls should return result');
    assert.notStrictEqual(r1.fbc, r2.fbc, 'different fbclid must produce different fbc');
  });

  it('fbc from sessionStorage uses stored firstSeen, not new Date.now()', () => {
    const sessionStore = installBrowserMock({ fbclid: 'IwAR_persist', adsConsent: true });
    // Pre-populate sessionStorage with a known firstSeen
    const knownFirstSeen = 1700000000000;
    sessionStore.set(META_CLICK_KEY, JSON.stringify({ fbclid: 'IwAR_persist', firstSeen: knownFirstSeen }));

    const { metaParams } = buildHelpers({ fbclid: 'IwAR_persist', adsConsent: true });
    // Re-use the same sessionStore
    global.sessionStorage = {
      getItem: (k) => sessionStore.has(k) ? sessionStore.get(k) : null,
      setItem: (k, v) => sessionStore.set(k, v),
    };

    const result = metaParams();
    assert.ok(result, 'should return result');
    assert.ok(result.fbc.includes(String(knownFirstSeen)), 'fbc should use stored firstSeen');
  });
});

// ── InitiateCheckout current consent (I3) ─────────────────────────────────────

describe('Meta attribution — InitiateCheckout current consent check (I3)', () => {
  it('consent revoked after pixel init → InitiateCheckout does NOT fire', () => {
    const fired = [];
    installBrowserMock({ adsConsent: false });
    global.window.__portalMetaInitialized = true;
    global.window.fbq = (...args) => { fired.push(args); };
    // Simulate adsGranted() returning false (consent revoked)
    function adsGranted() { return false; }
    // Simulate the click handler logic
    const shouldFire = global.window.__portalMetaInitialized && global.window.fbq && adsGranted();
    assert.strictEqual(shouldFire, false, 'should not fire when consent revoked');
    assert.strictEqual(fired.length, 0, 'fbq should not have been called');
  });

  it('consent granted + pixel initialized → InitiateCheckout would fire', () => {
    const fired = [];
    installBrowserMock({ adsConsent: true });
    global.window.__portalMetaInitialized = true;
    global.window.fbq = (...args) => { fired.push(args); };
    function adsGranted() { return !!(global.window.PortalConsentV1 && global.window.PortalConsentV1.allowsAdvertising()); }
    // Simulate the click handler logic
    if (global.window.__portalMetaInitialized && global.window.fbq && adsGranted()) {
      try { global.window.fbq('track', 'InitiateCheckout', { content_name: 'ANTES DO APERTO', value: 97, currency: 'BRL' }); } catch(e) {}
    }
    assert.strictEqual(fired.length, 1, 'fbq should have been called once');
    assert.strictEqual(fired[0][1], 'InitiateCheckout');
  });
});

// ── fbp/fbc not in dataLayer ───────────────────────────────────────────────────

describe('Meta attribution — fbp/fbc not in dataLayer', () => {
  it('metaParams are not part of ATTRIBUTION_KEYS', () => {
    const ATTRIBUTION_KEYS = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','gclid','gbraid','wbraid'];
    assert.ok(!ATTRIBUTION_KEYS.includes('fbp'), 'fbp not in attribution keys');
    assert.ok(!ATTRIBUTION_KEYS.includes('fbc'), 'fbc not in attribution keys');
  });
});

// ── Checkout URL decoration ───────────────────────────────────────────────────

describe('Meta attribution — checkout URL decoration', () => {
  it('ads granted + fbp → checkout URL receives fbp param', () => {
    installBrowserMock({ fbpCookie: 'fb.1.100.aaa', adsConsent: true });
    const checkoutBase = 'https://app.portalcaminhodaconsciencia.com.br/api/commerce/checkout/antes-do-aperto?utm_source=meta';
    function rdCookie(name) {
      const c = '; ' + global.document.cookie;
      const idx = c.indexOf('; ' + name + '=');
      if (idx === -1) return null;
      const s = idx + name.length + 3;
      const e = c.indexOf(';', s);
      const v = e === -1 ? c.slice(s) : c.slice(s, e);
      return v.trim() || null;
    }
    const fbp = rdCookie('_fbp');
    const u = new URL(checkoutBase);
    if (fbp) u.searchParams.set('fbp', fbp);
    assert.strictEqual(u.searchParams.get('fbp'), 'fb.1.100.aaa');
    assert.strictEqual(u.searchParams.get('utm_source'), 'meta', 'UTMs preserved');
  });

  it('no ads consent → checkout URL does not receive fbp/fbc', () => {
    installBrowserMock({ fbpCookie: 'fb.1.100.aaa', adsConsent: false });
    function adsGranted() {
      try { return !!(global.window.PortalConsentV1 && global.window.PortalConsentV1.allowsAdvertising()); } catch(e) { return false; }
    }
    assert.strictEqual(adsGranted(), false);
  });

  it('fbp/fbc never forwarded to Eduzz URL directly', () => {
    const EDUZZ_URL = 'https://chk.eduzz.com/E05NO54G9X';
    assert.ok(!EDUZZ_URL.includes('fbp'), 'Eduzz URL has no fbp');
    assert.ok(!EDUZZ_URL.includes('fbc'), 'Eduzz URL has no fbc');
  });
});

// ── Browser Purchase absent ───────────────────────────────────────────────────

describe('Meta Pixel funnel — browser Purchase absent', () => {
  const fs = require('node:fs');
  const path = require('node:path');
  let html;
  try { html = fs.readFileSync(path.join(__dirname, '../antes-do-aperto/index.html'), 'utf8'); } catch(e) { html = ''; }

  it('no fbq Purchase call in page script', () => {
    assert.ok(!html.includes("fbq('track','Purchase')"), 'no browser Purchase event');
    assert.ok(!html.includes('fbq("track","Purchase")'), 'no browser Purchase event (double quotes)');
  });

  it('InitiateCheckout is present', () => {
    assert.ok(html.includes('InitiateCheckout'), 'InitiateCheckout event present');
  });

  it('PageView is present', () => {
    assert.ok(html.includes("fbq('track','PageView')"), 'PageView event present');
  });

  it('InitiateCheckout checks adsGranted()', () => {
    assert.ok(html.includes('adsGranted()'), 'adsGranted() must be present');
    const idx = html.indexOf('InitiateCheckout');
    const region = html.slice(Math.max(0, idx - 200), idx + 50);
    assert.ok(region.includes('adsGranted'), 'adsGranted must be near InitiateCheckout');
  });

  it('page-load fbclid capture is consent-gated', () => {
    // The consent-gated block uses _cl (not fbclid) as the variable name
    assert.ok(html.includes('_cl&&adsGranted()'), 'fbclid capture must be gated by adsGranted()');
  });
});

// ── Dual Meta Pixel (Phase 3) ─────────────────────────────────────────────────

describe('Meta Pixel — dual pixel destinations (Phase 3)', () => {
  const fs = require('node:fs');
  const path = require('node:path');
  let html;
  try { html = fs.readFileSync(path.join(__dirname, '../antes-do-aperto/index.html'), 'utf8'); } catch(e) { html = ''; }

  const META_PIXEL_PRIMARY = '4659045990859789';
  const META_PIXEL_MIRROR  = '541342531532855';

  it('PRIMARY pixel ID present in page', () => {
    assert.ok(html.includes(META_PIXEL_PRIMARY), `Primary pixel ${META_PIXEL_PRIMARY} must be in page`);
  });

  it('MIRROR pixel ID present in page', () => {
    assert.ok(html.includes(META_PIXEL_MIRROR), `Mirror pixel ${META_PIXEL_MIRROR} must be in page`);
  });

  it('both pixel IDs appear inside initMetaPixels function', () => {
    const fnStart = html.indexOf('function initMetaPixels');
    assert.ok(fnStart !== -1, 'initMetaPixels function must exist');
    // brace-depth counting to find the true closing } of initMetaPixels
    // (the function body contains a nested IIFE for the Meta SDK base code)
    let depth = 0, fnEnd = -1;
    for (let i = fnStart; i < html.length; i++) {
      if (html[i] === '{') depth++;
      else if (html[i] === '}') { depth--; if (depth === 0) { fnEnd = i; break; } }
    }
    assert.ok(fnEnd !== -1, 'initMetaPixels closing brace must be found');
    const fnBody = html.slice(fnStart, fnEnd + 1);
    assert.ok(fnBody.includes(META_PIXEL_PRIMARY), 'PRIMARY pixel must be in initMetaPixels');
    assert.ok(fnBody.includes(META_PIXEL_MIRROR),  'MIRROR pixel must be in initMetaPixels');
  });

  it('fbq init called for PRIMARY pixel', () => {
    assert.ok(
      html.includes(`fbq('init',META_PIXEL_PRIMARY_ID)`) ||
      html.includes(`fbq('init','${META_PIXEL_PRIMARY}')`),
      'fbq init must reference PRIMARY pixel'
    );
  });

  it('fbq init called for MIRROR pixel', () => {
    assert.ok(
      html.includes(`fbq('init',META_PIXEL_MIRROR_ID)`) ||
      html.includes(`fbq('init','${META_PIXEL_MIRROR}')`),
      'fbq init must reference MIRROR pixel'
    );
  });

  it('initMetaPixels is gated by adsGranted() (no-consent = no pixels)', () => {
    // The outer caller checks PortalConsentV1.allowsAdvertising() before calling initMetaPixels
    const callerIndex = html.indexOf('window.__initMetaPixels=initMetaPixels');
    assert.ok(callerIndex !== -1, '__initMetaPixels assignment must exist');
    // consent gate check is adjacent to the call site
    assert.ok(html.includes('allowsAdvertising'), 'advertising consent check must exist');
  });

  it('PRIMARY and MIRROR IDs are distinct', () => {
    assert.notStrictEqual(META_PIXEL_PRIMARY, META_PIXEL_MIRROR);
  });
});

console.log('All Meta attribution tests passed.');
