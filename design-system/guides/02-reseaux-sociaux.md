# Réseaux sociaux

YouTube, Instagram, Facebook et LinkedIn reçoivent les mêmes pièces, découpées dans cinq canevas. Tous ont un petit côté de 1080 px, sauf la miniature : les styles `screen-*` valent donc partout sans recalcul.

## Canevas

| Canevas | Taille | Tokens | Usage |
|---|---|---|---|
| 16:9 | 1920 × 1080 | `format-16x9-w`, `format-16x9-h` | Vidéo YouTube, vidéo LinkedIn et Facebook horizontale |
| 9:16 | 1080 × 1920 | `format-9x16-w`, `format-9x16-h` | Shorts, Reels Instagram et Facebook |
| 4:5 | 1080 × 1350 | `format-4x5-w`, `format-4x5-h` | Publication et carrousel Instagram, Facebook, LinkedIn |
| 1:1 | 1080 × 1080 | `format-1x1` | Publication carrée, avatar |
| Miniature | 1280 × 720 | `format-thumb-w`, `format-thumb-h` | Miniature YouTube |

## Marges de sécurité

- 16:9, 4:5, 1:1 et miniature : rien d’essentiel à moins de `safe-margin` (72 px) du bord ; en 16:9, `safe-16x9-x` (96 px) à gauche et à droite.
- 9:16 : les applications recouvrent le haut, le bas et le bord droit. Gardez titres, schémas et logo dans la zone libre : `safe-9x16-top` (288 px), `safe-9x16-bottom` (672 px), `safe-9x16-left` (65 px), `safe-9x16-right` (192 px). Le fond, lui, remplit tout le canevas.
- 4:5 : les grilles de profil recadrent au centre. Le titre tient dans le carré central de 1080 px.
- Miniature : laissez libre le coin inférieur droit, où YouTube pose la durée.

## Typographie à l’écran

- Titre de miniature ou carton d’ouverture : `screen-display`. Titre de scène ou de diapositive : `screen-title`. Sous-titre : `screen-subtitle`.
- Texte courant : `screen-body`. Légende, source, numérotation : `screen-caption`. Rien en dessous de `screen-caption` sur un canevas de 1080 px ; en 9:16, rien d’important en dessous de `screen-body`.
- Micro-étiquette (numéro d’épisode, catégorie) : `screen-label`, en capitales, interlettrage 0,08 em. Jamais pour nommer le public visé.
- Code et commandes : `screen-code`, sur `color-surface-sunken`.
- Les titres restent en graisse 500. Si un titre manque de présence, raccourcissez-le ou agrandissez-le — ne l’engraissez pas.

## Composer une image

- Une idée par écran. Un titre, un objet (un schéma, un pictogramme isométrique, une capture encadrée), rien d’autre.
- Fond en aplat `color-background`. Pas de dégradé, pas de texture, pas de photo plein cadre.
- Un mot accentué par titre, trois accents sauge au plus par écran.
- La marque seule (le cube) signe les contenus, à 64 px, dans un angle de la zone libre. Le logotype complet n’apparaît qu’au carton de fin, à la bannière et à l’avatar.
- Format sans visage : pas de portrait, pas de photo de banque d’images. Ce qui se montre, c’est l’écran, le schéma, le résultat.

## Miniatures

- Cinq mots au plus, en `screen-display`, calés à gauche.
- Un seul objet à droite : pictogramme isométrique Iconoir agrandi ou fragment de schéma.
- La marque en bas à gauche.
- Thème `light`.

## Carrousels

- Première diapositive : le titre seul. Dernière : une seule action.
- Numérotation en `screen-caption`, JetBrains Mono, au format `01 / 07`, en bas à droite.
- Une diapositive, une phrase ou un schéma — jamais les deux en concurrence.

## Avatar et bannières

- Avatar : la marque en `color-teal-600` sur `color-cream-200`, centrée, sur 60 % au plus du diamètre du cercle.
- Bannières : logotype, une phrase en `screen-subtitle`, fond en aplat. Pas de liste de services.

## Écrire les légendes

Les règles éditoriales du système valent pour les légendes et descriptions : première personne du singulier, casse de phrase, guillemets français, espaces insécables, pas d’emoji, pas de point d’exclamation, pas d’inflation — on dit ce qu’on montre.
