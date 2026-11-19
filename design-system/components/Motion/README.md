Les gestes du motion Isometria — le tracé, le dévoilement, le mot accentué (et le fonctionnement des planches) — joués avec les durées et les courbes du système.

- Tracé : `duration-draw`, `ease-in-out`. Dévoilement : mot par mot, du gris clair `#E2DED1` à l’encre, sans bouger, `duration-enter`, `ease-out`, décalage `duration-stagger`. Mot accentué : `duration-accent`, couleur seule.
- Le glissement le long d’un axe à 30° (ancien « assemblage ») est retiré depuis la v1.9.
- En GSAP (site et HyperFrames) : `power2.out`, `power2.inOut`, `power2.in`, `none`. Jamais `back`, `elastic` ni `bounce`.
- Avec `prefers-reduced-motion`, l’état final s’affiche sans transition.
- La rotation et le parallaxe de l’accueil ont leur propre carte : « Scène du cube ».
- Règles complètes : section « Motion ».
