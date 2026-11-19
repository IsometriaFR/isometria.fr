# Isometria — Design System

**Version 2.0 · November 2026**

A living design system for **Isometria**, a one-person independent digital studio for French TPE/PME (very small and small-to-medium businesses). The studio sells three things: **websites**, **internal tools** (business apps and automations, one and the same offer) and **practical AI solutions**. The system serves that offer and the **Isometria channel**, which explains AI and Claude to the general public and to TPE/PME teams. The identity is intentionally monochrome — teal sauge + crème + ink, with a `dark` theme kept in reserve and one ochre helper tint reserved for diagrams — carried by a three-voice typographic system (IBM Plex Sans for headings, Nunito Sans for body, JetBrains Mono for code).

> **v2.0 — November 2026. The homepage becomes the norm of the site.** Everything shipped on the `isometria.fr` homepage is now part of the system, not only its motion. A new section, *Le site* (`guides/08-site.md`), sets the site's structure, 12-column grid, type, colours, components and writing; where it contradicts a general rule, it wins **on the site**. The general rules stay in force for applications, client deliverables, video and social pieces. On the site: headings and buttons in weight 600, an ink primary button with white text, JetBrains Mono for eyebrows, numbering, annotations and the footer, a menu in IBM Plex Sans 500, 1px page rules, a 1200px container, body copy at 17px in `color-text-body`. The offer is stated as three faces (websites, internal tools, AI): business apps and automations are one offer. New tokens: `color-text-body`, `color-action`, `color-action-hover`, `color-on-action`, `color-line`, `color-line-faint`, `color-line-mid`, `stroke-rule`, a `site` family and a *Site* type group (`site-h1` … `site-annotation-sub`). New cards: *En-tête du site*, *Bloc de section*, *Pied de page et indice de défilement*; *Buttons* now shows both registers. New asset group *Accueil* (ten reference captures). `ui_kits/Landing.html` no longer sets the reference. No existing token value modified.

> **v1.9 — November 2026. Motion rebuilt around the homepage cube.** The *Motion* section now carries what was validated on the `cube-gsap` prototype (v23) and shipped on `isometria.fr`: the logo cube turns as the page scrolls and brings out one offer face per section, a three-step transition, a breathing dip, layered face reliefs, a homepage-only parallax (text columns + two drafting layers), smooth scrolling, ambient pulses on the floor grid, reduced-motion behaviour and the Lighthouse budget. The motion draft of November is merged: the *dévoilement* gesture replaces the diagonal *assemblage*, a fourth gesture (*le fonctionnement*) and `ease-linear` are added. Video and social rules move to a new section, *Motion vidéo*. New tokens: `duration-retract`, `duration-anchor`, `duration-relief`, `duration-cycle`, `ease-linear`, `ease-soft-out`, `ease-soft-in`, `ease-rise`, and a `scroll` family. New card: *Scène du cube*. No existing token value modified.

> **v1.8 — November 2026. Educational content reopened.** The *Isometria* channel (YouTube tutorials and explainer videos about AI and Claude, for the general public and TPE/PME teams) is back in scope, with its social pieces. The sections *Réseaux sociaux*, *Motion* (video) and *Contenu IA et marques tierces* are in force again, unchanged. Paid training stays paused. Developer writing still belongs to **sebc.dev**, a separate project with its own design system; the *Isometria Dev* channel and `dev.isometria.fr` stay removed. No token value modified.

> **v1.2 — May 2026.** Pivot from *Arborescence Digital* to **Isometria**. The wording "feuille du logo" is replaced by "projection isométrique du logo". **No color, typography, layout or component token has been modified.** The type system stays IBM Plex Sans / Nunito Sans / JetBrains Mono. The logo uses Space Grotesk Medium in a frozen SVG, independent from this system.

## Sources

This design system is built from a single source document maintained by the studio:

- **Design tokens — Isometria, v1.2 (May 2026)** — a full written brand/tech spec including color tokens, typographic scale, component rules, layout rules, and editorial voice. It is the source of truth: any divergence between the CSS and the document is resolved by updating the document, then aligning the CSS.

No external codebase, Figma, or photo assets are supplied. Since v1.6 the illustrations are real artwork: four reference plates, one per offer, generated as SVG (see *Illustrations*).

## Products represented

- **`isometria.fr`** — the studio site (home with the three faces of the offer and contact; offer pages and case studies when real ones exist), addressed to TPE/PME owners and managers. Theme `light`. Vouvoiement.
- **Client deliverables** — the websites, business apps and internal tools the studio builds for its clients start from this system's tokens and rules, then take the client's own brand where needed.
- **IRIS** — an internal app (referenced but undocumented).
- **Internal tools** — tooling for the studio itself.
- **The Isometria channel** — tutorials and explainer videos about AI and Claude on YouTube, with their Shorts and Reels and the Instagram / Facebook / LinkedIn posts and carousels, addressed to the general public and to TPE/PME teams. Theme `light`. Vouvoiement. Rules in *Réseaux sociaux*, *Motion* and *Contenu IA et marques tierces*.
- **Paused** — paid training.
- **Not Isometria** — developer content: it lives on **sebc.dev**, a separate project with its own theme.

Since v2.0 the reference for the studio site is the shipped homepage: its rules are in *Le site* (`guides/08-site.md`) and *Motion*, its captures in the asset group *Accueil*, its code in the site repository (`src/pages/index.astro`, `src/components/home/`, `src/styles/home.css`). `ui_kits/Landing.html` predates it and no longer sets the reference: do not build from it. IRIS and internal tools can be added later when their surfaces are defined.

## Index

- `README.md` — this file
- `colors_and_type.css` — core CSS variables (colors, type, semantic tokens, base reset)
- `assets/notes/SKILL.from-standalone.md` — Agent Skill manifest (for use in Claude Code or as a portable skill)
- `preview/` — static HTML cards used to populate the Design System tab
- `ui_kits/Landing.html` — former landing page, superseded in v2.0 by the shipped homepage; kept for the record, not a reference
- `assets/` — logo, icons, brand imagery (the wordmark is frozen SVG using Space Grotesk Medium; see Logo below)
- `fonts/` — webfonts (currently loaded via Google Fonts CDN; see note below)
- `tokens.json` — the tokens: colours, type styles, font sizes, line heights, weights, tracking, spacing, radii, the shadow and reading widths (compiled to `tokens.css`)
- `components/` — one folder per component, with its preview and guidelines; `components/bundle.css` holds the base rules, `components/bundle.js` the compiled UI kit
- `assets/Logos/` — the wordmark and the mark
- `guides/` — the sections of the brand book, in French: `01-publics-et-themes.md`, `02-reseaux-sociaux.md`, `03-motion.md`, `04-schemas.md`, `05-contenu-ia.md`, `06-illustrations.md`, `07-motion-video.md`, `08-site.md`
- `components/Themes`, `components/Schemas`, `components/Motion`, `components/Formats` — foundation cards for the two themes, the diagram grammar, the motion gestures and the social canvases
- `guides/08-site.md`, `components/SiteHeader`, `components/SiteSection`, `components/SiteFooter`, `assets/Accueil/` — since v2.0, the site as shipped: the section *Le site* (in French), the header, the section copy block, the footer and scroll hint, and ten reference captures of the homepage (desktop and mobile)
- `components/SceneCube` — since v1.9, a scrollable demo of the homepage cube scene (states, three-step transition, curves)
- `guides/06-illustrations.md`, `components/Illustration*`, `assets/Illustrations/` — since v1.6, the illustration style (in French), one card per reference plate, and the four plates as SVG files
- `archived/` — earlier versions of files set aside when the system was reorganized, including the former `ui_kits/sebc/` kit (since v1.7)

## Logo

The Isometria logo is a **frozen SVG**. It is *outside* the design system — it does not consume any font, color, or weight token at runtime. Two reasons:

1. The wordmark is set in **Space Grotesk Medium**, which is *not* part of the type system (Plex Sans / Nunito Sans / JetBrains Mono). Embedding it as live text would force the system to load a fourth family for a single mark; flattening it to SVG outlines avoids that.
2. The mark itself — an **isometric cube** (hexagon outline + three light inner edges, same ink, thinner stroke) — is a fixed glyph. It does not need to be regenerated, recolored, or restyled. The single permitted color is `teal-600` (`#2E6F6A`); on dark sauge surfaces, invert to `cream-100`.

Clearspace: at least the height of the wordmark's x-height around the lockup. Don't crop, don't gradient, don't outline.

**In the site header** (since v1.9) the official wordmark is inlined as SVG paths (no extra request), 28px high, ink letters with the sage cube standing in for the « o ». It is the same cube that turns on the homepage: the header shows it still, the page sets it in motion.

## Fonts

Fonts are loaded from **Google Fonts** CDN (IBM Plex Sans, JetBrains Mono — variable) and from **self-hosted variable WOFF/TTF** for Nunito Sans (in `fonts/`). This matches the spec's intent. If you need fully self-hosted WOFF2 binaries for offline work, download from Google Fonts or `@fontsource-variable` and drop into `fonts/` — no font substitution is needed.

**Space Grotesk** is *not* a system font. It only exists inside the logo SVG, flattened to outlines.

## Iconography

Iconography is handled via **Iconoir** (MIT, `npm i iconoir`, style `regular`) since v1.4, replacing Lucide. Lucide is everywhere (shadcn, Tailwind UI) and gave the studio no distinction; Iconoir's softer, slightly hand-drawn line is far less common and harmonises with IBM Plex Sans + Nunito Sans without competing.

- **Stroke only**, `currentColor` set to `--color-primary` (teal-600), width **1.5** (Iconoir's native value, inside the 1.5–1.75 range). Never filled icons.
- **Sizes**: 18px inline with UI text, 22–24px in cards, 32px for service illustrations.
- **Isometric signature**: Iconoir ships some thirty 3D icons (`cube`, `box-iso`, `box-3d-center`, `select-face-3d`…) that extend the logo's isometric cube. Reserve them for service pages and case-study covers, one per block at most; they count toward the three-accent limit per surface.

Unicode glyphs are used deliberately in two places the spec calls out:
- External-link suffix: `↗` (U+2197), 4px from the link text.
- Em-dash: `—` (U+2014) for incises, never a hyphen.

## Content fundamentals

> How copy is written for Isometria. These rules are non-negotiable for user-facing text; the brand's voice depends on them.

**Person.** First person singular — "je livre", "je construis", "mon studio". Isometria is an independent studio, not an agency — so never "nous" used as a plural of majesty. Consistency on this point matters.

**Tutoiement vs vouvoiement.**
- **Vouvoiement** on every surface addressed to clients and prospects: home, services, contact, case studies.
- No tutoiement on Isometria surfaces. Developer writing in the familiar register belongs to sebc.dev.

**Jargon.** Measured everywhere — when a technical term is unavoidable, it's explained once, inline, in passing. TPE/PME readers don't know Astro; they shouldn't have to. Talk about what the client gains (time, fewer errors, a site that brings contacts), not the stack.

**Casing.**
- **Sentence case everywhere**, including large H1s. Never Title Case. Never ALL CAPS.
- Only exception: micro-labels (badges, uppercase tags) with `letter-spacing: 0.08em` to compensate.

**Punctuation.**
- Apostrophes: always typographic `’` (U+2019), never straight `'`.
- Quotes: French guillemets « … » by default, English " … " only if a technical constraint forces it.
- Em-dash `—` (U+2014) for incises, always spaced: `mot — incise — reste`. Never a hyphen-minus.
- **Non-breaking spaces** before `;`, `:`, `?`, `!`, `%` and between value + unit (`7 ans`, `100 %`).

**Numbers.**
- One to nine spelled out in prose; 10+ as digits.
- Stats, prices, units, dates, years: always digits. `2026`, never `'26`.
- Percentages: digit + NBSP + `%`.

**Editorial accent — the signature move.** In headings, put **one** key word in `teal-600` + weight 600. It replaces the expressive italic that a more classical serif would have provided. One accent per heading, maximum. Never on a generic noun ("site", "projet"). Never in body prose except for important inline links. Never in italic — we don't use italic for emphasis; it's always weight + colour.

**Vibe.** Calm, deliberate, slightly artisanal, quietly confident. No exclamation marks. No emoji (see below). No marketing inflation — we don't say "revolutionary" or "amazing"; we say what we do and what it costs.

**Emoji.** Not used. The brand's warmth comes from the cream palette and the slightly geometric Plex Sans terminals, not from emoji. The one exception is the `↗` Unicode arrow for external links.

### Copy examples

Title examples with the sauge accent:
- "Astro, **enfin**, pour les sites de TPE." — `enfin` is the accent.
- "Vos devis, **prêts** en deux minutes." — `prêts` is the accent.

List-intro amorces (create rhythm at the start of bullets):
- **Zéro base de données.**
- **Zéro runtime serveur.**

## Visual foundations

> The visual grammar of the brand. When in doubt, return to these principles.

**Three guiding principles** (from the spec):
1. **Une seule couleur vive** — the teal sauge family. Everything else is neutral (cream / ink) or semantic (UI states only). Sauge is never gradient-blended, never paired with a second brand accent. The ochre helper tint (`color-appoint`, `color-appoint-text`, `color-appoint-soft`) is not a brand accent: it marks one thing per diagram or motion scene, always doubled by a label or a dashed stroke, and never appears in a heading, button, link or anywhere on the site outside a diagram.
2. **Three type families, three strict roles** — IBM Plex Sans for headings (signature), Nunito Sans for body (reading), JetBrains Mono for code (technical proof). No family leaves its role.
3. **The accented word is the only ornament** — one word per heading, in sauge `--color-accent-text`, weight 600. Never italic, never another accent color, never an underline in headings.

**Colour usage.**
- Palette = Teal sauge (10 stops) + Crème (10 stops), with `teal-600` as primary and `cream-900` as ink.
- **Accent restraint** — no more than three sauge highlights on any single surface. Beyond that the accent loses its pointing function.
- **Surfaces build by level, not palette.** Stacking order is `cream-200` (page) → `cream-100` (card) → `cream-50` (modal/popover). Each layer is *lighter* than the one it sits on. Never skip or invert.
- On a `teal-600` background, text uses `cream-100` / `cream-200`, **never `#FFFFFF`** (vibrates against the sauge). In components, use `color-on-primary`, which follows the theme.
- **Two themes.** `light` is the default and the only theme of the site. `dark` (ink-900 ground, cream-300 text, teal-300 as primary) is **kept in reserve**: it is no longer tied to developer content, and its use for Isometria is still to be defined (candidate uses: a client app's dark mode, a presentation or demo screen). Don't use it on the site. Build with the semantic tokens, never raw ramp stops, so a piece switches theme with `data-theme`. Surfaces still get lighter with each level in `dark`.
- System states (success olive, warning amber, danger red) are utility-only — never used in editorial copy.

**Imagery.** The spec doesn't specify photography style; the palette implies **warm, slightly desaturated, matte**. Not cool blue-tinted stock. Grain is acceptable; heavy filters are not. Full-bleed photography is rare; imagery tends to be framed inside surface cards with the same 0.5px hairline border.

**Backgrounds.** Flat cream (flat ink-900 in `dark`). No gradients. No patterns. No textures. The warmth comes from the paper-like `#FEFDF9` — that's already a decision, don't compound it.

**The site, since v2.0.** On `isometria.fr` the shipped homepage sets the rules, written in *Le site*: headings and buttons in IBM Plex Sans **600**, the menu in IBM Plex Sans 500, body copy at 17px/1.65 in `color-text-body`, JetBrains Mono for eyebrows, fact numbers, cube annotations and the footer, an ink primary button (`color-action`, white text), 1px page rules in `color-line-faint`, a 1200px container on a 12-column grid. The paragraphs below describe the general rules, which still apply to applications, client deliverables, video and social pieces, and to anything *Le site* does not cover.

**Type.** Three families, each with one role:
- **IBM Plex Sans** — H1 / H2 / H3, blockquotes, stat numbers. Weight **500** (titles use `--fw-medium`), except on the site, where headings, buttons and the menu follow *Le site*. Negative tracking (−0.005 to −0.025em) compensates the geometric openness at large sizes.
- **Nunito Sans Variable** — body, nav, labels, buttons, meta. Weight 400.
- **JetBrains Mono Variable** — code inline, code blocks, version tags, file paths. The single permitted exception: a *staged* numeric metric in body copy (e.g. `42 ms`, `95+`).

Only three weights exist: **400** (body), **500** (titles, links, active nav, buttons), **600** (the editorial accent word; on the site, headings and buttons). No 700, no 900 — they crush the quiet palette.

**Animation.** On the site and in client apps: **short, quiet, easing-out** — opacity and small 2–4px transforms, `duration-ui-fast` to `duration-ui` (120–200ms), `ease-out`. No spring bounces, no hover lifts above 2px, no diagonal slide-ins. Reduce-motion respected. **One sanctioned exception: the homepage cube scene** — the logo cube turns as the reader scrolls (one master GSAP timeline whose time is the scroll position), brings out one offer face per section, and the homepage alone has a light parallax (text columns ±70px, two drafting layers). Nothing else on the site rotates or uses parallax. Full rules, timings and the performance budget in *Motion*; video and social rules in *Motion vidéo*.

**Hover.** Buttons swap fill/border to the hover token (`teal-500`, `teal-100` wash on secondary). Links: the underline's `rgba(46,111,106,0.4)` goes to full opacity. Never opacity fades on hover — the spec's quietness means we want a colour signal, not a fog.

**Press/active.** Buttons swap to `teal-700`. No scale. No shadow drop.

**Borders.** **0.5px** hairlines on cards, inputs and badges, never 1px, except for `secondary` button outlines which are 1px `teal-600`. The site's page rules and its secondary button outline are 1px (`stroke-rule`, *Le site*). Colours: `cream-400` subtle, `cream-500` strong, `teal-600` primary emphasis.

**Shadows.** Nearly none. The one defined shadow — `0 2px 8px rgba(43, 45, 43, 0.06)` — is only used on hover over cards. No elevation chrome, no drop shadows on buttons, no inner shadows.

**Radii.** `4px` for tight tokens (inline code, tech tags), `7px` for buttons/inputs/standard cards, `10px` for raised cards / modals, `999px` (pill) for badge chips.

**Cards.** `cream-100` fill, `0.5px cream-400` border, `10px` radius, `1.5rem` padding. No shadow in rest state. Contrast against the `cream-200` page is *intentionally subtle* — do not amplify it.

**Transparency / blur.** Used sparingly: one spot is the link underline at `rgba(46,111,106,0.4)`. No backdrop-blur glass panels. No translucent overlays.

**Layout rules.**
- Body reading width caps at **600px** (~70–75 chars/line) — `--read-width-body`.
- Lead paragraphs (`text-lead` 18px) stay around **580px** — `--read-width-lead`.
- Hero H1 + sous-titre allow up to **760px** — `--read-width-hero`.
- Wide sections (cards grid, tables, gallery) go up to **940px** — `--read-width-wide`. No further, except the site's own container: **1200px** on a 12-column grid (`site-width`, *Le site*).
- Vertical rhythm: section-to-section = 0.5px rule + 3–4rem padding top/bottom. H2 gets `margin-top: 2.5rem, margin-bottom: 1rem`.

**Iconography.** See the dedicated section above — Iconoir, stroke 1.5, isometric set as signature, no emoji.

**Illustrations.** Each offer is explained by a real, recognisable object drawn in isometric projection: a desk workstation for websites, a card-index cabinet and a tablet for business apps, a sorting machine for automation, an assistant fed by the company's binders for AI. Many small precise parts on a base plate, four very pale cream face tones with a white top, a warm grey 0.75px line, **one sage piece per plate** (what the client gains, `teal-50`/`teal-100` fill with a `teal-400` outline) and at most three `cream-800` ink marks. No floor grid, no drop shadow, no hatching, no arrows or labels in the drawing. Illustrations are not diagrams: diagrams keep their own grammar (*Schémas*). Full rules in the *Illustrations* section.

**What the system is NOT.** Print/CMYK and merchandising are out of scope. Developer content is out of scope (it belongs to sebc.dev). Paid training is paused.

## Changelog

| Version | Date       | Change |
|---------|------------|--------|
| 1.0     | April 2026 | Création du système. Kreon en titres. |
| 1.1     | April 2026 | IBM Plex Sans replaces Kreon for headings. No other token modified. |
| 1.2 | May 2026 | Pivot to Isometria. "Feuille du logo" → "projection isométrique du logo" (§ Color/sauge intro). No color, type, layout, or component token modified. The type system stays IBM Plex Sans / Nunito Sans / JetBrains Mono; the logo uses Space Grotesk Medium frozen as SVG, independent of the system. |
| 1.3 | October 2026 | Mark redrawn as an explicit isometric cube: three light inner edges added to the hexagon (same ink, ~0.43× outline weight) in the mark, the lockups, the favicon and the cover motif. No token modified. |
| 1.4 | October 2026 | Icon set: Iconoir replaces Lucide (stroke 1.5, teal-600). Iconoir's isometric icons adopted as a signature for service pages and journal covers. Iconography card and preview updated. No token modified. |
| 1.5 | November 2026 | Scope extended to social content, motion and diagrams. Added: `dark` theme for developer content (ink ramp, per-theme semantic tokens, `color-on-primary`); ochre helper tint for diagrams and motion (`color-appoint*`); `screen-*` type styles for 1080px canvases; `duration`, `easing`, `stroke` and `format` token families; five brand-book sections under `guides/`; cards Themes, Schemas, Motion, Formats. No existing `light` value modified. |
| 1.5.1 | November 2026 | Two channels named: *Isometria* and *Isometria Dev*. Sites: `isometria.fr` (studio site and channel blog) and `dev.isometria.fr` (developer blog), replacing the earlier `isometria.dev` mention. Series labels removed; `screen-label` kept as a micro-label. The « artisanal » copy example removed. |
| 1.6 | November 2026 | Illustrations added: the validated style (real objects, pale cream volumes, one sage piece per plate, no grid or shadow), section `guides/06-illustrations.md`, four reference plates (Site web, App métier, Automatisation, IA) as cards and SVG assets. No token modified. |
| 1.7 | November 2026 | Scope refocused on the TPE/PME offer (websites, business apps, automations and tools, AI). Isometria Dev and `dev.isometria.fr` removed (developer content moves to sebc.dev). `ui_kits/sebc/` archived. Social content, video motion and AI content sections marked as paused. `dark` theme kept, use to be defined. No token value modified. |
| 1.8 | November 2026 | Educational content reopened for the Isometria channel (AI and Claude, for the general public and TPE/PME). Pause lifted on the social content, video motion and AI content sections and on the Motion and Formats cards; their rules are unchanged. Paid training stays paused. No token value modified. |
| **1.9** | **November 2026** | **Motion rebuilt from the homepage cube prototype (v23): cube scene (five states, three-step transition, face reliefs, homepage-only parallax, smooth scrolling, ambient grid pulses, reduced motion, Lighthouse budget). November motion draft merged (*dévoilement* replaces *assemblage*, fourth gesture *le fonctionnement*). New section *Motion vidéo* (`guides/07-motion-video.md`). New tokens: `duration-retract`, `duration-anchor`, `duration-relief`, `duration-cycle`, `ease-linear`, `ease-soft-out`, `ease-soft-in`, `ease-rise`, `scroll` family. New card *Scène du cube*; Motion card updated. Logo: header usage noted. No existing token value modified.** |
| **2.0** | **November 2026** | **The shipped homepage becomes the norm of the site. New section *Le site* (`guides/08-site.md`): five-part structure, 1200px 12-column grid, site type (headings and buttons 600, menu in IBM Plex Sans 500, body 17px), ink primary button, JetBrains Mono as the site's drafting voice, 1px page rules, focus ring, mobile behaviour, writing rules, known gaps in the code. The offer is stated as three faces; business apps and automations are one offer. New tokens: `color-text-body`, `color-action`, `color-action-hover`, `color-on-action`, `color-line`, `color-line-faint`, `color-line-mid`, `stroke-rule`, `site` family, *Site* type group. New cards *En-tête du site*, *Bloc de section*, *Pied de page et indice de défilement*; *Buttons* shows the site and application registers. New asset group *Accueil*. `ui_kits/Landing.html` superseded. General rules unchanged outside the site. No existing token value modified.** |
