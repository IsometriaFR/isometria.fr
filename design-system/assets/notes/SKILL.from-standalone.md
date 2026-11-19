---
name: isometria-design
description: Use this skill to generate well-branded interfaces and assets for Isometria, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, logo, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, copy assets and read the rules to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- **Core tokens** live in `colors_and_type.css` — link or import this file first.
- **Signature move**: in any heading, put one keyword in `color: teal-600 (#2E6F6A)` + `font-weight: 600`. Never more than one accent per heading. Never in italics.
- **Three voices**: IBM Plex Sans (titles), Nunito Sans (body/UI), JetBrains Mono (code, tech tags).
- **Three weights only**: 400 (body), 500 (titles, links, buttons), 600 (the accent word).
- **Surfaces** stack `cream-200` (page) → `cream-100` (card) → `cream-50` (modal). Never invert.
- **Borders** are 0.5px hairlines (1px only on secondary button outlines).
- **Logo** lives in `assets/`: `isometria-wordmark.svg` (lockup, Space Grotesk Medium frozen as outlines + isometric mark in `teal-600`), `isometria-mark.svg` (mark only, hexagon outline 32×32 — also the favicon). Inverted `cream-100` versions exist for use on `teal-600` surfaces. Never recolor outside teal-600 / cream-100. The wordmark's font is **not** part of the type system.
- **Copy**: first person singular ("je"), vouvoiement for clients, tutoiement only in the journal. Sentence case everywhere. No emoji. NBSP before `:`, `;`, `?`, `!`, `%`.
- **UI kit** at `ui_kits/sebc/` shows home/services/journal/article layouts.
