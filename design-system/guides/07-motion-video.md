# Motion vidéo

> **v1.9.** Règles des vidéos YouTube et des clips pour les réseaux, reprises du brouillon Motion de novembre. Les durées, les courbes et les quatre gestes sont ceux de la section « Motion ». Les courbes douces et la rotation de la scène du cube ne servent pas en vidéo.

## Deux discours, un seul langage visuel

Le site vend des services. La chaîne YouTube et les réseaux apprennent à se servir de Claude et de l’IA, pour les particuliers, les TPE et les PME, avec l’ambition d’être une référence en français. Ils partagent les couleurs, la typographie, les gestes et les planches, mais pas le discours.

| | Site | Chaîne et réseaux |
|---|---|---|
| Public | Dirigeants de TPE et de PME | Particuliers, TPE, PME |
| Promesse | Un outil sur mesure qui démultiplie votre métier | Comprendre et savoir faire soi-même |
| Ce qu’on montre | L’outil livré au client, le gain | La méthode pas à pas, l’écran réel de Claude, l’erreur et sa correction |
| Fin de vidéo | Prendre rendez-vous | La vidéo suivante, l’abonnement, la ressource à télécharger |
| Interdit | — | Argumentaire commercial, « Parlons de votre projet », offres et tarifs d’Isometria dans la vidéo |

Une seule passerelle : la description de la vidéo et la page « À propos » de la chaîne peuvent mentionner les services. La vidéo, elle, reste pédagogique.

## Vidéo YouTube

La chaîne apprend à utiliser Claude et l’IA. Une vidéo montre une méthode sur un vrai écran, explique pourquoi elle marche, et laisse le spectateur capable de la refaire. Elle se construit avec de vraies captures et les planches, jamais avec des images de banque.

- **Format.** 16:9, 1920 × 1080, 30 i/s, MP4 H.264. Fond `cream-200`. Sous-titres incrustés en `screen-caption` (32 px), graisse 600, encre sur un bandeau crème, centrés en bas au-dessus de `safe-margin`. Marges latérales `safe-16x9-x`.
- **Générique d’ouverture (3 s au plus).** Le cube se trace, le mot-symbole se déroule, puis le titre de l’épisode, mot par mot, avec son mot accentué. Un repère de série en JetBrains Mono au-dessus (`CLAUDE · 01`, `IA AU QUOTIDIEN · 04`). Pas de jingle, pas de promesse commerciale.
- **Annonce du résultat.** Dans les 15 premières secondes, on montre ce que le spectateur saura faire à la fin (le résultat à l’écran), avant d’expliquer.
- **Titre de chapitre.** Un numéro en JetBrains Mono (`01`, `02`), le titre en `screen-title`, apparu mot par mot. Les chapitres deviennent les chapitres YouTube de la description.
- **Écran de Claude.** La capture est posée à plat dans un cadre crème à coins `radius-md`, jamais inclinée en 3D. On ne la recadre que par des mouvements de cadre lents (`duration-move` ou plus, `ease-in-out`). Le détail à regarder est entouré d’un contour `teal-400` qui se trace. Le curseur clique sans onde.
- **Prompt à l’écran.** Un prompt à recopier est affiché en JetBrains Mono (`screen-code`) dans un bloc `surface` à bord `border`, ligne par ligne. Seul ce bloc peut s’écrire au fil de la frappe. Le mot clé du prompt passe en sauge.
- **Avant / après.** Une mauvaise réponse et une bonne réponse côte à côte, la mauvaise en `text-muted`, la bonne en encre. Le changement de prompt qui fait la différence est le seul élément en sauge.
- **Planches.** Elles expliquent un concept sans écran : comment Claude lit un document, ce qu’est un projet, un agent, une automatisation. La planche joue son geste 4. De nouvelles planches seront nécessaires pour ces concepts.
- **Carte « À retenir ».** En fin de chapitre ou de vidéo, trois points au plus, apparus mot par mot, tenus au moins `duration-hold` plus 300 ms par mot.
- **Bandeau de nom.** En bas à gauche, dans les marges : nom en `screen-label`, rôle en `screen-caption`. Il apparaît sans bouger, tient au moins 4 s.
- **Trame type d’un tutoriel.** Le résultat (ce qu’on saura faire), le pourquoi (une planche ou un schéma), la méthode pas à pas sur l’écran de Claude, l’erreur fréquente et sa correction, « À retenir », la vidéo suivante.
- **Générique de fin (5 à 20 s).** Le logo, la vidéo suivante et l’abonnement dans les zones d’écran de fin de YouTube laissées libres à droite. Pas d’appel à prendre rendez-vous.
- **Miniature.** Image fixe de 1280 × 720 : une capture de Claude ou une planche à gauche, trois à cinq mots en IBM Plex Sans 600 à droite, un seul mot en sauge. Pas de visage surpris, pas de flèche rouge, pas de « RÉVOLUTION ».

## Clips pour les réseaux sociaux

- **Formats.** 9:16 (1080 × 1920) pour Shorts, Reels et LinkedIn vidéo ; 4:5 (1080 × 1350) pour le fil LinkedIn et Instagram ; 1:1 en dernier recours.
- **Zone sûre.** En 9:16, fond seul dans `safe-9x16-top` (288 px), `safe-9x16-bottom` (672 px) et `safe-9x16-right` (192 px), où l’application pose ses boutons et légendes ; marge gauche `safe-9x16-left`. En 4:5 et 1:1, `safe-margin` tout autour.
- **Durée.** 15 à 45 s. Une seule astuce : un prompt, une fonction de Claude, une erreur à éviter.
- **Accroche.** La première seconde montre déjà le résultat ou le problème : l’écran de Claude, le prompt, la planche en train de fonctionner, jamais un logo. Le générique est remplacé par le logo en fin de clip.
- **Texte.** Sous-titres toujours incrustés. Titre en `screen-subtitle` (52 px) au moins en 9:16. Les durées ne raccourcissent pas : on coupe du propos.
- **Boucle.** Un clip peut finir sur l’image où il a commencé, pour boucler sans saut.
- **Visuel fixe.** Un carrousel ou une image se fait avec les mêmes planches à l’arrêt et la même typographie.

## Rythme

- Un écran de texte tient au moins `duration-hold`, plus 300 ms par mot.
- Entre deux scènes : coupe franche, ou fondu sur `duration-scene`. Pour changer de chapitre, la scène entière se dévoile le long d’un axe isométrique sur `duration-move`, sans glissement en diagonale.
- En formats courts, on raccourcit le propos, pas les durées.

## HyperFrames

Les vidéos YouTube et les clips sont faits avec [HyperFrames](https://hyperframes.heygen.com) (HeyGen, open source, Apache 2.0). Une vidéo est une page HTML animée avec GSAP ; HyperFrames la rejoue image par image dans Chrome sans écran et l’encode avec FFmpeg. On écrit donc les vidéos avec les mêmes polices, couleurs et SVG que le site, et on les fait écrire par Claude Code avec les skills HyperFrames.

### Le projet type

Le projet de référence est dans le dossier du projet `motion/isometria-video/` (gabarits 16:9 et une vidéo d’exemple de 19 s).

```
isometria-video/
  frame.md              la marque pour HyperFrames, tirée de ce design system
  assets/
    logo.svg            mot-symbole et cube, depuis le groupe Logos
    fonts/              IBM Plex Sans, Nunito Sans, JetBrains Mono
    planches/           les SVG du groupe Illustrations
  compositions/
    generique.html      ouverture : le cube se trace, le titre s’assemble
    chapitre.html       numéro + titre de chapitre
    bandeau.html        nom et rôle
    fin.html            logo, adresse, zones d’écran de fin
    planche-auto.html   la trieuse qui fonctionne (geste 4)
  videos/
    2026-xx-offre-automatisation.html   une vidéo = des compositions posées sur des pistes
```

- **`frame.md`** est la source de la marque pour HyperFrames : en tête, les valeurs exactes (couleurs, polices, graisses) ; en dessous, les règles de cette section, dont « À ne jamais faire ». On le nomme dans chaque demande à Claude pour qu’il prenne ces valeurs au lieu d’improviser. Quand le design system change, on met `frame.md` à jour puis on reconstruit les gabarits.
- **Un gabarit par format.** Les dimensions, la cadence et la durée totale ne peuvent pas être des variables : `generique.html` existe en 16:9, 9:16 et 4:5, avec les mêmes timings.
- **Variables.** Ce qui change d’une vidéo à l’autre est déclaré dans `data-composition-variables` : le titre, le mot accentué, le numéro de chapitre, le nom du bandeau, la planche. La couleur d’accent n’est pas une variable : elle reste `teal-600`.
- **Sous-compositions.** Une vidéo pose les gabarits avec `data-composition-src`, `data-start`, `data-duration`, `data-track-index` et leur passe leurs textes par `data-variable-values`.

### Règles d’écriture

- **Courbes.** `power2.out`, `power2.inOut`, `power2.in` et `none` (le geste 4), rien d’autre. Les durées sont celles des tokens, converties en secondes (`duration-enter` = 0.5).
- **Tout passe par la timeline.** Une timeline GSAP en pause, enregistrée dans `window.__timelines` : HyperFrames la positionne lui-même à chaque image. Pas de `requestAnimationFrame`, de `Date.now()`, de minuterie ni de `Math.random()` sans graine. Les transitions CSS du site ne servent pas en vidéo.
- **Planches animées.** La boucle `requestAnimationFrame` du site est réécrite en tween : la position d’une feuille est une fonction du temps (`ease: "none"`, `repeat` fini). Le dessin SVG, lui, est repris tel quel.
- **Durée connue.** Chaque composition a une fin. Une boucle se répète un nombre de fois fixé, calé sur `duration-cycle`.
- **Tout est local.** Polices, logos et planches sont dans `assets/` ; rien n’est chargé pendant le rendu, pas même Google Fonts.
- **Polices.** JetBrains Mono est fournie par HyperFrames. IBM Plex Sans et Nunito Sans ne le sont pas : chaque composition les déclare en `@font-face` vers `assets/fonts/`.
- **Taille minimale.** HyperFrames refuse le texte de lecture sous 28 px en 1080 : `screen-label` passe à 28 px en vidéo. Les micro-textes des planches sont décoratifs (`data-layout-ignore`).
- **Fond.** `cream-200` sur les vidéos. Les gabarits destinés à un logiciel de montage laissent le fond vide pour sortir en transparence.

### Commandes

| Étape | Commande |
|---|---|
| Installer les skills dans Claude Code | `claude plugin marketplace add heygen-com/hyperframes` puis `claude plugin install hyperframes@hyperframes` |
| Créer un projet | `npx hyperframes init isometria-video` |
| Prévisualiser | `npx hyperframes preview` |
| Vérifier avant rendu | `npx hyperframes lint` |
| Vidéo YouTube | `npx hyperframes render --composition videos/… --quality high --output renders/….mp4` |
| Clip réseaux | même commande sur la composition 9:16 ou 4:5 |
| Gabarit transparent pour le montage | `--format mov` (ProRes 4444 avec alpha) ou `--format webm` |
| Plusieurs versions d’un gabarit | `--batch titres.json --output "renders/{name}.mp4"` |

Prérequis : Node.js 22 ou plus et FFmpeg. 30 i/s par défaut, sauf indication `data-fps` ou `--fps`.
