# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dirigeants de TPE et de PME, tous secteurs confondus, sans cible sectorielle ni géographique particulière. Ils cherchent un prestataire pour leur présence en ligne, leurs outils de travail ou un premier usage de l'IA, et évaluent Isometria depuis le site avant de prendre contact.

## Product Purpose

Isometria est un studio numérique qui conçoit pour les TPE et PME trois types de réalisations : des sites web, des outils internes sur mesure et des intégrations d'IA appuyées sur les documents du client. Les « outils internes » regroupent les applications métier et les automatisations : c'est une seule et même offre, pas deux. Le site isometria.fr présente cette offre et doit amener le visiteur à prendre contact pour parler de son projet.

## Positioning

Quatre points, confirmés, qui tiennent ensemble :

- **Une seule personne.** Isometria est un indépendant : le client parle à celui qui conçoit et qui code, sans intermédiaire.
- **Tout appartient au client.** Code, nom de domaine, contenus et données sont au nom du client, sans dépendance au prestataire.
- **Site, outils et IA réunis.** Les trois offres sont pensées ensemble par le même interlocuteur, plutôt que par trois prestataires.
- **Sur mesure pour le métier.** L'outil suit la façon de travailler du client, pas l'inverse.

## Operating Context

- Le visiteur découvre l'offre sur la page d'accueil, structurée autour des « trois faces » (site web, outils internes, IA), puis prend contact.
- La prise de contact se fait par un **formulaire sur le site**. Il reste à construire : aujourd'hui, le bouton « Parlons de votre projet » pointe vers une section contact sans moyen de joindre Isometria.
- Le texte actuel promet « un premier échange de trente minutes, sans engagement ».

## Capabilities and Constraints

- Site Astro 7 déployé sur Cloudflare Workers (statique par défaut, SSR ponctuel possible), Tailwind v4, GSAP et Lenis pour l'animation du cube au défilement.
- Une seule page existe aujourd'hui : l'accueil (`src/pages/index.astro`).
- Seuils bloquants en CI (Lighthouse mobile) : performance ≥ 90 ; accessibilité, bonnes pratiques et SEO ≥ 95.
- Site en français uniquement.
- Vocabulaire établi : « trois faces », « Face 01 / 02 / 03 », « studio numérique ». Le texte s'exprime à la première personne du singulier (« je »).

Décisions ouvertes :

- Les tarifs ou formules à afficher : le principe est acquis, les montants restent à fournir par le propriétaire.
- Le traitement du formulaire de contact (destination des messages, anti-spam).

## Brand Commitments

- Nom : **Isometria**. Domaine : isometria.fr.
- Logo : cube isométrique et logo texte, intégrés dans `src/components/home/SiteHeader.astro` et `public/favicon.svg`.
- Le système visuel fait foi dans l'artefact Claude « Isometria Design System » (https://claude.ai/artifact/6GeN6NpdfEEZfBAuugnwLB) ; `docs/design-tokens.md` et `src/styles/global.css` en sont des copies locales.
- Ce design system présente quatre offres et quatre illustrations (site web, application métier, automatisation, IA). Sur le site, application métier et automatisation forment une seule face, « Outils internes ».
- Voix : directe, concrète, à la première personne, sans jargon technique ; elle parle du métier du client avant de parler de technologie.

## Evidence on Hand

- Textes de la page d'accueil existante (`src/components/home/CubeHome.astro`).
- Tarifs ou formules : existent, mais ne sont pas encore dans le dépôt.

Absences à ne jamais combler par de l'invention : aucune réalisation client à montrer, aucun témoignage, aucun logo de client, aucun chiffre de résultat.

## Product Principles

1. **Le métier du client d'abord.** Chaque texte part de la situation du dirigeant, pas de la technologie.
2. **Rien que le client ne possède.** L'indépendance du client vis-à-vis du prestataire se dit et se montre partout.
3. **Un seul interlocuteur, trois faces.** Le site présente une offre unique vue sous trois angles, jamais trois services séparés.
4. **Ne promettre que ce qui existe.** Pas de preuve fabriquée ; l'absence de références se compense par la clarté de l'offre et des tarifs.
5. **Compréhensible sans culture numérique.** Un dirigeant non technicien doit comprendre l'offre et savoir quoi faire ensuite.

## Accessibility & Inclusion

- Score d'accessibilité Lighthouse ≥ 95, bloquant en CI.
- Les animations respectent `prefers-reduced-motion` (défilement doux désactivé).
