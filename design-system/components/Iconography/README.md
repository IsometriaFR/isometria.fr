# Iconography

Iconography — Iconoir, stroke 1.5, teal-600, with its isometric set as a signature.

**Iconoir** (MIT, `npm i iconoir`, or `iconoir-react` / `iconoir-vue`) replaces Lucide since v1.4. Its drawing is softer and less ubiquitous than Lucide, and its native 1.5 stroke sits inside the system's 1.5–1.75 range. Use the `regular` style only.

**Rules**
- Stroke only, never filled icons. Colour `currentColor`, set to `--color-primary` (teal-600) or `--color-text-soft` for secondary UI.
- Stroke width 1.5 at 20–24px. Do not go below 1.25 or above 1.75.
- Sizes: 18px inline with 14px UI text, 22–24px in cards, 32px for service illustrations.
- **Isometric signature** — Iconoir's 3D set (`cube`, `box-iso`, `box-3d-center`, `select-face-3d`…) echoes the logo's cube. Reserve it for service pages and journal covers, one per block at most. It counts toward the three-accent limit per surface.
- Never pair the logo mark and an isometric icon side by side at the same size: the mark stays the reference.

Unicode glyphs are used deliberately in two places the spec calls out:
- External-link suffix: `↗` (U+2197), 4px from the link text.
- Em-dash: `—` (U+2014) for incises, never a hyphen.

The preview draws these with its own styles: `components/bundle.js` exports no component for them.
