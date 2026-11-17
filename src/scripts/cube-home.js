// Cube-logo de la page d'accueil : géométrie 3D maison en SVG, timeline GSAP pilotée par le scroll, Lenis.
// Porté depuis le prototype cube-gsap (v23).
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '@/lib/gsap';
(() => {
  const A = 86.6025; // cos30 * 100
  const V = { T: [0, -100], UR: [A, -50], LR: [A, 50], B: [0, 100], LL: [-A, 50], UL: [-A, -50], C: [0, 0] };
  const pt = (p) => p.join(" ");
  const poly = (...ks) => ks.map((k) => pt(V[k])).join(" ");
  const add = (p, d, s) => [p[0] + d[0] * s, p[1] + d[1] * s];
  // face matrices: local square 0..100, u to the right, v down (top: v toward the viewer)
  const M = {
    site: "matrix(.866025 .5 0 1 -86.6025 -50)",
    outils: "matrix(.866025 -.5 0 1 0 0)",
    ia: "matrix(.866025 -.5 .866025 .5 -86.6025 -50)",
  };
  const P = (cls, d) => `<path class="${cls}" pathLength="1" d="${d}"/>`;
  const R = (cls, x, y, w, h, r = 0) => `<rect class="${cls}" pathLength="1" x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/>`;
  const Ci = (cls, cx, cy, r) => `<circle class="${cls}" pathLength="1" cx="${cx}" cy="${cy}" r="${r}"/>`;
  const T = (x, y, s, extra = "") => `<text class="txt" x="${x}" y="${y}"${extra}>${s}</text>`;

  // Face 01, site web : une carte de visite pop-up. La face est le dos de la carte ; le rabat s'ouvre vers
  // l'avant et la façade, le téléphone et les avis se dressent en papier découpé (voir POPUP plus bas)
  const site = "";

  // Face 02, outils internes : la fiche papier devient un tableau de suivi qui tourne tout seul
  const outils = "";

  // Face 03, IA : vos documents d'un côté, la réponse au client de l'autre
  const ia = "";

  // drafting lines around the cube (hero only)
  const up = [0, -1], dn = [0, 1], ul = [-.866025, -.5], ur = [.866025, -.5], dl = [-.866025, .5], dr = [.866025, .5];
  const CONS = [
    [V.T, up, 150], [V.T, ul, 150], [V.T, ur, 170], [V.UR, ur, 140], [V.UR, up, 110], [V.LR, ur, 170], [V.LR, dn, 120],
    [V.B, dn, 150], [V.B, dl, 140], [V.B, dr, 180], [V.LL, dn, 110], [V.UL, up, 120], [V.UL, ul, 110],
  ];
  const cons = CONS.map(([p, d, s], i) => `<path class="cons cons-in" style="animation-delay:${(i * 70)}ms, ${(i * 70)}ms" d="M${pt(add(p, d, 14))}L${pt(add(p, d, s))}"/>`).join("");
  const nodes = "";
  // points that run outward along every drafting line and fade out on arrival (none stays on screen)
  const travel = CONS.flatMap(([p, d, s], i) => {
    const path = `M${pt(add(p, d, 14))}L${pt(add(p, d, s))}`;
    const dur = (3.2 + ((i * 7) % 5) * .45).toFixed(2);
    const runs = s >= 150 ? 2 : 1;
    return Array.from({ length: runs }, (_, r) => {
      const begin = ((i * .61 + r * dur / 2) % 5).toFixed(2);
      return `<circle class="node" r="2.2" opacity="0"><animateMotion dur="${dur}s" begin="${begin}s" repeatCount="indefinite" path="${path}" calcMode="spline" keyPoints="0;1" keyTimes="0;1" keySplines=".4 0 .2 1"/><animate attributeName="opacity" values="0;.9;.9;0" keyTimes="0;.12;.78;1" dur="${dur}s" begin="${begin}s" repeatCount="indefinite"/></circle>`;
    });
  }).join("");
  const hexD = `M${poly("T", "UR", "LR", "B", "LL", "UL")}Z`;
  const ripples = [0, 1, 2].map(() => `<path class="ripple" d="${hexD}"/>`).join("");
  const miniCube = (x, y, r) => { const a = r * .866025; return `<g class="mini-g"><path class="mini" d="M${x} ${y - r}L${x + a} ${y - r / 2}V${y + r / 2}L${x} ${y + r}L${x - a} ${y + r / 2}V${y - r / 2}Z M${x} ${y}L${x - a} ${y - r / 2}M${x} ${y}L${x + a} ${y - r / 2}M${x} ${y}V${y + r}"/></g>`; };
  const minis = miniCube(-150, -175, 13) + miniCube(225, -120, 10) + miniCube(185, 205, 15);
  const callout = (from, mid, end, label, sub, anchor) => `<path class="call" d="M${pt(from)}L${pt(mid)}L${pt(end)}"/><circle class="call-dot" cx="${from[0]}" cy="${from[1]}" r="3.2"/><text class="call-txt" x="${end[0] + (anchor === "end" ? -6 : 6)}" y="${end[1] + 4}" text-anchor="${anchor}">${label}</text><text class="call-sub" x="${end[0] + (anchor === "end" ? -6 : 6)}" y="${end[1] + 15}" text-anchor="${anchor}">${sub}</text>`;
  const callouts =
    callout([-43.3, 40], [-80, 120], [-100, 120], "01 · SITE WEB", "votre vitrine", "end") +
    callout([43.3, 40], [80, 120], [100, 120], "02 · OUTILS INTERNES", "votre organisation", "start") +
    callout([20, -50], [55, -140], [70, -140], "03 · IA", "votre savoir, au travail", "start");


  // background drafting layers for the parallax (two depths)
  const bgLayer = (id, items) => { document.getElementById(id).innerHTML = `<svg viewBox="0 0 1000 1900" preserveAspectRatio="xMidYMin slice">${items}</svg>`; };
  const mc = (x, y, r) => { const a = r * .866025; return `<path class="mini" d="M${x} ${y - r}L${x + a} ${y - r / 2}V${y + r / 2}L${x} ${y + r}L${x - a} ${y + r / 2}V${y - r / 2}Z M${x} ${y}L${x - a} ${y - r / 2}M${x} ${y}L${x + a} ${y - r / 2}M${x} ${y}V${y + r}"/>`; };
  const ln = (x, y, dx, dy, l) => `<path class="cons-bg" d="M${x} ${y}l${dx * l} ${dy * l}"/>`;
  bgLayer("far", [ln(0, 900, .866, -.5, 260), ln(1000, 1300, -.866, -.5, 300), ln(140, 1700, .866, .5, 200)].join(""));
  bgLayer("near", [ln(985, 600, 0, 1, 240), ln(70, 1180, .866, -.5, 180)].join(""));
  // ───────────────────────── 3D cube, rendered every scroll frame ─────────────────────────
  const ISO_PITCH = 35.264; // regular hexagon: exactly the logo
  const STATES_DESK = {
    hero:   { x: .68, y: .53, s: 1,    yaw: 45,  pitch: ISO_PITCH, site: 0, outils: 0, ia: 0, hero: 1, fin: 0 },
    site:   { x: .29, y: .5, s: 1.06, yaw: 112, pitch: 28, site: 1, outils: 0, ia: 0, hero: 0, fin: 0 },
    outils: { x: .71, y: .53, s: 1.06, yaw: -22, pitch: 20, site: 0, outils: 1, ia: 0, hero: 0, fin: 0 },
    ia:     { x: .29, y: .55, s: 1.04, yaw: 45,  pitch: 56, site: 0, outils: 0, ia: 1, hero: 0, fin: 0 },
    final:  { x: .5,  y: .26, s: .7,   yaw: 405, pitch: ISO_PITCH, site: 1, outils: 1, ia: 1, hero: 0, fin: 1 },
  };
  const STATES_MOB = {
    hero:   { ...STATES_DESK.hero, x: .5, y: .27, s: 1.12 },
    site:   { ...STATES_DESK.site, x: .52, y: .26, s: 1.22 },
    outils: { ...STATES_DESK.outils, x: .48, y: .26, s: 1.22 },
    ia:     { ...STATES_DESK.ia, x: .5, y: .27, s: 1.18 },
    final:  { ...STATES_DESK.final, x: .5, y: .24, s: .98 },
  };
  const S = { ...STATES_DESK.hero };

  // cube corners (half-size 1) and faces; each illustrated face carries its local frame (origin, u, v over 100 units)
  const C8 = [[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]];
  const FACES = [
    { id: "site",   n: [-1, 0, 0], q: [7, 4, 0, 3], o: [-1, 1, 1],  u: [0, -2, 0], v: [0, 0, -2] },
    { id: "outils", n: [0, -1, 0], q: [4, 5, 1, 0], o: [-1, -1, 1], u: [2, 0, 0],  v: [0, 0, -2] },
    { id: "ia",     n: [0, 0, 1],  q: [7, 6, 5, 4], o: [-1, 1, 1],  u: [2, 0, 0],  v: [0, -2, 0], ro: [1, 1, 1], ru: [0, -2, 0], rv: [-2, 0, 0] },
    { id: "east",   n: [1, 0, 0],  q: [5, 6, 2, 1] },
    { id: "north",  n: [0, 1, 0],  q: [6, 7, 3, 2] },
    { id: "bottom", n: [0, 0, -1], q: [0, 1, 2, 3] },
  ];
  const EDGES = []; // [a, b, faceA, faceB]
  FACES.forEach((f, fi) => f.q.forEach((a, i) => { const b = f.q[(i + 1) % 4]; const e = EDGES.find((x) => (x[0] === b && x[1] === a)); if (e) e[3] = fi; else EDGES.push([a, b, fi, -1]); }));

  const NS = "http://www.w3.org/2000/svg";
  const el = (tag, attrs = {}, parent) => { const n = document.createElementNS(NS, tag); for (const k in attrs) n.setAttribute(k, attrs[k]); parent && parent.appendChild(n); return n; };
  const stage = document.getElementById("stage");
  const svg = el("svg", { class: "cube", "data-face": "hero", "aria-hidden": "true" }, stage);
  // floor grid in the cube's own 3D space (same yaw/pitch as the drawings), fading out radially around the cube
  const defs = el("defs", {}, svg);
  const gridGrad = el("radialGradient", { id: "gridFade", gradientUnits: "userSpaceOnUse" }, defs);
  [[0, 1], [.35, .8], [.7, .3], [1, 0]].forEach(([o, a]) => el("stop", { offset: o, "stop-color": "#fff", "stop-opacity": a }, gridGrad));
  const gridMask = el("mask", { id: "gridMask", maskUnits: "userSpaceOnUse", x: -5000, y: -5000, width: 10000, height: 10000 }, defs);
  el("rect", { x: -5000, y: -5000, width: 10000, height: 10000, fill: "url(#gridFade)" }, gridMask);
  const gridL = el("g", { class: "floor-grid", mask: "url(#gridMask)" }, svg);
  const gridPath = el("path", { class: "grid-line" }, gridL), gridDots = el("path", { class: "grid-dot" }, gridL);
  const heroG = el("g", { class: "hero-only" }, svg);
  heroG.innerHTML = callouts;
  const ringL = el("g", { class: "ring" }, svg);
  // hero: cube outlines growing from the cube's base, square to the grid
  const rippleL = el("g", { class: "ripples3d" }, svg);
  const RIP = [0, 1, 2].map(() => el("path", { class: "ripple3d" }, rippleL));
  // pulses running along the grid lines from the foot of the cube, turning once, fading on arrival
  const PULSES = Array.from({ length: 16 }, () => ({ trail: el("path", { class: "pulse-trail" }, gridL), dot: el("circle", { class: "pulse-dot", r: 2.3 }, gridL) }));
  let projNow = null, heroNow = 1;
  const backL = el("g", {}, svg), illL = el("g", {}, svg), edgeL = el("g", {}, svg), popL = el("g", {}, svg), annL = el("g", { class: "ann" }, svg);
  const ringPath = el("path", { class: "ring-line" }, ringL), ringTicks = el("path", { class: "ring-tick" }, ringL), ringMajor = el("path", { class: "ring-major" }, ringL);
  const ringMark = el("circle", { class: "ring-mark", r: 3.2 }, ringL);
  // blueprint annotations per offer face: two callouts (u, v on the face) + one dimension line on the lower edge
  // blueprint annotations per offer face: leader lines from a point of the drawing (u, v on the face) to a label
  // on the outer side of the cube, plus one dimension line on an edge
  const ANN = {
    site:   { calls: [[90.6, 11.3, "PRENDRE RDV", "sur chaque page", 11.2], [90, 23.2, "VOTRE ATELIER", "vos photos, vos chantiers", 11.2], [31.5, 60.2, "VOS SERVICES", "clairs et détaillés", 11.2]], cote: "" },
    outils: { calls: [[90, 33, "AUTOMATISATIONS", "relances envoyées seules", 11.2], [34, 40, "PLANNING", "partagé avec l'équipe", 11.2], [70, 16, "TABLEAU DE BORD", "vos chiffres, sans ressaisie", 11.2]], cote: "" },
    ia:     { calls: [[20, 30, "VOS DOCUMENTS", "tarifs, CGV, FAQ, planning", 11.2], [92, 40, "RÉPONSE PRÊTE", "avec ses sources", 11.2], [88, 64, "VOUS VALIDEZ", "rien ne part sans vous", 11.2]], cote: "" },
  };
  const annEl = {};
  for (const id in ANN) {
    const g = el("g", { class: "ann-face" }, annL);
    const calls = ANN[id].calls.map(([, , title, sub]) => {
      const line = el("path", { class: "ann-line" }, g);
      const dot = el("circle", { class: "ann-dot", r: 3.2 }, g);
      const end = el("circle", { class: "ann-end", r: 1.6 }, g);
      const t1 = Object.assign(el("text", { class: "ann-txt" }, g), { textContent: title });
      const t2 = Object.assign(el("text", { class: "ann-sub" }, g), { textContent: sub });
      return { line, dot, end, t1, t2 };
    });
    const cote = { path: el("path", { class: "ann-cote" }, g), text: Object.assign(el("text", { class: "ann-cote-txt", "text-anchor": "middle" }, g), { textContent: ANN[id].cote }) };
    annEl[id] = { g, calls, cote };
  }
  const facePoly = FACES.map((f) => el("polygon", { class: "face" }, backL));
  const ART = { site, outils, ia };

  // blocks that come OUT of a face once it has settled: footprint (u, v, w, h) on the face, height z and
  // thickness t in face units (100 = face side), drawing in block units (0..w, 0..h)
  const rT = (x, y, str, cls = "rtx", extra = "") => `<text class="${cls}" x="${x}" y="${y}"${extra}>${str}</text>`;
  const rP = (cls, d) => `<path class="${cls}" d="${d}"/>`;
  const rR = (cls, x, y, w, h, r = 0) => `<rect class="${cls}" x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/>`;
  const card = (title, icon) => rR("rl", 3, 3, 7, 7, 1.2) + icon + rT(3, 14.5, title, "rtx-s") + rP("rl", "M3 17.6H21M3 20H17");
  const starD = (cx, cy, r) => { let d = ""; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * .45 : r; d += (i ? "L" : "M") + (cx + Math.cos(a) * rr).toFixed(2) + " " + (cy + Math.sin(a) * rr).toFixed(2); } return d + "Z"; };
  const RELIEF0 = {
    site: [
      { u: 4, v: 13, w: 92, h: 8, z: 4, t: 1.6, art: rR("rf-ink", 3, 2.4, 3.2, 3.2, .6) + rT(7.6, 5.3, "DURAND", "rtx-b") + rP("rl", "M50 4H58M63 4H71M76 4H84") + rR("rl-sage", 86.5, 2.3, 3.4, 3.4, 1.7) },
      { u: 5, v: 25, w: 50, h: 32, z: 7, t: 1.8, art: rT(4, 9, "Votre savoir-faire,", "rtx-h") + rT(4, 15.5, "enfin visible.", "rtx-h") + rP("rl", "M4 21H40M4 24H34") },
      { u: 59, v: 25, w: 36, h: 32, z: 12, t: 2.4, art: rR("rf-bar", 3, 3, 30, 26, 1.5) + rP("rl", "M3 26L13 15L19 21L24 16L33 25") + `<circle class="rl" cx="25" cy="9.5" r="3"/>` },
      { u: 8, v: 46, w: 25, h: 7.5, z: 18, t: 3, sage: 1, art: rT(12.5, 4.9, "PRENDRE RDV", "rtx-btn", ' text-anchor="middle"') },
      { u: 5, v: 62, w: 28, h: 26, z: 6, t: 1.6, art: card("Menuiserie", rP("rl", "M4.5 8.5L8.5 4.5M5 4.5h3.5v3.5")) },
      { u: 36, v: 62, w: 28, h: 26, z: 8, t: 1.6, art: card("Agencement", rP("rl", "M4.5 8.5V5.5H8.5V8.5M4.5 7H8.5")) },
      { u: 67, v: 62, w: 28, h: 26, z: 10, t: 1.6, art: card("Sur mesure", rP("rl", "M4.5 8.5h4M5.5 8.5V4.5M7.5 8.5V6")) },
    ],
  };
  const REDUCE = matchMedia("(prefers-reduced-motion: reduce)").matches;
  // pop-up card on the site face: the flap opens from the face's lower edge (spine) towards the viewer;
  // each piece stands parallel to the face at depth d from it (parallel fold), height h, with a top tab back to the face
  const POPUP = {
    site: {
      flap: 74,
      cover: rR("rl", 6, 6, 88, 62, 2) + rT(50, 32, "ATELIER DURAND", "rtx-cv", ' text-anchor="middle"') + rT(50, 40, "menuiserie · agencement", "rtx-cs", ' text-anchor="middle"') + rP("rl", "M40 46H60"),
      inside: rT(50, 58, "atelier-durand.fr", "rtx-url", ' text-anchor="middle"') + rT(50, 64.5, "06 12 34 56 78  ·  du lundi au samedi", "rtx-cs", ' text-anchor="middle"') + rP("rl", "M30 69H70"),
      pieces: [
        { u: 10, w: 50, d: 15, h: 50, art:
          rP("rl", "M3 15H47") + rR("rl", 5, 4, 40, 8, 1.2) + rT(25, 9.6, "ATELIER DURAND", "rtx-sign", ' text-anchor="middle"') +
          rP("rl-sage", "M3 15q2.75 4 5.5 0q2.75 4 5.5 0q2.75 4 5.5 0q2.75 4 5.5 0q2.75 4 5.5 0q2.75 4 5.5 0q2.75 4 5.5 0q2.75 4 5.5 0") +
          rR("rl", 5, 22, 25, 22, 1) + rP("rl", "M17.5 22V44M5 33H30") + rR("rl", 34, 22, 11, 26, 1) + `<circle class="rl" cx="42.5" cy="36" r=".8"/>` +
          rR("rl", 36, 25, 7, 4.5, .8) + rT(39.5, 28.3, "OUVERT", "rtx-tag", ' text-anchor="middle"') + rP("rl", "M2 48H48") },
        { u: 68, w: 22, d: 30, h: 42, sage: 1, notab: 1, art:
          rR("rl-sage", 2, 2, 16, 34, 3) + rP("rl-sage", "M8 4.5h4") + rR("rf-bar", 4, 7, 12, 7, .8) + rP("rl", "M5 17h10M5 19.5h7M5 22h9") +
          rR("rf-sage", 4.5, 26, 11, 4, 2) + rT(10, 28.9, "APPELER", "rtx-call", ' text-anchor="middle"') + rP("rl-sage", "M8.5 33.5h3") },
        { u: 12, w: 46, d: 36, h: 14, notab: 1, art:
          [0, 1, 2, 3, 4].map((i) => rP("star", starD(5 + i * 5.4, 7, 2.2))).join("") + rT(31, 6.4, "4,9 / 5", "rtx-sign") + rT(31, 10.6, "38 avis", "rtx-tag") },
      ],
    },
  };
  delete POPUP.site;
  const popEl = {}, POPA = {};
  // ── la page en couches : the window panel lies on the face, each block of the page is a panel on four
  // standoffs, all at the same height. Art is drawn in page units (aw × ah) and scaled onto the block.
  const rr2 = (x, y, w, h, r = 0) => { r = Math.max(0, Math.min(r, w / 2, h / 2)); if (!r) return `M${x} ${y}h${w}v${h}h${-w}Z`; return `M${x + r} ${y}h${w - 2 * r}a${r} ${r} 0 0 1 ${r} ${r}v${h - 2 * r}a${r} ${r} 0 0 1 ${-r} ${r}h${-(w - 2 * r)}a${r} ${r} 0 0 1 ${-r} ${-r}v${-(h - 2 * r)}a${r} ${r} 0 0 1 ${r} ${-r}Z`; };
  const bx = (c, x, y, w, h, r = 0) => `<path class="${c}" d="${rr2(x, y, w, h, r)}"/>`;
  const cc = (c, x, y, r) => `<circle class="${c}" cx="${x}" cy="${y}" r="${r}"/>`;
  const tx = (c, x, y, sz, str, ex = "") => `<text class="${c}" x="${x}" y="${y}" font-size="${sz}"${ex}>${str}</text>`;
  const lnP = (c, d) => `<path class="${c}" d="${d}"/>`;
  const MID = ' text-anchor="middle"';
  const S6 = 96 / 144, U = (x) => +((x + 72) * S6 + 2).toFixed(2), Vv = (y) => +((y + 72) * S6 + 2).toFixed(2), Sz = (n) => +(n * S6).toFixed(2);
  const pb = (x, y, w, d, up = 5) => ({ u: U(x), v: Vv(y - up), w: Sz(w), h: Sz(d), aw: w, ah: d });
  const ZL = 9, TL = 2.2;                                   // one elevation for every block of the page
  const siteBlocks = [
    // the browser window, lying on the face
    { ...pb(-72, -72, 144, 144, 0), z: 2.4, t: 2.4, base: 1, art: (w, d) => [
      bx("ui-sunk", 0, 0, w, 9), lnP("ui-line", `M0 9H${w}`),
      ...[4, 7.6, 11.2].map((u) => cc("ui-bar2", u, 4.5, 1.1)),
      bx("ui-card", 18, 2.2, 22, 4.6, 0.6), tx("ui-mono", 20, 5.4, 2.1, "Accueil — Durand"),
      bx("ui-card", 46, 2.2, 70, 4.6, 2.3), cc("ui-bar2", 49, 4.5, 0.9), tx("ui-mono", 51.5, 5.5, 2.5, "menuiserie-durand.fr"),
      lnP("ui-line", "M125 3.2h6M125 4.5h6M125 5.8h6M136 3l3 3M139 3l-3 3"),
      bx("ui-card", 4, 13, w - 8, d - 17, 0.6),
      ...Array.from({ length: 11 }, (_, c) => lnP("ui-line faint", `M${4 + (c + 1) * (w - 8) / 12} 13V${d - 4}`)),
    ].join("") },
    { ...pb(-66, -56, 132, 12), z: ZL, t: TL, art: (w, d) => [
      bx("ui-ink", 4, 3.4, 5.2, 5.2, 0.6), tx("ui-strong", 11.4, 6.4, 3.6, "Durand"), tx("ui-mono", 11.4, 9.2, 1.9, "MENUISERIE · LYON 7E"),
      tx("ui-text", 52, 7.2, 2.7, "Réalisations"), tx("ui-text", 69, 7.2, 2.7, "L'atelier"), tx("ui-text", 83, 7.2, 2.7, "Contact"),
      bx("ui-sage", w - 31, 2.6, 27, 6.8, 0.8), tx("ui-white", w - 17.5, 6.9, 2.8, "Prendre RDV", MID),
    ].join("") },
    { ...pb(-66, -38, 70, 48), z: ZL, t: TL, art: (w, d) => [
      tx("ui-mono", 5, 7, 2.1, "MENUISIER À LYON DEPUIS 2009", ' letter-spacing=".3"'),
      tx("ui-strong", 5, 15.5, 6.2, "Votre savoir-faire,"), tx("ui-strong", 5, 23, 6.2, "enfin visible."),
      ...[[26.6, 56], [28.9, 50], [31.2, 38]].map(([v, ww]) => bx("ui-bar", 5, v, ww, 1.2, 0.6)),
      bx("ui-ink", 5, 34.4, 24, 6.2, 0.8), tx("ui-white", 17, 38.4, 2.4, "Demander un devis", MID),
      bx("ui-card", 32, 34.4, 22, 6.2, 0.8), tx("ui-text", 43, 38.4, 2.4, "Nos réalisations", MID),
      ...[0, 1, 2, 3, 4].map((i) => lnP("ui-sage-line", starD(6.5 + i * 3.6, 44.6, 1.3))), tx("ui-mono", 25.5, 45.4, 2, "4,9 · 38 AVIS"),
    ].join("") },
    { ...pb(10, -38, 56, 48), z: ZL, t: TL, art: (w, d) => [
      bx("ui-sunk", 3, 3, w - 6, d - 6, 0.6), lnP("ui-line", rr2(3, 3, w - 6, d - 6, 0.6)),
      bx("ui-card", 8, 7, 16, 18, 0.3), lnP("ui-line", "M16 7V25M8 16H24"),
      lnP("ui-line", "M30 11H49M31 11V6.5M34 11V8M37 11V5.8M41 11V7.4M44 11V6.8M30 18H49"), bx("ui-bar2", 32, 14.4, 8, 3.6, 0.4), cc("ui-line", 45, 15.6, 2.2),
      bx("ui-bar", 6, 31, 44, 3, 0.3), lnP("ui-line", rr2(6, 31, 44, 3, 0.3) + `M9 34V${d - 4}M47 34V${d - 4}M9 ${d - 8}H47`),
      bx("ui-card", 12, 28.4, 26, 2.6, 0.2), lnP("ui-line", rr2(12, 28.4, 26, 2.6, 0.2)),
      lnP("ui-ink-line", "M40 30.8h7l-1.2-3.2h-4.6z"), lnP("ui-line", "M43 27.6l1.2-2.2"),
      tx("ui-mono", w - 5, d - 5.2, 1.9, "ATELIER · 2025", ' text-anchor="end"'),
    ].join("") },
    ...["Menuiserie", "Agencement", "Sur mesure"].map((t, i) => ({ ...pb(-66 + i * 45, 16, 42, 32), z: ZL, t: TL, art: (w, d) => [
      bx(i === 0 ? "ui-ink" : "ui-bar2", 7, 6, 7, 7, 1),
      lnP(i === 0 ? "ui-white-line" : "ui-ink-line", ["M8.8 11.2L12.2 7.8M9.3 7.8H12.2V10.7", "M8.8 11.2V8.8H12.2V11.2M8.8 10H12.2", "M8.8 11.2H12.2M9.6 11.2V7.8M11.4 11.2V9.2"][i]),
      tx("ui-strong", 7, 18.6, 3.6, t), bx("ui-bar", 7, 21.4, w - 14, 1.3, 0.65), bx("ui-bar", 7, 23.8, w - 20, 1.3, 0.65),
      tx("ui-mono", 8, d - 4.4, 2, "VOIR LES PROJETS →"),
    ].join("") })),
    { ...pb(-66, 53, 132, 13), z: ZL, t: TL, art: (w, d) => [
      tx("ui-mono", 7, 7.8, 2.4, "06 12 34 56 78"), tx("ui-mono", 34, 7.8, 2.4, "12 RUE DES ARTISANS · LYON 7E"),
      lnP("ui-sage-line", `M${w - 34} 8.6c0-2.6 1.5-4.4 3.4-4.4s3.4 1.8 3.4 4.4c0 1.8-3.4 3.4-3.4 3.4s-3.4-1.6-3.4-3.4z`), cc("ui-sage", w - 30.6, 8, 0.9),
      tx("ui-mono", w - 7, 7.8, 2.1, "LUN–SAM 8H–18H", ' text-anchor="end"'),
    ].join("") },
  ].map((b) => ({ ...b, art: b.art(b.aw, b.ah) }));

  // ── l'application de suivi en couches (face Outils internes), même mécanique que la page
  const outilsBlocks = [
    { ...pb(-72, -72, 144, 144, 0), z: 2.4, t: 2.4, base: 1, art: (w, d) => [
      bx("ui-sunk", 0, 0, w, 9), lnP("ui-line", `M0 9H${w}`),
      ...[4, 7.6, 11.2].map((u) => cc("ui-bar2", u, 4.5, 1.1)),
      tx("ui-mono", w / 2, 5.6, 2.4, "ATELIER DURAND · SUIVI", MID + ' letter-spacing=".3"'),
      // sidebar with its icons
      bx("ui-ink", 0, 9, 16, d - 9), bx("ui-sage", 4, 14, 8, 8, 1.2),
      ...[0, 1, 2, 3, 4].map((i) => bx(i === 0 ? "ui-bar" : "ui-bar2 dim", 5, 28 + i * 11, 6, 6, 1)),
      cc("ui-bar2", 8, d - 9, 3),
      bx("ui-card", 20, 13, w - 24, d - 17, 0.6),
      ...Array.from({ length: 9 }, (_, c) => lnP("ui-line faint", `M${20 + (c + 1) * (w - 24) / 10} 13V${d - 4}`)),
    ].join("") },
    // top bar: title, search, avatar
    { ...pb(-50, -61, 116, 10, 0), z: ZL, t: TL, art: (w, d) => [
      tx("ui-strong", 4, 6.6, 3.6, "Chantiers"), tx("ui-mono", 26, 6.4, 2.1, "SEMAINE 47"),
      bx("ui-card", 52, 2.4, 40, 5.2, 2.6), cc("ui-line", 55.5, 5, 1.2), lnP("ui-line", "M56.4 5.9l1 1"), tx("ui-mono", 59, 5.8, 2, "Rechercher un client…"),
      cc("ui-bar2", w - 6, 5, 3), tx("ui-strong", w - 6, 6, 2.4, "ND", MID),
    ].join("") },
    // three figures of the week
    ...[["12", "CHANTIERS EN COURS", "+2 cette semaine"], ["3", "DEVIS À RELANCER", "relance auto à 9 h"], ["8 400 €", "FACTURÉ EN NOVEMBRE", "objectif 11 000 €"]].map(([n, t, sub], i) => ({ ...pb(-50 + i * 39.3, -48, 37.3, 20, 0), z: ZL, t: TL, art: (w, d) => [
      tx("ui-mono", 4, 6, 1.9, t), tx("ui-strong", 4, 13.2, 5.2, n), tx("ui-text", 4, 17, 2.1, sub),
      ...(i === 2 ? [bx("ui-bar", w - 11, 9.4, 7, 1.4, 0.7), bx("ui-ink", w - 11, 9.4, 5.4, 1.4, 0.7)] : [lnP(i === 0 ? "ui-ink-line" : "ui-line", `M${w - 15} 14l3-2.4 2.6 1.4 3.2-4 2.4 1.6`)]),
    ].join("") })),
    // planning board: three columns of cards
    { ...pb(-50, -25, 70, 62, 0), z: ZL, t: TL, art: (w, d) => [
      tx("ui-strong", 4, 6.6, 3, "Planning"), tx("ui-mono", w - 4, 6.4, 1.9, "LUN 17 → VEN 21", ' text-anchor="end"'),
      lnP("ui-line", `M3 9.4H${w - 3}`),
      ...["À FAIRE", "EN COURS", "TERMINÉ"].flatMap((c, i) => {
        const x = 3 + i * 22.2, cards = [["Cuisine Martin", "pose plan"], ["Escalier Roux", "mesures"], ["Dressing Petit", "devis signé"], ["Porte Leroy", "livraison"]].slice(i, i + 3 - (i === 2 ? 1 : 0));
        return [tx("ui-mono", x + 1, 14, 1.9, c), ...cards.map(([a, b2], j) => [
          bx("ui-card", x, 16.5 + j * 13, 20.6, 11.4, 0.6),
          bx(i === 2 ? "ui-bar2" : i === 1 ? "ui-sage" : "ui-bar", x + 2, 18.5 + j * 13, 1.2, 7.4, 0.4),
          tx("ui-strong", x + 4.6, 21.2 + j * 13, 2.2, a), tx("ui-text", x + 4.6, 24.4 + j * 13, 1.9, b2),
          ...(i === 2 ? [lnP("ui-ink-line", `M${x + 15.6} ${23 + j * 13}l1.3 1.3 2.4-2.8`)] : [cc("ui-bar2", x + 17.4, 24.2 + j * 13, 1.3)]),
        ].join(""))];
      }),
    ].join("") },
    // the automation, the one sage block: quotes chased by themselves
    { ...pb(24, -25, 42, 28, 0), z: ZL, t: TL, sage: 1, art: (w, d) => [
      tx("ui-mono", 4, 6, 1.9, "AUTOMATISATION"), tx("ui-strong", 4, 11.4, 3.1, "Relance des devis"),
      bx("ui-sage", w - 13, 3.4, 9, 5, 2.5), cc("ui-white-dot", w - 6.5, 5.9, 1.9),
      lnP("ui-line", `M4 14.4H${w - 4}`),
      ...[["Martin", "envoyée 9:00"], ["Roux", "envoyée 9:00"], ["Petit", "lundi 9:00"]].map(([a, b2], j) => [
        cc(j < 2 ? "ui-sage" : "ui-bar2", 5.4, 17.6 + j * 3.6, 0.9), tx("ui-text", 8, 18.4 + j * 3.6, 2.1, a), tx("ui-mono", w - 4, 18.4 + j * 3.6, 1.9, b2, ' text-anchor="end"'),
      ].join("")),
    ].join("") },
    // turnover chart
    { ...pb(24, 6, 42, 31, 0), z: ZL, t: TL, art: (w, d) => [
      tx("ui-mono", 4, 6, 1.9, "CHIFFRE D'AFFAIRES"), tx("ui-strong", 4, 11, 3, "Juin → Nov."),
      lnP("ui-line", `M4 ${d - 5}H${w - 4}M4 ${d - 5}V14`),
      ...[9, 11, 8, 13, 12, 15].map((h, i) => bx(i === 5 ? "ui-ink" : "ui-bar2", 7 + i * 5.4, d - 5 - h, 3.4, h, 0.4)),
      lnP("ui-sage-line", `M8.7 ${d - 17}L14.1 ${d - 19}L19.5 ${d - 16}L24.9 ${d - 21}L30.3 ${d - 20}L35.7 ${d - 23}`), cc("ui-sage", 35.7, d - 23, 0.9),
    ].join("") },
    // latest jobs table
    { ...pb(-50, 41, 116, 26, 0), z: ZL, t: TL, art: (w, d) => [
      tx("ui-strong", 4, 6.4, 3, "Dernières interventions"), tx("ui-mono", w - 4, 6.2, 1.9, "SYNCHRONISÉ · TABLETTE, TÉLÉPHONE", ' text-anchor="end"'),
      bx("ui-sunk", 3, 8.6, w - 6, 4, 0), ...[["CLIENT", 5], ["CHANTIER", 34], ["DATE", 70], ["STATUT", 92]].map(([t, x]) => tx("ui-mono", x, 11.4, 1.8, t)),
      ...[["M. Martin", "Cuisine, plan de travail", "18/11", "En cours", 1], ["Mme Roux", "Escalier chêne", "15/11", "Mesures", 0], ["M. Leroy", "Porte d'entrée", "12/11", "Terminé", 2]].map(([a, b2, c, st, k3], j) => [
        tx("ui-text", 5, 16.4 + j * 3.6, 2.1, a), tx("ui-text", 34, 16.4 + j * 3.6, 2.1, b2), tx("ui-mono", 70, 16.4 + j * 3.6, 1.9, c),
        bx(k3 === 1 ? "ui-sage-soft" : "ui-bar", 91, 14.3 + j * 3.6, 14, 2.8, 1.4), tx("ui-text", 98, 16.3 + j * 3.6, 1.8, st, MID),
        lnP("ui-line faint", `M3 ${17.6 + j * 3.6}H${w - 3}`),
      ].join("")),
    ].join("") },
  ].map((b) => ({ ...b, art: b.art(b.aw, b.ah) }));

  // ── l'assistant en couches (face IA) : vos documents à gauche, la question du client, la réponse préparée
  const doc = (x, y) => lnP("ui-line", `M${x} ${y}h4.4l2 2v6.6h-6.4z M${x + 4.4} ${y}v2h2`);
  const iaBlocks = [
    { ...pb(-72, -72, 144, 144, 0), z: 2.4, t: 2.4, base: 1, art: (w, d) => [
      bx("ui-sunk", 0, 0, w, 9), lnP("ui-line", `M0 9H${w}`),
      ...[4, 7.6, 11.2].map((u) => cc("ui-bar2", u, 4.5, 1.1)),
      tx("ui-mono", w / 2, 5.6, 2.4, "ASSISTANT · ATELIER DURAND", MID + ' letter-spacing=".3"'),
      bx("ui-card", 4, 13, w - 8, d - 17, 0.6),
      ...Array.from({ length: 11 }, (_, c) => lnP("ui-line faint", `M${4 + (c + 1) * (w - 8) / 12} 13V${d - 4}`)),
    ].join("") },
    // header
    { ...pb(-66, -61, 132, 10, 0), z: ZL, t: TL, art: (w, d) => [
      bx("ui-sage", 4, 2.4, 5.2, 5.2, 1.2), lnP("ui-white-line", "M5.6 5h2M6.6 4v2"),
      tx("ui-strong", 11.4, 6.6, 3.4, "Assistant"), tx("ui-mono", 32, 6.4, 2, "CONNECTÉ À 4 DOCUMENTS"),
      cc("ui-sage", w - 30, 5, 1), tx("ui-text", w - 27.6, 5.9, 2.2, "Prêt · répond en 4 s"),
    ].join("") },
    // the documents it reads
    { ...pb(-66, -48, 40, 83, 0), z: ZL, t: TL, art: (w, d) => [
      tx("ui-mono", 4, 6, 1.9, "VOS DOCUMENTS"), lnP("ui-line", `M3 8.4H${w - 3}`),
      ...[["Tarifs 2026", "PDF · 12 pages"], ["Conditions de vente", "PDF · 4 pages"], ["Questions fréquentes", "38 réponses"], ["Planning S47", "mis à jour ce matin"]].map(([t, sub], j) => [
        bx("ui-card", 3, 11 + j * 17.4, w - 6, 15, 0.6), doc(6, 14 + j * 17.4),
        tx("ui-strong", 15, 17 + j * 17.4, 2.3, t), tx("ui-text", 15, 20.2 + j * 17.4, 1.9, sub),
        lnP(j < 2 ? "ui-sage-line" : "ui-line", `M${w - 9.6} ${21.8 + j * 17.4}l1.3 1.3 2.4-2.8`),
        bx("ui-bar", 6, 23 + j * 17.4, j < 2 ? w - 18 : w - 26, 1, 0.5),
      ].join("")),
    ].join("") },
    // the customer's question, arrived from the site
    { ...pb(-22, -48, 88, 19, 0), z: ZL, t: TL, art: (w, d) => [
      cc("ui-bar2", 6, 6.4, 3), tx("ui-strong", 6, 7.3, 2.2, "MR", MID), tx("ui-strong", 11.4, 6, 2.4, "Mme Roux"), tx("ui-mono", 26, 6, 1.9, "VIA LE SITE · 18:42"),
      bx("ui-sunk", 11, 9, w - 15, 7.4, 1.2),
      tx("ui-text", 13.4, 13.6, 2.6, "Bonjour, quel délai et quel prix pour un escalier en chêne ?"),
    ].join("") },
    // the drafted answer, the sage piece, citing its sources
    { ...pb(-22, -26, 88, 40, 0), z: ZL, t: TL, sage: 1, art: (w, d) => [
      bx("ui-sage", 4, 3.4, 5.2, 5.2, 1.2), lnP("ui-white-line", "M5.6 6h2M6.6 5v2"),
      tx("ui-strong", 11.4, 6.6, 2.4, "Réponse préparée"), tx("ui-mono", w - 4, 6.4, 1.9, "BROUILLON", ' text-anchor="end"'),
      tx("ui-text", 5, 13.6, 2.5, "Bonjour Madame Roux, pour un escalier droit en chêne,"),
      tx("ui-text", 5, 17.4, 2.5, "comptez 6 à 8 semaines et à partir de 4 200 € posé."),
      tx("ui-text", 5, 21.2, 2.5, "Je peux passer prendre les mesures jeudi 20 à 9 h."),
      lnP("ui-sage-line", `M4 25H${w - 4}`),
      tx("ui-mono", 5, 29.4, 1.9, "SOURCES"),
      ...[["Tarifs 2026 · p. 4", 18], ["Planning S47", 46]].map(([t, x]) => bx("ui-sage-soft", x, 27, 25, 3.6, 1.8) + doc(x + 1.6, 27.5).replace('class="ui-line"', 'class="ui-sage-line" transform="translate(' + (x + 1.6) + ' 27.5) scale(.38) translate(' + -(x + 1.6) + ' -27.5)"') + tx("ui-text", x + 5.4, 29.6, 1.9, t)),
      tx("ui-mono", 5, 35.4, 1.9, "RELU PAR VOUS AVANT ENVOI"),
    ].join("") },
    // actions: you stay in control
    { ...pb(-22, 17, 88, 18, 0), z: ZL, t: TL, art: (w, d) => [
      bx("ui-card", 4, 5, 22, 8, 0.8), tx("ui-text", 15, 9.9, 2.5, "Modifier", MID),
      bx("ui-card", 29, 5, 22, 8, 0.8), tx("ui-text", 40, 9.9, 2.5, "Proposer un RDV", MID),
      bx("ui-ink", w - 30, 5, 26, 8, 0.8), tx("ui-white", w - 17, 9.9, 2.6, "Envoyer", MID),
    ].join("") },
    // the week in numbers
    { ...pb(-66, 38, 132, 29, 0), z: ZL, t: TL, art: (w, d) => [
      tx("ui-mono", 4, 6, 1.9, "CETTE SEMAINE"), lnP("ui-line", `M3 8.4H${w - 3}`),
      ...[["23", "questions reçues"], ["19", "réponses prêtes"], ["4 h", "de secrétariat gagnées"], ["0", "réponse envoyée sans vous"]].map(([n, t], j) => [
        tx("ui-strong", 4 + j * 32, 18, 6, n), tx("ui-text", 4 + j * 32, 23, 2.2, t),
        ...(j ? [lnP("ui-line", `M${j * 32} 12V24`)] : []),
      ].join("")),
    ].join("") },
  ].map((b) => ({ ...b, art: b.art(b.aw, b.ah) }));
  const RELIEF = { site: siteBlocks, outils: outilsBlocks, ia: iaBlocks };
  const relEl = {}, E = { site: { v: 0 }, outils: { v: 0 }, ia: { v: 0 } }, ET = { site: 0, outils: 0, ia: 0 };
  const ill = {}, popPoly = {}, popEdge = {}, socket = {};
  for (const id of ["site", "outils", "ia"]) {
    socket[id] = el("polygon", { class: "socket" }, backL);
    const g = el("g", { class: "popped" }, popL);
    popPoly[id] = el("polygon", { class: "face lifted" }, g);
    ill[id] = el("g", { class: `ill ill-${id}` }, g);
    ill[id].innerHTML = ART[id];
    popEdge[id] = el("polygon", { class: "pop-edge" }, g);
    if (RELIEF[id]) {
      const rg = el("g", { class: "relief" }, g);
      const postL = el("g", { class: "rel-posts" }, rg);
      relEl[id] = { rg, blocks: RELIEF[id].map((b) => {
        const posts = [];
        const bg = el("g", { class: b.sage ? "rel-b sage" : "rel-b" }, rg);
        const sides = [0, 1, 2, 3].map(() => el("polygon", { class: "rel-side" }, bg));
        const top = el("polygon", { class: "rel-top" }, bg);
        const art = el("g", { class: "rel-art" }, bg); art.innerHTML = b.art;
        const screws = b.base ? [] : [0, 1, 2, 3].map(() => el("circle", { class: "rel-screw", r: 1.1 }, bg));
        return { b, bg, sides, top, art, posts, screws };
      }) };
      // painter's order: lower blocks first (the stagger keeps the list order)
      relEl[id].blocks.filter((B) => B.b.base).forEach((B) => rg.insertBefore(B.bg, postL));
    }
    if (POPUP[id]) {
      const pg = el("g", { class: "popup" }, g), C = POPUP[id];
      const flap = el("polygon", { class: "pop-paper" }, pg);
      const cover = el("g", { class: "rel-art" }, pg); cover.innerHTML = C.cover;
      const inside = el("g", { class: "rel-art" }, pg); inside.innerHTML = C.inside;
      const pieces = C.pieces.map((b) => {
        const bg = el("g", { class: b.sage ? "pop-piece sage" : "pop-piece" }, pg);
        const tab = el("polygon", { class: "pop-tab" }, bg), front = el("polygon", { class: "pop-front" }, bg);
        const art = el("g", { class: "rel-art" }, bg); art.innerHTML = b.art;
        return { b, bg, tab, front, art };
      });
      popEl[id] = { pg, flap, cover, inside, pieces };
    }
  }
  const inner = el("path", { class: "yline" }, edgeL);
  const hull = el("path", { class: "hexline" }, edgeL);

  let W = innerWidth, H = innerHeight;
  const rad = (d) => (d * Math.PI) / 180;
  const mix = (a, b, t) => a + (b - a) * t;
  const hex = (c) => [parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16)];
  const LIT = hex("#F3F8F7"), SHADE = hex("#C9DDDA");
  const rgbAt = (t) => LIT.map((c, i) => Math.round(mix(c, SHADE[i], t)));
  const bodyRGB = [];
  const f2 = (n) => n.toFixed(1);

  function hullOf(pts) {
    const p = pts.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
    const lo = [], up = [];
    for (const q of p) { while (lo.length > 1 && cross(lo[lo.length - 2], lo[lo.length - 1], q) <= 0) lo.pop(); lo.push(q); }
    for (const q of p.reverse()) { while (up.length > 1 && cross(up[up.length - 2], up[up.length - 1], q) <= 0) up.pop(); up.push(q); }
    return lo.slice(0, -1).concat(up.slice(0, -1));
  }

  let heroWasOff = false, dirty = false;
  const requestRender = () => { dirty = true; };
  function render() {
    // the drawing on a face only appears once that face has fully come out (or, at the end, once the cube is home)
    let face = "hero";
    for (const id of ["site", "outils", "ia"]) if (S[id] > .97) face = id;
    if (S.fin > .97) face = "final";
    if (svg.dataset.face !== face) svg.dataset.face = face;
    for (const id in ET) {
      const tg = face === id || face === "final" ? 1 : 0;
      if (ET[id] !== tg) { ET[id] = tg; gsap.to(E[id], { v: tg, duration: REDUCE ? 0 : tg ? 1.8 : .45, delay: tg ? .25 : 0, ease: tg ? "power1.out" : "power2.in", overwrite: true, onUpdate: requestRender }); }
    }
    const R = (W <= 900 ? Math.min(W * .3, H * .19) : Math.min(W * .15, H * .235)) * S.s;           // hexagon radius in px
    const k = R / 1.633;                                    // world → px (1.633 = hex radius of a unit cube in iso)
    const cx = S.x * W, cy = S.y * H;
    const cy0 = Math.cos(rad(S.yaw)), sy0 = Math.sin(rad(S.yaw));
    const ce = Math.cos(rad(S.pitch)), se = Math.sin(rad(S.pitch));
    const rot = ([x, y, z]) => [x * cy0 - y * sy0, x * sy0 + y * cy0, z];
    const proj = (p) => { const [x, y, z] = rot(p); return [cx + k * x, cy - k * (y * se + z * ce)]; };
    const facing = (n) => { const [, y, z] = rot(n); return -y * ce + z * se; };
    const P8 = C8.map(proj);
    const vis = FACES.map((f) => facing(f.n));

    // body faces
    FACES.forEach((f, i) => {
      const poly = facePoly[i];
      if (vis[i] <= 0.002) { poly.setAttribute("points", ""); return; }
      poly.setAttribute("points", f.q.map((j) => P8[j].map(f2).join(",")).join(" "));
      const rx = rot(f.n)[0];
      const rgb = f.n[2] === 1 ? [246, 250, 249] : rgbAt(Math.min(1, Math.max(0, (rx + 1) / 2)));
      bodyRGB[i] = rgb;
      poly.style.fill = `rgb(${rgb})`;
    });
    // edges: thick silhouette (the logo outline) + thin inner edges between two visible faces
    const H8 = hullOf(P8);
    hull.setAttribute("d", "M" + H8.map((p) => p.map(f2).join(" ")).join("L") + "Z");
    hull.style.strokeWidth = f2(R * .07);
    let d = "";
    for (const [a, b, fa, fb] of EDGES) if (vis[fa] > 0.002 && fb >= 0 && vis[fb] > 0.002) d += `M${f2(P8[a][0])} ${f2(P8[a][1])}L${f2(P8[b][0])} ${f2(P8[b][1])}`;
    inner.setAttribute("d", d);
    inner.style.strokeWidth = f2(R * .03);


    // blocks of the exploded page: each one rises along the face normal, one after the other,
    // a slab with visible sides, its drawing on top and dashed guides back to its footprint
    function drawRelief(f, L, grow, fvis) {
      const RE = relEl[f.id], list = RE.blocks, n = list.length, st = .1, e = E[f.id].v;
      const ZK = 2 / 100 * grow * 1.5;
      const fo = f.ro || f.o, fu = f.ru || f.u, fv = f.rv || f.v;   // the page's own frame on the face (IA turns it to read along the view)
      const W3 = (u, v, z) => { const q = L(fo.map((x, i) => x + fu[i] * u / 100 + fv[i] * v / 100)); return q.map((x, i) => x + f.n[i] * z * ZK); };
      const pr = (u, v, z) => proj(W3(u, v, z));
      const sideN = [fv.map((x) => -x), fu, fv, fu.map((x) => -x)];
      const sideTone = sideN.map((nn) => facing(nn));
      const pts = (a) => a.map((q) => q.map(f2).join(",")).join(" ");
      const tone = (j, sage) => sage ? (sideTone[j] > .5 ? "#A9C8C3" : "#BCD4D0") : (sideTone[j] > .5 ? "#E4E0D3" : "#EEEBE2");
      RE.rg.style.opacity = fvis.toFixed(3);
      const slab = (B, u0, v0, w, h, z0, z1, polys, topPoly) => {
        const cs = [[u0, v0], [u0 + w, v0], [u0 + w, v0 + h], [u0, v0 + h]];
        const T4 = cs.map(([u, v]) => pr(u, v, z1)), B4 = cs.map(([u, v]) => pr(u, v, z0));
        polys.forEach((poly, j) => {
          if (sideTone[j] <= .02) { poly.setAttribute("points", ""); return; }
          poly.setAttribute("points", pts([B4[j], B4[(j + 1) % 4], T4[(j + 1) % 4], T4[j]]));
          poly.style.fill = tone(j, B && B.b.sage);
        });
        if (topPoly) topPoly.setAttribute("points", pts(T4));
        return T4;
      };
      let k2 = 0;
      list.forEach((B) => {
        const { b } = B;
        let r;
        if (b.base) r = Math.min(1, e * 4);
        else { r = Math.min(1, Math.max(0, e * (1 + st * (n - 2)) - k2 * st)); r = r * r * (3 - 2 * r); k2++; }
        const show = r > .005;
        B.bg.style.display = show ? "" : "none";
        B.posts.forEach((p) => p.sides.forEach((q) => { q.style.display = show ? "" : "none"; }));
        if (!show) return;
        const base = b.base ? 0 : 4.8;                      // top of the window panel
        const zt = b.base ? b.z * r : base + (b.z - base) * r + b.t * r, zb = Math.max(base, zt - b.t);
        B.bg.style.opacity = Math.min(1, r * 3).toFixed(3);
        // standoffs from the window panel to the underside of the block
        const ins = Math.min(1.5, b.w / 4, b.h / 4), pw = 1.5;
        const pc = [[b.u + ins, b.v + ins], [b.u + b.w - ins, b.v + ins], [b.u + b.w - ins, b.v + b.h - ins], [b.u + ins, b.v + b.h - ins]];
        B.posts.forEach((p, j) => slab(null, pc[j][0] - pw / 2, pc[j][1] - pw / 2, pw, pw, base, zb, p.sides, null));
        const T4 = slab(B, b.u, b.v, b.w, b.h, zb, zt, B.sides, B.top);
        const o = T4[0], Uu = T4[1], Vv2 = T4[3];
        B.art.setAttribute("transform", `matrix(${[(Uu[0] - o[0]) / b.aw, (Uu[1] - o[1]) / b.aw, (Vv2[0] - o[0]) / b.ah, (Vv2[1] - o[1]) / b.ah, o[0], o[1]].map((x) => x.toFixed(4)).join(" ")})`);
        B.art.style.opacity = Math.min(1, Math.max(0, (r - .4) * 2)).toFixed(3);
        B.screws.forEach((c, j) => { const q = pr(pc[j][0], pc[j][1], zt); c.setAttribute("cx", f2(q[0])); c.setAttribute("cy", f2(q[1])); c.style.opacity = B.art.style.opacity; });
      });
    }
    // pop-up card: the flap turns about the face's lower edge from closed (lying on the face) to open (90°);
    // pieces translate with it (parallelogram linkage), so they always stay parallel to the face
    function drawPopup(f, L, grow, fvis) {
      const PE = popEl[f.id], C = POPUP[f.id], e = E[f.id].v;
      const ZK = 2 / 100 * grow;
      const W3 = (u, v, z) => { const q = L(f.o.map((x, i) => x + f.u[i] * u / 100 + f.v[i] * v / 100)); return proj(q.map((x, i) => x + f.n[i] * z * ZK)); };
      const pts = (a) => a.map((q) => q.map(f2).join(",")).join(" ");
      const mtx = (o, U, V, w, h) => `matrix(${[(U[0] - o[0]) / w, (U[1] - o[1]) / w, (V[0] - o[0]) / h, (V[1] - o[1]) / h, o[0], o[1]].map((x) => x.toFixed(4)).join(" ")})`;
      PE.pg.style.opacity = fvis.toFixed(3);
      const ph = e * Math.PI / 2, cph = Math.cos(ph), sph = Math.sin(ph);
      const Lf = C.flap;
      const F = [W3(0, 100, 0), W3(100, 100, 0), W3(100, 100 - Lf * cph, Lf * sph), W3(0, 100 - Lf * cph, Lf * sph)];
      PE.flap.setAttribute("points", pts(F));
      const up = f.v.map((x) => -x / 2);
      const inN = f.n.map((x, i) => -x * cph + up[i] * sph);
      const insideVis = facing(inN) > 0;
      PE.cover.style.display = insideVis ? "none" : "";
      PE.inside.style.display = insideVis ? "" : "none";
      if (insideVis) PE.inside.setAttribute("transform", mtx(F[0], F[1], F[3], 100, Lf));
      else PE.cover.setAttribute("transform", mtx(F[3], F[2], F[0], 100, Lf));
      PE.pieces.forEach((P, k) => {
        const { b } = P;
        const vis = Math.min(1, Math.max(0, (e - .12) / .2));
        P.bg.style.display = vis > .01 ? "" : "none";
        if (vis <= .01) return;
        P.bg.style.opacity = vis.toFixed(3);
        const bv = 100 - b.d * cph, bz = b.d * sph;
        const BL = W3(b.u, bv, bz), BR = W3(b.u + b.w, bv, bz), TL = W3(b.u, bv - b.h, bz), TR = W3(b.u + b.w, bv - b.h, bz);
        const KL = W3(b.u, 100 - b.h, 0), KR = W3(b.u + b.w, 100 - b.h, 0);
        // free-standing pieces get a small foot glued on the flap instead of a tab back to the face
        if (b.notab) { const fd = 5, FL = W3(b.u, 100 - (b.d + fd) * cph, (b.d + fd) * sph), FR = W3(b.u + b.w, 100 - (b.d + fd) * cph, (b.d + fd) * sph); P.tab.setAttribute("points", pts([BL, BR, FR, FL])); }
        else P.tab.setAttribute("points", pts([TL, TR, KR, KL]));
        P.front.setAttribute("points", pts([TL, TR, BR, BL]));
        P.art.setAttribute("transform", mtx(TL, TR, BL, b.w, b.h));
        POPA[f.id + k] = [(TL[0] + TR[0]) / 2, (TL[1] + BL[1]) / 2];
      });
    }
    // illustrated faces: lifted along their normal and slightly enlarged
    for (const f of FACES.slice(0, 3)) {
      const p = S[f.id], v = vis[FACES.indexOf(f)];
      const g = popPoly[f.id].parentNode;
      if (v <= 0.02) { g.style.display = "none"; socket[f.id].setAttribute("points", ""); continue; }
      g.style.display = "";
      const lift = p * .42, grow = 1 + p * .16;
      const c = f.n.map((n) => n * (1 + lift));
      const L = (q) => q.map((x, i) => c[i] + (x - f.n[i]) * grow);
      const Q = f.q.map((j) => proj(L(C8[j])));
      const pts = Q.map((q) => q.map(f2).join(",")).join(" ");
      popPoly[f.id].setAttribute("points", pts);
      popEdge[f.id].setAttribute("points", pts);
      popEdge[f.id].style.strokeWidth = f2(Math.max(1, R * .012 * (1 - p)) );
      popEdge[f.id].style.opacity = Math.min(1, p * 3).toFixed(3);
      const wv = Math.min(1, p * 1.6), base = bodyRGB[FACES.indexOf(f)] || [255, 255, 255];
      popPoly[f.id].style.fill = `rgb(${base.map((c) => Math.round(mix(c, 255, wv)))})`;
      popPoly[f.id].style.display = p > .02 ? "" : "none";
      // socket left in the cube once the face lifts off
      socket[f.id].setAttribute("points", p > .02 ? f.q.map((j) => P8[j].map(f2).join(",")).join(" ") : "");
      socket[f.id].style.opacity = Math.min(1, p * 2).toFixed(3);
      const o = proj(L(f.o)), U = proj(L(f.o.map((x, i) => x + f.u[i]))), V = proj(L(f.o.map((x, i) => x + f.v[i])));
      ill[f.id].setAttribute("transform", `matrix(${[(U[0] - o[0]) / 100, (U[1] - o[1]) / 100, (V[0] - o[0]) / 100, (V[1] - o[1]) / 100, o[0], o[1]].map((n) => n.toFixed(4)).join(" ")})`);
      const fv = Math.min(1, Math.max(0, (v - .12) / .3)).toFixed(2); if (ill[f.id].dataset.fv !== fv) { ill[f.id].dataset.fv = fv; ill[f.id].style.setProperty("--face-vis", fv); }
      if (relEl[f.id]) drawRelief(f, L, grow, Math.min(1, Math.max(0, (v - .12) / .3)));
      if (popEl[f.id]) drawPopup(f, L, grow, Math.min(1, Math.max(0, (v - .12) / .3)));
    }
    // floor grid: lines along the cube's x and y axes on the floor plane, so it turns and tilts with the cube
    {
      const G = .5, N = 18, zg = -1, Lg = G * N; let d = "", dd = "";
      for (let i = -N; i <= N; i++) {
        const a = proj([i * G, -Lg, zg]), b = proj([i * G, Lg, zg]), c = proj([-Lg, i * G, zg]), e = proj([Lg, i * G, zg]);
        d += `M${f2(a[0])} ${f2(a[1])}L${f2(b[0])} ${f2(b[1])}M${f2(c[0])} ${f2(c[1])}L${f2(e[0])} ${f2(e[1])}`;
        if (i % 2 === 0) for (let j = -N; j <= N; j += 2) { const q = proj([i * G, j * G, zg]); dd += `M${f2(q[0])} ${f2(q[1])}h.01`; }
      }
      gridPath.setAttribute("d", d); gridDots.setAttribute("d", dd);
      gridGrad.setAttribute("cx", f2(cx)); gridGrad.setAttribute("cy", f2(cy)); gridGrad.setAttribute("r", f2(R * 2.9));
    }
    // graduated ring under the cube: turns with the yaw, marks the active face
    const ringOn = 1 - S.hero;
    ringL.style.opacity = ringOn.toFixed(3);
    if (ringOn > .01) {
      const rr = 2.05, zr = -1; let d = "", t = "", m = "";
      for (let i = 0; i <= 96; i++) { const a = (i / 96) * Math.PI * 2; const p = proj([Math.cos(a) * rr, Math.sin(a) * rr, zr]); d += (i ? "L" : "M") + f2(p[0]) + " " + f2(p[1]); }
      for (let i = 0; i < 48; i++) {
        const a = (i / 48) * Math.PI * 2, big = i % 4 === 0, r2 = rr - (big ? .16 : .08);
        const p1 = proj([Math.cos(a) * rr, Math.sin(a) * rr, zr]), p2 = proj([Math.cos(a) * r2, Math.sin(a) * r2, zr]);
        const seg = `M${f2(p1[0])} ${f2(p1[1])}L${f2(p2[0])} ${f2(p2[1])}`; if (big) m += seg; else t += seg;
      }
      ringPath.setAttribute("d", d); ringTicks.setAttribute("d", t); ringMajor.setAttribute("d", m);
      const act = FACES.slice(0, 2).map((f) => [S[f.id], f]).sort((x, y) => y[0] - x[0])[0];
      const dir = act[0] > .05 ? act[1].n : [-.7071, -.7071, 0];
      const mk = proj([dir[0] * rr, dir[1] * rr, zr]);
      ringMark.setAttribute("cx", f2(mk[0])); ringMark.setAttribute("cy", f2(mk[1]));
      ringMark.style.opacity = 0;
    }
    // annotations around the lifted face (desktop only, once the face has settled)
    const side = S.x < .5 ? -1 : 1;
    for (const id in annEl) {
      const A = annEl[id], p = S[id], on = W > 900 && S.fin < .5 ? Math.max(0, Math.min(1, (p - .9) / .1)) : 0;
      A.g.style.opacity = on.toFixed(3);
      if (on < .01) { A.g.style.display = "none"; continue; }
      A.g.style.display = "";
      const f = FACES.find((x) => x.id === id);
      const lift = p * .42, grow = 1 + p * .16;
      const c = f.n.map((n) => n * (1 + lift));
      const L = (q) => q.map((x, i) => c[i] + (x - f.n[i]) * grow);
      const at = (u, v, z = 0) => { const fo = f.ro || f.o, fu = f.ru || f.u, fv = f.rv || f.v; const q = L(fo.map((x, i) => x + fu[i] * u / 100 + fv[i] * v / 100)); const zz = z * 2 / 100 * grow * 1.5 * E[id].v; return proj(q.map((x, i) => x + f.n[i] * zz)); };
      const Q = f.q.map((j) => proj(L(C8[j])));
      const allY = P8.map((q) => q[1]).concat(Q.map((q) => q[1]));
      const top = Math.min(...allY) - 30;
      const allX = P8.map((q) => q[0]).concat(Q.map((q) => q[0]));
      const minY = Math.min(...allY), maxY = Math.max(...allY);
      const edgeX = side < 0 ? Math.min(...allX) - 30 : Math.max(...allX) + 30;
      // labels stacked on the outer side, in the same vertical order as their points
      // pick the slot order whose leaders don't cross (then the shortest)
      const raw = ANN[id].calls.map(([u, v, , , z, pk], i) => ({ i, a: pk !== undefined && POPA[id + pk] ? POPA[id + pk] : at(u, v, z) }));
      const slotY = raw.map((_, k) => minY + (maxY - minY) * (k + .6) / (raw.length + .2));
      const cross = (p1, p2, p3, p4) => { const d = (a, b, c) => (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]); return d(p1, p2, p3) * d(p1, p2, p4) < 0 && d(p3, p4, p1) * d(p3, p4, p2) < 0; };
      const perms = (xs) => xs.length < 2 ? [xs] : xs.flatMap((x, j) => perms(xs.filter((_, q) => q !== j)).map((r) => [x, ...r]));
      let best = null, bestScore = Infinity;
      for (const order of perms(raw)) {
        const segs = order.map((o, k) => [o.a, [edgeX, slotY[k]]]);
        let n = 0; for (let x = 0; x < segs.length; x++) for (let y = x + 1; y < segs.length; y++) if (cross(...segs[x], ...segs[y])) n++;
        const score = n * 1e6 + segs.reduce((t, [p, q]) => t + Math.hypot(p[0] - q[0], p[1] - q[1]), 0);
        if (score < bestScore) { bestScore = score; best = order; }
      }
      const pts = best;
      pts.forEach(({ i, a }, k) => {
        const E = A.calls[i];
        const ly = slotY[k];
        const sx = edgeX + side * 22, tx = sx + side * 6, anchor = side < 0 ? "end" : "start";
        E.line.setAttribute("d", `M${f2(a[0])} ${f2(a[1])}L${f2(edgeX)} ${f2(ly)}H${f2(sx)}`);
        E.dot.setAttribute("cx", f2(a[0])); E.dot.setAttribute("cy", f2(a[1]));
        E.end.setAttribute("cx", f2(sx)); E.end.setAttribute("cy", f2(ly));
        for (const [t, dy] of [[E.t1, -2], [E.t2, 12]]) { t.setAttribute("x", f2(tx)); t.setAttribute("y", f2(ly + dy)); t.setAttribute("text-anchor", anchor); }
      });
      // dimension line along the face's lower edge (v = 100), pushed away from the face
      let a = id === "ia" ? Q[0] : Q[3], b = id === "ia" ? Q[1] : Q[2];
      const fc = [(Q[0][0] + Q[2][0]) / 2, (Q[0][1] + Q[2][1]) / 2], mid = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
      let nx = -(b[1] - a[1]), ny = b[0] - a[0]; const nl = Math.hypot(nx, ny) || 1; nx /= nl; ny /= nl;
      if ((mid[0] - fc[0]) * nx + (mid[1] - fc[1]) * ny < 0) { nx = -nx; ny = -ny; }
      const off = 18, t = 6, A1 = [a[0] + nx * off, a[1] + ny * off], B1 = [b[0] + nx * off, b[1] + ny * off];
      A.cote.path.style.display = ANN[id].cote ? "" : "none";
      A.cote.path.setAttribute("d", `M${f2(a[0] + nx * 6)} ${f2(a[1] + ny * 6)}L${f2(A1[0] + nx * t)} ${f2(A1[1] + ny * t)}M${f2(b[0] + nx * 6)} ${f2(b[1] + ny * 6)}L${f2(B1[0] + nx * t)} ${f2(B1[1] + ny * t)}M${f2(A1[0])} ${f2(A1[1])}L${f2(B1[0])} ${f2(B1[1])}`);
      let ang = Math.atan2(B1[1] - A1[1], B1[0] - A1[0]) * 180 / Math.PI; if (ang > 90) ang -= 180; if (ang < -90) ang += 180;
      const tm = [(A1[0] + B1[0]) / 2 + nx * 12, (A1[1] + B1[1]) / 2 + ny * 12];
      A.cote.text.setAttribute("transform", `translate(${f2(tm[0])} ${f2(tm[1])}) rotate(${ang.toFixed(1)})`);
      A.cote.text.setAttribute("y", "3.5");
    }
    projNow = proj; heroNow = S.hero;
    // hero drafting lines follow the cube while they fade
    heroG.setAttribute("transform", `translate(${f2(cx)} ${f2(cy)}) scale(${(R / 100).toFixed(4)})`);
    heroG.style.opacity = S.hero.toFixed(3);
    const heroOff = S.hero < .01;
    if (heroOff !== heroWasOff) { heroWasOff = heroOff; heroG.style.display = heroOff ? "none" : ""; heroOff ? svg.pauseAnimations?.() : (!reduce && svg.unpauseAnimations?.()); }
  }

  function resize() { W = innerWidth; H = innerHeight; svg.setAttribute("viewBox", `0 0 ${W} ${H}`); render(); }
  addEventListener("resize", resize);
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  resize();

  // ───────────────────────── scroll choreography (GSAP + ScrollTrigger) ─────────────────────────
  if (reduce) svg.pauseAnimations?.();
    // one render per frame, whatever the number of tweens that moved the state
  gsap.ticker.add(() => { if (dirty) { dirty = false; render(); } });
  // grid pulses + hero ripple cubes, both drawn in the cube's 3D frame so they stay on the grid
  const hash = (n) => { const x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
  const hull2 = (pts) => {
    const p = pts.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    const cr = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
    const lo = [], up = [];
    for (const q of p) { while (lo.length > 1 && cr(lo[lo.length - 2], lo[lo.length - 1], q) <= 0) lo.pop(); lo.push(q); }
    for (const q of p.reverse()) { while (up.length > 1 && cr(up[up.length - 2], up[up.length - 1], q) <= 0) up.pop(); up.push(q); }
    return lo.slice(0, -1).concat(up.slice(0, -1));
  };
  const SPEED = 1.1, TRAIL = .55;               // grid units per second, trail length in grid units
  gsap.ticker.add((time) => {
    if (!projNow) return;
    const pr = projNow;
    // ripples (hero only): cubes of growing size standing on the same floor
    if (heroNow > .01 && !reduce) {
      RIP.forEach((path, i) => {
        const t = ((time / 6) + i / 3) % 1, e = 1 - Math.pow(1 - t, 2.2), h = 1 + e * 1.4;
        const pts = [-h, h].flatMap((x) => [-h, h].flatMap((y) => [-1, -1 + 2 * h].map((z) => pr([x, y, z]))));
        path.setAttribute("d", "M" + hull2(pts).map((q) => q.map(f2).join(" ")).join("L") + "Z");
        path.style.opacity = (.35 * (1 - t) * heroNow).toFixed(3);
      });
    } else RIP.forEach((path) => { path.style.opacity = 0; });
    if (reduce) { PULSES.forEach((P) => { P.dot.style.opacity = P.trail.style.opacity = 0; }); return; }
    PULSES.forEach((P, i) => {
      const period = 4.2 + (i % 5) * .45, ph = time / period + i * .37, cyc = Math.floor(ph), t = ph - cyc, seed = i * 31 + cyc * 7;
      // route: start on the cube's foot (a grid node of its base edge), go straight out, turn once
      const side = Math.floor(hash(seed) * 4), along = [-1, -.5, 0, .5, 1][Math.floor(hash(seed + 1) * 5)];
      const out = side % 2 === 0 ? [side === 0 ? 1 : -1, 0] : [0, side === 1 ? 1 : -1];
      const turn = hash(seed + 2) < .5 ? [-out[1], out[0]] : [out[1], -out[0]];
      const l1 = 1 + Math.floor(hash(seed + 3) * 4) * .5, l2 = .5 + Math.floor(hash(seed + 4) * 4) * .5;
      const p0 = out[0] ? [out[0], along] : [along, out[1]];
      const p1 = [p0[0] + out[0] * l1, p0[1] + out[1] * l1], p2 = [p1[0] + turn[0] * l2, p1[1] + turn[1] * l2];
      const total = l1 + l2, travel = Math.min(1, t * period * SPEED / total);
      const at = (d) => d <= l1 ? [p0[0] + out[0] * d, p0[1] + out[1] * d] : [p1[0] + turn[0] * (d - l1), p1[1] + turn[1] * (d - l1)];
      const ease = (x) => x * x * (3 - 2 * x);
      const d = ease(travel) * total, d0 = Math.max(0, d - TRAIL);
      const pts = [at(d0)]; if (d0 < l1 && d > l1) pts.push(p1); pts.push(at(d));
      const sp = pts.map(([x, y]) => pr([x, y, -1]));
      const head = sp[sp.length - 1];
      const fade = travel >= 1 ? 0 : Math.min(1, travel / .1, (1 - travel) / .25);
      P.dot.setAttribute("cx", f2(head[0])); P.dot.setAttribute("cy", f2(head[1]));
      P.trail.setAttribute("d", "M" + sp.map((q) => q.map(f2).join(" ")).join("L"));
      P.dot.style.opacity = (fade * .95).toFixed(2); P.trail.style.opacity = (fade * .8).toFixed(2);
    });
  });
  // smooth wheel scrolling (Lenis) so the scrubbed scene moves continuously instead of in wheel steps
  if (!reduce) {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    document.querySelectorAll('a[href^="#"]').forEach((a) => a.addEventListener("click", (e) => { const t = document.querySelector(a.getAttribute("href")); if (t) { e.preventDefault(); lenis.scrollTo(t, { duration: 1.4 }); } }));
  }
  // pause the small looping animations (gear, typing dots) while the page is moving
  let still;
  addEventListener("scroll", () => { document.body.classList.add("is-scrolling"); clearTimeout(still); still = setTimeout(() => document.body.classList.remove("is-scrolling"), 180); }, { passive: true });
  const order = ["hero", "site", "outils", "ia", "final"];
  const sections = order.map((id) => document.querySelector(`[data-face="${id}"]`));
  const mm = gsap.matchMedia();
  mm.add({ desk: "(min-width: 901px)", mob: "(max-width: 900px)" }, (ctx) => {
    const ST = ctx.conditions.desk ? STATES_DESK : STATES_MOB;
    Object.assign(S, ST.hero); render();
    // ONE master timeline scrubbed by the whole page: its time is the scroll position in px, so the cube's
    // state is a pure function of where the page is, however fast it is scrolled (no tweens fighting each other)
    const POP = ["site", "outils", "ia", "fin"];
    const pick = (o, keep) => Object.fromEntries(Object.entries(o).filter(([k]) => keep(k)));
    let master;
    function build() {
      if (master) { master.scrollTrigger?.kill(); master.kill(); }
      const H = innerHeight, max = ScrollTrigger.maxScroll(window);
      Object.assign(S, ST.hero);
      master = gsap.timeline({ defaults: { immediateRender: false }, scrollTrigger: { start: 0, end: "max", scrub: reduce ? true : 0.6 }, onUpdate: requestRender });
      for (let i = 1; i < order.length; i++) {
        // 1. the previous face sinks back into the cube, 2. the cube turns and moves (slight zoom-out),
        // 3. the new face comes out and grows; its drawing then appears (see render)
        const top = sections[i].getBoundingClientRect().top + scrollY;
        const b = Math.min(max, top - .18 * H), a = Math.max(0, Math.min(b - 80, top - .88 * H)), d = b - a;
        const from = ST[order[i - 1]], to = ST[order[i]];
        const fromRest = pick(from, (k) => k !== "s" && !POP.includes(k)), toRest = pick(to, (k) => k !== "s" && !POP.includes(k));
        const dip = Math.min(from.s, to.s) * .82;
        for (const k of POP) if (from[k]) master.fromTo(S, { [k]: 1 }, { [k]: 0, ease: "power2.in", duration: .22 * d }, a);
        master.fromTo(S, { ...fromRest }, { ...toRest, ease: "power2.inOut", duration: .6 * d }, a + .2 * d)
          .fromTo(S, { s: from.s }, { s: dip, ease: "sine.out", duration: .3 * d }, a + .2 * d)
          .fromTo(S, { s: dip }, { s: to.s, ease: "sine.in", duration: .3 * d }, a + .5 * d);
        for (const k of POP) if (to[k]) master.fromTo(S, { [k]: 0 }, { [k]: 1, ease: "power2.out", duration: .22 * d }, a + .78 * d);
      }
      master.set({}, {}, max); // timeline length = scrollable height
      master.progress(max ? scrollY / max : 0);
      render();
    }
    build();
    let lastW = innerWidth, rt;
    const onResize = () => { clearTimeout(rt); rt = setTimeout(() => { if (innerWidth !== lastW) { lastW = innerWidth; build(); ScrollTrigger.refresh(); } }, 200); };
    addEventListener("resize", onResize);
    document.fonts?.ready.then(() => { build(); ScrollTrigger.refresh(); });
    if (!reduce) {
      // parallax: text drifts slower than the page, background drafting layers at two depths
      gsap.utils.toArray(".copy").forEach((c) => gsap.fromTo(c, { y: 70 }, { y: -70, ease: "none", scrollTrigger: { trigger: c.closest("section"), start: "top bottom", end: "bottom top", scrub: 0.4 } }));
      gsap.to(".depth-far", { yPercent: -18, ease: "none", scrollTrigger: { trigger: "main", start: "top top", end: "bottom bottom", scrub: 0.4 } });
      gsap.to(".depth-near", { yPercent: -42, ease: "none", scrollTrigger: { trigger: "main", start: "top top", end: "bottom bottom", scrub: 0.4 } });
    }
    return () => removeEventListener("resize", onResize);
  });
})();
