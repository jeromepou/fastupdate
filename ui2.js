/* =====================================================================
   ui2.js — FAST Update Generator · new interface (visual layer)
   PRESENTATION ONLY. It reads values that are already on screen and calls
   functions that already exist. It never writes application data.

   OPT-IN SWITCH (nobody sees anything until you turn it on):
     open  your-app-url/?ui2=1   → new interface ON  (remembered on this device)
     open  your-app-url/?ui2=0   → back to the classic interface (remembered)
   To switch it on for everybody: set DEFAULT_ON = true below.
   If this file is removed or fails, the app keeps working as before.
   ===================================================================== */
(function () {
  'use strict';
  var KEY = 'fastUi2', DEFAULT_ON = false;
  var D = document, B = D.body, W = window;

  /* ---------- 0. switch ---------- */
  function enabled() {
    var m = /[?&]ui2=([01])(?:&|$)/.exec(W.location.search), v = null;
    try {
      if (m) W.localStorage.setItem(KEY, m[1]);
      v = W.localStorage.getItem(KEY);
    } catch (e) { if (m) v = m[1]; }
    if (m && W.history && W.history.replaceState) {
      try { W.history.replaceState(null, '', W.location.pathname + W.location.search.replace(/([?&])ui2=[01]&?/, '$1').replace(/[?&]$/, '') + W.location.hash); } catch (e) { /* ignore */ }
    }
    if (v === '1') return true;
    if (v === '0') return false;
    return DEFAULT_ON;
  }
  if (!enabled()) return;            // ← classic interface: nothing below runs

  function addLink(attrs) { var l = D.createElement('link'); Object.keys(attrs).forEach(function (k) { l.setAttribute(k, attrs[k]); }); D.head.appendChild(l); }
  addLink({ rel: 'preload', href: 'fonts/plus-jakarta-sans-latin-wght-normal.woff2', as: 'font', type: 'font/woff2', crossorigin: '' });
  addLink({ rel: 'stylesheet', href: 'ui2.css' });
  D.documentElement.classList.add('u2-enabled');

  /* ---------- helpers ---------- */
  function $(s, r) { return (r || D).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || D).querySelectorAll(s)); }
  function vis(el) { return !!el && W.getComputedStyle(el).display !== 'none'; }
  function val(id) { var e = D.getElementById(id); return e && e.value ? String(e.value).trim() : ''; }
  function txt(e) { return e ? (e.textContent || '').replace(/\s+/g, ' ').trim() : ''; }
  function el(tag, cls, text) { var e = D.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function safe(fn) { return function () { try { return fn.apply(this, arguments); } catch (e) { if (W.console) W.console.warn('[ui2]', e); } }; }
  var timers = {};
  function later(key, fn, ms) { clearTimeout(timers[key]); timers[key] = setTimeout(safe(fn), ms); }
  function ic(p) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + p + '</svg>'; }
  var ICON = {
    flag: ic('<path d="M5 3v18M5 4h12l-2 4 2 4H5"/>'),
    table: ic('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M3 15h18M9 4v16"/>'),
    swap: ic('<path d="M7 4 3 8l4 4M3 8h14M17 20l4-4-4-4M21 16H7"/>'),
    check: ic('<path d="m5 12 5 5 9-10"/>'),
    eye: ic('<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'),
    plane: ic('<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2l-.8.5 5 4.8-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3z"/>'),
    mail: ic('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'),
    takeoff: ic('<path d="M3 20h18M4 14l3-5 11 3a2 2 0 0 1 0 4l-14 0z"/>'),
    help: ic('<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 1-1 1.7M12 17h.01"/>'),
    box: ic('<path d="M21 8 12 3 3 8v8l9 5 9-5zM3 8l9 5 9-5M12 13v8"/>'),
    wrench: ic('<path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-3 3-1.3-1.3-8.4 8.4a2 2 0 0 1-3-3l8.4-8.4L12 10z"/>'),
    building: ic('<path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M16 9h2a2 2 0 0 1 2 2v10M2 21h20M8 7h4M8 11h4M8 15h4"/>'),
    send: ic('<path d="m22 2-7 20-4-9-9-4zM22 2 11 13"/>'),
    alert: ic('<path d="m10.3 3.9-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3.1l-8-14a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>'),
    refresh: ic('<path d="M21 12a9 9 0 0 1-15.5 6.2L3 16M3 12a9 9 0 0 1 15.5-6.2L21 8M21 3v5h-5M3 21v-5h5"/>'),
    tools: ic('<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>'),
    clip: ic('<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>'),
    file: ic('<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/>'),
    pen: ic('<path d="M4 20h4L19 9l-4-4L4 16z"/>'),
    notes: ic('<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M9 13h6M9 17h4"/>'),
    plus: ic('<path d="M12 5v14M5 12h14"/>'),
    search: ic('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
    tag: ic('<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.2"/>'),
    star: ic('<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>'),
    checkc: ic('<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>'),
    camera: ic('<path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/>'),
    user: ic('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'),
    users: ic('<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"/>'),
    flask: ic('<path d="M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2.2h12.4a1.5 1.5 0 0 0 1.3-2.2L14 9V3"/>'),
    save: ic('<path d="M5 3h11l3 3v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M7 3v6h8V3M7 21v-7h10v7"/>'),
    sparkles: ic('<path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>'),
    key: ic('<circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M16 7l3 3"/>'),
    lock: ic('<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'),
    trash: ic('<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13M9 7V4h6v3"/>'),
    bulb: ic('<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/>'),
    clip2: ic('<path d="m21 11-8.6 8.6a5 5 0 0 1-7-7l8.6-8.6a3.4 3.4 0 0 1 5 5L10.5 17.5a1.7 1.7 0 0 1-2.4-2.4L15 8"/>'),
    calendar: ic('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>'),
    folder: ic('<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>'),
    globe: ic('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>'),
    upload: ic('<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>'),
    phone: ic('<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>'),
    monitor: ic('<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>'),
    suitcase: ic('<rect x="4" y="7" width="16" height="13" rx="2"/><path d="M9 7V4h6v3"/>'),
    hourglass: ic('<path d="M6 3h12M6 21h12M7 3c0 5 5 6 5 9s-5 4-5 9M17 3c0 5-5 6-5 9s5 4 5 9"/>'),
    target: ic('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/>'),
    logout: ic('<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>')
  };
  /* emoji (without the U+FE0F variation selector) → icon. Anything not listed keeps its emoji. */
  var EMO = { '📋': 'clip', '⚠': 'alert', '🔄': 'refresh', '⚙': 'tools', '🛠': 'tools', '📬': 'mail', '📧': 'mail', '✉': 'mail', '📨': 'send', '📄': 'file', '🧾': 'file',
              '✈': 'plane', '🛫': 'takeoff', '✍': 'pen', '✏': 'pen', '📝': 'notes', '🔧': 'wrench', '➕': 'plus', '🔍': 'search', '🏷': 'tag', '⭐': 'star', '✅': 'checkc',
              '📷': 'camera', '👤': 'user', '👷': 'user', '👥': 'users', '📇': 'users', '🧪': 'flask', '💾': 'save', '📦': 'box', '✨': 'sparkles', '🪄': 'sparkles', '🧠': 'sparkles',
              '🎨': 'sparkles', '🔑': 'key', '🔐': 'lock', '🔒': 'lock', '🚀': 'flag', '🗑': 'trash', '🏢': 'building', '📖': 'book', '💡': 'bulb', '❓': 'help', '📎': 'clip2',
              '📅': 'calendar', '📁': 'folder', '🌍': 'globe', '⬆': 'upload', '📱': 'phone', '🖥': 'monitor', '🧳': 'suitcase', '⏳': 'hourglass', '🎯': 'target', '🚪': 'logout' };
  ICON.flag = ICON.flag; ICON.book = ic('<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 19V5"/><path d="M8 7h7"/>');
  var STAT = { done: ['CARRIED OUT', '#1a7a1a'], waiting_parts: ['WAITING FOR PART(S)', '#8A5A00'], mel: ["ITEM MEL'D", '#0055cc'], cancelled: ['CANCELLED BY CUSTOMER', '#B02000'], pending: ['IN PROGRESS', '#B35400'] };
  function mq(q) { return W.matchMedia ? W.matchMedia(q) : { matches: false }; }
  var wideLive = mq('(min-width:1360px)'), wideKo = mq('(min-width:1180px)');   // same breakpoints as ui2.css (Start Job side panel: tablet landscape and up)

  /* ---------- 1. which screen is showing (reads displays the app already toggles) ---------- */
  var curView = '', curPage = '', pendingTop = false;
  function view() {
    if (vis($('#login-screen'))) return 'login';
    if (vis($('#kickoff-panel'))) return 'start';
    if (vis($('#app-screen'))) return 'fast';
    return 'other';
  }
  function setPage(p) { if (p === curPage) return; curPage = p; B.setAttribute('data-u2page', p); sync(); }
  var setView = safe(function () {
    var v = view();
    if (v === curView) return;
    curView = v;
    B.setAttribute('data-u2view', v);
    B.classList.toggle('u2-on', v === 'start' || v === 'fast');
    B.classList.toggle('u2-login', v === 'login');
    if (v === 'login') setPage('projects');
    if (v === 'start') setPage('workspace');
    if (!curPage) setPage('projects');
    tagBlocks(); placeDrafts(); sync(); renderLive();
  });
  function tagBlocks() {
    var app = D.getElementById('app-screen'); if (!app) return;
    Array.prototype.forEach.call(app.children, function (c) {
      if (c.classList.contains('u2-banner') || c.classList.contains('eng-bar')) return;
      if (c.classList.contains('proj-panel')) { c.classList.add('u2-pj'); return; }
      c.classList.add('u2-ws');
    });
  }

  /* ---------- 2. banner, counters, proxies ---------- */
  var sync = safe(function () {
    if (!B.classList.contains('u2-on')) return;
    var title, meta, chip = '';
    if (curPage === 'projects' && curView === 'fast') {
      var n = $$('#proj-list .proj-item').length;
      title = 'Projects'; meta = n ? (n + (n > 1 ? ' projects' : ' project') + ' in this list') : 'No project yet — create one with “New project”';
    } else {
      var p = curView === 'start' ? ['ko_reg', 'ko_model', 'ko_wo', 'ko_sn', 'ko_icao'] : ['f_reg', 'f_model', 'f_wo', 'f_sn', 'f_loc'];
      var wo = val(p[2]), sn = val(p[3]), loc = val(p[4]);
      title = [val(p[0]), val(p[1])].filter(Boolean).join(' · ') || 'New project';
      meta = [wo && ('WO ' + wo), sn && ('S/N ' + sn), loc].filter(Boolean).join(' · ') || 'Fill in the aircraft details to identify this project';
      var tag = $('.proj-item.active .tag-open, .proj-item.active .tag-arch');
      if (tag) chip = tag.textContent.trim();
    }
    $$('.u2-bn-t').forEach(function (e) { e.textContent = title; });
    $$('.u2-bn-mt').forEach(function (e) { e.textContent = meta; });
    $$('.u2-chip').forEach(function (e) { e.textContent = chip; e.hidden = !chip; });
    $$('.u2-tab').forEach(function (t) {
      var on = (t.getAttribute('data-t') === 'start') === (curView === 'start');
      t.classList.toggle('on', on); t.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    B.style.setProperty('--u2-crumb', JSON.stringify(curPage === 'projects' && curView === 'fast' ? 'Projects' : 'Projects / ' + title));
    var np = $('#u2-n-proj'); if (np) np.textContent = $$('#proj-list .proj-item').length || '';
    var items = $$('#app-screen .item-row').length;
    $$('.u2-step[data-l="Work items"] i').forEach(function (i) { i.textContent = items; i.hidden = !items; });
    // proxies of Mark A/C RTS / Handover (the original buttons stay in the page and do the work)
    var rts = D.getElementById('btn-mark-rts'), hasId = !!activeProjectId();
    $$('.u2-act[data-a="rts"]').forEach(function (b) {
      b.hidden = !rts || (rts.style && rts.style.display === 'none');
      var l = $('.u2-rts-l', b); if (l && rts) l.textContent = txt(rts).replace(/^[^A-Za-z]+/, '') || 'Mark A/C RTS';
    });
    $$('.u2-act[data-a="handover"]').forEach(function (b) { b.disabled = !hasId; b.title = hasId ? '' : 'Open or save a project first'; });
  });

  /* ---------- 3. section navigator (pills scrolling to the existing cards) ---------- */
  var APP_MAP = [[/upload pdf/i, 'PDF import'], [/aircraft/i, 'Aircraft'], [/work items|condition/i, 'Work items'], [/daily updates/i, 'Daily updates'],
                 [/parts/i, 'Parts'], [/closing/i, 'Closing'], [/onsite|engineers/i, 'Team']];
  var KO_MAP = [[/^fbo/i, 'FBO'], [/aircraft/i, 'Aircraft'], [/recipients/i, 'Recipients'], [/travel/i, 'Travel'], [/part request/i, 'Part request'],
                [/parts & tools|parts &amp; tools/i, 'Parts & tools'], [/questions/i, 'Questions'], [/drafts/i, 'Drafts']];
  function buildSteps(nav, cards, titleSel, map) {
    var items = [];
    cards.forEach(function (c) {
      var h = $(titleSel, c); if (!h) return;
      var t = txt(h).replace(/^[^A-Za-z]+/, ''), lab = '';
      for (var i = 0; i < map.length; i++) if (map[i][0].test(t)) { lab = map[i][1]; break; }
      lab = lab || t.slice(0, 16);
      if (items.some(function (x) { return x.l === lab; })) return;
      items.push({ l: lab, el: c });
    });
    nav.textContent = '';
    items.forEach(function (it, i) {
      var b = el('button', 'u2-step'); b.type = 'button'; b.setAttribute('data-l', it.l);
      var n = el('b', '', i + 1), c = el('i'); c.hidden = true;
      b.appendChild(n); b.appendChild(D.createTextNode(it.l)); b.appendChild(c);
      b.onclick = function () {
        it.el.classList.remove('collapsed');
        if (it.el.closest('.u2-ko-in')) { var s = it.el.closest('.u2-ko-in'); s.scrollTop = 0; it.el.classList.add('u2-flash'); setTimeout(function () { it.el.classList.remove('u2-flash'); }, 1200); return; }
        var kb = it.el.classList.contains('ko-card') && $('.ko-card-body', it.el), kh = kb && $('.ko-card-head', it.el);
        if (kb && kh && kb.style.display === 'none') kh.click();   // Start Job cards are an accordion: the pill opens the section it jumps to
        W.setTimeout(function () { W.scrollTo({ top: it.el.getBoundingClientRect().top + W.pageYOffset - 130, behavior: 'smooth' }); }, kb ? 60 : 0);
      };
      nav.appendChild(b); it.btn = b;
    });
    nav._items = items;
  }
  var spyBusy = false;
  var spy = safe(function () {
    spyBusy = false;
    $$('.u2-steps').forEach(function (nav) {
      if (!nav._items || !nav.offsetParent) return;
      var cur = 0;
      nav._items.forEach(function (it, i) { if (!it.el.closest('.u2-ko-in') && it.el.getBoundingClientRect().top <= 160) cur = i; });
      nav._items.forEach(function (it, i) { it.btn.classList.toggle('on', i === cur); });
    });
  });

  /* ---------- 4. project rows: FAST Update button next to Start Job (equal weight) ---------- */
  var enhanceRows = safe(function () {
    var pl = D.getElementById('proj-list'); if (!pl) return;
    $$('.proj-item', pl).forEach(function (row) {
      if (row.getAttribute('data-u2')) return;
      row.setAttribute('data-u2', '1');
      var sj = $('.btn-start-job', row); if (!sj) return;
      var m = /koStartFromProject\('([^']+)'\)/.exec(sj.getAttribute('onclick') || ''); if (!m) return;
      sj.innerHTML = ICON.flag + 'Start Job';
      $$('button', row).forEach(function (bt) { if (!bt.classList.contains('u2-fast') && !bt.classList.contains('btn-start-job')) iconizeEl(bt); });
      var b = el('button', 'btn u2-fast'); b.type = 'button'; b.innerHTML = ICON.table + 'FAST Update';
      b.setAttribute('onclick', "event.stopPropagation();loadProject('" + m[1] + "')");
      sj.insertAdjacentElement('afterend', b);
    });
    if (pendingTop && curPage === 'workspace') { pendingTop = false; W.scrollTo({ top: 0, behavior: 'smooth' }); }
    sync();
  });

  /* ---------- 5. Live preview: every SQ with its update right below ---------- */
  function buildLive() {
    var app = D.getElementById('app-screen'); if (!app || $('.u2-live', app)) return;
    var a = el('aside', 'u2-live'); a.setAttribute('aria-label', 'Live preview'); a.hidden = true;
    a.innerHTML = '<div class="u2-live-in"><div class="u2-live-h"><h3>Live preview</h3><i class="u2-cnt"></i><span class="u2-live-m"></span>' +
      '<button type="button" class="u2-live-x" aria-label="Close preview" onclick="U2.preview(false)">×</button></div>' +
      '<div class="u2-live-wo"></div><div class="u2-live-sc"></div></div>';
    app.appendChild(a);
  }
  var renderLive = safe(function (force) {
    var a = $('.u2-live'); if (!a) return;
    if (!force && !a.getClientRects().length) return;           // only work when it is on screen
    var sc = $('.u2-live-sc', a), keep = sc.scrollTop;
    var items = $$('#items-container .item-row').map(function (r, i) {
      var inp = $('input[type=text]', r);
      return { id: r.getAttribute('data-item-id') || String(i + 1), n: i + 1, label: inp ? inp.value.trim() : '' };
    });
    var day = null;
    $$('#updates-container .update-day').forEach(function (d) { if (!day || (+d.getAttribute('data-ts') || 0) >= (+day.getAttribute('data-ts') || 0)) day = d; });
    var isToday = !!(day && $('.badge-today', day));
    var sig = JSON.stringify([val('f_wo'), items.map(function (i) { return i.label; }), day ? [day.getAttribute('data-date'), $$('.day-status-pill', day).map(function (p) { return p.className + txt(p); }), day.classList.contains('is-rts'), isToday,
      $$('.upd-item-block', day).map(function (b) { var c = $('.upd-item-chk input[type=checkbox]', b), s = $('.upd-status-sel', b); return [b.getAttribute('data-item-id'), !!(c && c.checked), s ? s.value : '', txt($('.rte-editable', b))]; }),
      txt($('.upd-free-global', day))] : null]);
    if (!force && a._sig === sig) return;
    a._sig = sig;
    sc.textContent = '';
    if (day) {
      var dh = el('div', 'u2-dh'); dh.appendChild(el('b', 'u2-db', day.getAttribute('data-date') || ''));
      $$('.day-status-pill', day).filter(function (p) { return /active-/.test(p.className); }).forEach(function (p) { dh.appendChild(el('span', 'u2-dp', txt(p).replace(/^[^A-Za-z]+/, ''))); });
      if (day.classList.contains('is-rts')) dh.appendChild(el('span', 'u2-dp u2-dp-rts', 'RTS'));
      sc.appendChild(dh);
    } else sc.appendChild(el('p', 'u2-empty', items.length ? 'No update day yet — add one in “Daily updates”.' : 'Add your work items (SQ) first.'));
    var done = 0;
    items.forEach(function (it) {
      var blk = day ? $('.upd-item-block[data-item-id="' + it.id + '"]', day) : null;
      var chk = blk && $('.upd-item-chk input[type=checkbox]', blk), on = !!(chk && chk.checked);
      var en = el('div', 'u2-en'), l1 = el('div', 'u2-l1'), l2 = el('div', 'u2-l2');
      l1.appendChild(el('b', 'u2-sq', 'SQ 2.' + it.n)); l1.appendChild(el('span', 'u2-ds', it.label || '(no description)'));
      if (on) {
        done++;
        var sel = $('.upd-status-sel', blk), sv = sel ? sel.value : '';
        if (STAT[sv]) { var pl = el('span', 'u2-pl', STAT[sv][0]); pl.style.background = STAT[sv][1]; l2.appendChild(pl); }
        var dt = txt($('.rte-editable', blk)); if (dt) l2.appendChild(D.createTextNode(dt.length > 220 ? dt.slice(0, 217) + '…' : dt));
      } else l2.appendChild(el('span', 'u2-mu', isToday ? 'No update today' : 'No update this day'));
      en.appendChild(l1); en.appendChild(l2);
      en.onclick = function () { var t = blk || D.getElementById('item-' + it.id); if (t && t.scrollIntoView) t.scrollIntoView({ behavior: 'smooth', block: 'center' }); if (a.classList.contains('open')) U2.preview(false); };
      sc.appendChild(en);
    });
    var note = day && txt($('.upd-free-global', day)); if (note) sc.appendChild(el('div', 'u2-note', note));
    $('.u2-cnt', a).textContent = items.length + ' SQ';
    $('.u2-live-m', a).textContent = items.length ? (done + ' of ' + items.length + ' updated') : '';
    $('.u2-live-wo', a).textContent = 'WORK ORDER #: ' + (val('f_wo') || '—');
    sc.scrollTop = keep;
  });

  /* ---------- 6. Start Job: the "Drafts to generate" card becomes a side panel on wide screens ---------- */
  var placeDrafts = safe(function () {
    var ko = D.getElementById('kickoff-panel'), g = D.getElementById('ko-gen-btn'); if (!ko || !g) return;
    var card = g.closest('.ko-card'); if (!card) return;
    card.classList.add('u2-drafts');
    var side = $('.u2-ko-side', ko), inner;
    if (!side) { side = el('aside', 'u2-ko-side'); inner = el('div', 'u2-ko-in'); side.appendChild(inner); ko.appendChild(side); }
    inner = $('.u2-ko-in', side);
    if (wideKo.matches && B.classList.contains('u2-on')) { if (card.parentNode !== inner) inner.appendChild(card); }
    else if (card.parentNode !== ko) ko.insertBefore(card, side);
    ko.classList.toggle('u2-split', card.parentNode === inner);   // CSS: side panel always open, its pill hidden
  });
  /* ---------- emoji → SVG on static labels (never on emails, tables, editable text, or anything the app rewrites) ---------- */
  var SKIP = '#output-section,.rte-editable,[contenteditable],textarea,select,option,.u2-live,#tbl-out,.ko-drafts-edit-panels,.u2-side,.u2-banner,.u2-topbar,.proj-item,script,style';
  var KEEP = /confirmTransferProject|confirmHandoverAndTransfer|rtagSaveDraft|generateRepairTag|koApplyPartsUpdate|koCopy(Subject|Recipients|Draft)/;
  var EMO_KEYS = Object.keys(EMO);
  function iconizeEl(h, cls) {
    if (h.getAttribute('data-u2i')) return;
    var n = h.firstChild; if (!n || n.nodeType !== 3) return;
    var s = n.nodeValue.replace(/^\s+/, ''), key = null;
    for (var i = 0; i < EMO_KEYS.length; i++) if (s.indexOf(EMO_KEYS[i]) === 0) { key = EMO_KEYS[i]; break; }
    if (!key) return;
    n.nodeValue = s.slice(key.length).replace(/^[\uFE0F\s]+/, '');
    var sp = el('span', cls || 'u2-i2'); sp.innerHTML = ICON[EMO[key]]; h.insertBefore(sp, n); h.setAttribute('data-u2i', '1');
  }
  var LEAD = /^\s*[\u2190-\u2bff\u{1F000}-\u{1FAFF}]/u;
  var iconize = safe(function () {
    $$('#kickoff-panel .ko-card-head h3').forEach(function (h) { iconizeEl(h, 'u2-ic'); });   // Start Job cards: icon chip
    $$('button,h2,h3,h4,label,strong,b,div,span,p,li,summary,a').forEach(function (e) {
      var n = e.firstChild;
      if (!n || n.nodeType !== 3 || !LEAD.test(n.nodeValue)) return;                          // cheap test first: text must START with a symbol
      if (e.id || e.getAttribute('data-u2i') || e.closest(SKIP)) return;
      var b = e.tagName === 'BUTTON' ? e : e.closest('button');
      if (b && (b.id || KEEP.test(b.getAttribute('onclick') || ''))) return;
      iconizeEl(e);
    });
  });

  /* ---------- 7. actions used by the sidebar / banner / top bar (only call existing functions) ---------- */
  function activeProjectId() {
    var sj = $('#proj-list .proj-item.active .btn-start-job'); if (!sj) return '';
    var m = /koStartFromProject\('([^']+)'\)/.exec(sj.getAttribute('onclick') || ''); return m ? m[1] : '';
  }
  function backToApp() { if (vis($('#kickoff-panel')) && W.closeKickoff) W.closeKickoff(); }
  W.U2 = {
    home: function () { backToApp(); setPage('projects'); W.scrollTo({ top: 0, behavior: 'smooth' }); },
    newProject: function () { backToApp(); setPage('workspace'); if (W.newProject) W.newProject(); },
    tab: function (t) {
      if (t === 'start') { var id = activeProjectId(); if (id && W.koStartFromProject) W.koStartFromProject(id); else if (W.openKickoff) W.openKickoff(); }
      else { backToApp(); setPage('workspace'); W.scrollTo({ top: 0, behavior: 'smooth' }); }
    },
    tools: function () { var s = $('.u2-side'); if (s) s.classList.toggle('tools-open'); },
    preview: function (open) { var a = $('.u2-live'); if (!a) return; a.classList.toggle('open', open !== false); a.hidden = !(open !== false) && !wideLive.matches; if (open !== false) renderLive(true); }
  };
  function buildTopbar() {
    ['app-screen', 'kickoff-panel'].forEach(function (id) {
      var root = D.getElementById(id), ban = root && $('.u2-banner', root); if (!root || !ban || $('.u2-topbar', root)) return;
      var bar = el('div', 'u2-topbar');
      bar.innerHTML = '<button type="button" class="btn u2-act" data-a="handover">' + ICON.swap + 'Handover</button>' +
                      '<button type="button" class="btn danger u2-act" data-a="rts">' + ICON.check + '<span class="u2-rts-l">Mark A/C RTS</span></button>';
      root.insertBefore(bar, ban);
    });
  }


  /* ---------- Start Job on phones / portrait tablets: floating shortcut to "Drafts to generate" (the last card, far below) ---------- */
  function buildFab() {
    var b = el('button', 'u2-fab'); b.type = 'button'; b.hidden = true; b.innerHTML = ICON.send + 'Drafts';
    b.onclick = function () { var n = $('.u2-steps[data-for="start"]'), it = n && n._items && n._items[n._items.length - 1]; if (it && it.btn) it.btn.click(); };
    B.appendChild(b);
    var busy = false, upd = safe(function () {
      busy = false;
      var card = $('.u2-drafts'), r = card && card.getBoundingClientRect();
      b.hidden = !(curView === 'start' && !wideKo.matches && r && r.top > W.innerHeight - 120);
    });
    var go = function () { if (!busy) { busy = true; (W.requestAnimationFrame || W.setTimeout)(upd); } };
    W.addEventListener('scroll', go, { passive: true }); W.addEventListener('resize', go);
    new MutationObserver(go).observe(B, { attributes: true, attributeFilter: ['data-u2view'] });
    go();
  }

  /* ---------- wiring ---------- */
  function init() {
    var navApp = $('.u2-steps[data-for="fast"]'), navKo = $('.u2-steps[data-for="start"]');
    if (navApp) {
      buildSteps(navApp, $$('#app-screen .card'), '.card-head h2', APP_MAP);
      var pv = el('button', 'u2-step u2-prev-pill'); pv.type = 'button'; pv.innerHTML = ICON.eye + 'Preview'; pv.onclick = function () { W.U2.preview(true); }; navApp.appendChild(pv);
    }
    if (navKo) buildSteps(navKo, $$('#kickoff-panel .ko-card'), '.ko-card-head h3', KO_MAP);
    buildTopbar(); buildLive(); buildFab(); iconize();

    var mo = new MutationObserver(setView);
    ['login-screen', 'app-screen', 'kickoff-panel'].forEach(function (id) { var e = D.getElementById(id); if (e) mo.observe(e, { attributes: true, attributeFilter: ['style', 'class'] }); });
    var pl = D.getElementById('proj-list'); if (pl) new MutationObserver(enhanceRows).observe(pl, { childList: true });
    ['items-container', 'updates-container'].forEach(function (id) { var e = D.getElementById(id); if (e) new MutationObserver(function () { later('live', function () { sync(); renderLive(); }, 150); }).observe(e, { childList: true }); });
    [wideLive, wideKo].forEach(function (m) {
      var f = function () { placeDrafts(); renderLive(); };
      if (m.addEventListener) m.addEventListener('change', f); else if (m.addListener) m.addListener(f);
    });
    var appEl = D.getElementById('app-screen'); if (appEl) new MutationObserver(tagBlocks).observe(appEl, { childList: true });   // blocks added later get tagged too

    D.addEventListener('click', safe(function (e) {
      var t = e.target; if (!t || !t.closest) return;
      var act = t.closest('.u2-act');
      if (act) {
        if (act.getAttribute('data-a') === 'rts') { var r = D.getElementById('btn-mark-rts'); if (r) r.click(); }
        else { var id = activeProjectId(); if (id && W.openTransferModal) W.openTransferModal(id); }
        return;
      }
      var row = t.closest('.proj-item');
      if (row) {
        var btn = t.closest('button');
        if (!btn && !/Transferred/i.test(row.textContent)) { pendingTop = true; setPage('workspace'); }
        else if (btn && btn.classList.contains('u2-fast')) { pendingTop = true; setPage('workspace'); }
        return;
      }
      if (t.closest('.u2-grp .u2-i')) { var sd = $('.u2-side'); if (sd) sd.classList.remove('tools-open'); }
      if (t.closest('.proj-panel-head .btn.primary')) setPage('workspace');
    }), true);
    var upd = safe(function () { sync(); later('live', renderLive, 150); });
    D.addEventListener('input', upd, true); D.addEventListener('change', upd, true);
    W.addEventListener('scroll', function () { if (!spyBusy) { spyBusy = true; W.requestAnimationFrame(spy); } }, { passive: true });
    setInterval(function () { if (B.classList.contains('u2-on')) { sync(); spy(); renderLive(); } }, 1500);

    enhanceRows(); setView(); spy();
  }
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', init); else init();
})();
