/* ops-launcher.js
 * Opens the Ops board (ops-board.html) from your app WITHOUT adding anything to index.html.
 *
 * 1) Put ops-board.html and this file next to index.html (same origin).
 * 2) Load it after your main script:  <script src="ops-launcher.js"></script>
 * 3) In the Ops tab, add one button that calls openOpsBoard({...}) (example at the bottom).
 *
 * Ops only use the Start Job module of the Engineer app (no Daily Update, AMM reader, GA3671...).
 * The board calls your existing Start Job screen through the startJob hook below.
 * Field ids (ko_*) come from your koStartFromProject(): adjust them here if one differs.
 */
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
    overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;background:#fff';
    overlay.innerHTML =
      '<iframe src="ops-board.html" style="border:0;width:100%;height:100%"></iframe>' +
      '<button style="position:absolute;left:12px;bottom:calc(12px + env(safe-area-inset-bottom,0px));z-index:2;padding:6px 12px;border-radius:10px;border:1px solid #bbb;background:#fff;font:inherit">✕ Close board</button>';
    overlay.querySelector('button').onclick = closeBoard;
    document.body.appendChild(overlay);
  };
})();

/* ---------------------------------------------------------------------------------------------
 * Example, to put in your module where db / ref / get / set are in scope, called by the Ops tab button:
 *
 *   async function openOps() {
 *     openOpsBoard({
 *       getState:  async () => { const s = await get(ref(db, 'opsBoard/state')); return s.exists() ? JSON.parse(s.val().json) : null; },
 *       saveState: st => set(ref(db, 'opsBoard/state'), { json: JSON.stringify(st), at: Date.now() }),
 *       roster:    { KW: 'Kevin Wieland · Zurich' },   // build it from teamPublic (role === 'engineer'): initials -> "Name · homeBase"
 *       verdict:   koApprovalVerdict                    // pass your own function
 *     });
 *   }
 *
 * Database rules to add (ops and admins only). The state is stored as a JSON string because
 * keys such as "FA33681#5" are not allowed in the Realtime Database:
 *
 *   "opsBoard": {
 *     ".read":  "auth != null && (root.child('admins').child(auth.uid).exists() || root.child('team').child(auth.uid).child('role').val() === 'ops')",
 *     ".write": "auth != null && (root.child('admins').child(auth.uid).exists() || root.child('team').child(auth.uid).child('role').val() === 'ops')"
 *   }
 *
 * RFS scan: G.extractPDF() reads the file chosen in the Engineer screen and fills its form. To reuse it for Ops,
 * move the part that produces `parsed` into a function scanRfsFile(file) -> parsed and pass it as `scanRfs`.
 * --------------------------------------------------------------------------------------------- */
