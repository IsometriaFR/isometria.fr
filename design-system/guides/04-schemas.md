# Schémas

Un schéma Isometria montre comment une chose marche, avec le moins de signes possible. Deux registres, une seule grammaire.

## Deux registres

- **À plat** — pour un flux, une suite d’étapes, un avant/après. Nœuds rectangulaires, connecteurs horizontaux et verticaux. C’est le registre par défaut.
- **Isométrique** — pour une vue d’ensemble, un empilement de couches, une architecture. Il prolonge le cube du logo ; réservez-le à un schéma par vidéo ou par page.

## Grammaire

- **Nœud.** Rectangle à coins `radius-md`, fond `color-surface`, contour `color-border-strong`. Le nœud dont on parle prend un contour `color-primary`.
- **Connecteur.** Trait `color-text-soft`, droit ou coudé à angle droit — jamais de courbe libre. Pointe en chevron ouvert, de la même épaisseur que le trait ; pas de triangle plein.
- **Pointillé.** Ce qui est facultatif, asynchrone ou « avant ». Tiret et intervalle égaux à quatre fois l’épaisseur du trait.
- **Étiquette.** Nunito Sans, `text-sm` sur le site, `screen-caption` à l’écran. Les identifiants techniques — nom de fichier, commande, clé — en JetBrains Mono. Le texte reste toujours horizontal, même en isométrique.
- **Groupe.** Un fond `color-primary-soft` sans contour, coins `radius-lg`.

## Épaisseurs

| Token | Valeur | Usage |
|---|---|---|
| `stroke-hair` | 0.5px | Filets du site |
| `stroke-line` | 1.5px | Traits de schéma et pictogrammes sur le site |
| `stroke-screen-hair` | 2px | Filets sur un canevas de 1080 px |
| `stroke-screen-line` | 3px | Traits de schéma sur un canevas de 1080 px |
| `stroke-screen-strong` | 5px | Le chemin principal, le contour du cube à l’écran |

## Couleur

- **Encre et crème** portent la structure : nœuds, connecteurs, étiquettes.
- **Sauge** (`color-primary`) désigne le sujet : le chemin principal, le nœud dont on parle. Trois accents au plus.
- **Ocre d’appoint** désigne une seule chose par schéma — le point de vigilance, le second acteur ou l’« après ». Trait et pictogramme en `color-appoint`, texte en `color-appoint-text`, fond en `color-appoint-soft`.
- L’ocre ne porte jamais l’information seul : doublez-le d’une étiquette ou d’un pointillé.
- L’ocre ne sort pas des schémas et du motion. Jamais dans un titre, un bouton, un lien, un badge, ni sur le site hors schéma. Jamais de troisième teinte.
- Les couleurs d’état (succès, alerte, danger) restent des couleurs d’interface : pas dans un schéma.

## Isométrique

- Trois axes : la verticale, et deux obliques à 30° de l’horizontale. Aucune perspective, aucun point de fuite.
- Trois faces visibles, en aplat : dessus `color-surface-raised`, gauche `color-primary-soft`, droite `color-surface`. Pas de dégradé, pas d’ombre portée.
- Contour `color-primary`, arêtes intérieures plus fines, comme sur le logo.
- L’unité est le cube du logo. Une couche est un cube aplati ; un empilement se lit de bas en haut.

## Densité

- Sept nœuds au plus par écran de vidéo, douze dans un schéma fixe. Au-delà, coupez en deux schémas.
- En vidéo, le schéma se construit dans l’ordre de lecture, un nœud puis son connecteur (voir Motion).
- Chaque schéma a un titre et, s’il affiche un chiffre, sa source en `screen-caption`.
