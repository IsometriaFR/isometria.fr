// Footer.jsx
function Footer() {
  return (
    <footer
      style={{
        borderTop: "0.5px solid #F1EDE0",
        marginTop: 96,
        padding: "48px 40px 56px",
        background: "#FEFDF9",
      }}
    >
      <div
        style={{
          maxWidth: 1040,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
          gap: 40,
          alignItems: "start",
        }}
      >
        <div>
          <Logo />
          <p
            style={{
              marginTop: 14,
              fontSize: 13,
              color: "#6B6B62",
              lineHeight: 1.6,
              maxWidth: 320,
            }}
          >
            Un studio web indépendant basé à Lyon. Sites statiques, tenus dans
            le temps, pour TPE et PME qui veulent un web qui dure.
          </p>
        </div>
        <FooterCol
          title="Studio"
          links={["Services", "Références", "Journal", "Contact"]}
        />
        <FooterCol title="Écrire" links={["hello@sebc.dev", "+33 6 00 00 00 00"]} mono />
        <FooterCol title="Ailleurs" links={["LinkedIn ↗", "GitHub ↗", "RSS ↗"]} />
      </div>
      <div
        style={{
          maxWidth: 1040,
          margin: "40px auto 0",
          paddingTop: 20,
          borderTop: "0.5px solid #F1EDE0",
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 11,
          color: "#ADA896",
        }}
      >
        <span>© 2026 Isometria — studio indépendant</span>
        <span>v1.2 · mai 2026</span>
      </div>
    </footer>
  );
}

function FooterCol({ title, links, mono }) {
  return (
    <div>
      <h4
        style={{
          fontFamily: "Nunito Sans, sans-serif",
          fontSize: 11,
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "#6B6B62",
          margin: "0 0 14px",
        }}
      >
        {title}
      </h4>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              style={{
                fontFamily: mono ? "JetBrains Mono, monospace" : "Nunito Sans, sans-serif",
                fontSize: mono ? 12 : 13,
                color: "#2B2D2B",
                textDecoration: "none",
                border: "none",
              }}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

Object.assign(window, { Footer });
