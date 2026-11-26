/* Cookie consent banner for Google Consent Mode v2 + phone-call click tracking */
(function () {
  var KEY = 'civicConsent';
  function gtag(){ window.dataLayer = window.dataLayer || []; window.dataLayer.push(arguments); }
  function read(){ try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function save(v){ try { localStorage.setItem(KEY, v); } catch (e) {} }
  function apply(v) {
    var s = v === 'granted' ? 'granted' : 'denied';
    gtag('consent', 'update', { ad_storage: s, ad_user_data: s, ad_personalization: s, analytics_storage: s });
    window.dataLayer.push({ event: 'consent_' + s });
  }
  function close(b){ if (b && b.parentNode) b.parentNode.removeChild(b); }
  function show() {
    if (document.getElementById('cookie-banner')) return;
    var b = document.createElement('div');
    b.id = 'cookie-banner'; b.className = 'cookie-banner';
    b.setAttribute('role', 'dialog'); b.setAttribute('aria-live', 'polite'); b.setAttribute('aria-label', 'Cookie choices');
    b.innerHTML = '<p>We use cookies to measure visits and to show our adverts to people who may need a builder. ' +
      'You can accept or reject these cookies. The site works either way.</p>' +
      '<div class="cookie-actions"><button type="button" class="cookie-btn cookie-reject">Reject</button>' +
      '<button type="button" class="cookie-btn cookie-accept">Accept</button></div>';
    document.body.appendChild(b);
    b.querySelector('.cookie-accept').addEventListener('click', function(){ save('granted'); apply('granted'); close(b); });
    b.querySelector('.cookie-reject').addEventListener('click', function(){ save('denied'); apply('denied'); close(b); });
  }
  function init() {
    if (!read()) show();
    document.querySelectorAll('[data-cookie-settings]').forEach(function (a) {
      a.addEventListener('click', function (e) { e.preventDefault(); show(); });
    });
    // Phone call taps: Google Ads "Click to call" conversion + GTM event "phone_call_click"
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href^="tel:"]');
      if (!a) return;
      var href = a.getAttribute('href');
      window.dataLayer.push({ event: 'phone_call_click', phone_number: href.replace('tel:', ''), link_location: a.closest('footer') ? 'footer' : (a.closest('.topbar') ? 'topbar' : 'page') });
      if (typeof window.gtag !== 'function') return;          // let the link dial normally
      e.preventDefault();
      var dialled = false;
      function dial(){ if (dialled) return; dialled = true; if (window.civicDial) window.civicDial(href); else window.location.href = href; }
      gtag('event', 'conversion', { send_to: 'AW-18594508387/tYEwCJuMmsAdEOPcxqJF', value: 1.0, currency: 'GBP', event_callback: dial });
      setTimeout(dial, 700);                                    // always dial, even if Google is blocked
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
