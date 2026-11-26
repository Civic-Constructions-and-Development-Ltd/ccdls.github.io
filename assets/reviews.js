/* Civic reviews: renders approved reviews from assets/reviews.json and handles the "Write a review" form.
   Only reviews pasted into reviews.json are shown. Names are always displayed as "S. Khan". */
(function () {
  function esc(s){ return String(s).replace(/[&<>"']/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
  function titleCase(w){ return w.toLowerCase().replace(/(^|[\s'\-])([a-z])/g, function(m,a,b){ return a + b.toUpperCase(); }); }
  function displayName(first, last){
    first = (first || '').trim(); last = (last || '').trim().replace(/\s+/g, ' ');
    if (!first || !last) return '';
    return first.charAt(0).toUpperCase() + '. ' + titleCase(last);
  }
  window.civicDisplayName = displayName;
  function stars(n, cls){
    var out = '<span class="stars ' + (cls||'') + '" role="img" aria-label="' + n + ' out of 5 stars">';
    for (var i = 1; i <= 5; i++) out += '<span class="star' + (i <= Math.round(n) ? ' on' : '') + '" aria-hidden="true">★</span>';
    return out + '</span>';
  }
  function fmtDate(iso){
    var d = new Date(iso + 'T00:00:00'); if (isNaN(d)) return '';
    return d.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
  }
  function card(r){
    return '<article class="review-card">' + stars(r.rating) +
      '<blockquote><p>' + esc(r.text) + '</p></blockquote>' +
      '<footer><strong>' + esc(r.name) + '</strong>' + (r.town ? ' · ' + esc(r.town) : '') +
      '<span class="review-meta">' + esc(r.service || '') + (r.date ? ' · ' + esc(fmtDate(r.date)) : '') + '</span></footer></article>';
  }
  function render(root, reviews){
    var limit = parseInt(root.getAttribute('data-limit') || '0', 10);
    var valid = reviews.filter(function(r){ return r && r.name && r.text && r.rating >= 1 && r.rating <= 5; })
      .sort(function(a, b){ return (b.date || '').localeCompare(a.date || ''); });
    var summary = root.querySelector('[data-review-summary]');
    var list = root.querySelector('[data-review-list]');
    var empty = root.querySelector('[data-review-empty]');
    if (!valid.length) { if (empty) empty.hidden = false; return; }
    var total = valid.reduce(function(s, r){ return s + Number(r.rating); }, 0);
    var avg = Math.round((total / valid.length) * 10) / 10;
    if (summary) {
      var bars = '';
      for (var s = 5; s >= 1; s--) {
        var c = valid.filter(function(r){ return Math.round(r.rating) === s; }).length;
        bars += '<li><span>' + s + '★</span><span class="bar"><span style="width:' + (c / valid.length * 100) + '%"></span></span><span>' + c + '</span></li>';
      }
      summary.innerHTML = '<div class="review-score"><span class="review-avg">' + avg.toFixed(1) + '</span>' + stars(avg, 'stars-lg') +
        '<p>Based on ' + valid.length + ' customer review' + (valid.length === 1 ? '' : 's') + '</p></div><ul class="review-bars">' + bars + '</ul>';
      summary.hidden = false;
    }
    if (list) { list.innerHTML = (limit ? valid.slice(0, limit) : valid).map(card).join(''); list.hidden = false; }
    var more = root.querySelector('[data-review-more]'); if (more && limit && valid.length > limit) more.hidden = false;
  }
  function load(root){
    fetch(root.getAttribute('data-src'), { cache: 'no-cache' })
      .then(function(r){ return r.ok ? r.json() : []; })
      .catch(function(){ return []; })
      .then(function(data){ render(root, Array.isArray(data) ? data : []); });
  }
  function initForm(form){
    var preview = form.querySelector('[data-name-preview]');
    function upd(){ var n = displayName(form.first.value, form.last.value); preview.textContent = n ? 'Your name will appear as: ' + n : ''; }
    form.first.addEventListener('input', upd); form.last.addEventListener('input', upd);
    form.addEventListener('submit', function(e){
      e.preventDefault();
      if (!form.reportValidity()) return;
      var rating = (form.querySelector('input[name="rating"]:checked') || {}).value;
      var name = displayName(form.first.value, form.last.value);
      var today = new Date().toISOString().slice(0, 10);
      var entry = { name: name, town: form.town.value.trim(), service: form.service.value, rating: Number(rating), text: form.text.value.trim().replace(/\s+/g, ' '), date: today };
      var body = 'New website review for approval\n\n' +
        'Rating: ' + rating + ' / 5\nName shown: ' + name + '\nFull name: ' + form.first.value.trim() + ' ' + form.last.value.trim() +
        '\nTown: ' + entry.town + '\nService: ' + entry.service + '\nContact email (not published): ' + form.email.value.trim() +
        '\n\nReview:\n' + entry.text + '\n\nThe customer agreed to their review being published as "' + name + '".' +
        '\n\n--- To publish, add this line to assets/reviews.json ---\n' + JSON.stringify(entry);
      window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'review_submit', rating: Number(rating) });
      window.location.href = 'mailto:info@civicconstructions.co.uk?subject=' + encodeURIComponent('Website review from ' + name) + '&body=' + encodeURIComponent(body);
      var done = form.parentNode.querySelector('[data-review-thanks]'); if (done) done.hidden = false;
    });
  }
  function init(){
    document.querySelectorAll('[data-reviews]').forEach(load);
    var f = document.getElementById('review-form'); if (f) initForm(f);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
