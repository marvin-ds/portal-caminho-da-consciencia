'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const api = require('../js/portal-sales-attribution-v1.js');

const ROOT = path.join(__dirname, '..');
const netlify = fs.readFileSync(path.join(ROOT, 'netlify.toml'), 'utf8');
const aaHtml = fs.readFileSync(path.join(ROOT, 'antes-do-aperto', 'index.html'), 'utf8');

function extractAntesDoApertoCommercialScript() {
  const scripts = [...aaHtml.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map((match) => match[1]);
  const script = scripts.find((content) => content.includes('CHECKOUT_URL') && content.includes('portal_attribution_v1'));
  assert.ok(script, 'Antes do Aperto commercial script must be found');
  return script;
}

function createStorage() {
  const store = new Map();
  return {
    getItem: (key) => (store.has(key) ? store.get(key) : null),
    setItem: (key, value) => store.set(key, value),
    dump: () => Object.fromEntries(store.entries())
  };
}

function createThrowingStorage() {
  return {
    getItem: () => { throw new Error('storage unavailable'); },
    setItem: () => { throw new Error('storage unavailable'); },
    dump: () => ({})
  };
}

function runAntesDoApertoCommercialScript({ href, storage = createStorage() }) {
  const helper = api;
  const url = new URL(href);
  const replaced = [];
  const checkoutLinks = [
    {
      href: 'https://app.portalcaminhodaconsciencia.com.br/api/commerce/checkout/antes-do-aperto',
      textContent: 'QUERO COMEÇAR O ANTES DO APERTO',
      getAttribute(name) {
        if (name === 'href') return this.href;
        if (name === 'data-local') return 'offer';
        return null;
      }
    }
  ];
  const dataLayer = [];
  const document = {
    documentElement: { scrollHeight: 1200 },
    getElementById: () => null,
    querySelectorAll(selector) {
      if (selector === 'a.js-checkout-cta') return checkoutLinks;
      if (selector === 'main section[id]') return [];
      return [];
    },
    addEventListener: () => {},
    getElementsByTagName: () => [{ parentNode: { insertBefore: () => {} } }],
    createElement: () => ({})
  };
  const location = {
    href: url.href,
    search: url.search,
    pathname: url.pathname,
    origin: url.origin,
    hash: url.hash
  };
  const history = {
    state: { test: true },
    replaceState(_state, _title, nextUrl) {
      replaced.push(nextUrl);
    }
  };
  const window = {
    location,
    history,
    PortalSalesAttributionV1: helper,
    dataLayer,
    addEventListener: () => {}
  };
  const context = {
    window,
    document,
    sessionStorage: storage,
    location,
    history,
    dataLayer,
    URL,
    URLSearchParams,
    Object,
    Date,
    JSON
  };

  vm.runInNewContext(extractAntesDoApertoCommercialScript(), context, { timeout: 1000 });

  return {
    checkoutHref: checkoutLinks[0].href,
    dataLayer,
    replaced,
    storageDump: storage.dump()
  };
}

assert.deepEqual(api.ATTRIBUTION_KEYS, [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'gbraid',
  'wbraid'
]);
assert.ok(!api.ATTRIBUTION_KEYS.includes('fbclid'), 'fbclid is not transversal attribution');

{
  const storage = createStorage();
  const result = api.initAttribution({
    storage,
    search: '?utm_source=instagram&utm_medium=organic_social&utm_campaign=aa_evergreen&utm_content=bio&unknown=keep'
  });

  assert.equal(result.persisted, true);
  assert.deepEqual(result.attribution, {
    utm_source: 'instagram',
    utm_medium: 'organic_social',
    utm_campaign: 'aa_evergreen',
    utm_content: 'bio'
  });
  assert.deepEqual(JSON.parse(storage.dump().portal_attribution_v1), result.attribution);
}

{
  const result = runAntesDoApertoCommercialScript({
    href: 'https://portalcaminhodaconsciencia.com.br/antes-do-aperto/?utm_source=instagram&utm_medium=organic_social&utm_campaign=aa_evergreen&utm_content=bio'
  });

  assert.deepEqual(result.replaced, ['/antes-do-aperto/']);
  assert.deepEqual(JSON.parse(result.storageDump.portal_attribution_v1), {
    utm_source: 'instagram',
    utm_medium: 'organic_social',
    utm_campaign: 'aa_evergreen',
    utm_content: 'bio'
  });
  assert.match(result.checkoutHref, /utm_source=instagram/);
  assert.equal(result.dataLayer[0].utm_source, 'instagram');
}

{
  const result = runAntesDoApertoCommercialScript({
    href: 'https://portalcaminhodaconsciencia.com.br/antes-do-aperto/?utm_source=instagram&utm_medium=organic_social&utm_campaign=aa_evergreen&utm_content=bio',
    storage: createThrowingStorage()
  });

  assert.deepEqual(result.replaced, [], 'blocked storage must keep attribution params visible');
  assert.match(result.checkoutHref, /utm_source=instagram/);
  assert.equal(result.dataLayer[0].utm_source, 'instagram');
}

{
  const storage = createStorage();
  storage.setItem('portal_attribution_v1', JSON.stringify({
    utm_source: 'youtube',
    utm_medium: 'organic_social',
    utm_campaign: 'aa_evergreen',
    utm_content: 'channel_link'
  }));
  const result = runAntesDoApertoCommercialScript({
    href: 'https://portalcaminhodaconsciencia.com.br/antes-do-aperto/',
    storage
  });

  assert.deepEqual(result.replaced, [], 'direct access must not trigger cleanup');
  assert.match(result.checkoutHref, /utm_source=youtube/);
  assert.equal(result.dataLayer[0].utm_source, 'youtube');
}

{
  const result = runAntesDoApertoCommercialScript({
    href: 'https://portalcaminhodaconsciencia.com.br/antes-do-aperto/?utm_source=test&foo=bar#faq'
  });

  assert.deepEqual(result.replaced, ['/antes-do-aperto/?foo=bar#faq']);
}

{
  const result = runAntesDoApertoCommercialScript({
    href: 'https://portalcaminhodaconsciencia.com.br/antes-do-aperto/?foo=bar#faq',
    storage: createThrowingStorage()
  });

  assert.deepEqual(result.replaced, [], 'no attribution means no cleanup side effect');
  assert.equal(result.checkoutHref, 'https://app.portalcaminhodaconsciencia.com.br/api/commerce/checkout/antes-do-aperto');
}

{
  const clean = api.buildCleanUrl('https://portalcaminhodaconsciencia.com.br/antes-do-aperto/?utm_source=test&foo=bar#faq');
  assert.equal(clean.changed, true);
  assert.equal(clean.path, '/antes-do-aperto/?foo=bar#faq');
}

{
  const clean = api.buildCleanUrl('https://portalcaminhodaconsciencia.com.br/antes-do-aperto/?utm_source=test#faq');
  assert.equal(clean.path, '/antes-do-aperto/#faq');
}

{
  let replaced = null;
  const win = {
    location: {
      href: 'https://portalcaminhodaconsciencia.com.br/antes-do-aperto/?utm_source=youtube&utm_medium=organic_social&x=1#faq'
    },
    history: {
      state: { ok: true },
      replaceState: (_state, _title, url) => { replaced = url; }
    }
  };

  assert.equal(api.cleanupAttributionParams({ window: win }), true);
  assert.equal(replaced, '/antes-do-aperto/?x=1#faq');
}

{
  const decorated = api.decorateUrlWithAttribution(
    'https://app.portalcaminhodaconsciencia.com.br/api/commerce/checkout/antes-do-aperto',
    {
      utm_source: 'youtube',
      utm_medium: 'organic_social',
      utm_campaign: 'aa_evergreen',
      utm_content: 'channel_link'
    },
    'https://portalcaminhodaconsciencia.com.br/antes-do-aperto/'
  );
  const url = new URL(decorated);
  assert.equal(url.searchParams.get('utm_source'), 'youtube');
  assert.equal(url.searchParams.get('utm_content'), 'channel_link');
}

assert.match(netlify, /from = "\/ir\/antes-do-aperto-instagram"/);
assert.match(netlify, /to = "\/antes-do-aperto\/\?utm_source=instagram&utm_medium=organic_social&utm_campaign=aa_evergreen&utm_content=bio"/);
assert.match(netlify, /from = "\/ir\/antes-do-aperto-youtube"/);
assert.match(netlify, /to = "\/antes-do-aperto\/\?utm_source=youtube&utm_medium=organic_social&utm_campaign=aa_evergreen&utm_content=channel_link"/);
assert.match(netlify, /for = "\/ir\/\*"/);
assert.match(netlify, /X-Robots-Tag = "noindex, nofollow"/);

assert.ok(aaHtml.includes('/js/portal-sales-attribution-v1.js'), 'Antes do Aperto loads transversal helper');
assert.ok(aaHtml.includes('cleanupAttributionParams'), 'Antes do Aperto cleans tracking params after capture');
assert.ok(aaHtml.includes('a.js-checkout-cta'), 'checkout CTAs remain decorated');
assert.ok(!aaHtml.includes('utm_source=test#faq'), 'test-only URL not embedded in page');

console.log('sales attribution link standard tests PASS');
