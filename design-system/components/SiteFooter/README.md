Le pied de page du site et l’indice de défilement de l’accueil, les deux lignes en JetBrains Mono qui ouvrent et ferment la page.

- **Pied de page :** un filet de 1 px `color-line-faint`, puis une ligne en `site-foot` (JetBrains Mono 500, 12 px, approche 0,04em, capitales), `color-text-soft`, 26 px de marge en haut et en bas. L’année et le nom à gauche, « Sites · Outils internes · IA » à droite ; les deux passent à la ligne sur un écran étroit.
- **Indice de défilement :** sous les boutons de l’accueil seulement. Un trait de 1 px sur 28 px en `color-line`, parcouru par un segment `color-primary` de 10 px en 1,8 s, et la mention « Faites tourner le cube » en `site-eyebrow`.
- Avec `prefers-reduced-motion`, le segment ne bouge pas.
- **Ce que vous fournissez :** l’année. Le reste du texte ne change pas d’une page à l’autre.
- Pas de liens de réseaux sociaux ni de second menu dans le pied de page tant que le site n’a qu’une page.

Règles complètes : section « Le site ».
