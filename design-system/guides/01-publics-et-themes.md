# Public et thèmes

Isometria parle à un seul public : les dirigeants et les équipes de TPE/PME qui ont besoin d’un site, d’une application métier, d’un outil ou d’une automatisation, ou d’une solution d’IA concrète. Un seul site, `isometria.fr`, un seul thème pour le site : `light`. La chaîne Isometria, elle, explique l’IA et Claude au grand public comme aux TPE/PME, dans le même thème et avec le même vouvoiement.

| | Isometria |
|---|---|
| Public | Dirigeants et équipes de TPE/PME |
| Site | `isometria.fr` |
| Chaîne | Isometria — grand public et TPE/PME, tutoriels et vidéos explicatives sur l’IA et Claude |
| Thème du site | `light` — crème, encre, sauge |
| Adresse | Vouvoiement |
| Jargon | Expliqué une fois, en passant |
| JetBrains Mono | Une mesure mise en scène ; sur le site, aussi les surtitres, numéros, annotations et pied de page (section « Le site ») |

Le contenu pour développeurs n’est plus porté par Isometria : il vit sur sebc.dev, un projet séparé avec son propre thème. L’ancienne chaîne « Isometria Dev » et `dev.isometria.fr` n’existent plus.

## Le thème clair

- `isometria.fr` est en `light`, quel que soit le lecteur, sur toutes ses pages.
- Posez `data-theme="light"` sur la racine. N’écrivez jamais une couleur de la rampe en dur : passez par les tokens sémantiques (`color-background`, `color-text`, `color-primary`…).

## Le thème sombre, en réserve

Le thème `dark` est conservé dans le système, mais il n’est plus lié au contenu pour développeurs. Son usage pour Isometria reste à définir. Pistes envisagées : le mode sombre d’une application livrée à un client, un écran de démonstration ou de présentation. D’ici là :

- ne l’utilisez pas sur le site ;
- une pièce tient dans un seul thème du début à la fin ;
- construisez toujours avec les tokens sémantiques, pour qu’une pièce puisse passer en sombre avec `data-theme="dark"` le jour où l’usage sera fixé.

## Ce qui change en sombre

- Les surfaces s’empilent toujours du plus foncé au plus clair : `color-background` (`color-ink-900`) → `color-surface` (`color-ink-800`) → `color-surface-raised` (`color-ink-700`). Les blocs de code s’enfoncent dans `color-surface-sunken` (`color-ink-950`).
- Le texte est en `color-text` (`color-cream-300`), jamais en `#FFFFFF`. Le fond n’est jamais un noir pur.
- `color-primary` devient `color-teal-300`. Sur un aplat `color-primary`, le texte prend `color-on-primary` — crème en clair, encre en sombre.
- Le mot accentué passe en `color-accent-text` (`color-teal-300`), toujours en graisse 600, toujours un seul par titre.
- Le logo passe à sa version inversée (`assets/Logos/isometria-mark-inverted.svg`, `isometria-wordmark-inverted.svg`).
- Les filets restent discrets : `color-border` pour séparer, `color-border-strong` dès qu’un contour porte du sens (champ, case, nœud de schéma).

## Ce qui ne change pas

- Une seule couleur vive, la sauge. La teinte d’appoint ocre n’existe que dans les schémas (voir Schémas).
- Trois graisses : 400, 500, 600. Sur le site, les titres et les boutons sont en 600 (section « Le site »). Casse de phrase partout. Pas d’emoji, pas de point d’exclamation.
- Trois accents sauge au plus par surface.
