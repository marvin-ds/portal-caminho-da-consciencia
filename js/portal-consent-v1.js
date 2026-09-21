(function (root) {
  'use strict';

  var COOKIE_NAME = 'portal_consent_v1';
  var LEGACY_KEY = 'portal_consent';
  var VERSION = 1;
  var MAX_AGE_SECONDS = 15552000;
  var PRODUCTION_DOMAIN = 'portalcaminhodaconsciencia.com.br';
  var VALID = { granted: true, denied: true };

  function nowIso() {
    return new Date().toISOString();
  }

  function isValidState(value) {
    return VALID[value] === true;
  }

  function hasValidTimestamp(value) {
    return typeof value === 'string' && !Number.isNaN(Date.parse(value));
  }

  function normalizePayload(value) {
    if (!value || typeof value !== 'object') return null;
    if (value.version !== VERSION) return null;
    if (!isValidState(value.analytics)) return null;
    if (!isValidState(value.ads)) return null;
    if (!isValidState(value.ad_user_data)) return null;
    if (!isValidState(value.ad_personalization)) return null;
    if (!hasValidTimestamp(value.updated_at)) return null;

    return {
      version: VERSION,
      analytics: value.analytics,
      ads: value.ads,
      ad_user_data: value.ad_user_data,
      ad_personalization: value.ad_personalization,
      updated_at: value.updated_at
    };
  }

  function createPayload(options) {
    var analytics = options && options.analytics === 'granted' ? 'granted' : 'denied';
    var ads = options && options.ads === 'granted' ? 'granted' : 'denied';

    return normalizePayload({
      version: VERSION,
      analytics: analytics,
      ads: ads,
      ad_user_data: options && options.ad_user_data === 'granted' ? 'granted' : ads,
      ad_personalization: options && options.ad_personalization === 'granted' ? 'granted' : ads,
      updated_at: nowIso()
    });
  }

  function parseSerialized(value) {
    if (!value) return null;

    try {
      return normalizePayload(JSON.parse(decodeURIComponent(value)));
    } catch (e) {
      return null;
    }
  }

  function serialize(payload) {
    var valid = normalizePayload(payload);
    if (!valid) return '';

    return encodeURIComponent(JSON.stringify(valid));
  }

  function getCookieDomain(hostname) {
    var host = hostname || (root.location && root.location.hostname) || '';
    if (host === PRODUCTION_DOMAIN || host.slice(-(PRODUCTION_DOMAIN.length + 1)) === '.' + PRODUCTION_DOMAIN) {
      return PRODUCTION_DOMAIN;
    }

    return '';
  }

  function cookieAttributes() {
    var attrs = [
      'Max-Age=' + MAX_AGE_SECONDS,
      'Path=/',
      'SameSite=Lax'
    ];
    var domain = getCookieDomain();

    if (domain) attrs.push('Domain=' + domain);
    if (root.location && root.location.protocol === 'https:') attrs.push('Secure');

    return attrs.join('; ');
  }

  function readCookie() {
    if (!root.document || typeof root.document.cookie !== 'string') return null;

    var cookies = root.document.cookie.split(';');
    for (var i = 0; i < cookies.length; i += 1) {
      var part = cookies[i].trim();
      if (part.indexOf(COOKIE_NAME + '=') === 0) {
        return parseSerialized(part.slice(COOKIE_NAME.length + 1));
      }
    }

    return null;
  }

  function writeCookie(payload) {
    var serialized = serialize(payload);
    if (!serialized || !root.document) return false;

    root.document.cookie = COOKIE_NAME + '=' + serialized + '; ' + cookieAttributes();
    return !!readCookie();
  }

  function toGoogleConsent(payload) {
    var valid = normalizePayload(payload);
    if (!valid) {
      return {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      };
    }

    return {
      analytics_storage: valid.analytics,
      ad_storage: valid.ads,
      ad_user_data: valid.ad_user_data,
      ad_personalization: valid.ad_personalization
    };
  }

  function ensureGtag() {
    root.dataLayer = root.dataLayer || [];
    root.gtag = root.gtag || function () {
      root.dataLayer.push(arguments);
    };
  }

  function applyDefault() {
    ensureGtag();
    root.gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      wait_for_update: 500
    });
  }

  function applyUpdate(payload) {
    ensureGtag();
    root.gtag('consent', 'update', toGoogleConsent(payload));
  }

  function payloadFromLegacy(value) {
    if (value === 'granted') {
      return createPayload({
        analytics: 'granted',
        ads: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted'
      });
    }

    if (value === 'denied') {
      return createPayload({
        analytics: 'denied',
        ads: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
    }

    return null;
  }

  function migrateLegacy() {
    if (!root.localStorage) return null;

    var legacy;
    try {
      legacy = root.localStorage.getItem(LEGACY_KEY);
    } catch (e) {
      return null;
    }

    var payload = payloadFromLegacy(legacy);
    if (!payload) return null;
    if (!writeCookie(payload)) return null;

    try {
      root.localStorage.removeItem(LEGACY_KEY);
    } catch (e) {}

    return payload;
  }

  function resolveConsent() {
    var cookie = readCookie();
    if (cookie) return cookie;

    return migrateLegacy();
  }

  function bootstrap() {
    applyDefault();
    var consent = resolveConsent();

    if (consent) {
      applyUpdate(consent);
      root.__portalConsentDecision = consent;
    } else {
      root.__portalConsentDecision = null;
    }
  }

  function allowsAdvertising(payload) {
    var consent = normalizePayload(payload || root.__portalConsentDecision || readCookie());
    return !!consent &&
      consent.ads === 'granted' &&
      consent.ad_user_data === 'granted' &&
      consent.ad_personalization === 'granted';
  }

  function allowsAnalytics(payload) {
    var consent = normalizePayload(payload || root.__portalConsentDecision || readCookie());
    return !!consent && consent.analytics === 'granted';
  }

  function setConsent(payload) {
    var previous = root.__portalConsentDecision || readCookie();
    if (!writeCookie(payload)) return false;

    var next = readCookie();
    root.__portalConsentDecision = next;
    applyUpdate(next);

    if (allowsAdvertising(next)) {
      try {
        if (typeof root.initMetaPixels === 'function') root.initMetaPixels();
        if (typeof root.__initMetaPixels === 'function') root.__initMetaPixels();
      } catch (e) {}
    }

    if (allowsAdvertising(previous) && !allowsAdvertising(next)) {
      setTimeout(function () { root.location.reload(); }, 350);
    }

    return true;
  }

  function allGranted() {
    return createPayload({
      analytics: 'granted',
      ads: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted'
    });
  }

  function allDenied() {
    return createPayload({
      analytics: 'denied',
      ads: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
  }

  function togglePreferences(rootEl, show) {
    var preferences = rootEl.querySelector('[data-consent-preferences]');
    if (preferences) preferences.hidden = !show;
  }

  function syncToggles(rootEl, payload) {
    var consent = normalizePayload(payload || root.__portalConsentDecision || readCookie());
    var analytics = rootEl.querySelector('[data-consent-analytics]');
    var ads = rootEl.querySelector('[data-consent-ads]');

    if (analytics) analytics.checked = !consent || consent.analytics === 'granted';
    if (ads) ads.checked = !consent || allowsAdvertising(consent);
  }

  function initBanner(config) {
    var banner = root.document && root.document.getElementById(config.bannerId || 'portal-banner');
    if (!banner) return;

    var accept = root.document.getElementById(config.acceptId || 'portal-accept');
    var decline = root.document.getElementById(config.declineId || 'portal-decline');
    var customize = root.document.getElementById(config.customizeId || 'portal-customize');
    var save = root.document.getElementById(config.saveId || 'portal-save-preferences');
    var prefs = root.document.getElementById(config.preferencesId || 'btn-pref-cookies');

    function showBanner() {
      syncToggles(banner);
      banner.hidden = false;
      setTimeout(function () { banner.classList.add('portal-visible'); }, 20);
    }

    function hideBanner() {
      banner.classList.remove('portal-visible');
      setTimeout(function () { banner.hidden = true; }, 250);
    }

    function commit(payload) {
      if (setConsent(payload)) {
        hideBanner();
      }
    }

    root.showPortalCookieBanner = showBanner;
    root.__showConsentBanner = showBanner;

    if (accept) accept.addEventListener('click', function () { commit(allGranted()); });
    if (decline) decline.addEventListener('click', function () { commit(allDenied()); });
    if (customize) customize.addEventListener('click', function () { togglePreferences(banner, true); });
    if (prefs) prefs.addEventListener('click', showBanner);
    if (save) {
      save.addEventListener('click', function () {
        var analytics = banner.querySelector('[data-consent-analytics]');
        var ads = banner.querySelector('[data-consent-ads]');
        var analyticsState = analytics && analytics.checked ? 'granted' : 'denied';
        var adsState = ads && ads.checked ? 'granted' : 'denied';

        commit(createPayload({
          analytics: analyticsState,
          ads: adsState,
          ad_user_data: adsState,
          ad_personalization: adsState
        }));
      });
    }

    if (!root.__portalConsentDecision) {
      showBanner();
    }
  }

  var api = {
    COOKIE_NAME: COOKIE_NAME,
    LEGACY_KEY: LEGACY_KEY,
    MAX_AGE_SECONDS: MAX_AGE_SECONDS,
    PRODUCTION_DOMAIN: PRODUCTION_DOMAIN,
    VERSION: VERSION,
    allDenied: allDenied,
    allGranted: allGranted,
    allowsAdvertising: allowsAdvertising,
    allowsAnalytics: allowsAnalytics,
    bootstrap: bootstrap,
    createPayload: createPayload,
    getCookieDomain: getCookieDomain,
    initBanner: initBanner,
    normalizePayload: normalizePayload,
    parseSerialized: parseSerialized,
    payloadFromLegacy: payloadFromLegacy,
    readCookie: readCookie,
    serialize: serialize,
    setConsent: setConsent,
    toGoogleConsent: toGoogleConsent,
    writeCookie: writeCookie
  };

  root.PortalConsentV1 = api;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }

  if (root.document) {
    bootstrap();
  }
})(typeof window !== 'undefined' ? window : globalThis);
