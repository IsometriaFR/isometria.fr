# Illustrations

Une illustration Isometria explique une offre en montrant un objet qu’on reconnaît d’un coup d’œil : un poste de travail, une machine, un meuble. L’objet est l’explication. On ne dessine ni boîtes, ni flèches, ni légendes. Ce style a été validé en novembre 2026 et remplace les essais « planche d’atelier » (panneaux flottants, grille au sol, hachures).

Les illustrations ne sont pas des schémas. Un schéma (section « Schémas ») montre un flux ou un empilement avec des nœuds et des connecteurs. Une illustration montre un objet réel, avec du volume, sur la page d’une offre, en tête d’un article ou sur une couverture.

## Les quatre planches de référence

| Planche | Offre | Objet | Pièce sauge |
|---|---|---|---|
| PL—01 | Site web | Le poste vitrine : écran avec le site d’un artisan, mobile sur son socle, clavier, pavé, carnet | Le mobile |
| PL—02 | App métier | Le casier à fiches et la liasse papier, puis la tablette métier reliée à une imprimante d’étiquettes | La tablette |
| PL—03 | Automatisation | La trieuse : bac d’entrée, convoyeur, portique de lecture avec compteur, trois bacs de sortie | Le bac Factures |
| PL—04 | IA | Les classeurs de l’entreprise, l’assistant au centre de cercles gravés, l’écran où il répond | L’assistant |

Les fichiers SVG sont dans le groupe d’assets *Illustrations*. Chaque planche a aussi sa carte dans le groupe *Illustrations* des composants.

## Grammaire

- **Un objet réel.** Choisissez une machine, un outil ou un meuble dont le fonctionnement correspond à l’offre. Dites en une phrase ce qui bouge et ce que ce mouvement veut dire.
- **Beaucoup de petites pièces.** Entre 40 et 100 pièces par planche : socle sur pieds, vis aux coins, rainure, réglet gradué, câbles qui finissent sur une prise, poignées, boutons. Chaque pièce repose sur une autre pièce et sert à quelque chose. Pas de face vide, pas de coin vide.
- **Un socle.** L’objet est posé sur une plaque à bords arrondis, montée sur quatre pieds. Pas de sol, pas de grille.
- **Volume doux.** Chaque face prend un des quatre aplats crème selon son orientation, et le dessus reste blanc. Pas de dégradé, pas d’ombre portée, pas de hachure ni de trame.
- **Trait.** Gris chaud, 0,75 px, non mis à l’échelle. Trois intensités : contour, structure, rainure.
- **Une seule pièce sauge.** Aplat `teal-50` à `teal-100`, contour `teal-400`. C’est ce que le client gagne : le mobile où on le trouve, l’outil fait sur mesure, les factures rangées, l’assistant.
- **Encre rare.** `cream-800` pour trois repères au plus : un bouton, une pastille, un compteur.
- **Écrans crédibles.** Une interface est dessinée dans le plan de son écran, avec de vrais micro-textes métier (« Prendre RDV », « Chantiers », « 142 docs »). Titres en IBM Plex Sans, texte en Nunito Sans, chiffres et étiquettes techniques en JetBrains Mono. Le texte reste dans sa fenêtre.
- **Une étiquette au plus** gravée sur l’objet en dehors des écrans.

## Règles de construction

- **Ordre de dessin.** On dessine de l’arrière vers l’avant et du bas vers le haut. Une pièce posée sur une autre part du dessus de celle-ci, jamais du sol (un pilier part du dessus de sa semelle).
- **Pièces répétées.** Les touches, fiches et fentes suivent une grille régulière. On les dessine rangée du fond d’abord, puis de gauche à droite.
- **Contenants.** Ce qui est dans un bac, un tiroir ou un casier est dessiné entre ses parois : parois arrière, contenu, puis parois avant. Un tiroir sort d’une vraie ouverture, avec un petit jeu visible autour.
- **Câbles.** Ils sont posés sur le socle, coudés à angle droit, et finissent sur une prise ou une pastille, jamais dans le vide.
- **Lignes.** Chaque trait finit sur un bord, un autre trait ou une pastille. Seuls les traits qui figurent du texte imprimé peuvent s’arrêter sur une face.

## Palette

| Rôle | Valeur |
|---|---|
| Dessus | `#FFFFFF` |
| Faces, de la plus claire à la plus sombre | `#FAF8F3`, `#F5F3EC`, `#F0EDE4`, `#EAE6DA` |
| Trait de contour | `#9C9783` |
| Trait de structure | `#B3AE9C` |
| Trait léger, rainures | `#CBC6B5`, `#E2DED1` |
| Pièce sauge | aplats `#F0F5F4` à `#CFE1DE`, contour `teal-400` `#5A9792` |
| Encre | `cream-800` `#45453F` |
| Fond | `cream-200` `#FEFDF9` |

## Caméra et cadrage

- Projection isométrique, élévation 30°. L’azimut varie de 50° à 60° pour montrer la face qui porte l’action (l’écran, le côté du convoyeur).
- L’objet occupe 55 à 65 % du cadre. Même échelle sur toutes les planches d’une page.
- Lisible à 390 px de large : au besoin, recadrez plutôt que d’alléger.

## Mouvement

Une planche peut bouger quand le mouvement est l’explication (les documents qui avancent sur la trieuse, le compteur qui monte). Mouvement lent et continu, arrêté hors écran et avec `prefers-reduced-motion`. Sans mouvement, l’image doit rester complète.

## Les faces du cube de l’accueil

Sur la page d’accueil, chaque face du cube du logo porte une offre, dessinée « en couches » : une fenêtre posée à plat sur la face, puis les blocs de la page (navigation, accroche, photo, cartes, tableau, réponse de l’assistant) qui flottent tous à la même hauteur au-dessus d’elle, avec leurs tranches visibles et une vis à chaque coin. Une seule pièce sauge par face : « Prendre RDV » pour le site, l’automatisation « Relance des devis » pour les outils, la réponse préparée pour l’IA. Une face sortie prend un fin contour `teal-400`. Le relief se dévoile bloc après bloc quand la face est en place (section « Motion », partie « La scène du cube »). Le texte d’une face reste dans l’axe de lecture de la vue : la face IA tourne son repère pour cela.

## Fabrication

Les planches sont générées en SVG par code (kit isométrique Anatomy, aux couleurs Isometria). Le générateur et une planche par fichier sont dans le dossier du projet `illustration/anatomy/`. Pour une nouvelle planche : partir de la plus proche, garder le socle et la palette, changer l’objet.
