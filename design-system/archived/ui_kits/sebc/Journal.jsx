// Journal.jsx — index of articles
function Journal({ onOpen }) {
  const posts = [
    {
      slug: "astro-islands",
      kicker: "Pratique",
      title: "Le pattern islands, en pratique.",
      accent: "islands",
      date: "14 avril 2026",
      read: "7 min",
      excerpt:
        "Hydrater juste ce qu'il faut, quand il faut. Un retour sur trois projets en production avec Astro 5.",
      tags: ["astro 5.x", "performance"],
    },
    {
      slug: "static-is-enough",
      kicker: "Opinion",
      title: "Pour 80 % des sites, le statique suffit.",
      accent: "statique",
      date: "03 avril 2026",
      read: "5 min",
      excerpt:
        "Un plaidoyer tranquille pour les sites sans base de données — et les cas où ça ne suffit plus.",
      tags: ["architecture", "cloudflare"],
    },
    {
      slug: "forfait",
      kicker: "Studio",
      title: "Pourquoi je facture au forfait.",
      accent: "forfait",
      date: "21 mars 2026",
      read: "4 min",
      excerpt:
        "Le client sait combien il paie. Je sais combien je gagne. Et on se concentre sur le site, pas sur le compteur.",
      tags: ["méthode"],
    },
    {
      slug: "kreon-nunito",
      kicker: "Design",
      title: "Kreon + Nunito : pourquoi ce duo.",
      accent: "duo",
      date: "10 mars 2026",
      read: "6 min",
      excerpt:
        "Retour sur le choix typographique du studio : slab humaniste pour la voix, sans humaniste pour la clarté.",
      tags: ["typographie", "identité"],
    },
  ];
  return (
    <section style={{ padding: "72px 40px 48px" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <Badge variant="neutral">Journal</Badge>
        <h1
          style={{
            fontFamily: "IBM Plex Sans, sans-serif", fontWeight: 600,
            fontSize: 42,
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            color: "#2B2D2B",
            margin: "20px 0 14px",
            maxWidth: 760,
          }}
        >
          Notes techniques, <Accent>carnets</Accent> d'atelier.
        </h1>
        <p style={{ fontSize: 18, color: "#45453F", maxWidth: 580, margin: "0 0 48px" }}>
          Un article par mois, parfois deux. Tutoiement assumé — j'écris pour
          mes pairs.
        </p>
        <div style={{ display: "grid", gap: 20 }}>
          {posts.map((p) => (
            <a
              key={p.slug}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onOpen(p.slug);
              }}
              style={{ textDecoration: "none", border: "none", color: "inherit" }}
            >
              <Card>
                <div style={{ display: "grid", gridTemplateColumns: "110px 1fr 140px", gap: 32, alignItems: "start" }}>
                  <div
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 11,
                      color: "#2E6F6A",
                      marginTop: 6,
                    }}
                  >
                    {p.kicker}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "IBM Plex Sans, sans-serif", fontWeight: 600,
                        fontSize: 24,
                        lineHeight: 1.25,
                        letterSpacing: "-0.01em",
                        color: "#2B2D2B",
                        margin: "0 0 8px",
                      }}
                    >
                      {p.title.replace(p.accent, "||")
                        .split("||")
                        .reduce((acc, chunk, i, arr) => {
                          acc.push(chunk);
                          if (i < arr.length - 1) acc.push(<Accent key={i}>{p.accent}</Accent>);
                          return acc;
                        }, [])}
                    </h3>
                    <p style={{ fontSize: 14, color: "#45453F", lineHeight: 1.6, margin: "0 0 12px", maxWidth: 560 }}>
                      {p.excerpt}
                    </p>
                    <div style={{ display: "flex", gap: 6 }}>
                      {p.tags.map((t) => (
                        <TagTech key={t}>{t}</TagTech>
                      ))}
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 11,
                      color: "#6B6B62",
                      textAlign: "right",
                      marginTop: 6,
                    }}
                  >
                    <div>{p.date}</div>
                    <div style={{ color: "#ADA896" }}>{p.read}</div>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Journal });
