const assert = require('node:assert/strict');

const api = require('../js/portal-consent-v1.js');

function valid(overrides = {}) {
  return {
    version: 1,
    analytics: 'granted',
    ads: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    updated_at: '2026-09-21T12:00:00.000Z',
    ...overrides,
  };
}

function installBrowserMock({ hostname = 'portalcaminhodaconsciencia.com.br', protocol = 'https:' } = {}) {
  const jar = new Map();
  const local = new Map();
  const writes = [];

  global.location = {
    hostname,
    protocol,
    reload: () => {},
  };
  global.dataLayer = [];
  global.gtag = undefined;
  global.localStorage = {
    getItem: (key) => (local.has(key) ? local.get(key) : null),
    setItem: (key, value) => local.set(key, value),
    removeItem: (key) => local.delete(key),
  };
  global.document = {};

  Object.defineProperty(global.document, 'cookie', {
    get() {
      return [...jar.entries()].map(([key, value]) => `${key}=${value}`).join('; ');
    },
    set(value) {
      writes.push(value);
      const pair = value.split(';')[0];
      const separator = pair.indexOf('=');
      const key = pair.slice(0, separator);
      const cookieValue = pair.slice(separator + 1);

      if (/Max-Age=0/.test(value)) {
        jar.delete(key);
      } else {
        jar.set(key, cookieValue);
      }
    },
  });

  return { jar, local, writes };
}

assert.equal(api.COOKIE_NAME, 'portal_consent_v1');
assert.equal(api.MAX_AGE_SECONDS, 15552000);
assert.equal(api.getCookieDomain('portalcaminhodaconsciencia.com.br'), 'portalcaminhodaconsciencia.com.br');
assert.equal(api.getCookieDomain('app.portalcaminhodaconsciencia.com.br'), 'portalcaminhodaconsciencia.com.br');
assert.equal(api.getCookieDomain('localhost'), '');

assert.deepEqual(api.toGoogleConsent(valid()), {
  analytics_storage: 'granted',
  ad_storage: 'granted',
  ad_user_data: 'granted',
  ad_personalization: 'granted',
});
assert.deepEqual(api.toGoogleConsent(valid({ analytics: 'denied', ads: 'denied' })), {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'granted',
  ad_personalization: 'granted',
});
assert.equal(api.parseSerialized('%7Bbad'), null);
assert.equal(api.normalizePayload(valid({ version: 2 })), null);
assert.equal(api.normalizePayload(valid({ analytics: 'yes' })), null);
assert.equal(api.normalizePayload({ version: 1 }), null);

let mock = installBrowserMock();
assert.equal(api.writeCookie(valid()), true);
assert.match(mock.writes.at(-1), /Max-Age=15552000/);
assert.match(mock.writes.at(-1), /Path=\//);
assert.match(mock.writes.at(-1), /SameSite=Lax/);
assert.match(mock.writes.at(-1), /Domain=portalcaminhodaconsciencia\.com\.br/);
assert.match(mock.writes.at(-1), /Secure/);
assert.equal(api.readCookie().analytics, 'granted');

mock = installBrowserMock({ hostname: 'localhost', protocol: 'http:' });
assert.equal(api.writeCookie(valid()), true);
assert.doesNotMatch(mock.writes.at(-1), /Domain=/);
assert.doesNotMatch(mock.writes.at(-1), /Secure/);

mock = installBrowserMock();
mock.local.set('portal_consent', 'granted');
api.bootstrap();
assert.equal(api.readCookie().analytics, 'granted');
assert.equal(api.readCookie().ads, 'granted');
assert.equal(mock.local.has('portal_consent'), false);
assert.equal(global.dataLayer[0][0], 'consent');
assert.equal(global.dataLayer[0][1], 'default');
assert.equal(global.dataLayer[0][2].wait_for_update, 500);

mock = installBrowserMock();
mock.local.set('portal_consent', 'denied');
api.bootstrap();
assert.equal(api.readCookie().analytics, 'denied');
assert.equal(api.readCookie().ads, 'denied');
assert.equal(mock.local.has('portal_consent'), false);

mock = installBrowserMock();
mock.local.set('portal_consent', 'maybe');
api.bootstrap();
assert.equal(api.readCookie(), null);
assert.equal(mock.local.get('portal_consent'), 'maybe');

mock = installBrowserMock();
api.writeCookie(valid({ analytics: 'denied', ads: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' }));
mock.local.set('portal_consent', 'granted');
api.bootstrap();
assert.equal(api.readCookie().analytics, 'denied');
assert.equal(mock.local.get('portal_consent'), 'granted');

console.log('portal consent v1 tests PASS');
