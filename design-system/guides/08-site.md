# Le site

> **v2.0.** La page d’accueil mise en ligne sur `isometria.fr` devient la norme du site. Cette section décrit tout ce qui ne bouge pas : structure, grille, typographie, couleurs, composants, écriture. Ce qui bouge (le cube, le parallaxe, le défilement) est dans la section « Motion », partie « La scène du cube ».

Construisez toute nouvelle page du site à partir de cette section : contact, pages d’offre, mentions. Là où elle contredit une règle générale du système, c’est elle qui fait foi sur le site. Les règles générales restent en vigueur pour les applications, les livrables clients, les vidéos et les réseaux sociaux.

Le code de référence est dans le dépôt du site : `src/pages/index.astro`, `src/components/home/` et `src/styles/home.css`. Les captures de la page, bureau et mobile, sont dans le groupe d’assets *Accueil*.

## Ce que le site change

| Sujet | Sur le site | Ailleurs (applications, livrables, vidéos) |
|---|---|---|
| Graisse des titres | 600 | 500 |
| Bouton principal | Aplat encre `color-action`, texte `color-on-action` | Aplat sauge `color-primary`, texte `color-on-primary` |
| Texte des boutons | IBM Plex Sans 600, 16 px | Nunito Sans 500, 14 px |
| Menu | IBM Plex Sans 500, 14 px | Nunito Sans 400 |
| JetBrains Mono | Code, mesures, et la voix « plan » : surtitres, numéros, annotations, pied de page | Code et mesures seulement |
| Filets de page | 1 px `color-line-faint` | 0,5 px `color-border` |
| Largeur de page | 1200 px, grille de 12 colonnes | 940 px au plus |
| Texte courant | 17 px, interligne 1,65, `color-text-body` | 16 px, interligne 1,7, `color-text` |

Les cartes, les champs et les badges ne changent pas : ils gardent leurs filets de 0,5 px et leurs rayons.

## La page d’accueil en cinq temps

| Temps | Ancre | Contenu | Texte |
|---|---|---|---|
| Accueil | `#hero` | Surtitre, titre de page, chapô, deux boutons, indice de défilement | à gauche, six colonnes |
| Face 01 · Site web | `#site` | Surtitre, titre, un paragraphe, trois faits | à droite |
| Face 02 · Outils internes | `#outils` | idem | à gauche |
| Face 03 · IA | `#ia` | idem | à droite |
| Contact | `#contact` | Surtitre, titre, un paragraphe, un bouton | centré, sous le cube |

Le texte alterne de côté, à l’opposé du cube. Chaque temps occupe au moins une hauteur d’écran. Les trois faces sont trois angles d’une même offre : n’ajoutez pas une quatrième face, le cube n’en montre que trois. Les applications métier et les automatisations forment une seule face, « Outils internes ».

## Grille et espacements

- **Conteneur :** 1200 px au plus (`site-width`), centré, avec une marge latérale de 24 px (`site-gutter`) qui respecte les zones sûres de l’appareil.
- **Grille :** 12 colonnes égales, gouttière de 24 px (`site-gap`).
- **Colonne de texte :** 5 colonnes (`site-copy-span`), colonnes 1 à 5 à gauche ou 8 à 12 à droite. Sur l’accueil, 6 colonnes (`site-hero-span`). Au contact, colonnes 3 à 10, texte centré.
- **Mesure :** 44 caractères pour le chapô (`site-measure-lead`), 46 pour un paragraphe (`site-measure-body`).
- **Hauteur :** une section fait au moins 100 % de la hauteur d’écran, avec 96 px de marge en haut et en bas (`site-scene-padding`). L’accueil retire la hauteur de l’en-tête (70 px) et prend 40 px en haut, 120 px en bas. Le contact pose son texte en bas de l’écran, avec 120 px dessous.
- **Rythme d’un bloc de texte :** 18 px entre le surtitre, le titre, le paragraphe et la liste ; 12 px entre deux boutons.

## Typographie du site

| Style | Famille | Taille | Interligne | Graisse | Approche | Usage |
|---|---|---|---|---|---|---|
| `site-h1` | IBM Plex Sans | de 36 à 60 px (`clamp(36px, 5vw, 60px)`) | 1,06 | 600 | −0,015em | Le titre de la page, un seul |
| `site-h2` | IBM Plex Sans | de 28 à 42 px (`clamp(28px, 3.4vw, 42px)`) | 1,12 | 600 | −0,015em | Titre d’une section |
| `site-lead` | Nunito Sans | 19 px | 1,65 | 400 | | Chapô de l’accueil |
| `site-body` | Nunito Sans | 17 px (16 px à 900 px et moins) | 1,65 | 400 | | Texte courant |
| `site-fact` | Nunito Sans | 16 px | 1,65 | 400 | | Ligne d’une liste de faits |
| `site-button` | IBM Plex Sans | 16 px | 1 | 600 | | Boutons |
| `site-nav` | IBM Plex Sans | 14 px | 1 | 500 | | Menu |
| `site-eyebrow` | JetBrains Mono | 12 px | 1,3 | 500 | 0,08em, capitales | Surtitre, indice de défilement |
| `site-fact-num` | JetBrains Mono | 12 px | 1,9 | 500 | | Numéro d’un fait |
| `site-foot` | JetBrains Mono | 12 px | 1,4 | 500 | 0,04em, capitales | Pied de page |
| `site-annotation` | JetBrains Mono | 11 px | | 500 | 0,6 px, capitales | Étiquette d’une annotation du cube |
| `site-annotation-sub` | JetBrains Mono | 10 px | | 400 | 0,2 px | Sous-ligne d’une annotation |

- Les titres s’équilibrent sur leurs lignes (`text-wrap: balance`).
- Casse de phrase dans les titres et le texte. Les capitales restent réservées aux micro-étiquettes en JetBrains Mono.
- **Le mot accentué.** Sur le site, les titres sont déjà en graisse 600 : un mot accentué ne s’y distinguerait plus que par la couleur. La page d’accueil n’en utilise aucun. N’en ajoutez pas sans raison ; si vous en placez un, il reste unique dans le titre et prend `color-accent-text`.

## Couleurs du site

| Rôle | Token | Valeur |
|---|---|---|
| Fond de page | `color-background` | `#FEFDF9` |
| Titres, logo, texte des annotations | `color-text` | `#2B2D2B` |
| Texte courant | `color-text-body` | `#55554E` |
| Surtitres, numéros, pied de page | `color-text-soft` | `#6B6B62` |
| Bouton principal | `color-action`, survol `color-action-hover` | `#2B2D2B`, `#1F211F` |
| Texte du bouton principal | `color-on-action` | `#FFFFFF` |
| Sauge : numéro de face, survol du menu, focus, cube | `color-primary` | `#2E6F6A` |
| Filets de page | `color-line-faint` | `#E2DED1` |
| Contour du bouton secondaire, traits de construction | `color-line` | `#CBC6B5` |
| Traits d’annotation, contours des reliefs | `color-line-mid` | `#9C9783` |

- La sauge appartient au cube et aux repères : le contour du cube, la pièce sauge de chaque face, le numéro « Face 01 », le survol d’un lien du menu, l’anneau de focus. Elle ne remplit jamais un bouton du site.
- Le blanc pur `#FFFFFF` est permis sur l’aplat encre du bouton principal. Il reste interdit sur un aplat sauge.
- Les trois gris de trait sont ceux des illustrations : le site et les planches partagent la même mine.

## Composants du site

Chaque composant a sa carte dans le groupe *Site*.

### En-tête

Le logo à gauche, 28 px de haut (`site-logo-height`), en SVG tracé ; le menu à droite, en `site-nav`, 26 px entre deux liens. 22 px de marge en haut et en bas. L’en-tête défile avec la page : il n’est ni fixe ni collant. Un lien du menu passe en sauge au survol et au focus, sans soulignement. Le menu mène aux ancres de la page : « Site web », « Outils internes », « IA », « Contact ».

### Boutons

- **Principal :** aplat `color-action`, texte `color-on-action` en `site-button`, marges intérieures de 15 px et 22 px, rayon `radius-md`, sans bordure. Au survol, `color-action-hover`.
- **Secondaire :** fond transparent, texte `color-text`, contour intérieur de 1 px `color-line`. Mêmes dimensions.
- Un seul bouton principal par écran. Le bouton secondaire l’accompagne, il ne le remplace pas.
- Ni ombre, ni changement d’échelle, ni fondu d’opacité.

### Surtitre

Une ligne en `site-eyebrow`, `color-text-soft`, au-dessus d’un titre. Sur une face, il commence par le numéro en sauge : « **Face 01** Site web ». Il situe, il ne résume pas : ne répétez pas le titre.

### Liste de faits

Trois lignes numérotées « 01 », « 02 », « 03 », séparées par des filets de 1 px `color-line-faint`, y compris au-dessus de la première et sous la dernière. Le numéro est en `site-fact-num` dans une colonne de 44 px, le fait en `site-fact`, 11 px de marge en haut et en bas. Un fait tient sur une ligne au bureau et dit ce que le client obtient.

### Indice de défilement

Sous les boutons de l’accueil : un trait vertical de 1 px sur 28 px en `color-line`, parcouru par un segment sauge de 10 px (un cycle de 1,8 s), et la mention « Faites tourner le cube » en `site-eyebrow`. Avec `prefers-reduced-motion`, le segment ne bouge pas.

### Pied de page

Un filet de 1 px `color-line-faint`, puis une ligne en `site-foot`, `color-text-soft`, 26 px de marge en haut et en bas : l’année et le nom à gauche, « Sites · Outils internes · IA » à droite.

### Annotations du cube

Trois lignes de rappel par face sortie, au bureau seulement. Règles dans « Motion », partie « La scène du cube ».

## Focus

Tout lien et tout bouton reçoit au clavier un contour plein de 2 px `color-primary`, décalé de 3 px (`site-focus-width`, `site-focus-offset`). Ne le retirez jamais.

## Mobile (900 px et moins)

- Le texte prend toute la largeur. Il passe sous le cube, sur un bandeau papier à 92 % d’opacité, avec 18 px de marge en haut et en bas.
- Chaque section garde une hauteur d’écran : le cube occupe la moitié haute, le texte la moitié basse.
- Le contact s’aligne à gauche.
- Le texte courant passe à 16 px.
- Le menu disparaît : on atteint les sections par le défilement et par les deux boutons de l’accueil.

## Écriture

- Première personne du singulier et vouvoiement : « Je conçois un site clair et rapide », « votre vitrine ».
- Un titre de face est une phrase complète qui part du métier du client : « Vos fiches papier deviennent un outil taillé pour vous. »
- Un paragraphe par face, deux phrases au plus.
- Trois faits par face, chacun un bénéfice concret, sans verbe à l’infinitif ni jargon : « Devis et rendez-vous demandés en ligne ».
- Le bouton principal porte toujours le même libellé : « Parlons de votre projet ».
- Ne montrez ni réalisation, ni témoignage, ni chiffre de résultat tant qu’il n’en existe pas de réel.

## À ne pas faire

- Un bouton sauge sur le site, ou un texte blanc sur un aplat sauge.
- Un titre en graisse 500 ou 700.
- JetBrains Mono pour une phrase de texte courant.
- Une carte à filet de 1 px, ou un filet de page de 0,5 px.
- Une section plus large que 1200 px.
- Un en-tête fixe ou collant qui recouvrirait le cube.
- Une quatrième face.

## Écarts connus entre le code et cette section

Le code du site précède cette section sur quatre points. Ils sont à corriger dans le code, pas à reproduire :

- les textes utilisent l’apostrophe droite `'` au lieu de l’apostrophe typographique `’` ;
- `home.css` déclare ses propres variables (`--paper`, `--ink`, `--sage`) au lieu des tokens sémantiques ;
- la section de contact n’a pas encore de formulaire : son bouton pointe sur elle-même ;
- le menu n’a pas de version mobile.
