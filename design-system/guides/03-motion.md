# Motion

> **v1.9.** Cette section reprend le brouillon Motion de novembre (durées, quatre gestes, dévoilement) et ajoute la scène du cube de la page d’accueil, validée sur le prototype `cube-gsap` (v23) et mise en ligne sur `isometria.fr`. Les règles propres aux vidéos et aux clips sont dans la section « Motion vidéo ».

Calme et construit. Rien n’arrive par effet : chaque élément apparaît parce qu’il est tracé, posé ou assemblé, et chaque objet bouge parce que c’est son travail de bouger. Le spectateur regarde quelque chose se construire ou fonctionner, jamais quelque chose qui cherche à attirer l’œil.

Le mouvement sert à expliquer. Sur le site, il explique une offre à un dirigeant de TPE ou de PME. Sur la chaîne, il aide à comprendre et à utiliser Claude et l’IA. S’il n’explique rien, on ne l’anime pas.

## Où on s’en sert

| Support | Ce qui bouge | Règles |
|---|---|---|
| Site | Interface, entrées de section, illustrations animées, et la scène du cube sur l’accueil | Cette section |
| YouTube | Génériques, titres de chapitre, captures commentées, prompts, planches animées | « Motion vidéo » |
| Réseaux sociaux | Astuces courtes, extraits des tutoriels | « Motion vidéo » et « Réseaux sociaux » |

Les trois supports partagent les mêmes durées, courbes et gestes, et les mêmes SVG de planches. Une planche animée sur le site doit pouvoir devenir une scène de vidéo sans être redessinée.

## Durées

| Token | Valeur | Usage |
|---|---|---|
| `duration-ui-fast` | 120 ms | Interface : survol, focus |
| `duration-ui` | 200 ms | Interface : ouverture, changement d’état |
| `duration-exit` | 300 ms | Sortie d’un élément à l’écran |
| `duration-accent` | 300 ms | Le mot accentué passe à la sauge |
| `duration-retract` | 450 ms | *Nouveau.* Le relief d’une face du cube rentre dans la face |
| `duration-enter` | 500 ms | Entrée d’un texte, d’un nœud, d’une carte |
| `duration-scene` | 600 ms | Fondu entre deux scènes |
| `duration-move` | 700 ms | Déplacement d’un élément déjà à l’écran, mouvement de cadre |
| `duration-draw` | 900 ms | Tracé d’un trait, d’un connecteur, du cube |
| `duration-anchor` | 1400 ms | *Nouveau.* Défilement doux vers une ancre (menu, « Voir les trois faces ») |
| `duration-relief` | 1800 ms | *Nouveau.* Le relief d’une face du cube sort, bloc après bloc |
| `duration-stagger` | 80 ms | Décalage entre deux éléments d’une même série |
| `duration-hold` | 1200 ms | Tenue minimale d’un écran de texte |
| `duration-cycle` | 6 à 12 s | *Nouveau.* Un tour complet d’une illustration animée ou d’une boucle d’ambiance |

Les durées d’interface ne servent que sur le site et dans les applications. En vidéo, rien ne dure moins que `duration-exit`.

## Courbes

| Token | Valeur | Équivalent GSAP | Usage |
|---|---|---|---|
| `ease-out` | `cubic-bezier(0.33, 1, 0.68, 1)` | `power2.out` | Toutes les entrées |
| `ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | `power2.inOut` | Tracés, déplacements, mouvements de cadre, rotation du cube |
| `ease-in` | `cubic-bezier(0.32, 0, 0.67, 0)` | `power2.in` | Sorties |
| `ease-linear` | `linear` | `none` | Mouvement mécanique continu et parallaxe : convoyeur, aiguille, calque de fond |

Quatre courbes pour tout le système. Jamais de rebond, d’élastique ni de dépassement (`back`, `elastic`, `bounce`).

**Courbes douces, réservées à la scène du cube.** Le défilement est piloté par le doigt ou la molette du lecteur : une courbe franche s’y lit comme un à-coup. Trois courbes plus douces y sont permises, et nulle part ailleurs.

| Token | Valeur | Équivalent GSAP | Usage |
|---|---|---|---|
| `ease-soft-out` | `cubic-bezier(0.61, 1, 0.88, 1)` | `sine.out` | Le cube recule pendant qu’il tourne |
| `ease-soft-in` | `cubic-bezier(0.12, 0, 0.39, 0)` | `sine.in` | Le cube revient à sa taille |
| `ease-rise` | `cubic-bezier(0.5, 1, 0.89, 1)` | `power1.out` | Le relief d’une face sort |

## Les quatre gestes

1. **Le tracé.** Un trait se dessine d’un bout à l’autre : connecteur de schéma, contour de nœud, arêtes du cube. `duration-draw`, `ease-in-out`. Le contour d’abord, le remplissage ensuite, en fondu.
2. **Le dévoilement.** Rien ne glisse en diagonale. Un texte apparaît mot par mot, du gris clair `#E2DED1` à l’encre, sans bouger (`duration-enter`, `ease-out`, `duration-stagger` entre deux mots). Le mot-symbole se déroule depuis le cube, vers la gauche et vers la droite (`duration-move`, `ease-in-out`). Une planche se dévoile dans le sens de son flux, le front parallèle à sa largeur (1,4 s, `ease-in-out`). Sur le cube, le relief d’une face sort le long de sa normale, perpendiculairement à la face. Les cartes d’interface du site gardent leur translation de 2 à 4 px.
3. **Le mot accentué.** Le titre entre en `color-text`. Une fois posé, un seul mot passe en `color-accent-text` sur `duration-accent`. Sa graisse 600 est là dès l’entrée : seule la couleur s’anime.
4. **Le fonctionnement.** Une planche d’illustration fait son travail en boucle : les feuilles avancent sur la trieuse, le compteur monte, le tiroir se ferme. Une seule action par planche, celle qui explique l’offre. Vitesse constante (`ease-linear`) pour ce qui défile, `ease-in-out` pour une pièce qui part et s’arrête. Un tour dure `duration-cycle` et reboucle sans saut visible.

L’ancien geste « assemblage » (glissement de 42 × 24 px le long d’un axe à 30°) est retiré : à l’essai, le glissement en diagonale faisait bon marché.

## Illustrations animées

- **Ce qui bouge.** Les pièces mobiles de l’objet, le long de ses axes isométriques : glissière, convoyeur, tiroir, écran qui défile, voyant. Le socle, la caméra et le cadre ne bougent jamais (seule exception : le cube de l’accueil).
- **La pièce sauge** est l’aboutissement du cycle. Elle peut recevoir une coche ou un voyant `cream-800`, jamais un halo.
- **Lent.** On doit pouvoir suivre une pièce des yeux d’un bout à l’autre. Sur la trieuse : 9 unités par seconde.
- **Économe.** L’animation démarre quand la planche entre à l’écran et s’arrête quand elle en sort (`IntersectionObserver`). Une seule planche animée visible à la fois.
- **Image fixe complète.** Avec `prefers-reduced-motion` ou sans JavaScript, la planche s’affiche dans un état arrêté qui raconte toute l’histoire.

## Sur le site

Opacité et translation de 2 à 4 px, `duration-ui-fast` à `duration-ui`, `ease-out`. À l’entrée dans l’écran, une section se pose une seule fois (geste 2), elle ne rejoue pas au défilement retour. Avec `prefers-reduced-motion`, tout apparaît dans son état final, sans transition.

Une seule page déroge à cette sobriété : l’accueil, avec la scène du cube.

## La scène du cube (page d’accueil)

Le cube du logo est le seul objet qui tourne sur le site. Il porte les trois offres, une par face : le site web à gauche, les outils internes à droite, l’IA sur le dessus. En faisant défiler la page, le lecteur fait tourner le cube et sort l’une après l’autre les trois faces. C’est son geste, pas un effet : rien ne bouge s’il ne fait pas défiler, à part une vie d’ambiance très légère.

### Les cinq états

Le cube est dessiné en vraie 3D (lacet `yaw`, tangage `pitch`) dans un SVG fixé à l’écran. À un tangage de 35,264°, sa silhouette est exactement l’hexagone du logo. Chaque section a son état ; le cube alterne de gauche à droite, à l’opposé du texte.

| Section | Position (bureau) | Taille | Lacet | Tangage | Face sortie |
|---|---|---|---|---|---|
| Accueil | 68 % · 53 % | 1 | 45° | 35,264° (le logo) | aucune, traits de construction autour |
| Face 01 · Site web | 29 % · 50 % | 1,06 | 112° | 28° | gauche |
| Face 02 · Outils internes | 71 % · 53 % | 1,06 | −22° | 20° | droite |
| Face 03 · IA | 29 % · 55 % | 1,04 | 45° | 56° | dessus |
| Contact | 50 % · 26 % | 0,7 | 405° (un tour) | 35,264° | les trois, en vue éclatée |

La position est en part de la largeur et de la hauteur de l’écran. Le rayon de l’hexagone vaut `min(15 % de la largeur, 23,5 % de la hauteur)` sur bureau, multiplié par la taille de l’état. À la fin, le cube a fait un tour complet et revient à la pose du logo, ses trois faces ouvertes au-dessus de l’appel à l’action.

### Le passage d’une section à l’autre

Chaque passage occupe 70 % de la hauteur d’écran de défilement : il commence quand le haut de la section arrive à 88 % de l’écran et finit quand il atteint 18 %. Il se joue en trois temps, jamais en même temps :

| Temps | Part du passage | Ce qui se passe | Courbe |
|---|---|---|---|
| 1 | 0 à 22 % | La face de la section précédente rentre dans le cube | `ease-in` |
| 2 | 20 à 80 % | Le cube tourne et se déplace vers son nouvel état | `ease-in-out` |
| 2 bis | 20 à 50 %, puis 50 à 80 % | Il recule à 82 % de sa taille, puis revient : une respiration, pas un zoom | `ease-soft-out`, puis `ease-soft-in` |
| 3 | 78 à 100 % | La nouvelle face sort du cube | `ease-out` |

Une fois la face complètement sortie, son relief se dévoile (geste 2) : la fenêtre se pose sur la face, puis chaque bloc de la page s’élève le long de la normale, l’un après l’autre (10 % de décalage entre deux blocs), en `duration-relief` et `ease-rise`, après 250 ms d’attente. Le dessin d’un bloc apparaît en fondu à partir de 40 % de sa montée. Quand le lecteur repart, le relief rentre en `duration-retract`, `ease-in`. Ce dévoilement n’est pas lié au défilement : il se joue une fois, quand la face est en place.

**Une seule timeline.** Tout le cube suit une timeline GSAP maîtresse dont le temps est la position de défilement en pixels. L’état du cube est donc une fonction de l’endroit où se trouve la page, quelle que soit la vitesse : remonter rejoue tout à l’envers, rien ne reste bloqué. La page n’est jamais épinglée ni retenue.

### Défilement doux

- La molette est lissée par Lenis (`lerp` 0,1) pour que la scène avance d’un mouvement continu et non par crans.
- La timeline du cube suit le défilement avec 0,6 s de retard (`scrub: 0.6`), les calques de parallaxe avec 0,4 s.
- Un lien d’ancre (menu, « Voir les trois faces ») mène à sa section en `duration-anchor`.

### Le parallaxe

Le parallaxe n’existe que sur l’accueil, et sur trois plans seulement :

| Plan | Mouvement sur la traversée | Courbe |
|---|---|---|
| Colonne de texte d’une section | de +70 px à −70 px pendant que la section traverse l’écran | `ease-linear` |
| Calque lointain de traits de construction | −18 % de sa hauteur sur toute la page | `ease-linear` |
| Calque proche de traits de construction | −42 % de sa hauteur sur toute la page | `ease-linear` |

Le texte reste toujours lisible et ne passe jamais sous le cube. Les calques de fond ne portent que des traits fins en pointillés, du gris le plus léger des illustrations (`#E2DED1`) : jamais d’illustration, de texte ou de sauge en parallaxe.

### Vie d’ambiance

Le cube est posé sur une grille au sol dessinée dans son propre espace 3D (pas de 0,5, un point toutes les deux cases), qui tourne et s’incline avec lui et s’efface en dégradé radial autour de lui (rayon de 2,9 fois le cube). Quelques mouvements la font vivre :

- **Accueil seulement.** Les traits de construction autour du cube apparaissent en fondu échelonné (70 ms entre deux traits), puis leurs pointillés défilent lentement (un cycle de 6 s, `ease-linear`). Des points sauge courent le long de ces traits et s’effacent en arrivant. Trois contours de cube grandissent depuis la base du cube, sur la grille, et s’effacent (un cycle de `duration-cycle`, opacité de départ 0,35).
- **Partout.** Seize impulsions sauge partent du pied du cube et suivent les lignes de la grille, tournent une fois à angle droit et s’effacent en arrivant (1,1 case par seconde, une traîne de 0,55 case).
- **Rien ne reste.** Aucun point fixe, aucune particule : tout ce qui part s’efface en arrivant. Pas de halo, pas d’étincelle.
- **Pauses.** Les animations de l’accueil s’arrêtent dès que l’accueil a quitté l’écran. Les petites boucles (engrenage, points de saisie) s’arrêtent pendant que la page défile.

### Annotations

Sur bureau, chaque face sortie reçoit trois lignes de rappel, à la manière d’un plan : une pastille cerclée de sauge sur le dessin, un trait coudé gris chaud `#9C9783` (le trait de contour des illustrations), une étiquette en JetBrains Mono capitales (11 px, graisse 500, encre) et une sous-ligne en minuscules (10 px, `cream-700`) : « PRENDRE RDV », « sur chaque page ». Elles partent vers l’extérieur du cube et ne se croisent jamais. Sur mobile, on les retire.

### Mobile (900 px et moins)

Le cube monte dans le quart haut de l’écran, plus grand (taille 1,12 à 1,22), et ne change plus de côté. Le texte passe sous le cube, sur un bandeau papier à 92 % d’opacité. Les annotations et les étiquettes de l’accueil disparaissent. Les états, les temps et les courbes ne changent pas.

### Mouvement réduit

Avec `prefers-reduced-motion` :

- pas de défilement lissé, pas de parallaxe, aucune boucle d’ambiance (traits, points, contours, impulsions, engrenage) ;
- le cube suit toujours le défilement, sans retard, puisque c’est le lecteur qui le fait tourner ; le relief des faces apparaît directement dans son état final ;
- toute l’histoire reste lisible : chaque section garde son texte, chaque face son dessin.

### Performance

Le site doit garder une note Lighthouse haute. Le contrôle qualité bloque une mise en ligne sous 90 en performance et sous 95 en accessibilité, bonnes pratiques et SEO ; la page d’accueil mesure 96 / 100 / 100 / 100. Pour tenir :

- **Un seul SVG** fixé à l’écran, isolé (`contain: strict`), recalculé au plus une fois par image : chaque animation marque la scène « à redessiner », le dessin se fait sur le ticker GSAP.
- **Aucune image téléchargée.** Le cube, la grille, les reliefs et les traits de fond sont générés en JavaScript dans le SVG.
- **Trois bibliothèques, pas une de plus :** GSAP, ScrollTrigger et Lenis, empaquetées avec le site, jamais chargées depuis un CDN.
- `will-change: transform` seulement sur la scène, les calques de fond et les colonnes de texte.
- La scène est décorative (`aria-hidden`) : le sens est porté par le texte des sections, lisible sans JavaScript.
- Les polices de titre et de texte sont préchargées ; rien ne bouge avant qu’elles soient prêtes (la timeline est recalculée à `document.fonts.ready`).

**Ailleurs sur le site.** La scène du cube n’existe qu’une fois, sur l’accueil. Les pages d’offre utilisent les planches d’illustration et le geste 4.

## Rythme

- Un écran de texte tient au moins `duration-hold`, plus 300 ms par mot.
- L’ordre de construction suit l’ordre de lecture : de gauche à droite, de haut en bas, la cause avant l’effet.
- Deux mouvements qui se suivent ne se chevauchent que d’un temps court (2 % du passage pour le cube).

## À ne jamais faire

- Rotation, sauf le cube de l’accueil. Zoom percutant, tremblement, glitch, flou de mouvement.
- Parallaxe ailleurs que sur l’accueil, ou sur autre chose que les colonnes de texte et les traits de fond.
- Épingler ou retenir la page pendant le défilement.
- Glisser en diagonale pour faire entrer un élément.
- Texte tapé lettre à lettre, sauf une commande de terminal en `screen-code` ou la réponse de l’assistant sur PL—04, ligne par ligne.
- Deux gestes en même temps sur deux éléments qui ne sont pas liés.
- Un élément qui bouge sans rien expliquer, ou qui ne s’arrête jamais hors écran.
- Halo, particules, étincelles ou « magie » autour de l’IA.

## Fabrication

- **Site et applications :** CSS (transitions, `@keyframes`) et quelques lignes de JavaScript. Pas de bibliothèque d’animation, sauf GSAP, ScrollTrigger et Lenis pour la scène du cube.
- **Scène du cube :** `src/scripts/cube-home.js` dans le dépôt du site (prototype de référence dans le dossier du projet `prototypes/hero-logo/cube-gsap/`). Les états sont dans `STATES_DESK` et `STATES_MOB`, les temps dans la fonction `build()`.
- **Illustrations du site :** dans le code de la planche (`illustration/anatomy/`), une boucle `requestAnimationFrame` bornée par `IntersectionObserver` et `prefers-reduced-motion`.
- **Vidéos et clips :** HyperFrames, voir « Motion vidéo ».
