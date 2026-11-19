# Links

Links & nav — inline underline + nav without.

- **Hover.** Links: the underline's `rgba(46,111,106,0.4)` goes to full opacity. Never opacity fades on hover.
- **Transparency.** One spot is the link underline at `rgba(46,111,106,0.4)`.
- External-link suffix: `↗` (U+2197), 4px from the link text.
- The editorial accent is never in body prose except for important inline links.
- **Site menu (since v2.0).** On `isometria.fr` the menu is set in style `site-nav` (IBM Plex Sans 500, 14px), `color-text-body`, and turns `color-primary` on hover and focus; see the card « En-tête du site ». The `.nav-link` rule below stays for applications.
- Inline links take the base `a` rule in `components/bundle.css`; nav links take `.nav-link` (`.nav-link.is-active` when active).

The preview draws its examples with its own styles; `components/bundle.js` exports no component for them.
