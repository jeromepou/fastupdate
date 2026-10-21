/* =====================================================================
   ui3.js — FAST Update Generator · new interface, version 3 (PC first)
   PRESENTATION ONLY. Same promise as ui2: it reads what is on screen and
   calls functions that already exist. Every existing field, button and
   window stays in the page (same ids, same code): this file only decides
   WHERE they are shown. Nothing is rewritten, nothing is deleted.

   SWITCH (ON for everybody; a device that opens ?ui3=0 keeps the classic interface):
     open  your-app-url/?ui3=1   → new interface ON  (remembered on this device)
     open  your-app-url/?ui3=0   → back to the classic interface
   Needs <script src="ui3.js" defer> BEFORE <script src="ui2.js" defer>.
   Turning ui3 on turns ui2 off on this device (they never run together).
   ===================================================================== */
(function () {
  'use strict';
  var KEY = 'fastUi3', DEFAULT_ON = true;   // the new interface is ON for everybody; a device that opens ?ui3=0 keeps the classic one
  var AMM_LOCKED = true;                 // AMM reader greyed in the menus (set false to open it to everybody)
  var D = document, B = D.body, W = window;

  /* ---------- 0. switch ---------- */
  function enabled() {
    var m = /[?&]ui3=([01])(?:&|$)/.exec(W.location.search), v = null;
    try {
      if (m) W.localStorage.setItem(KEY, m[1]);
      v = W.localStorage.getItem(KEY);
    } catch (e) { if (m) v = m[1]; }
    if (m && W.history && W.history.replaceState) {
      try { W.history.replaceState(null, '', W.location.pathname + W.location.search.replace(/([?&])ui3=[01]&?/, '$1').replace(/[?&]$/, '') + W.location.hash); } catch (e) { /* ignore */ }
    }
    if (v === '1') return true;
    if (v === '0') return false;
    return DEFAULT_ON;
  }
  if (!enabled()) return;                                              // classic interface: nothing below runs
  if (D.documentElement.classList.contains('u2-enabled')) { if (W.console) W.console.warn('[ui3] ui2 is already running: put <script src="ui3.js"> before ui2.js'); return; }
  try { W.localStorage.setItem('fastUi2', '0'); } catch (e) { /* ignore */ }   // ui2 and ui3 never run together

  function addLink(a) { var l = D.createElement('link'); Object.keys(a).forEach(function (k) { l.setAttribute(k, a[k]); }); D.head.appendChild(l); }
  addLink({ rel: 'preload', href: 'fonts/plus-jakarta-sans-latin-wght-normal.woff2', as: 'font', type: 'font/woff2', crossorigin: '' });
  addLink({ rel: 'stylesheet', href: 'ui3.css' });
  addLink({ rel: 'stylesheet', href: 'ui3-tablet.css' });                  // tablets (601-1099px + touch): loaded after ui3.css, so it only wins where it says so
  addLink({ rel: 'stylesheet', href: 'ui3-phone.css' });   // phones
  D.documentElement.classList.add('u3-enabled');

  /* ---------- AMM reader: locked (AMM_LOCKED) until the access code has been typed once; remembered on this device ---------- */
  var AMM_CODE = '1831', AMM_KEY = 'fastAmmOk', ammOk = false;          // a lock for work in progress, not a security feature: the code can be read in this file
  function ammLocked() { if (!AMM_LOCKED || ammOk) return false; try { return W.localStorage.getItem(AMM_KEY) !== '1'; } catch (e) { return true; } }
  function ammSync(tb) {                                                // look of the lock: grey menu entry, lock icon + title on the project tab
    var lk = ammLocked(); tb = tb || D.querySelector('.u3-tab[data-t="amm"]');
    D.documentElement.classList.toggle('u3-amm-ok', !lk);
    if (!tb) return;
    tb.title = lk ? 'Access code required' : '';
    var em = tb.querySelector('em'); if (em && !lk) em.parentNode.removeChild(em);
  }
  function ammUnlock(then) {                                            // asks for the code when still locked, then runs `then`
    if (!ammLocked()) { then(); return; }
    var c = W.prompt('AMM reader is under development: enter the access code.');
    if (c === null) return;
    if (String(c).trim() !== AMM_CODE) { W.alert('Wrong code.'); return; }
    ammOk = true; try { W.localStorage.setItem(AMM_KEY, '1'); } catch (e) { /* this session only */ }
    ammSync(); then();
  }
  ammSync();

  /* ---------- helpers ---------- */
  function $(s, r) { return (r || D).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || D).querySelectorAll(s)); }
  function vis(e) { return !!e && W.getComputedStyle(e).display !== 'none'; }
  function val(id) { var e = D.getElementById(id); return e && e.value ? String(e.value).trim() : ''; }
  function txt(e) { return e ? (e.textContent || '').replace(/\s+/g, ' ').trim() : ''; }
  function el(tag, cls, text) { var e = D.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function safe(fn) { return function () { try { return fn.apply(this, arguments); } catch (e) { if (W.console) W.console.warn('[ui3]', e); } }; }
  var timers = {};
  function later(k, fn, ms) { clearTimeout(timers[k]); timers[k] = setTimeout(safe(fn), ms); }
  function call(name) { var a = Array.prototype.slice.call(arguments, 1); return typeof W[name] === 'function' ? W[name].apply(W, a) : undefined; }

  /* ---------- icons + emoji → SVG (same set and same safety lists as ui2.js) ---------- */
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

  /* ---------- emoji → SVG on static labels (never on emails, tables, editable text, or anything the app rewrites) ---------- */
  var SKIP = '#output-section,.u3-corridor,.rte-editable,[contenteditable],textarea,select,option,.u2-live,#tbl-out,.ko-drafts-edit-panels,.u2-side,.u2-banner,.u2-topbar,.proj-item,script,style';
  var KEEP = /confirmTransferProject|confirmHandoverAndTransfer|rtagSaveDraft|generateRepairTag|koApplyPartsUpdate|koCopy(Subject|Recipients|Draft)/;

  ICON.back = ic('<path d="M19 12H5M12 19l-7-7 7-7"/>'); ICON.next = ic('<path d="M5 12h14M12 5l7 7-7 7"/>');
  ICON.sunrise = ic('<path d="M12 2v6M4.9 10.9l1.4 1.4M2 18h2M20 18h2M17.7 12.3l1.4-1.4M22 22H2M8 6l4-4 4 4M16 18a4 4 0 0 0-8 0"/>');
  ICON.sun = ic('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>');
  ICON.sunset = ic('<path d="M17 18a5 5 0 0 0-10 0M12 9V2M4.2 10.2l1.4 1.4M1 18h2M21 18h2M18.4 11.6l1.4-1.4M23 22H1M16 5l-4 4-4-4"/>');
  ICON.moon = ic('<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>');
  ICON.bag = ic('<path d="M6 7h12l1 13H5zM9 7V5a3 3 0 0 1 6 0v2"/>'); ICON.ticket = ic('<path d="M3 9a2 2 0 0 0 0 6v3h18v-3a2 2 0 0 1 0-6V6H3zM14 6v12"/>'); ICON.clock = ic('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>');
  EMO['\u{1F305}'] = 'sunrise'; EMO['\u2600'] = 'sun'; EMO['\u{1F306}'] = 'sunset'; EMO['\u{1F319}'] = 'moon'; EMO['\u{1F9F3}'] = 'bag'; EMO['\u{1F3AB}'] = 'ticket'; EMO['\u{1F550}'] = 'clock';
  ICON.drop = ic('<path d="M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11z"/>'); ICON.link = ic('<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>');
  EMO['\u{1F6E2}'] = 'drop'; EMO['\u{1F4A7}'] = 'drop'; EMO['\u{1F9F4}'] = 'drop'; EMO['\u{1F517}'] = 'link'; EMO['\u{1F9FD}'] = 'sparkles';
  var EMO_KEYS = Object.keys(EMO);
  function iconizeEl(h, cls) {
    var f0 = h.firstChild; if (h.getAttribute('data-u2i') && f0 && f0.nodeType === 1 && /u2-i/.test(f0.className)) return;     // already has its icon (the app may redraw a label: then it is converted again)
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
    ['ko-extra-baggage', 'ko-fake-return'].forEach(function (id) { var e = D.getElementById(id); if (e) iconizeEl(e); });   // plain toggles (the app only flips their class)
  });



  /* ---------- state: which page, which project tab, which Daily-update section ---------- */
  var P = 'projects', T = 'details', S = 'items', curView = '', SA = false;   // SA: Start Job opened with "Start Job without a project"
  var K = 'job';
  var KSUBS = [['job', 'Job', 'notes'], ['recips', 'Recipients', 'mail'], ['travel', 'Travel', 'plane'], ['questions', 'Customer update', 'help'], ['partreq', 'Part request', 'box'], ['parts', 'Parts & tools', 'wrench'], ['fbo', 'FBO', 'building'], ['drafts', 'Drafts', 'send']];
  var KNAMES = ['job', 'recips', 'travel', 'questions', 'partreq', 'parts', 'fbo', 'drafts'];
  /* "Next" only exists INSIDE a category that has two halves (nobody has to walk through everything) */
  var HALVES = { questions: [['q', 'Questions'], ['n', 'ETA, priorities & notes']], fbo: [['a', 'Equipment & questions'], ['b', 'People, documents & notes']] };
  var seen = {};
  var CHECK_MSG = 'Check the fields below. Empty ones can be filled now or later, in Details.';
  var TABS = [['details', 'Details', 'notes'], ['start', 'Start Job', 'flag'], ['daily', 'Daily update', 'table'], ['ga', 'GA3671 tag', 'tag'], ['corridor', 'Corridor', 'clip'], ['amm', 'AMM reader', 'book']];
  var SUBS = [['items', 'Work items', 'clip2'], ['parts', 'Parts', 'wrench'], ['closing', 'Closing details', 'calendar'], ['result', 'Result', 'table']];
  var GROUPS = [[/extract parts/i, 'pextract'], [/parts replaced/i, 'preplaced'], [/upload pdf/i, 'upload'], [/aircraft/i, 'aircraft'], [/daily updates/i, 'updates'],
                [/work items|condition/i, 'items'], [/closing/i, 'closing'], [/onsite|engineers/i, 'team']];
  var KO_SYNC = { f_model: 'ko_model', f_sn: 'ko_sn', f_reg: 'ko_reg', f_wo: 'ko_wo', f_loc: 'ko_icao', f_cust_name: 'ko_cust_name' };   // Start Job copies of project fields
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function setState(p, t, s, keepScroll) {
    if (p) P = p; if (t) T = t; if (s) S = s;
    B.setAttribute('data-u3p', P); B.setAttribute('data-u3t', T); B.setAttribute('data-u3s', S);
    sync(); later('icons', iconize, 60);
    if (!keepScroll) W.scrollTo(0, 0);
  }
  function view() {
    if (vis($('#login-screen'))) return 'login';
    if (vis($('#kickoff-panel'))) return 'start';
    if (vis($('#app-screen'))) return 'fast';
    return 'other';
  }
  var setView = safe(function () {
    var v = view(); if (v === curView) return; curView = v;
    if (v !== 'start') { SA = false; B.removeAttribute('data-u3sa'); }       // leaving Start Job ends the "no project" mode
    B.classList.toggle('u3-on', v === 'start' || v === 'fast');
    B.classList.toggle('u3-login', v === 'login');
    if (v === 'login') { P = 'projects'; T = 'details'; S = 'items'; }
    if (v === 'start') { P = 'project'; T = 'start'; }                 // the app opened Start Job itself (button on a project card)
    if (v === 'fast' && T === 'start') T = 'details';                  // came back from Start Job
    tagCards(); markDups(); setState(null, null, null, true);
  });
  function activeProjectId() { var r = $('#proj-list .proj-item.active'); return r ? (r.getAttribute('data-pid') || '') : ''; }
  function backToApp() { if (vis($('#kickoff-panel')) && W.closeKickoff) W.closeKickoff(); }

  /* ---------- tag the existing cards (nothing is moved or rebuilt: CSS decides what shows on each page) ---------- */
  var tagCards = safe(function () {
    var app = D.getElementById('app-screen'); if (!app) return;
    Array.prototype.forEach.call(app.children, function (c) {
      if (c.getAttribute('data-u3g')) return;
      var g = '';
      if (c.classList.contains('eng-bar')) g = 'ebar';
      else if (c.classList.contains('proj-panel')) g = 'plist';
      else if (c.classList.contains('action-row')) g = 'actions';
      else if (c.id === 'output-section') g = 'result';
      else if (c.classList.contains('card')) { var t = txt($('.card-head h2', c)); for (var i = 0; i < GROUPS.length; i++) if (GROUPS[i][0].test(t)) { g = GROUPS[i][1]; break; } }
      if (g) c.setAttribute('data-u3g', g);
    });
  });
  /* Start Job: its top card repeated the project fields. They stay in the page (the app still reads them) but are hidden and kept in sync with Details. */
  var markDups = safe(function () {
    Object.keys(KO_SYNC).forEach(function (f) {
      var k = D.getElementById(KO_SYNC[f]); if (!k) return;
      var w = k.closest('.fg, .ko-fg'); if (!w) return;
      var extra = Array.prototype.some.call(w.children, function (c) { return c !== k && c.tagName !== 'LABEL'; });
      if (extra) { k.classList.add('u3-dup'); var lb = $('label', w); if (lb) lb.classList.add('u3-dup'); }     // keep what the app shows around the field (e.g. FBO suggestions)
      else w.classList.add('u3-dup');
      if (f === 'f_cust_name') {                                                                             // the "Customer" sub-title and its divider go with the field
        var p1 = w.previousElementSibling;
        if (p1 && p1.classList.contains('ko-section-lbl')) { p1.classList.add('u3-dup'); var p2 = p1.previousElementSibling; if (p2 && p2.classList.contains('ko-divider')) p2.classList.add('u3-dup'); }
      }
    });
    var card = $('#ko_defect'); card = card && card.closest('.ko-card-body');
    if (card && !$('.u3-ko-note', card)) {
      var n = el('div', 'u3-ko-note'); n.innerHTML = '<span>Aircraft, work order and customer come from <b>Details</b>.</span><button type="button" class="btn u3-godetails">' + ICON.notes + 'Edit in Details</button>';
      card.insertBefore(n, card.firstChild);
    }
  });
  function pushToKo(fid) { var s = D.getElementById(fid), k = D.getElementById(KO_SYNC[fid]); if (!s || !k || k.value === s.value) return; k.value = s.value; k.dispatchEvent(new Event('input', { bubbles: true })); }

  /* ---------- project header + tabs (built once, shown on the project page) ---------- */
  function optText(sel) { var o = sel && sel.options && sel.options[sel.selectedIndex]; return o ? o.text.replace(/\s*\(.*\)\s*$/, '').trim() : ''; }
  function engineers() {
    var out = [], lead = D.getElementById('lead-eng-sel');
    if (lead && lead.value) out.push([optText(lead), 'Lead']);
    $$('#poc-colleagues-container select').forEach(function (s) { if (s.value) out.push([optText(s), 'Assist']); });
    return out;
  }
  function buildHeader() {
    var app = D.getElementById('app-screen'); if (!app || $('#u3-ph')) return;
    var ph = el('div', 'u3-ph'); ph.id = 'u3-ph'; ph.hidden = true;
    ph.innerHTML = '<div class="u3-pc"><div class="u3-pt"><div class="u3-th"><h1 class="u3-t"></h1><i class="u3-chip" hidden></i></div><div class="u3-ps"></div></div>' +
      '<div class="u3-eng"><span class="u3-lab">ENGINEERS IN CHARGE</span><div class="u3-engl"></div></div>' +
      '<div class="u3-pa"><button type="button" class="btn u3-xfer">' + ICON.swap + 'Transfer to a colleague</button></div></div>' +
      '<div class="u3-tabs" role="tablist"></div><div class="u3-subs" role="tablist" hidden></div>';
    app.parentNode.insertBefore(ph, app);
    var tabs = $('.u3-tabs', ph), subs = $('.u3-subs', ph);
    TABS.forEach(function (x) {
      var b = el('button', 'u3-tab'); b.type = 'button'; b.setAttribute('data-t', x[0]); b.setAttribute('role', 'tab');
      b.innerHTML = ICON[x[2]] + '<span>' + x[1] + '</span>' + (x[0] === 'amm' && AMM_LOCKED ? '<em>' + ICON.lock + '</em>' : '');
      if (x[0] === 'amm') ammSync(b);   // lock look (lock icon, title) unless the code was already typed on this device
      tabs.appendChild(b);
    });
    SUBS.forEach(function (x) { var b = el('button', 'u3-sub'); b.type = 'button'; b.setAttribute('data-s', x[0]); b.innerHTML = ICON[x[2]] + '<span>' + x[1] + '</span>'; subs.appendChild(b); });
    var rts = D.getElementById('btn-mark-rts'); if (rts) $('.u3-pa', ph).appendChild(rts);      // the original button moves here: the app keeps showing / hiding it
  }

  /* ---------- Start Job: one page at a time + a guided "Next"; the 8 existing cards are re-parented, never rebuilt ---------- */
  function halfOf(card) { return card ? card.getAttribute('data-u3half') || '' : ''; }
  function setHalf(card, h) {
    if (!card) return; card.setAttribute('data-u3half', h);
    $$('.u3-pt-tab', card).forEach(function (x) { x.classList.toggle('on', x.getAttribute('data-h') === h); });
  }
  function halves(card, names, assign) {
    var body = $('.ko-card-body', card); if (!body) return;
    var kids = Array.prototype.slice.call(body.children);
    kids.forEach(function (c, i) { c.setAttribute('data-u3pp', assign(c, i, kids)); });
    var tb = el('div', 'u3-pt-tabs');
    names.forEach(function (x) { var t = el('button', 'u3-pt-tab'); t.type = 'button'; t.setAttribute('data-h', x[0]); t.textContent = x[1]; tb.appendChild(t); });
    body.insertBefore(tb, body.firstChild); setHalf(card, names[0][0]);
  }
  function buildParts(card) {
    var body = $('.ko-card-body', card); if (!body || $('.u3-pw', body)) return;
    var kids = Array.prototype.slice.call(body.children);
    var find = function (fn) { for (var i = 0; i < kids.length; i++) if (fn(kids[i])) return kids[i]; return null; };
    var amm = find(function (k) { return $('[onclick*="koOpenAmmReader"]', k); });
    var tpl = find(function (k) { return $('#ko-parttpl-search', k); }), quick = find(function (k) { return $('#ko-quickparts-search', k); });
    var cons = find(function (k) { return $('#ko-consumable-search', k) && !$('#ko-quickparts-search', k); });
    var look = $('#ko-lookup-cards', body), hist = find(function (k) { return /search squawk history/i.test(txt(k)) && !$('.ko-tbl-scroll', k); });
    var seal = find(function (k) { return k !== amm && k !== tpl && k !== quick && k !== cons && k !== look && k !== hist && /sealant lookup/i.test(txt(k)); });
    var tbl = $('.ko-tbl-scroll', body), bulk = $('#ko-bulk-sq-bar', body);
    var add = find(function (k) { return k.tagName === 'BUTTON' && /add row/i.test(txt(k)); }) || $('.btn-add', body);
    if (amm) amm.classList.add('u3-dup', 'u3-amm');            // the AMM Task Reader is the AMM reader tool (side menu / project tab): not part of this page
    var pw = el('div', 'u3-pw'), left = el('div', 'u3-pwl'), right = el('div', 'u3-pwr'), tabs = el('div', 'u3-pwtabs');
    var panes = [['quick', 'Quick add', [quick]], ['tpl', 'Order templates', [tpl]], ['look', 'Consumable lookups', [cons, seal, look]], ['hist', 'Squawk history', [hist]]];
    panes.forEach(function (x, i) {
      var t = el('button', 'u3-pwtab' + (i ? '' : ' on')); t.type = 'button'; t.setAttribute('data-p', x[0]); t.textContent = x[1]; tabs.appendChild(t);
      var pn = el('div', 'u3-pwpane'); pn.setAttribute('data-pane', x[0]); x[2].forEach(function (n) { if (n) pn.appendChild(n); }); left.appendChild(pn);
    });
    left.insertBefore(tabs, left.firstChild);
    var cats = el('div', 'u3-qcats'); [['', 'All'], ['parts', 'Parts'], ['consumables', 'Consumables'], ['tools', 'Tools']].forEach(function (x, i) { var b = el('button', 'u3-qcat' + (i ? '' : ' on')); b.type = 'button'; b.setAttribute('data-cat', x[0]); b.textContent = x[1]; cats.appendChild(b); });
    var qs = quick && $('#ko-quickparts-search', quick); if (qs && qs.parentNode) qs.parentNode.insertBefore(cats, qs.nextSibling);
    var rh = el('div', 'u3-pwh'); rh.innerHTML = '<h3>Your order</h3><span class="u3-count">0 lines</span>';
    right.appendChild(rh); [tbl, add, bulk].forEach(function (n) { if (n) right.appendChild(n); });
    pw.appendChild(left); pw.appendChild(right); body.appendChild(pw); card.setAttribute('data-u3pane', 'quick');
    var ob = el('div', 'u3-obar');
    ob.innerHTML = '<span class="u3-ocount">0 lines</span><span class="u3-olist">Nothing in the order yet</span><button type="button" class="btn u3-ogo">' + ICON.table + '<span>Review the order</span></button><button type="button" class="btn primary u3-odraft"><span>Go to the drafts</span>' + ICON.next + '</button>';
    body.appendChild(ob);
  }
  var applyQuickCat = safe(function (cat) {
    var c = D.getElementById('ko-quickparts-chips'); if (!c) return;
    Array.prototype.forEach.call(c.children, function (g) { var h = txt($('div', g)).toLowerCase(); g.style.display = !cat || h.indexOf(cat) === 0 ? '' : 'none'; });
  });
  function buildStart() {
    var kp = D.getElementById('kickoff-panel'); if (!kp || $('.u3-kgrid', kp)) return;
    var cards = $$('.ko-card', kp); if (cards.length < 8) return;
    var grid = el('div', 'u3-kgrid'), main = el('div', 'u3-kmain'), side = el('div', 'u3-kside');
    cards.forEach(function (c, i) { c.setAttribute('data-u3k', KNAMES[i]); });
    for (var i = 0; i < 7; i++) main.appendChild(cards[i]);
    side.appendChild(cards[7]);
    var nav = el('div', 'u3-knav'); nav.hidden = true; nav.innerHTML = '<button type="button" class="btn u3-kback">' + ICON.back + '<span>Back</span></button><button type="button" class="btn primary u3-knext"><span>Next</span>' + ICON.next + '</button>';
    main.appendChild(nav); grid.appendChild(main); grid.appendChild(side);
    var hdr = $('.ko-header', kp); if (hdr && hdr.nextSibling) kp.insertBefore(grid, hdr.nextSibling); else kp.appendChild(grid);
    // long pages have two halves behind a small switch (nothing removed, one click away); "Next" leads from one to the other
    halves(cards[3], [['q', 'Questions'], ['n', 'ETA, priorities & notes']], function (c, i) { return i === 0 ? 'q' : 'n'; });
    (function () {
      var body = $('.ko-card-body', cards[3]), kids = Array.prototype.slice.call(body.children), i0 = -1, i1 = -1;
      kids.forEach(function (c, i) { if (c.classList.contains('ko-section-lbl')) { var t = txt(c); if (/^admin/i.test(t) && i0 < 0) i0 = i; if (/^parts\s*&\s*logistics/i.test(t)) i1 = i + 1; } });
      kids.forEach(function (c, i) { if (c.classList.contains('u3-pt-tabs')) return; var q = (i >= i0 && i <= i1) || c.getAttribute('data-u3pp') === 'q'; c.setAttribute('data-u3pp', q ? 'q' : 'n'); if (i >= i0 && i <= i1) c.setAttribute('data-u3col', '1'); });
    })();
    halves(cards[6], [['a', 'Equipment & questions'], ['b', 'People, documents & notes']], function (c, i, kids) {
      var cut = -1; kids.forEach(function (k, j) { if (cut < 0 && k.classList.contains('ko-section-lbl') && /co-engineers/i.test(txt(k))) cut = j; });
      return cut >= 0 && i >= cut ? 'b' : 'a';
    });
    buildParts(cards[5]);
    var ph = $('#u3-ph'); if (ph && !$('.u3-ksubs', ph)) {
      var ks = el('div', 'u3-ksubs'); ks.hidden = true;
      KSUBS.forEach(function (x) { var b = el('button', 'u3-ksub'); b.type = 'button'; b.setAttribute('data-k', x[0]); b.innerHTML = ICON[x[2]] + '<span>' + x[1] + '</span>'; ks.appendChild(b); });
      var hdr2 = $('.ko-header', kp); if (hdr2) ks.appendChild(hdr2);
      ph.appendChild(ks);
    }
  }
  function setK(k) {
    if (k) K = k;
    B.setAttribute('data-u3k', K);
    $$('.u3-ksub').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-k') === K); });
    var c = $('.u3-kmain>[data-u3k="' + K + '"]'), h = halfOf(c), hv = HALVES[K];
    if (h) seen[K + h] = 1;
    var nav = $('.u3-knav');
    if (nav) {
      nav.hidden = !hv;
      if (hv) {
        var first = h === hv[0][0], nb = $('.u3-knext', nav), bb = $('.u3-kback', nav);
        nb.hidden = !first; bb.hidden = first;
        nb.querySelector('span').textContent = 'Next: ' + hv[1][1]; bb.querySelector('span').textContent = 'Back to ' + hv[0][1];
      }
    }
    later('icons', iconize, 80);
    $$('.u3-pt-tab').forEach(function (t) { var cd = t.closest('.ko-card'), key = (cd.getAttribute('data-u3k') || '') + t.getAttribute('data-h'); t.classList.toggle('u3-todo', t.getAttribute('data-h') !== 'q' && t.getAttribute('data-h') !== 'a' && !seen[key]); });
  }
  function flipHalf(dir) {
    var hv = HALVES[K]; if (!hv) return;
    var c = $('.u3-kmain>[data-u3k="' + K + '"]'), i = halfOf(c) === hv[0][0] ? 0 : 1, j = i + dir; if (j < 0 || j > 1) return;
    setHalf(c, hv[j][0]); setK();
    var ph = $('#u3-ph'); W.scrollTo({ top: ph ? Math.max(0, ph.getBoundingClientRect().top + W.pageYOffset - 8) : 0, behavior: 'smooth' });
  }

  /* ---------- new project: chooser, manual card, validation bar, projects page title ---------- */
  function buildStage() {
    var app = D.getElementById('app-screen'); if (!app || $('#u3-chooser')) return;
    var first = app.firstChild;
    var head = el('div', 'u3-pagehead'); head.setAttribute('data-u3g', 'pagehead'); head.innerHTML = '<div><h1>Projects</h1><p class="u3-pcount"></p></div>';
    var ch = el('div', 'u3-chooser'); ch.id = 'u3-chooser'; ch.setAttribute('data-u3g', 'chooser');
    ch.innerHTML = '<h1>New project</h1><p>Drop the Gulfstream documents (RFS, WCR or Work Order Detail) and the project fills itself, or type the details yourself.</p>';
    var man = el('div', 'card u3-manual'); man.id = 'u3-manual'; man.setAttribute('data-u3g', 'manual');
    man.innerHTML = '<div class="card-head"><h2>Manual entry</h2></div><div class="card-body"><p>No documents yet? Type the aircraft and job details yourself. You get the same check window, every field empty.</p><button type="button" class="btn primary u3-manual-go">' + ICON.pen + 'Open the blank form</button></div>';
    var bar = el('div', 'u3-checkbar'); bar.id = 'u3-checkbar'; bar.setAttribute('data-u3g', 'checkbar');
    bar.innerHTML = '<button type="button" class="btn u3-back">Back</button><span>' + CHECK_MSG + '</span><button type="button" class="btn primary u3-validate">' + ICON.check + 'Validate and create project</button>';
    var hint = el('div', 'u3-hint'); hint.id = 'u3-hint'; hint.setAttribute('data-u3g', 'resulthint'); hint.innerHTML = 'Nothing generated yet. Click <b>Generate FAST Update table</b> to build the table and the email.';
    app.insertBefore(head, first); app.insertBefore(ch, first); app.appendChild(man); app.appendChild(bar); app.appendChild(hint);
    tagCards();
  }
  var enhanceBar = safe(function () {
    $$('#app-screen .eng-bar button').forEach(function (b) {
      var oc = b.getAttribute('onclick') || '';
      if (/openSubjectTemplateModal/.test(oc)) b.innerHTML = ICON.pen + 'Email subject format';
      else if (/openSignatureModal/.test(oc)) b.innerHTML = ICON.pen + 'My email signature';
      else if (b.id === 'btn-start-job') b.innerHTML = ICON.flag + 'Start Job without a project';
    });
    $$('#app-screen .proj-panel-head .btn.primary').forEach(function (b) { b.innerHTML = ICON.plus + 'New project'; b.setAttribute('onclick', 'U2.newProject()'); });
    $$('#app-screen .proj-panel-head h3').forEach(function (h) { if (!h.getAttribute('data-u3')) { h.setAttribute('data-u3', '1'); h.innerHTML = ICON.folder + 'My projects'; } });
  });

  /* ---------- project cards: every action gets a name ---------- */
  var enhanceRows = safe(function () {
    $$('#proj-list .proj-item').forEach(function (row) {
      if (row.getAttribute('data-u3')) return; row.setAttribute('data-u3', '1');
      var pid = '';
      $$('button', row).some(function (b) { var m = /\('([^']+)'\)/.exec(b.getAttribute('onclick') || ''); if (m) { pid = m[1]; return true; } return false; });
      if (pid) row.setAttribute('data-pid', pid);
      var firstBtn = null;
      $$('button', row).forEach(function (b) {
        var oc = b.getAttribute('onclick') || '', l = '', i = '';
        if (/koStartFromProject/.test(oc)) { l = 'Start Job'; i = 'flag'; } else if (/openTransferModal/.test(oc)) { l = 'Transfer to a colleague'; i = 'swap'; }
        else if (/deleteProjUI/.test(oc)) { l = 'Delete'; i = 'trash'; } else if (/leaveSharedProject/.test(oc)) { l = 'Leave project'; i = 'logout'; }
        if (l) { b.innerHTML = ICON[i] + '<span>' + l + '</span>'; b.classList.add('u3-ra'); if (!firstBtn) firstBtn = b; }
      });
      if (pid && firstBtn) {
        var o = el('button', 'btn primary u3-open'); o.type = 'button'; o.setAttribute('data-pid', pid); o.innerHTML = ICON.folder + '<span>Open project</span>';
        firstBtn.parentNode.insertBefore(o, firstBtn);
      }
    });
    sync();
  });

  /* ---------- Corridor tab: A · fill from the archives (work items → Resolution assistant), B · Corridor is down (existing hub) ---------- */
  function buildCorridor() {
    var app = D.getElementById('app-screen'); if (!app) return;
    var c = $('#u3-corridor');
    if (!c) { c = el('div', 'u3-corridor'); c.id = 'u3-corridor'; c.setAttribute('data-u3g', 'corridor'); app.appendChild(c); }
    var items = $$('#items-container .item-row').map(function (r, i) { var inp = $('input[type=text]', r); return { id: r.getAttribute('data-item-id') || '', n: i + 1, label: inp ? inp.value.trim() : '' }; });
    var cra = typeof W.craOpenItem === 'function';
    var rows = items.length ? items.map(function (it) {
      return '<div class="u3-crow"><b>SQ 2.' + it.n + '</b><span>' + esc(it.label || '(no description)') + '</span>' + (cra && it.id ? '<button type="button" class="btn u3-cra" data-id="' + esc(it.id) + '">' + ICON.pen + 'Resolution</button>' : '') + '</div>';
    }).join('') : '<p class="u3-muted">Add the work items in Daily update first.</p>';
    c.innerHTML = '<div class="card"><div class="card-head"><h2>A · Fill from the archives</h2></div><div class="card-body"><p>Pick a work item: the assistant searches the past squawks and writes the resolution text for you.</p><div class="u3-clist">' + rows + '</div></div></div>' +
      '<div class="card u3-cdown"><div class="card-head"><h2>B · Corridor is down</h2></div><div class="card-body"><p>Official worksheets, pre-filled from this job:<br><b>GAL.F.PLN.105</b> Line Maintenance Worksheet + CRS, one sheet per squawk<br><b>GAL.F.PLN.107</b> Continuation Worksheet, extra resolution lines<br><b>GAL.F.OPS.208</b> Manual Worksheet Register, every squawk of the job</p><button type="button" class="btn primary u3-hub">' + ICON.clip + 'Open the Corridor-down worksheets</button></div></div>';
  }

  /* ---------- keep header, titles and counters in step with the page ---------- */
  var sync = safe(function () {
    if (!B.classList.contains('u3-on')) return;
    var pol = $('#ko-polish-chk'), polL = pol && pol.closest('label'); if (polL && !polL.title) polL.title = txt(polL);       // created by the app after ui3 starts
    var ko = curView === 'start', p = ko ? ['ko_reg', 'ko_model', 'ko_wo', 'ko_sn', 'ko_icao'] : ['f_reg', 'f_model', 'f_wo', 'f_sn', 'f_loc'];
    var title = [val(p[0]), val(p[1])].filter(Boolean).join(' · ') || (SA ? 'Start Job' : 'New project');
    var wo = val(p[2]), sn = val(p[3]), loc = val(p[4]);
    var meta = [wo && ('WO ' + wo), sn && ('S/N ' + sn), loc].filter(Boolean).join(' · ') || 'No aircraft details yet';
    var ph = $('#u3-ph'); if (!ph) return;
    ph.hidden = P !== 'project';
    $('.u3-t', ph).textContent = title; $('.u3-ps', ph).textContent = meta;
    var tag = $('#proj-list .proj-item.active .tag-open, #proj-list .proj-item.active .tag-arch'), chip = $('.u3-chip', ph);
    chip.textContent = tag ? tag.textContent.trim() : ''; chip.hidden = !tag;
    var en = engineers(), el2 = $('.u3-engl', ph), sig = JSON.stringify(en);
    if (el2._sig !== sig) { el2._sig = sig; el2.innerHTML = en.length ? en.map(function (e) { return '<span class="u3-eng-chip"><b>' + esc(e[0]) + '</b> ' + e[1] + '</span>'; }).join('') : '<span class="u3-muted">none yet</span>'; }
    $$('.u3-tab', ph).forEach(function (b) { var on = b.getAttribute('data-t') === T; b.classList.toggle('on', on); b.setAttribute('aria-selected', on ? 'true' : 'false'); });
    $('.u3-subs', ph).hidden = !(P === 'project' && T === 'daily');
    var ksb = $('.u3-ksubs', ph); if (ksb) ksb.hidden = !(P === 'project' && T === 'start');
    var ol = $('.u3-olist'), oc = $('.u3-ocount');
    if (ol && oc && K === 'parts') {
      var names = $$('.ko-parts-tbl tbody tr').map(function (r) { var d = $('td:nth-child(2) textarea', r) || $('textarea', r); return d ? d.value.trim() : ''; }).filter(Boolean);
      var tot = $$('.ko-parts-tbl tbody tr').length;
      oc.textContent = tot + (tot === 1 ? ' line' : ' lines');
      ol.textContent = !tot ? 'Nothing in the order yet' : names.slice(0, 4).map(function (n) { return n.length > 26 ? n.slice(0, 25) + '…' : n; }).join(' · ') + (tot > 4 ? '  +' + (tot - 4) + ' more' : '');
    }
    var qc = D.getElementById('ko-quickparts-chips');
    if (qc) $$('button', qc).forEach(function (b) { if (!b.getAttribute('data-u3t')) { b.setAttribute('data-u3t', '1'); b.title = txt(b); } });
    var cnt = $('.u3-count'); if (cnt) { var nr = $$('.ko-parts-tbl tbody tr').length; cnt.textContent = nr + (nr === 1 ? ' line' : ' lines'); }
    $$('.u3-sub', ph).forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-s') === S); });
    var x = $('.u3-xfer', ph); x.disabled = !activeProjectId(); x.title = x.disabled ? 'Open or save a project first' : ''; var rb = D.getElementById('btn-mark-rts'); if (rb) { rb.disabled = x.disabled; if (x.disabled) rb.title = x.title; else rb.removeAttribute('title'); }   // nothing to mark without a project
    var uh = $('[data-u3g="upload"] .card-head h2');                       // Step 1 reads "Automatic import" while creating a project
    if (uh) { if (!uh._o) uh._o = uh.textContent; var want = P === 'new' ? 'Automatic import · RFS, WCR or Work Order Detail' : uh._o; if (uh.textContent !== want) uh.textContent = want; }
    var hn = $('#u3-hint'); if (hn) hn.hidden = vis($('#output-section'));
    var cm = $('.u3-checkbar span'); if (cm && cm.classList.contains('u3-warn') && canSave()) { cm.textContent = CHECK_MSG; cm.classList.remove('u3-warn'); }
    var n = $$('#proj-list .proj-item').length, pc = $('.u3-pcount');
    if (pc) pc.textContent = n ? n + (n > 1 ? ' projects' : ' project') + ' in this list' : 'No project yet. Create one with “New project”.';
    var np = $('#u2-n-proj'); if (np) np.textContent = n || '';
    B.style.setProperty('--u2-crumb', JSON.stringify(P === 'projects' ? 'Projects' : (P === 'new' || P === 'check') ? 'Projects / New project' : 'Projects / ' + title));
    if (P === 'project' && T === 'corridor' && vis($('#u3-corridor'))) { var s2 = JSON.stringify($$('#items-container .item-row').map(function (r) { var i = $('input[type=text]', r); return i ? i.value : ''; })); if (B._cs !== s2) { B._cs = s2; buildCorridor(); } }
  });

  /* ---------- actions ---------- */
  /* loadProject() ends with its own smooth scroll (towards the first card of the old single page): in ui3 it left the project title and tabs hidden under the top bar */
  function hookLoad() {
    var f = W.loadProject; if (typeof f !== 'function' || f._u3) return;
    W.loadProject = function () { var r = f.apply(this, arguments); Promise.resolve(r).then(function () { if (B.classList.contains('u3-on')) W.scrollTo({ top: 0, left: 0, behavior: 'instant' }); }); return r; };
    W.loadProject._u3 = 1;
  }
  (function () { var n = 0, iv = setInterval(function () { hookLoad(); if ((W.loadProject && W.loadProject._u3) || ++n > 80) clearInterval(iv); }, 400); })();   // the app defines loadProject after ui3 starts
  function whenSaved(fn) {
    var n = 0;
    (function wait() { var bd = D.getElementById('sync-badge'); if (!(bd && /sync-pending/.test(bd.className)) || ++n > 30) fn(); else setTimeout(wait, 200); })();
  }
  function tab(t) {
    if (t === 'amm') { ammUnlock(function () { call('koOpenAmmReader'); }); return; }   // opens the AMM reader window (the code first, if it is still locked)
    if (t === 'ga') { call('openRepairTagModal'); return; }
    if (t === 'start') {
      if (SA && curView === 'start') return;                          // already in "Start Job without a project": reloading would wipe what was typed
      var id = activeProjectId();
      setState('project', 'start');
      // koStartFromProject reloads the project from the database: wait for any pending save first, so a field edited a moment ago is never overwritten
      if (id && W.koStartFromProject) whenSaved(function () { W.koStartFromProject(id); });
      else { call('openKickoff'); Object.keys(KO_SYNC).forEach(pushToKo); }
      return;
    }
    backToApp(); setState('project', t);
    if (t === 'corridor') buildCorridor();
  }
  function canSave() { return !!(val('f_wo') || val('f_model') || val('f_sn')); }          // the app creates a project as soon as one of these is filled
  function validate() {
    var m = $('.u3-checkbar span');
    if (!canSave()) { if (m) { m.textContent = 'Enter at least the work order, the model or the serial number to create the project.'; m.classList.add('u3-warn'); } return; }
    var b = $('.u3-validate'); if (b) b.disabled = true;
    call('autosave');
    var n = 0, iv = setInterval(function () {
      n++; if (/synced/i.test(txt($('#sync-badge'))) || n > 40) { clearInterval(iv); if (b) b.disabled = false; setState('projects'); }
    }, 300);
  }
  W.U2 = {
    home: function () { backToApp(); setState('projects'); },
    newProject: function () { backToApp(); call('newProject'); setState('new'); },
    tab: function (t) { if (t === 'start') tab('start'); else { backToApp(); setState('project', 'details'); } },
    tools: function () { var s = $('.u2-side'); if (s) s.classList.toggle('tools-open'); },
    preview: function () { }
  };

  var fixBtn = safe(function (b) {
    if (!b || $('svg', b)) return;
    var h = b.innerHTML.replace(/^\s+/, ''), m = /^([^\w<]+)/.exec(h); if (!m) return;
    var emo = m[1].replace(/\uFE0F/g, '').trim(), key = EMO[emo] || (emo.indexOf('\u{1F91D}') === 0 ? 'users' : '');
    if (!key || !ICON[key]) return;
    b.innerHTML = ICON[key] + h.slice(m[1].length);
  });
  function keepIcons() {
    ['btn-mark-rts', 'btn-reply-sync'].forEach(function (id) {
      var b = D.getElementById(id); if (!b) return; fixBtn(b);
      new MutationObserver(function () { fixBtn(b); }).observe(b, { childList: true, characterData: true, subtree: true });
    });
  }
  /* the bottom of the Drafts column (status line, "Polish the wording" option, green button) stays together and always in view */
  function buildFoot() {
    var gen = $('#ko-gen-btn'); if (!gen || $('.u3-kfoot')) return;
    var foot = el('div', 'u3-kfoot'), st = $('#ko-status'), chk = $('#ko-polish-chk'), lab = chk && chk.closest('label'), rep = $('#ko-polish-report');
    gen.parentNode.insertBefore(foot, st || lab || gen);
    [st, lab, rep, gen].forEach(function (n) { if (n && n.parentNode) foot.appendChild(n); });
  }

  function init() {
    buildHeader(); buildStage(); buildStart(); buildFoot(); setK(); tagCards(); markDups(); enhanceBar(); enhanceRows(); iconize(); keepIcons();
    var mo = new MutationObserver(setView);
    ['login-screen', 'app-screen', 'kickoff-panel'].forEach(function (id) { var e = D.getElementById(id); if (e) mo.observe(e, { attributes: true, attributeFilter: ['style', 'class'] }); });
    var pl = D.getElementById('proj-list'); if (pl) new MutationObserver(function () { enhanceRows(); enhanceBar(); }).observe(pl, { childList: true });
    var st = D.getElementById('status');                                  // PDF read finished → show the check window
    if (st) new MutationObserver(function () { if (P === 'new' && /s-done/.test(st.className)) setState('check'); }).observe(st, { attributes: true, attributeFilter: ['class'] });
    var app = D.getElementById('app-screen'); if (app) new MutationObserver(tagCards).observe(app, { childList: true });
    var kpn = D.getElementById('kickoff-panel'); if (kpn) new MutationObserver(function () { later('icons-ko', iconize, 150); later('sync-ko', sync, 80); }).observe(kpn, { childList: true, subtree: true, characterData: true });   // chips the app redraws get their icon back

    D.addEventListener('click', safe(function (e) {
      var t = e.target, b; if (!t || !t.closest) return;
      if ((b = t.closest('.u3-kside .ko-draft-row')) && K !== 'drafts' && !t.closest('input,label,button')) {      // preview & edit: roomy page instead of the narrow column
        var dm = /koToggleDraftPreview\('(\w+)'\)/.exec(b.getAttribute('onclick') || '');
        if (dm) later('draft-open', function () { var pn = $('#ko-prev-panel-' + dm[1]); if (pn && pn.style.display !== 'none') { setK('drafts'); pn.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } }, 60);   // only once the app has really opened it
        return;
      }
      var amb = t.closest('[onclick*="koOpenAmmReader"]');                 // every way into the AMM reader (menu, "Read an AMM card" buttons, template window): the code first
      if (amb && ammLocked()) { e.preventDefault(); e.stopPropagation(); ammUnlock(function () { var sd0 = $('.u2-side'); if (sd0) sd0.classList.remove('tools-open'); call('koOpenAmmReader', /'template'/.test(amb.getAttribute('onclick') || '') ? 'template' : undefined); }); return; }
      if (!t.closest('.u2-side')) { var sd = $('.u2-side'); if (sd) sd.classList.remove('tools-open'); }                // tap outside: close the Tools list
      else if (t.closest('.u2-grp .u2-i')) { var sd2 = $('.u2-side'); if (sd2) sd2.classList.remove('tools-open'); }       // entry chosen: close it
      if (t.closest('#btn-start-job')) { SA = true; B.setAttribute('data-u3sa', '1'); setK('job'); return; }     // the app opens the panel; its aircraft fields (on the Job page) stay visible in this mode
      if ((b = t.closest('.u3-open'))) { call('loadProject', b.getAttribute('data-pid')); setState('project', 'details'); e.stopPropagation(); return; }
      if ((b = t.closest('.u3-tab'))) { tab(b.getAttribute('data-t')); return; }
      if ((b = t.closest('.u3-sub'))) { setState(null, null, b.getAttribute('data-s'), true); return; }
      if (t.closest('.u3-xfer')) { var id = activeProjectId(); if (id) call('openTransferModal', id); return; }
      if ((b = t.closest('.u3-ksub'))) { var kk = b.getAttribute('data-k'); if (HALVES[kk]) setHalf($('.u3-kmain>[data-u3k="' + kk + '"]'), HALVES[kk][0][0]); setK(kk); return; }
      if ((b = t.closest('.u3-pt-tab'))) { setHalf(b.closest('.ko-card'), b.getAttribute('data-h')); setK(); return; }
      if (t.closest('.u3-ogo')) { var oh = $('.u3-pwh'); if (oh) oh.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
      if (t.closest('.u3-odraft')) { setK('drafts'); W.scrollTo({ top: 0, behavior: 'smooth' }); return; }
      if (t.closest('.u3-knext')) { flipHalf(1); return; }
      if (t.closest('.u3-kback')) { flipHalf(-1); return; }
      if ((b = t.closest('.u3-pwtab'))) { var cd = b.closest('.ko-card'); cd.setAttribute('data-u3pane', b.getAttribute('data-p')); $$('.u3-pwtab', cd).forEach(function (x) { x.classList.toggle('on', x === b); }); return; }
      if ((b = t.closest('.u3-qcat'))) { $$('.u3-qcat').forEach(function (x) { x.classList.toggle('on', x === b); }); applyQuickCat(b.getAttribute('data-cat')); return; }
      if (t.closest('.u3-validate')) { validate(); return; }
      if (t.closest('.u3-manual-go')) { setState('check'); return; }
      if (t.closest('.u3-back')) { setState('new'); return; }
      if (t.closest('.u3-godetails')) { tab('details'); return; }
      if ((b = t.closest('.u3-cra'))) { call('craOpenItem', b.getAttribute('data-id')); return; }
      if (t.closest('.u3-hub')) { call('openCorridorHub'); return; }
      var row = t.closest('.proj-item');
      if (row) { var btn = t.closest('button'); if (!btn && !/Transferred/i.test(row.textContent)) setState('project', 'details'); return; }
      if (t.closest('.action-row button[onclick*="generate"]')) setState(null, null, 'result', true);
    }), true);
    var upd = safe(function (e) { var id = e && e.target && e.target.id; if (id && KO_SYNC[id]) pushToKo(id); sync(); });
    D.addEventListener('input', upd, true); D.addEventListener('change', upd, true);
    setInterval(function () { if (B.classList.contains('u3-on')) sync(); }, 1500);
    setView(); setState(null, null, null, true);
  }
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', init); else init();
})();