# Logo

Isometria wordmark + isometric mark, on cream / sage / sunken.

The Isometria logo is a **frozen SVG**. It is *outside* the design system — it does not consume any font, color, or weight token at runtime. The files are in `assets/Logos/`.

- The wordmark is set in **Space Grotesk Medium**, which is *not* part of the type system (Plex Sans / Nunito Sans / JetBrains Mono).
- The mark itself — an **isometric cube**: hexagon outline plus three light inner edges, same ink, thinner stroke — is a fixed glyph. The single permitted color is `teal-600` (`#2E6F6A`); on dark sauge surfaces, invert to `cream-100`.
- Clearspace: at least the height of the wordmark's x-height around the lockup. Don't crop, don't gradient, don't outline.
- In the site header: the wordmark is inlined as SVG paths, 28px high, the sage cube in place of the « o ». The same cube turns on the homepage (card « Scène du cube »); in the header it never moves.
