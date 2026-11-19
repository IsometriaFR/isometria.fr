# Code

Code inline & block — JetBrains Mono · limited syntax.

- **JetBrains Mono Variable** — code inline, code blocks, version tags, file paths. The single permitted exception: a *staged* numeric metric in body copy (e.g. `42 ms`, `95+`).
- **Radii.** `4px` for tight tokens (inline code, tech tags).
- Inline code and code blocks take the base rules for `code` and `pre` in `components/bundle.css`; `.tok-kw`, `.tok-str` and `.tok-com` colour keywords, strings and comments.

The preview draws its examples with its own styles; `components/bundle.js` exports no component for them.
