---
name: Isometria
description: Système visuel du site isometria.fr, sauge, crème et encre, d'après la page d'accueil en ligne.
colors:
  background: '#FEFDF9'
  text: '#2B2D2B'
  text-body: '#55554E'
  text-soft: '#6B6B62'
  text-muted: '#ADA896'
  action: '#2B2D2B'
  action-hover: '#1F211F'
  on-action: '#FFFFFF'
  primary: '#2E6F6A'
  primary-hover: '#3D807A'
  primary-active: '#265A56'
  primary-soft: '#DCE9E7'
  accent-text: '#2E6F6A'
  on-primary: '#FEFDF9'
  line: '#CBC6B5'
  line-faint: '#E2DED1'
  line-mid: '#9C9783'
  surface: '#FFFFFE'
  surface-raised: '#FFFFFF'
  surface-sunken: '#FAF7EE'
  border: '#F1EDE0'
  border-strong: '#DCD6C4'
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
typography:
  site-h1:
    fontFamily: 'IBM Plex Sans, system-ui, sans-serif'
    fontSize: 'clamp(36px, 5vw, 60px)'
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: '-0.015em'
  site-h2:
    fontFamily: 'IBM Plex Sans, system-ui, sans-serif'
    fontSize: 'clamp(28px, 3.4vw, 42px)'
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: '-0.015em'
  site-lead:
    fontFamily: 'Nunito Sans, system-ui, sans-serif'
    fontSize: '19px'
    fontWeight: 400
    lineHeight: 1.65
  site-body:
    fontFamily: 'Nunito Sans, system-ui, sans-serif'
    fontSize: '17px'
    fontWeight: 400
    lineHeight: 1.65
  site-fact:
    fontFamily: 'Nunito Sans, system-ui, sans-serif'
    fontSize: '16px'
    fontWeight: 400
    lineHeight: 1.65
  site-button:
    fontFamily: 'IBM Plex Sans, system-ui, sans-serif'
    fontSize: '16px'
    fontWeight: 600
    lineHeight: 1
  site-nav:
    fontFamily: 'IBM Plex Sans, system-ui, sans-serif'
    fontSize: '14px'
    fontWeight: 500
    lineHeight: 1
  site-eyebrow:
    fontFamily: 'JetBrains Mono, ui-monospace, monospace'
    fontSize: '12px'
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: '0.08em'
  site-fact-num:
    fontFamily: 'JetBrains Mono, ui-monospace, monospace'
    fontSize: '12px'
    fontWeight: 500
    lineHeight: 1.9
  site-foot:
    fontFamily: 'JetBrains Mono, ui-monospace, monospace'
    fontSize: '12px'
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: '0.04em'
  site-annotation:
    fontFamily: 'JetBrains Mono, ui-monospace, monospace'
    fontSize: '11px'
    fontWeight: 500
    letterSpacing: '0.6px'
  ui:
    fontFamily: 'Nunito Sans, system-ui, sans-serif'
    fontSize: '14px'
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: 'Nunito Sans, system-ui, sans-serif'
    fontSize: '11px'
    fontWeight: 500
    letterSpacing: '0.08em'
  code:
    fontFamily: 'JetBrains Mono, ui-monospace, monospace'
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
  site-gutter: '24px'
  site-gap: '24px'
  site-stack-gap: '18px'
  site-scene-padding: '96px'
  site-width: '1200px'
components:
  button-primary:
    backgroundColor: '{colors.action}'
    textColor: '{colors.on-action}'
    typography: '{typography.site-button}'
    rounded: '{rounded.md}'
    padding: '15px 22px'
  button-primary-hover:
    backgroundColor: '{colors.action-hover}'
    textColor: '{colors.on-action}'
  button-secondary:
    backgroundColor: 'transparent'
    textColor: '{colors.text}'
    typography: '{typography.site-button}'
    rounded: '{rounded.md}'
    padding: '15px 22px'
  nav-link:
    textColor: '{colors.text-body}'
    typography: '{typography.site-nav}'
  nav-link-hover:
    textColor: '{colors.primary}'
  eyebrow:
    textColor: '{colors.text-soft}'
    typography: '{typography.site-eyebrow}'
  fact:
    textColor: '{colors.text-body}'
    typography: '{typography.site-fact}'
    padding: '11px 0'
  footer:
    textColor: '{colors.text-soft}'
    typography: '{typography.site-foot}'
    padding: '26px 0'
  card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    rounded: '{rounded.lg}'
    padding: '1.5rem'
  input:
    backgroundColor: '{colors.surface-raised}'
    textColor: '{colors.text}'
    typography: '{typography.ui}'
    rounded: '{rounded.md}'
    padding: '9px 12px'
  badge-info:
    backgroundColor: '{colors.primary-soft}'
    textColor: '{colors.primary}'
    typography: '{typography.label}'
    rounded: '{rounded.pill}'
    padding: '4px 10px'
---

# Design System: Isometria

> **Source de vérité.** Le design system est piloté par le code : sa source est le dossier `design-system/` de ce dépôt (version 2.0, novembre 2026). L'artefact Claude « Isometria Design System » (https://claude.ai/artifact/6GeN6NpdfEEZfBAuugnwLB) en est la publication, mise à jour par `/design-sync` ; on ne le modifie plus à la main. Ce fichier résume, pour le site `isometria.fr`, ce que `design-system/` détaille. Les règles de la scène du cube sont dans `design-system/guides/03-motion.md`, celles du site dans `design-system/guides/08-site.md` ; le thème sombre, les réseaux sociaux, la vidéo et les règles des applications sont dans les autres guides.

## Overview

**Creative North Star: "Calme et construit"**

Depuis la version 2.0, la page d'accueil en ligne est la norme du site. Tout y part du cube isométrique du logo : il tourne quand le lecteur fait défiler la page et sort une face par offre, chacune dessinée comme un plan en relief. Autour de lui, la page parle le langage d'un plan d'atelier : papier crème, encre, une seule couleur vive, la sauge, et des annotations en caractères à chasse fixe.

Rien n'arrive par effet. Chaque élément est tracé, posé ou assemblé, et rien ne bouge si le lecteur ne fait pas défiler, à part une vie d'ambiance très légère. Le ton est celui d'un artisan sûr de lui : posé, précis, sans emphase.

**Key Characteristics:**

- Papier crème en aplat, encre pour les titres et les boutons, sauge pour le cube et les repères.
- Une page en cinq temps d'une hauteur d'écran chacun, le texte d'un côté, le cube de l'autre.
- Titres en IBM Plex Sans 600, texte en Nunito Sans, voix « plan » en JetBrains Mono.
- Filets de page de 1 px, aucune ombre, aucun dégradé.
- Une seule scène animée, celle du cube, pilotée par le défilement.

### Mouvement

La scène du cube n'existe qu'une fois, sur l'accueil. Une seule timeline GSAP suit la position de défilement : l'état du cube dépend de l'endroit où se trouve la page, jamais de la vitesse. Chaque passage se joue en trois temps : la face précédente rentre, le cube tourne et recule légèrement, la nouvelle face sort, puis son relief se dévoile bloc après bloc. La page n'est jamais épinglée.

Le parallaxe n'existe que sur l'accueil et sur trois plans : la colonne de texte (de +70 px à −70 px) et deux calques de traits de construction. Lenis lisse la molette.

Ailleurs sur le site, le mouvement reste court : opacité et translation de 2 à 4 px, de 120 à 200 ms, `cubic-bezier(0.33, 1, 0.68, 1)`. Une section se pose une seule fois en entrant dans l'écran.

Avec `prefers-reduced-motion` : ni lissage, ni parallaxe, ni boucle d'ambiance ; le cube suit toujours le défilement, sans retard, et les reliefs apparaissent directement.

**The One Scene Rule.** Seul le cube de l'accueil tourne, et seul l'accueil a du parallaxe. Aucune autre page ne reprend la scène.

**The No Bounce Rule.** Jamais de rebond, d'élastique ni de dépassement. Jamais de zoom percutant, de halo, de particules, ni d'entrée en diagonale.

**The Reader Drives Rule.** Le mouvement répond au défilement du lecteur ou explique quelque chose. Ce qui boucle s'arrête hors écran.

## Colors

Papier, encre et une seule couleur vive. Les valeurs sont dans le frontmatter.

### Primary

- **Sauge** (`primary`) : le contour du cube, la pièce sauge de chaque face, le numéro « Face 01 », le survol d'un lien du menu, l'anneau de focus, le segment de l'indice de défilement.
- **Voile sauge** (`primary-soft`) : aplat de la pièce sauge d'une face, fond de badge.

### Neutral

- **Papier** (`background`) : le fond de toute la page.
- **Encre** (`text`) : titres, logo, étiquettes des annotations.
- **Encre de lecture** (`text-body`) : texte courant, liens du menu au repos.
- **Encre douce** (`text-soft`) : surtitres, numéros des faits, pied de page.
- **Encre d'action** (`action`, `action-hover`) : aplat du bouton principal, avec son texte blanc (`on-action`).
- **Trait léger** (`line`) : contour du bouton secondaire, traits de construction, trait de l'indice de défilement.
- **Trait pâle** (`line-faint`) : filets de page, calques de parallaxe.
- **Trait de contour** (`line-mid`) : traits d'annotation, contours des reliefs.
- **Carte, surface élevée, surface enfoncée, filets fins** (`surface`, `surface-raised`, `surface-sunken`, `border`, `border-strong`) : pour les cartes et les champs des futures pages.

### États système

Succès, attention, danger et info signalent un état d'interface, par exemple dans un formulaire. Jamais dans un contenu éditorial.

### Named Rules

**The One Colour Rule.** La sauge est la seule couleur vive. Jamais de second accent, jamais de dégradé. L'ocre d'appoint reste dans les schémas.

**The Sage Marks Rule.** Sur le site, la sauge désigne : elle appartient au cube et aux repères. Elle ne remplit jamais un bouton.

**The White On Ink Only Rule.** Le blanc pur est permis sur l'aplat encre du bouton principal, et nulle part ailleurs. Sur un aplat sauge, le texte est crème.

**The Shared Pencil Rule.** Les trois gris de trait du site sont ceux des illustrations : la page et les dessins partagent la même mine.

## Typography

**Display Font:** IBM Plex Sans (repli `system-ui, sans-serif`)
**Body Font:** Nunito Sans (repli `system-ui, sans-serif`)
**Label/Mono Font:** JetBrains Mono (repli `ui-monospace, monospace`)

**Character:** Plex Sans signe les titres, les boutons et le menu d'une typographie d'outil. Nunito Sans apporte la chaleur de lecture. JetBrains Mono est la voix du plan : elle annote, numérote et signe.

### Hierarchy

- **Titre de page** (`site-h1`, 600, de 36 à 60px, 1.06) : un seul par page.
- **Titre de section** (`site-h2`, 600, de 28 à 42px, 1.12) : une phrase complète, équilibrée sur ses lignes.
- **Chapô** (`site-lead`, 400, 19px, 1.65) : sous le titre de page, 44 caractères par ligne au plus.
- **Texte courant** (`site-body`, 400, 17px, 1.65) : 46 caractères par ligne au plus ; 16px à 900px de large et moins.
- **Fait** (`site-fact`, 400, 16px) : une ligne d'une liste de faits.
- **Bouton** (`site-button`, 600, 16px) et **menu** (`site-nav`, 500, 14px).
- **Surtitre** (`site-eyebrow`, JetBrains Mono 500, 12px, 0.08em, capitales) : au-dessus d'un titre, et pour l'indice de défilement.
- **Numéro de fait** (`site-fact-num`), **pied de page** (`site-foot`, 0.04em, capitales), **annotation** (`site-annotation`, 11px, capitales ; sous-ligne à 10px en minuscules).

### Named Rules

**The Three Voices Rule.** Plex Sans pour les titres, les boutons et le menu. Nunito Sans pour tout ce qui se lit. JetBrains Mono pour le code et pour la voix du plan : surtitres, numéros, annotations, pied de page. Jamais une phrase de texte courant en JetBrains Mono.

**The Three Weights Rule.** 400 pour le texte, 500 pour le menu et les étiquettes, 600 pour les titres et les boutons. Jamais de 700.

**The Sentence Case Rule.** Casse de phrase dans les titres et le texte. Les capitales sont réservées aux micro-étiquettes en JetBrains Mono.

**The Accent Word Rule.** Les titres sont déjà en 600 : un mot accentué ne s'y distingue que par la couleur sauge. L'accueil n'en utilise aucun ; n'en ajoutez pas sans raison, et jamais plus d'un par titre.

**The Typographic Marks Rule.** Apostrophe typographique `’`, guillemets français « … », espace insécable avant `;`, `:`, `?`, `!`, `%`. Les nombres de un à neuf en lettres dans le texte.

## Layout

Un conteneur de 1200px au plus, centré, avec 24px de marge latérale, sur une grille de 12 colonnes à gouttière de 24px. Le texte d'une section occupe 5 colonnes, à gauche (1 à 5) ou à droite (8 à 12), à l'opposé du cube ; 6 colonnes sur l'accueil ; colonnes 3 à 10, centré, au contact.

Chaque section fait au moins une hauteur d'écran, avec 96px de marge en haut et en bas. Dans un bloc de texte, 18px séparent le surtitre, le titre, le paragraphe et la liste ; 12px séparent deux boutons.

La page d'accueil suit cinq temps : accueil, face 01 Site web, face 02 Outils internes, face 03 IA, contact. Trois faces, jamais quatre.

À 900px et moins : le texte prend toute la largeur et passe sous le cube, sur un bandeau papier à 92 % d'opacité ; le cube occupe la moitié haute de l'écran ; le contact s'aligne à gauche ; le menu disparaît.

## Elevation & Depth

La page est plate : aucune ombre, aucun panneau flouté. La profondeur vient du cube lui-même, dessiné en vraie 3D, et de ses reliefs, des blocs qui flottent au-dessus de chaque face avec leurs tranches visibles.

### Shadow Vocabulary

- **Survol de carte** (`box-shadow: 0 2px 8px rgba(43, 45, 43, 0.06)`) : la seule ombre du système, pour une carte cliquable des futures pages.
- **Anneau de focus d'un champ** (`box-shadow: 0 0 0 3px rgba(46, 111, 106, 0.12)`) : avec un contour sauge de 1px.

### Named Rules

**The Depth Is Drawn Rule.** Le volume se dessine, il ne se simule pas : pas d'ombre portée, pas de dégradé, pas de flou.

## Shapes

Des angles doucement arrondis : 7px pour les boutons et les champs, 10px pour les cartes, 4px pour les étiquettes techniques, pilule pour les badges.

Deux épaisseurs de filet : 1px pour les filets de page, le contour du bouton secondaire et les traits d'annotation ; 0,5px pour les cartes, les champs et les badges.

La géométrie récurrente est le cube isométrique : à 35,264° de tangage, sa silhouette est exactement l'hexagone du logo.

## Components

### Buttons

- **Shape:** angles de 7px, texte en IBM Plex Sans 600 à 16px, marges intérieures de 15px et 22px.
- **Primary:** aplat encre, texte blanc, sans bordure. Un seul par écran, libellé « Parlons de votre projet ».
- **Secondary:** fond transparent, texte encre, contour intérieur de 1px en trait léger.
- **Hover / Focus:** le primaire fonce au survol. Au clavier, contour plein de 2px sauge, décalé de 3px.
- Ni ombre, ni changement d'échelle, ni fondu d'opacité.

### Navigation

- **En-tête:** le logo tracé à gauche (28px de haut), le menu à droite, 22px de marge en haut et en bas. Il défile avec la page : ni fixe, ni collant.
- **Liens du menu:** IBM Plex Sans 500 à 14px, encre de lecture, 26px entre deux liens, sans soulignement. Sauge au survol et au focus.
- **Mobile:** le menu disparaît, le logo reste.

### Surtitre

Une ligne en JetBrains Mono, capitales, encre douce, au-dessus d'un titre. Sur une face, elle commence par le numéro en sauge : « Face 01 Site web ».

### Liste de faits

Trois lignes numérotées « 01 », « 02 », « 03 », séparées par des filets de 1px en trait pâle, y compris au-dessus et au-dessous. Numéro en JetBrains Mono dans une colonne de 44px, fait en Nunito Sans 16px, 11px de marge en haut et en bas.

### Indice de défilement

Sous les boutons de l'accueil : un trait vertical de 1px sur 28px, parcouru par un segment sauge de 10px en 1,8 s, et la mention « Faites tourner le cube ».

### Pied de page

Un filet de 1px en trait pâle, puis une ligne en JetBrains Mono 12px, capitales, encre douce : l'année et le nom à gauche, « Sites · Outils internes · IA » à droite.

### Scène du cube

Le cube du logo, dessiné dans un seul SVG fixé à l'écran et marqué décoratif (`aria-hidden`). Cinq états, un par section. Chaque face sortie porte son offre « en couches » : une fenêtre posée sur la face, puis les blocs de la page au-dessus, avec une seule pièce sauge par face. Au bureau, trois annotations par face : pastille cerclée de sauge, trait coudé, étiquette en capitales et sous-ligne. Code : `src/scripts/cube-home.js`.

### Inputs / Fields

Pour le futur formulaire de contact : fond de surface élevée, filet appuyé de 0,5px, angles de 7px, Nunito Sans 14px, libellé au-dessus. Au focus, contour sauge de 1px et anneau. En erreur, contour et message dans la couleur de danger.

### Cards / Containers

Pour les futures pages : fond de carte, filet de 0,5px, angles de 10px, 1.5rem de marge intérieure, aucune ombre au repos.

### Logo

SVG figé, tracé en Space Grotesk Medium vectorisé, avec le cube sauge à la place du « o ». Dans l'en-tête, il ne bouge jamais. Dans le dépôt : `src/components/home/SiteHeader.astro` et `public/favicon.svg`.

## Do's and Don'ts

### Do:

- **Do** construire toute nouvelle page du site d'après la page d'accueil : mêmes boutons, mêmes titres, même grille.
- **Do** garder un seul bouton principal par écran, en encre.
- **Do** placer le texte à l'opposé du cube, sur 5 colonnes.
- **Do** écrire à la première personne du singulier et au vouvoiement.
- **Do** garder le contour de focus de 2px sauge sur tout lien et tout bouton.
- **Do** respecter `prefers-reduced-motion`.
- **Do** tenir le budget Lighthouse : performance à 90 ou plus, accessibilité, bonnes pratiques et SEO à 95 ou plus.

### Don't:

- **Don't** remplir un bouton du site en sauge, ni écrire en blanc sur un aplat sauge.
- **Don't** mettre un titre en graisse 500 ou 700.
- **Don't** écrire une phrase de texte courant en JetBrains Mono.
- **Don't** élargir une section au-delà de 1200px.
- **Don't** fixer l'en-tête en haut de l'écran.
- **Don't** ajouter une quatrième face, ni reprendre la scène du cube sur une autre page.
- **Don't** ajouter d'ombre, de dégradé, de halo ou de particules.
- **Don't** épingler ou retenir la page pendant le défilement.
- **Don't** utiliser d'emoji ni de point d'exclamation.
- **Don't** montrer une réalisation, un témoignage ou un chiffre qui n'existe pas.
