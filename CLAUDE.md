# Isometria

Site du studio Isometria : Astro 7 sur Cloudflare Workers, une page d'accueil avec le cube-logo piloté par le défilement. Le `README.md` décrit la stack, les scripts et la CI.

## Avant de modifier l'interface

- `PRODUCT.md` : à qui parle le site, ce qu'il promet, les preuves disponibles. Ne jamais inventer de réalisation, de témoignage ni de chiffre.
- `DESIGN.md` : le résumé du design system pour le site. La source complète est `design-system/` (livre de marque, guides, tokens, cartes de composants).
- La page d'accueil en ligne est la norme du site : `design-system/guides/08-site.md` pour la mise en page, `design-system/guides/03-motion.md` pour la scène du cube.
- Lancer `/impeccable` pour tout travail de design ; le skill est dans `.claude/skills/impeccable/`.

## Sessions distantes (Projets Claude, sessions cloud)

Un fil de Projet Claude ne charge de ce dépôt que ce fichier : ni les skills de `.claude/skills/`, ni `.claude/settings.json`, ni ses hooks, ni ses plugins. Les fichiers sont pourtant bien dans le clone. Dans une session distante :

- Lancer `npm ci` à la racine du dépôt avant toute commande `npm run …` (Node 22.12 ou plus).
- Pour tout travail de design, si le skill `impeccable` n'apparaît pas dans la liste des skills : lire `.claude/skills/impeccable/SKILL.md` et le suivre comme s'il avait été invoqué. Son lanceur est `.claude/skills/impeccable/scripts/impeccable`, à appeler depuis la racine du dépôt ; au premier appel il télécharge son moteur depuis les versions GitHub de `pbakaus/impeccable`.
- Si les sous-agents `impeccable-*` de `.claude/agents/` ne sont pas disponibles, faire leur passe dans le fil et le dire en une ligne.
- Aucun hook ne tourne : lancer soi-même `.claude/skills/impeccable/scripts/impeccable detect --json src` à la fin d'un travail d'interface, puis `npm run check`.
- Si un téléchargement échoue (moteur impeccable, polices Google pendant `npm run build`), c'est l'accès réseau de l'environnement : le signaler plutôt que de contourner. Les réglages à faire côté Projet sont décrits dans `docs/claude-distant.md`.

## Design system piloté par le code

La source du design system est le dossier `design-system/`. L'artefact Claude « Isometria Design System » n'en est que la publication : on modifie les fichiers du dossier, jamais l'artefact à la main.

## Contrôle qualité

- `npm run check` : Prettier, ESLint et vérification de types. À faire passer avant tout commit.
- `npm run build` puis `npm run lighthouse` : seuils bloquants en CI (performance ≥ 90 ; accessibilité, bonnes pratiques et SEO ≥ 95).
- `design-system/`, `.claude/` et `docs/` sont exclus de Prettier et d'ESLint.

## Conventions

- Textes du site en français, vouvoiement, première personne du singulier.
- Messages de commit en français, à l'infinitif (« Ajouter… », « Corriger… »).
- Une branche par sujet, une pull request vers `main` ; la CI doit être verte avant la fusion.
- `src/scripts/cube-home.js` est le moteur du cube porté d'un prototype : le modifier avec précaution, il est exclu de Prettier.
