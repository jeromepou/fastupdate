/* ops-launcher.js — ouvre l'Ops board (ops-board.html) depuis l'app, sans rien ajouter d'autre à index.html.
 * À charger dans index.html :  <script src="ops-launcher.js"></script>
 * Appelé par openOps() (Bloc 6) avec { getState, saveState, roster, verdict, scanRfs }.
 * Le board (iframe de même origine) lit window.OPS_HOOKS. Barre du haut : ← Menu / Back Office / ✕ (comme dans le Back Office).
 * Bouton « Start » d'un job : ouvre ton écran Start Job prérempli, « préparé pour un collègue » coché et verrouillé. */
(function () {
  const setv = (id, v) => {
    const e = document.getElementById(id);
    if (!e) return;
    e.value = v == null ? '' : v;
    e.dispatchEvent(new Event('input', { bubbles: true }));
    e.dispatchEvent(new Event('change', { bubbles: true }));
  };

  // Engineer names in the team list look like "WIELAND Kevin": match on both words.
  function selectColleague(fullName) {
    const sel = document.getElementById('ko_colleague_name');
    if (!sel || !fullName) return;
    const words = fullName.toLowerCase().split(/\s+/);
    const opt = [...sel.options].find(o => words.every(w => o.text.toLowerCase().includes(w)));
    if (opt) { sel.value = opt.value; sel.dispatchEvent(new Event('change', { bubbles: true })); }
  }

  let overlay = null;
  function closeBoard() { if (overlay) { overlay.remove(); overlay = null; } }

  window.openOpsBoard = async function (deps) {
    deps = deps || {};
    const G = window.G || {};
    let state = null;
    try { state = deps.getState ? await deps.getState() : null; } catch (e) { console.warn('Ops board: state not loaded', e); }

    // The board (same-origin iframe) reads this object from its parent window.
    window.OPS_HOOKS = {
      state,                                  // last saved { D, H, CX, OPS, imp }, or null = empty board
      roster: deps.roster,                    // { KW: 'Kevin Wieland · Zurich', ... } engineers only
      verdict: deps.verdict || window.koApprovalVerdict, // your approval check, used instead of the embedded copy
      scanRfs: deps.scanRfs,                  // optional: async file => parsed RFS object (see note below)
      save: deps.saveState,                   // st => persist the board state (called after each change)
      pdfjsUrl: deps.pdfjsUrl || './pdfjs/pdf.min.js',
      pdfjsWorker: deps.pdfjsWorker || './pdfjs/pdf.worker.min.js',

      // "Start" button on a job: open YOUR Start Job screen, prefilled, with "preparing for a colleague" ticked and locked.
      startJob: async function (job) {
        closeBoard();
        await G.openKickoff(job.id);
        setv('ko_model', job.model);
        setv('ko_sn', job.sn);
        setv('ko_reg', job.reg);
        setv('ko_wo', job.id);
        setv('ko_cust_name', job.customer);
        setv('ko_defect', (job.sq[0] || {}).t || '');
        const toggle = document.getElementById('ko-colleague-toggle');
        if (toggle) {
          toggle.checked = true;
          if (G.koToggleColleague) G.koToggleColleague(true);
          toggle.disabled = true;               // always ticked when Ops start a job
        }
        selectColleague(job.colleagueName);
        if (G.koUpdatePreview) G.koUpdatePreview();
        if (G.koCheckCountryApprovalKo) G.koCheckCountryApprovalKo();
      }
    };

    closeBoard();
    overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;background:#fff;display:flex;flex-direction:column';
    const B = 'border:0;border-radius:10px;padding:8px 13px;font:600 13px system-ui,-apple-system,sans-serif;color:#fff;background:rgba(255,255,255,.16);cursor:pointer;white-space:nowrap';
    overlay.innerHTML =                                  // barre du haut, comme dans le Back Office : on peut toujours revenir au menu principal
      '<div style="flex:none;display:flex;align-items:center;gap:8px;padding:calc(8px + env(safe-area-inset-top,0px)) 12px 8px;background:linear-gradient(120deg,#1e1b4b,#312e81 60%,#4338ca);color:#fff;font-family:system-ui,-apple-system,sans-serif">' +
        '<button type="button" data-x="close" style="' + B + '">← Menu</button>' +
        '<b style="flex:1;font-size:15px;white-space:nowrap">Ops board</b>' +
        '<button type="button" data-x="bo" style="' + B + '">🗂 Back Office</button>' +
        '<button type="button" data-x="close" aria-label="Close the Ops board" style="' + B + '">✕</button></div>' +
      '<iframe src="ops-board.html" style="border:0;width:100%;flex:1;min-height:0"></iframe>';
    overlay.addEventListener('click', e => { const t = e.target.closest('[data-x]'); if (!t) return; closeBoard(); if (t.dataset.x === 'bo' && typeof window.openBackOffice === 'function') window.openBackOffice(); });
    document.body.appendChild(overlay);
  };
})();
