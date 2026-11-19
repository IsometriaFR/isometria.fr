# Isometria · UI kit — studio site (isometria.dev)

A hi-fi click-through recreation of the studio website. Covers the core surfaces a prospect touches: home, services, a journal index, and a single-article layout.

Built as small JSX components composed inside `index.html`. Visual tokens come straight from `../../colors_and_type.css` (loaded at the top of `index.html`); components only express structure and layout.

## Files

- `index.html` — the interactive kit (tab between Home / Services / Journal / Article)
- `Header.jsx` — top nav with logo lockup
- `Footer.jsx` — studio signature + minimal nav
- `Hero.jsx` — home hero with sauge accent in title + availability badge
- `Services.jsx` — three service cards
- `Stats.jsx` — 4-up stat row (Kreon numbers)
- `Journal.jsx` — journal index with article cards
- `Article.jsx` — long-form article with blockquote, code, stack tags
- `Primitives.jsx` — Button, Badge, TagTech, Card (shared)

## Caveats

- **No real logo** was supplied; the lockup uses a provisional monochrome mark. Flagged in-page.
- **Project case studies** are referenced with placeholder copy. The charte doesn't enumerate real clients, so imagery is suggestive.
- **Iconography** — the set is Iconoir since v1.4 (stroke 1.5, see the Iconography card). The kit itself does not draw icons yet; add them from `iconoir` when a screen needs one.
