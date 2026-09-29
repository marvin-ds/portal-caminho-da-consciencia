'use strict';

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
    return;
  }

  root.PortalSalesAttributionV1 = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  var ATTRIBUTION_STORAGE_KEY = 'portal_attribution_v1';
  var ATTRIBUTION_KEYS = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
    'gclid',
    'gbraid',
    'wbraid'
  ];

  function cleanAttributionValue(value) {
    if (typeof value !== 'string') return null;
    var trimmed = value.trim();
    if (!trimmed || trimmed.length > 512) return null;
    return trimmed;
  }

  function readAttributionFromSearch(search) {
    var params = new URLSearchParams(search || '');
    var attribution = {};

    ATTRIBUTION_KEYS.forEach(function (key) {
      var value = cleanAttributionValue(params.get(key));
      if (value) attribution[key] = value;
    });

    return attribution;
  }

  function readStoredAttribution(storage) {
    try {
      var raw = storage && storage.getItem(ATTRIBUTION_STORAGE_KEY);
      if (!raw) return {};
      var parsed = JSON.parse(raw);
      var attribution = {};

      ATTRIBUTION_KEYS.forEach(function (key) {
        var value = cleanAttributionValue(parsed && parsed[key]);
        if (value) attribution[key] = value;
      });

      return attribution;
    } catch (error) {
      return {};
    }
  }

  function mergeAttribution(stored, incoming) {
    var merged = {};

    ATTRIBUTION_KEYS.forEach(function (key) {
      var incomingValue = cleanAttributionValue(incoming && incoming[key]);
      var storedValue = cleanAttributionValue(stored && stored[key]);
      if (incomingValue) merged[key] = incomingValue;
      else if (storedValue) merged[key] = storedValue;
    });

    return merged;
  }

  function storeAttribution(storage, attribution) {
    if (!storage || !attribution || !Object.keys(attribution).length) return false;

    var stored = {};
    ATTRIBUTION_KEYS.forEach(function (key) {
      var value = cleanAttributionValue(attribution[key]);
      if (value) stored[key] = value;
    });

    if (!Object.keys(stored).length) return false;

    try {
      storage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(stored));
      return true;
    } catch (error) {
      return false;
    }
  }

  function initAttribution(options) {
    var config = options || {};
    var storage = config.storage;
    var search = config.search;
    var stored = readStoredAttribution(storage);
    var incoming = readAttributionFromSearch(search);
    var attribution = mergeAttribution(stored, incoming);
    var persisted = storeAttribution(storage, attribution);

    return {
      attribution: attribution,
      incoming: incoming,
      persisted: persisted || !Object.keys(incoming).length
    };
  }

  function decorateUrlWithAttribution(rawUrl, attribution, baseUrl) {
    try {
      var url = new URL(rawUrl, baseUrl || (typeof location !== 'undefined' ? location.href : undefined));

      ATTRIBUTION_KEYS.forEach(function (key) {
        var value = cleanAttributionValue(attribution && attribution[key]);
        if (value) url.searchParams.set(key, value);
      });

      if (typeof location !== 'undefined' && url.origin === location.origin) {
        return url.pathname + url.search + url.hash;
      }

      return url.href;
    } catch (error) {
      return rawUrl;
    }
  }

  function buildCleanUrl(urlLike) {
    var url = new URL(urlLike);
    var changed = false;

    ATTRIBUTION_KEYS.forEach(function (key) {
      if (url.searchParams.has(key)) {
        url.searchParams.delete(key);
        changed = true;
      }
    });

    return {
      changed: changed,
      path: url.pathname + url.search + url.hash
    };
  }

  function cleanupAttributionParams(options) {
    var config = options || {};
    var win = config.window || (typeof window !== 'undefined' ? window : null);
    if (!win || !win.location || !win.history || typeof win.history.replaceState !== 'function') {
      return false;
    }

    var result;
    try {
      result = buildCleanUrl(win.location.href);
    } catch (error) {
      return false;
    }

    if (!result.changed) return false;
    win.history.replaceState(win.history.state || {}, '', result.path);
    return true;
  }

  return {
    ATTRIBUTION_STORAGE_KEY: ATTRIBUTION_STORAGE_KEY,
    ATTRIBUTION_KEYS: ATTRIBUTION_KEYS.slice(),
    cleanAttributionValue: cleanAttributionValue,
    readAttributionFromSearch: readAttributionFromSearch,
    readStoredAttribution: readStoredAttribution,
    mergeAttribution: mergeAttribution,
    storeAttribution: storeAttribution,
    initAttribution: initAttribution,
    decorateUrlWithAttribution: decorateUrlWithAttribution,
    buildCleanUrl: buildCleanUrl,
    cleanupAttributionParams: cleanupAttributionParams
  };
});
