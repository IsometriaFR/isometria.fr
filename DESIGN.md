---
name: Isometria
description: Système visuel monochrome sauge, crème et encre du studio Isometria, thème clair.
colors:
  primary: '#2E6F6A'
  primary-hover: '#3D807A'
  primary-active: '#265A56'
  primary-soft: '#DCE9E7'
  accent-text: '#2E6F6A'
  on-primary: '#FEFDF9'
  background: '#FEFDF9'
  surface: '#FFFFFE'
  surface-raised: '#FFFFFF'
  surface-sunken: '#FAF7EE'
  border: '#F1EDE0'
  border-strong: '#DCD6C4'
  text: '#2B2D2B'
  text-soft: '#6B6B62'
  text-muted: '#ADA896'
  teal-50: '#F0F5F4'
  teal-100: '#DCE9E7'
  teal-200: '#B9D3D0'
  teal-300: '#8FB8B3'
  teal-400: '#5A9792'
  teal-500: '#3D807A'
  teal-600: '#2E6F6A'
  teal-700: '#265A56'
  teal-800: '#1B4441'
  teal-900: '#10302D'
  cream-50: '#FFFFFF'
  cream-100: '#FFFFFE'
  cream-200: '#FEFDF9'
  cream-300: '#FAF7EE'
  cream-400: '#F1EDE0'
  cream-500: '#DCD6C4'
  cream-600: '#ADA896'
  cream-700: '#6B6B62'
  cream-800: '#45453F'
  cream-900: '#2B2D2B'
  success-bg: '#EAF2E4'
  success-text: '#3B6D11'
  warning-bg: '#FAEEDA'
  warning-text: '#854F0B'
  danger-bg: '#FCEBEB'
  danger-text: '#A32D2D'
  info-bg: '#DCE9E7'
  info-text: '#265A56'
  appoint: '#C4853A'
  appoint-text: '#8A5519'
  appoint-soft: '#F6E7D2'
  code-string: '#6B4B3C'
typography:
  display:
    fontFamily: 'IBM Plex Sans, ui-sans-serif, system-ui, sans-serif'
    fontSize: '56px'
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: '-0.025em'
  h1:
    fontFamily: 'IBM Plex Sans, ui-sans-serif, system-ui, sans-serif'
    fontSize: '42px'
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: '-0.02em'
  h2:
    fontFamily: 'IBM Plex Sans, ui-sans-serif, system-ui, sans-serif'
    fontSize: '28px'
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: '-0.015em'
  h3:
    fontFamily: 'IBM Plex Sans, ui-sans-serif, system-ui, sans-serif'
    fontSize: '20px'
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: '-0.005em'
  lead:
    fontFamily: 'Nunito Sans, system-ui, -apple-system, sans-serif'
    fontSize: '18px'
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: 'Nunito Sans, system-ui, -apple-system, sans-serif'
    fontSize: '16px'
    fontWeight: 400
    lineHeight: 1.7
  ui:
    fontFamily: 'Nunito Sans, system-ui, -apple-system, sans-serif'
    fontSize: '14px'
    fontWeight: 500
    lineHeight: 1
  sm:
    fontFamily: 'Nunito Sans, system-ui, -apple-system, sans-serif'
    fontSize: '13px'
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: 'Nunito Sans, system-ui, -apple-system, sans-serif'
    fontSize: '11px'
    fontWeight: 500
    letterSpacing: '0.08em'
  code:
    fontFamily: 'JetBrains Mono, ui-monospace, Menlo, monospace'
    fontSize: '13px'
    fontWeight: 400
    lineHeight: 1.55
rounded:
  sm: '4px'
  md: '7px'
  lg: '10px'
  pill: '999px'
spacing:
  '1': '0.25rem'
  '2': '0.5rem'
  '3': '0.75rem'
  '4': '1rem'
  '5': '1.25rem'
  '6': '1.5rem'
  '8': '2rem'
  '10': '2.5rem'
  '12': '3rem'
  '14': '3.5rem'
  '16': '4rem'
components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.ui}'
    rounded: '{rounded.md}'
    padding: '11px 22px'
  button-primary-hover:
    backgroundColor: '{colors.primary-hover}'
    textColor: '{colors.on-primary}'
  button-primary-active:
    backgroundColor: '{colors.primary-active}'
    textColor: '{colors.on-primary}'
  button-primary-disabled:
    backgroundColor: '{colors.teal-300}'
    textColor: '{colors.on-primary}'
  button-secondary:
    backgroundColor: 'transparent'
    textColor: '{colors.primary}'
    typography: '{typography.ui}'
    rounded: '{rounded.md}'
    padding: '10px 21px'
  button-secondary-hover:
    backgroundColor: '{colors.primary-soft}'
    textColor: '{colors.primary-active}'
  button-ghost:
    backgroundColor: 'transparent'
    textColor: '{colors.primary}'
    typography: '{typography.sm}'
    rounded: '{rounded.md}'
    padding: '8px 12px'
  card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    rounded: '{rounded.lg}'
    padding: '1.5rem'
  input:
    backgroundColor: '{colors.surface-raised}'
    textColor: '{colors.text}'
    rounded: '{rounded.md}'
    padding: '9px 12px'
  badge-info:
    backgroundColor: '{colors.primary-soft}'
    textColor: '{colors.primary}'
    typography: '{typography.label}'
    rounded: '{rounded.pill}'
    padding: '4px 10px'
  badge-neutral:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text-soft}'
    typography: '{typography.label}'
    rounded: '{rounded.pill}'
    padding: '4px 10px'
  tag-tech:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.code}'
    rounded: '{rounded.sm}'
    padding: '3px 8px'
  code-inline:
    backgroundColor: '{colors.surface-raised}'
    textColor: '{colors.text}'
    typography: '{typography.code}'
    rounded: '{rounded.sm}'
    padding: '2px 6px'
  code-block:
    backgroundColor: '{colors.surface-sunken}'
    textColor: '{colors.text}'
    typography: '{typography.code}'
    padding: '14px 16px'
---

# Design System: Isometria

> **Source de vérité.** Ce fichier est un relais local de l'artefact Claude « Isometria Design System », version 1.8 (novembre 2026) : https://claude.ai/artifact/6GeN6NpdfEEZfBAuugnwLB. En cas d'écart, l'artefact fait foi : on le corrige d'abord, puis on aligne ce fichier et le code. Ce relais couvre le site `isometria.fr` en thème clair. Le thème sombre, les formats pour les réseaux sociaux, le motion vidéo et les règles de contenu IA restent dans l'artefact.

## Overview

**Creative North Star: "Calme et construit"**

Isometria est une identité volontairement monochrome : une seule couleur vive, la sauge, posée sur un papier crème légèrement chaud, avec une encre qui n'est jamais un noir pur. Rien n'arrive par effet. Chaque élément est là parce qu'il est tracé, posé ou assemblé, comme le cube isométrique du logo dont tout le reste découle.

Le système tient en trois contraintes. Une seule couleur vive, jamais doublée d'un second accent ni déclinée en dégradé. Trois familles typographiques, chacune tenue à un seul rôle. Un seul ornement : un mot par titre, en sauge et en graisse 600. Tout ce qui n'est pas dans le système n'existe pas.

Le ton est celui d'un artisan sûr de lui : posé, précis, sans emphase. Pas de point d'exclamation, pas d'emoji, pas d'inflation marketing.

**Key Characteristics:**

- Monochrome sauge sur crème, fonds en aplat, aucun dégradé, aucune texture.
- Surfaces empilées du plus foncé au plus clair, séparées par des filets de 0,5 px plutôt que par des ombres.
- Titres en IBM Plex Sans 500, casse de phrase partout.
- Trois accents sauge au plus par surface.
- Projection isométrique comme signature : logo, schémas, illustrations.
- Mouvement court et discret, sans rebond ni parallaxe.

### Mouvement

Sur le site : opacité et translation de 2 à 4 px, de 120 ms (survol, focus) à 200 ms (ouverture, changement d'état), courbe de sortie `cubic-bezier(0.33, 1, 0.68, 1)`. Avec `prefers-reduced-motion`, tout apparaît dans son état final, sans transition.

Trois gestes construisent une scène animée :

1. **Le tracé.** Un trait se dessine d'un bout à l'autre (arêtes du cube, connecteur) : 900 ms, `cubic-bezier(0.65, 0, 0.35, 1)`. Le contour d'abord, le remplissage ensuite, en fondu.
2. **L'assemblage.** Un élément glisse le long d'un axe isométrique, à 30° de l'horizontale, sur une courte distance, en passant de l'opacité 0 à 1 : 500 ms, courbe de sortie, séries décalées de 80 ms, cinq éléments au plus par série.
3. **Le mot accentué.** Le titre entre en couleur de texte, puis un seul mot passe à la sauge en 300 ms. Sa graisse 600 est là dès l'entrée : seule la couleur s'anime.

Trois courbes seulement, équivalentes en GSAP à `power2.out` (entrées), `power2.inOut` (tracés, déplacements) et `power2.in` (sorties).

**The Three Curves Rule.** Jamais de rebond, d'élastique ni de dépassement (`back`, `elastic`, `bounce`). Jamais de zoom percutant, de tremblement, de parallaxe ni de flou de mouvement.

**The Reason To Move Rule.** Un élément ne bouge que s'il explique quelque chose. Deux gestes ne se jouent pas en même temps sur deux éléments sans lien.

## Colors

Une palette à deux familles : la sauge pour désigner, la crème pour tout porter. Les valeurs sont dans le frontmatter ; dans le code, on passe toujours par les tokens sémantiques (`--color-background`, `--color-text`, `--color-primary`), jamais par un cran de rampe.

### Primary

- **Sauge** (`primary`, `teal-600`) : boutons, liens, état actif de la navigation, mot accentué des titres, marque du logo.
- **Sauge survol** (`primary-hover`, `teal-500`) et **sauge pressée** (`primary-active`, `teal-700`) : les deux états du bouton primaire.
- **Voile sauge** (`primary-soft`, `teal-100`) : fond de badge, survol du bouton secondaire, fond d'un groupe dans un schéma.
- **Crème sur sauge** (`on-primary`, `cream-200`) : texte et pictogrammes posés sur un aplat sauge.

### Neutral

- **Papier** (`background`, `cream-200`) : le fond de page, un blanc cassé chaud.
- **Carte** (`surface`, `cream-100`) : carte posée sur le fond.
- **Surface élevée** (`surface-raised`, `cream-50`) : modale, popover, infobulle, fond du code en ligne.
- **Surface enfoncée** (`surface-sunken`, `cream-300`) : bloc de code, aparté.
- **Filet** (`border`, `cream-400`) et **filet appuyé** (`border-strong`, `cream-500`) : séparations de 0,5 px ; le filet appuyé dès qu'un contour porte du sens (champ, case, nœud de schéma).
- **Encre** (`text`, `cream-900`) : texte principal, sur toutes les surfaces.
- **Encre douce** (`text-soft`, `cream-700`) : sous-titres, libellés, méta.
- **Encre estompée** (`text-muted`, `cream-600`) : texte désactivé et textes d'exemple uniquement. Son contraste est sous 4,5:1 par choix : jamais pour un texte à lire.

### États système

Succès, attention, danger et info (`success-*`, `warning-*`, `danger-*`, `info-*`) signalent un état d'interface : validation de formulaire, erreur, message. L'info réutilise la sauge.

### Teinte d'appoint

L'ocre (`appoint`, `appoint-text`, `appoint-soft`) désigne une seule chose par schéma : le point de vigilance, le second acteur ou l'« après ». Il est toujours doublé d'une étiquette ou d'un pointillé.

### Named Rules

**The One Colour Rule.** La sauge est la seule couleur vive. Jamais de second accent de marque, jamais de dégradé.

**The Three Accents Rule.** Trois touches de sauge au plus par surface. Au-delà, l'accent ne désigne plus rien.

**The Never White On Sage Rule.** Sur un aplat sauge, le texte est crème (`on-primary`), jamais `#FFFFFF`, qui vibre contre la sauge.

**The States Stay Functional Rule.** Les couleurs d'état ne sortent jamais du registre de l'interface : ni illustration, ni contenu éditorial, ni bouton marketing.

**The Ochre Stays In Diagrams Rule.** L'ocre ne sort pas des schémas et du motion : jamais dans un titre, un bouton, un lien ou un badge.

## Typography

**Display Font:** IBM Plex Sans (repli `ui-sans-serif, system-ui, sans-serif`)
**Body Font:** Nunito Sans (repli `system-ui, -apple-system, sans-serif`)
**Label/Mono Font:** JetBrains Mono (repli `ui-monospace, Menlo, monospace`)

**Character:** Plex Sans signe les titres d'une typographie d'outil, aux terminaisons légèrement carrées, sans hausser le ton. Nunito Sans, humaniste et arrondie, apporte la chaleur de lecture. JetBrains Mono est la preuve technique, et rien d'autre.

Dans le code, la variable des titres s'appelle `--font-serif` pour des raisons historiques : elle désigne bien IBM Plex Sans.

### Hierarchy

- **Display** (500, 56px, 1.05, −0.025em) : très grand titre d'ouverture.
- **H1** (500, 42px, 1.1, −0.02em) : titre de page. Variante réduite à 36px.
- **H2** (500, 28px, 1.25, −0.015em) : titre de section, marge haute 2.5rem, marge basse 1rem. Variantes à 24px et 32px.
- **H3** (500, 20px, 1.3, −0.005em) : sous-section, marge haute 1.75rem, marge basse 0.75rem.
- **Lead** (400, 18px, 1.6) : chapô, sur 580px de large au plus.
- **Body** (400, 16px, 1.7) : texte courant, plafonné à 600px, soit 70 à 75 caractères par ligne.
- **UI** (14px) : navigation, boutons, champs. Graisse 500 pour les boutons et le lien actif, 400 sinon.
- **Small** (400, 13px, 1.55) : méta. Petite méta à 12px.
- **Label** (500, 11px, 0.08em, capitales) : micro-étiquettes, badges, surtitres.
- **Code** (400, 13px, 1.55) : code en ligne et blocs de code.

### Named Rules

**The Three Voices Rule.** Plex Sans pour les titres, les citations et les chiffres mis en avant. Nunito Sans pour le corps et l'interface. JetBrains Mono pour le code, les numéros de version et les chemins de fichiers, plus une seule exception : une mesure mise en scène dans le texte (`42 ms`, `95+`). Aucune famille ne sort de son rôle.

**The Three Weights Rule.** Trois graisses existent : 400 (corps), 500 (titres, liens, navigation active, boutons), 600 (le mot accentué). Jamais de 700 ni de 900, qui écrasent la palette.

**The Accent Word Rule.** Un seul mot par titre, en sauge et en graisse 600. Jamais sur un nom générique (« site », « projet »), jamais en italique, jamais souligné, jamais dans le texte courant.

**The Sentence Case Rule.** Casse de phrase partout, y compris dans les grands titres. Les capitales sont réservées aux micro-étiquettes, avec un interlettrage de 0.08em.

**The Typographic Marks Rule.** Apostrophe typographique `’`, guillemets français « … », tiret cadratin espacé pour les incises, espace insécable avant `;`, `:`, `?`, `!`, `%` et entre une valeur et son unité. Les nombres de un à neuf s'écrivent en lettres dans le texte ; les prix, dates, unités et statistiques toujours en chiffres.

## Layout

La mise en page est une colonne de lecture, pas une grille dense. Quatre largeurs, pas une de plus :

- **600px** : texte courant.
- **580px** : chapô.
- **760px** : titre de page et son sous-titre.
- **940px** : sections larges (grille de cartes, tableau, galerie). Rien au-delà.

Le rythme vertical est régulier : entre deux sections, un filet de 0,5 px et 3 à 4rem d'espace en haut et en bas. L'échelle d'espacement va de 0.25rem à 4rem (frontmatter) ; l'intérieur d'une carte prend 1.5rem.

Les images sont le plus souvent cadrées dans une carte, avec le même filet de 0,5 px ; la photographie à fond perdu est rare. Tout doit rester lisible à 390px de large : on recadre plutôt que d'alléger.

## Elevation & Depth

Le système est plat. La profondeur vient de l'empilement des surfaces et des filets, pas des ombres : papier, puis carte, puis surface élevée, chaque niveau plus clair que celui qui le porte. Le contraste entre la carte et le fond est volontairement ténu.

### Shadow Vocabulary

- **Survol de carte** (`box-shadow: 0 2px 8px rgba(43, 45, 43, 0.06)`) : la seule ombre du système, uniquement au survol d'une carte.
- **Anneau de focus** (`box-shadow: 0 0 0 3px rgba(46, 111, 106, 0.12)`) : autour d'un champ qui a le focus.

### Named Rules

**The Lighter On Top Rule.** Les surfaces s'empilent du plus foncé au plus clair : fond, carte, surface élevée. On ne saute pas de niveau et on n'inverse jamais l'ordre.

**The One Shadow Rule.** Aucune ombre au repos, aucune ombre sur un bouton, aucune ombre intérieure. Aucun panneau flouté ni voile translucide ; la seule transparence est le soulignement des liens.

## Shapes

Des angles doucement arrondis, sur quatre rayons : serré (4px) pour le code en ligne et les étiquettes techniques, standard (7px) pour les boutons et les champs, large (10px) pour les cartes et les modales, pilule (999px) pour les badges.

Les filets font toujours 0,5 px. Deux exceptions à 1 px : le contour du bouton secondaire et le contour d'un champ en focus ou en erreur.

La géométrie récurrente est le cube isométrique : trois axes, la verticale et deux obliques à 30° de l'horizontale, sans perspective ni point de fuite. Trois faces visibles en aplat (dessus sur la surface élevée, gauche sur le voile sauge, droite sur la carte), un contour sauge, des arêtes intérieures plus fines, comme sur le logo.

## Components

Tous les composants sont discrets au repos et répondent par un changement de couleur, jamais par un changement d'échelle ou d'opacité.

### Buttons

- **Shape:** angles standard (7px), texte en Nunito Sans 500 à 14px.
- **Primary:** aplat sauge, texte crème, sans bordure (padding 11px 22px).
- **Secondary:** fond transparent, texte sauge, contour sauge de 1 px (padding 10px 21px).
- **Ghost:** fond transparent, texte sauge à 13px (padding 8px 12px), pour une action secondaire en fin de bloc.
- **Hover / Focus:** le primaire passe à la sauge survol ; le secondaire prend le voile sauge et son texte passe à la sauge pressée. Transition de couleur de 120 ms.
- **Active:** le primaire passe à la sauge pressée. Aucune mise à l'échelle, aucune ombre.
- **Disabled:** aplat `teal-300`.

### Badges et étiquettes

- **Badge info:** pilule sur voile sauge, texte sauge en micro-étiquette, avec un point optionnel de 6px dans la couleur du texte.
- **Badge neutre:** pilule sur fond de carte, texte encre douce, filet de 0,5 px.
- **Étiquette technique:** JetBrains Mono 11px en minuscules, angles serrés (4px), filet appuyé de 0,5 px.

### Cards / Containers

- **Corner Style:** angles larges (10px).
- **Background:** carte (`surface`) sur le fond de page ; une surface imbriquée passe en surface élevée.
- **Shadow Strategy:** aucune au repos ; l'ombre de survol si la carte est cliquable.
- **Border:** filet de 0,5 px.
- **Internal Padding:** 1.5rem.

### Inputs / Fields

- **Style:** fond de surface élevée, filet appuyé de 0,5 px, angles standard (7px), texte en Nunito Sans 14px (padding 9px 12px). Libellé au-dessus en 12px, graisse 500 ; aide en 11.5px, encre douce.
- **Focus:** contour sauge de 1 px et anneau de focus.
- **Error:** contour de 1 px dans la couleur de danger, message en 11.5px dans la même couleur.
- **Placeholder:** encre estompée.

### Navigation

- **Liens de navigation:** Nunito Sans 400, encre, sans soulignement. Le lien actif passe en sauge et en graisse 500.
- **Liens dans le texte:** sauge, graisse 500, soulignement de 1 px en sauge à 40 % d'opacité qui passe à pleine opacité au survol, en 120 ms. Un lien externe est suivi de `↗`, à 4px du texte.

### Code

- **En ligne:** JetBrains Mono 13px sur surface élevée, filet appuyé de 0,5 px, angles serrés (4px).
- **Bloc:** surface enfoncée, filet de 0,5 px, rayon de 8px, interligne 1.55. Coloration limitée : mots-clés en sauge, chaînes en brun (`code-string`), commentaires en encre estompée et en italique.

### Citations et chiffres

Citations et chiffres mis en avant en IBM Plex Sans.

### Logo

Le logo est un SVG figé, hors système : il ne consomme aucun token. Le mot « isometria » est tracé en Space Grotesk Medium vectorisé, police qui n'existe nulle part ailleurs. La marque est un cube isométrique : un hexagone régulier et trois arêtes intérieures de la même encre, plus fines (environ 0,43 fois le contour).

- Lettres en encre, marque en sauge sur fond crème ; version inversée en crème sur aplat sauge.
- Zone de protection : au moins la hauteur d'x du mot autour du logo.
- Dans le dépôt : `src/components/home/SiteHeader.astro` (logo complet) et `public/favicon.svg` (marque seule).

### Iconographie

Iconoir, style `regular`, en trait seul : épaisseur 1.5, couleur héritée, sauge ou encre douce. 18px dans le texte d'interface, 22 à 24px dans une carte, 32px pour illustrer une offre. Les icônes isométriques d'Iconoir (`cube`, `box-iso`, etc.) prolongent le logo : une par bloc au plus, et elles comptent dans la limite des trois accents. Iconoir n'est pas encore installé dans le dépôt.

### Schémas

Un schéma montre comment une chose marche avec le moins de signes possible.

- **Nœud:** rectangle aux angles standard, fond de carte, filet appuyé ; le nœud dont on parle prend un contour sauge.
- **Connecteur:** trait de 1,5 px en encre douce, droit ou coudé à angle droit, pointe en chevron ouvert. Le pointillé marque ce qui est facultatif, asynchrone ou « avant ».
- **Groupe:** voile sauge sans contour, angles larges.
- **Étiquette:** Nunito Sans 13px, toujours horizontale ; identifiants techniques en JetBrains Mono.
- **Densité:** douze nœuds au plus dans un schéma fixe. Le registre isométrique est réservé à un schéma par page.

### Illustrations

Chaque offre est expliquée par un objet réel, reconnaissable d'un coup d'œil, dessiné en projection isométrique sur un socle à quatre pieds. Beaucoup de petites pièces précises (40 à 100), des faces en quatre aplats crème très pâles avec un dessus blanc, un trait gris chaud de 0,75 px.

- **Une seule pièce sauge par planche** : ce que le client gagne (aplat `teal-50` à `teal-100`, contour `teal-400`).
- **Encre rare** : `cream-800` pour trois repères au plus.
- Les écrans dessinés portent de vrais micro-textes métier, dans les trois familles du système.
- L'objet occupe 55 à 65 % du cadre, à la même échelle sur toutes les planches d'une page.
- Une planche ne bouge que si le mouvement est l'explication : mouvement lent et continu, arrêté hors écran et avec `prefers-reduced-motion`.

Quatre planches de référence existent dans l'artefact : le poste vitrine (site web), le casier à fiches et la tablette (application métier), la trieuse (automatisation), l'assistant et les classeurs (IA). Sur le site, application métier et automatisation illustrent la même face, « Outils internes ». Les fichiers SVG ne sont pas encore dans le dépôt.

## Do's and Don'ts

### Do:

- **Do** passer par les tokens sémantiques (`--color-background`, `--color-text`, `--color-primary`) dans tout composant.
- **Do** garder le site en thème clair sur toutes ses pages.
- **Do** séparer les sections par un filet de 0,5 px et 3 à 4rem d'espace.
- **Do** plafonner le texte courant à 600px et les sections larges à 940px.
- **Do** signaler le survol par un changement de couleur.
- **Do** mettre un seul mot en sauge et en graisse 600 dans un titre, quand un mot le mérite.
- **Do** s'adresser au lecteur au vouvoiement et parler à la première personne du singulier.
- **Do** respecter `prefers-reduced-motion` : état final affiché sans transition.

### Don't:

- **Don't** ajouter une seconde couleur d'accent, ni utiliser l'ocre hors d'un schéma.
- **Don't** poser de dégradé, de motif ou de texture sur un fond.
- **Don't** écrire du texte en `#FFFFFF` sur un aplat sauge.
- **Don't** utiliser les graisses 700 ou 900, ni l'italique pour mettre en valeur.
- **Don't** écrire un titre tout en capitales ou avec une majuscule à chaque mot.
- **Don't** ajouter d'ombre au repos, de panneau flouté ou de voile translucide.
- **Don't** signaler un survol par un fondu d'opacité, ni soulever un élément de plus de 2px.
- **Don't** animer avec un rebond, un effet élastique ou une parallaxe.
- **Don't** utiliser d'emoji ni de point d'exclamation.
- **Don't** recadrer, recolorer, dégrader ou détourer le logo, ni placer une icône isométrique à côté de la marque à la même taille.
- **Don't** remplir une icône : trait seul.
- **Don't** dessiner de flèches, de légendes, de sol, de grille, d'ombre portée ou de hachures dans une illustration.
