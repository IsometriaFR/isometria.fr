# Card

cream-100 → cream-50 layering.

- **Cards.** `cream-100` fill, `0.5px cream-400` border, `10px` radius, `1.5rem` padding. No shadow in rest state. Contrast against the `cream-200` page is *intentionally subtle* — do not amplify it.
- **Surfaces build by level, not palette.** Stacking order is `cream-200` (page) → `cream-100` (card) → `cream-50` (modal/popover). Each layer is *lighter* than the one it sits on. Never skip or invert.
- **Shadows.** Nearly none. The one defined shadow — `0 2px 8px rgba(43, 45, 43, 0.06)` — is only used on hover over cards.
- **Imagery** tends to be framed inside surface cards with the same 0.5px hairline border.

The preview draws these with its own styles: `components/bundle.js` exports no component for them.
