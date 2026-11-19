# Développer isometria.fr depuis une session Claude distante

Ce que le dépôt fournit, et ce qu'il reste à régler une fois côté claude.ai. Source : la documentation de Claude Code (pages « Projects » et « Cloud environments »), relue le 19 novembre 2026.

## Ce qu'une session distante reprend du dépôt

| Élément du dépôt | Session cloud à un seul dépôt | Fil d'un Projet Claude |
| --- | --- | --- |
| `CLAUDE.md` | chargé | chargé |
| Skill `.claude/skills/impeccable/` | chargé | non chargé comme skill, mais présent dans le clone : `CLAUDE.md` dit à Claude de le lire et de le suivre |
| Sous-agents `.claude/agents/impeccable-*.md` | chargés | non chargés ; `CLAUDE.md` prévoit le repli |
| Hooks de `.claude/settings.json` (installation des dépendances, détecteur de design) | le hook de démarrage tourne ; les autres ne sont pas documentés | non exécutés |
| Plugins de `.claude/settings.json` | non installés | non installés |
| `.claude/settings.local.json`, réglages de `~/.claude/` | non lus | non lus |

`PRODUCT.md`, `DESIGN.md` et `design-system/` sont de simples fichiers du dépôt : ils sont toujours là.

## À régler une fois dans le Projet Claude

1. **Dépôt.** Ajouter `IsometriaFR/isometria.fr` au projet (**Project settings > Environment**). L'application GitHub de Claude doit être installée sur le dépôt.
2. **Plugins.** Les ajouter dans **Project settings > Plugins** ; ceux du dépôt ne se chargent pas tout seuls :
   - `scd-astro` et `scd-spec-dev`, place de marché `https://github.com/sebc-dev/marketplace.git` ;
   - `cloudflare`, place de marché `cloudflare/skills` ;
   - `mattpocock-skills`, place de marché officielle.
3. **Skill impeccable (facultatif).** L'activer pour le compte claude.ai le fait apparaître comme skill dans les fils. Sans cela, `CLAUDE.md` suffit : Claude lit le skill dans le clone.
4. **Accès réseau de l'environnement.** L'accès par défaut couvre npm et `github.com`. Deux téléchargements peuvent demander d'ajouter des domaines autorisés :
   - le moteur d'impeccable, publié dans les versions GitHub de `pbakaus/impeccable` (les fichiers sont servis depuis `release-assets.githubusercontent.com` ou `objects.githubusercontent.com`) ;
   - les polices, que `npm run build` récupère chez Google (`fonts.googleapis.com`, `fonts.gstatic.com`).
5. **Node.** Le projet demande Node 22.12 ou plus (`.nvmrc`). Si l'image de l'environnement en fournit une plus ancienne, l'installer dans le script de configuration de l'environnement.

## Ce qui ne passe pas en distant

- **Le détecteur de design automatique.** Dans un fil de Projet aucun hook ne tourne : `CLAUDE.md` demande à Claude de lancer le détecteur à la main en fin de travail.
- **`/impeccable live`**, qui pilote un navigateur local.
- **`/design-sync`**, réservé à une invocation depuis Claude Code en local.
- **Le déploiement Cloudflare** : il passe par la CI, pas par la session.

Pour retrouver tout l'outillage local (hooks, plugins, navigateur), demander à Claude d'exécuter le fil sur son propre ordinateur par Remote Control.
