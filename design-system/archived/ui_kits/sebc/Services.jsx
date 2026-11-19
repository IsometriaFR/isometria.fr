// Services.jsx + Stats.jsx
function Services() {
  const items = [
    {
      kicker: "01",
      title: "Site vitrine",
      accent: "vitrine",
      body:
        "Un site sur-mesure, 4 à 8 pages, pensé pour durer sans maintenance lourde. Livraison en 4 à 6 semaines.",
      tags: ["astro 5.x", "tailwind v4", "cloudflare pages"],
    },
    {
      kicker: "02",
      title: "Journal et newsletter",
      accent: "journal",
      body:
        "Une plateforme éditoriale légère, pour publier des articles longs et envoyer une newsletter sans outil tiers.",
      tags: ["astro content", "mdx", "resend"],
    },
    {
      kicker: "03",
      title: "Outils internes",
      accent: "internes",
      body:
        "Petites applications métiers pour structurer un flux de travail : fiches clients, planning, suivi de devis.",
      tags: ["tauri v2", "spring boot", "postgres"],
    },
  ];
  return (
    <section style={{ padding: "80px 40px 48px", borderTop: "0.5px solid #F1EDE0" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "IBM Plex Sans, sans-serif", fontWeight: 600,
            fontSize: 32,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            color: "#2B2D2B",
            margin: "0 0 10px",
            maxWidth: 640,
          }}
        >
          Trois offres, <Accent>lisibles</Accent>, au forfait.
        </h2>
        <p style={{ fontSize: 16, color: "#6B6B62", maxWidth: 600, margin: "0 0 40px" }}>
          Chaque projet est cadré avant signature, avec un prix fixe et un
          calendrier précis. Pas de régie, pas de facture surprise.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          {items.map((it) => (
            <Card key={it.kicker}>
              <div
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 11,
                  color: "#2E6F6A",
                  marginBottom: 14,
                }}
              >
                {it.kicker}
              </div>
              <h3
                style={{
                  fontFamily: "IBM Plex Sans, sans-serif", fontWeight: 600,
                  fontSize: 20,
                  letterSpacing: "-0.005em",
                  color: "#2B2D2B",
                  margin: "0 0 10px",
                }}
              >
                Site <Accent>{it.accent}</Accent>
              </h3>
              <p style={{ fontSize: 14, color: "#45453F", lineHeight: 1.6, margin: "0 0 18px" }}>
                {it.body}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {it.tags.map((t) => (
                  <TagTech key={t}>{t}</TagTech>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    ["7 ans", "d'indépendance"],
    ["24", "sites livrés"],
    ["100\u00a0%", "statique"],
    ["4–6", "semaines par projet"],
  ];
  return (
    <section style={{ padding: "64px 40px", borderTop: "0.5px solid #F1EDE0" }}>
      <div
        style={{
          maxWidth: 940,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 32,
        }}
      >
        {stats.map(([n, l]) => (
          <div key={l}>
            <div
              style={{
                fontFamily: "IBM Plex Sans, sans-serif", fontWeight: 600,
                fontSize: 42,
                color: "#2E6F6A",
                lineHeight: 1,
                letterSpacing: "-0.015em",
                marginBottom: 6,
              }}
            >
              {n}
            </div>
            <div style={{ fontSize: 13, color: "#6B6B62" }}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Services, Stats });
