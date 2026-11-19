La scène du cube de la page d’accueil : le cube du logo tourne au défilement et sort une face par section (site web, outils internes, IA), puis s’ouvre en vue éclatée sur le contact.

- Cinq états (position, taille, lacet, tangage) ; à 35,264° de tangage, la silhouette est exactement l’hexagone du logo.
- Chaque passage dure 70 % de hauteur d’écran de défilement, en trois temps : la face rentre (0–22 %, `ease-in`), le cube tourne et respire à 82 % (20–80 %, `ease-in-out`, `ease-soft-out` puis `ease-soft-in`), la nouvelle face sort (78–100 %, `ease-out`). Puis le relief de la face se dévoile en `duration-relief`, `ease-rise`.
- Une seule timeline GSAP dont le temps est le défilement en pixels ; Lenis lisse la molette (`scroll-lerp`), retard `scroll-scrub-cube`.
- Parallaxe de l’accueil seulement : colonnes de texte (`parallax-copy`) et deux calques de traits de construction (`parallax-far`, `parallax-near`).
- Avec `prefers-reduced-motion` : ni lissage, ni parallaxe, ni boucle d’ambiance ; le cube suit le défilement sans retard, le relief apparaît directement.
- Ce que le site doit fournir : une section par état avec `data-face`, le SVG fixé à l’écran (`aria-hidden`), GSAP, ScrollTrigger et Lenis empaquetés. Code : `src/scripts/cube-home.js`.
- La démonstration de cette carte rejoue les temps et les courbes sans lissage ni parallaxe. Règles complètes : section « Motion », partie « La scène du cube ».
