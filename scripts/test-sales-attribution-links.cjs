'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const api = require('../js/portal-sales-attribution-v1.js');

const ROOT = path.join(__dirname, '..');
const netlify = fs.readFileSync(path.join(ROOT, 'netlify.toml'), 'utf8');
const aaHtml = fs.readFileSync(path.join(ROOT, 'antes-do-aperto', 'index.html'), 'utf8');

function createStorage() {
  const store = new Map();
  return {
    getItem: (key) => (store.has(key) ? store.get(key) : null),
    setItem: (key, value) => store.set(key, value),
    dump: () => Object.fromEntries(store.entries())
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
