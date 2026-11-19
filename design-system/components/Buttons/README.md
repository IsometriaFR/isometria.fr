# Buttons

Two registers since v2.0: the site's buttons, taken from the homepage, and the application buttons, unchanged.

## Site (`isometria.fr`)

- **Primary.** Ink fill `color-action`, text `color-on-action` (`#FFFFFF`), style `site-button` (IBM Plex Sans 600, 16px, line-height 1), padding 15px 22px, radius `radius-md` (7px), no border. One per screen.
- **Secondary.** Transparent, text `color-text`, an inner 1px outline in `color-line`. Same size. It accompanies the primary button, never replaces it.
- **Hover.** Primary swaps to `color-action-hover`. No scale, no shadow, no opacity fade.
- **Focus.** A solid 2px `color-primary` outline, offset 3px.
- Never fill a site button with sauge. The sauge belongs to the cube and to markers.
- The primary label on the site is always « Parlons de votre projet ».

## Applications and client deliverables

- **Primary / secondary / ghost** in sauge, Nunito Sans 500, 14px.
- **Hover.** Buttons swap fill/border to the hover token (`teal-500`, `teal-100` wash on secondary).
- **Press/active.** Buttons swap to `teal-700`. No scale. No shadow drop.
- **Borders.** 0.5px hairlines, except the `secondary` outline which is 1px `teal-600`.
- **Radii.** `7px` for buttons/inputs/standard cards.
- On a `teal-600` background, text uses `cream-100` / `cream-200`, **never `#FFFFFF`** (vibrates against the sauge).

## Both

- **Shadows.** No elevation chrome, no drop shadows on buttons, no inner shadows.
- What you provide: the label, and a link target or an action.

The preview draws these with its own styles: `components/bundle.js` exports no component for them. Full site rules: section « Le site ».
