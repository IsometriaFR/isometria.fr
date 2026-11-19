// Hero.jsx — home hero
function Hero({ onCta }) {
  return (
    <section style={{ padding: "80px 40px 48px" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <Badge variant="info" dot>Disponible · printemps 2026</Badge>
        <h1
          style={{
            fontFamily: "IBM Plex Sans, sans-serif", fontWeight: 600,
            fontSize: 56,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#2B2D2B",
            margin: "24px 0 20px",
            maxWidth: 760,
          }}
        >
          Le web <Accent>artisanal</Accent>, avec des racines.
        </h1>
        <p
          style={{
            fontFamily: "Nunito Sans, sans-serif",
            fontSize: 18,
            lineHeight: 1.6,
            color: "#45453F",
            maxWidth: 600,
            margin: "0 0 32px",
          }}
        >
          Je conçois et livre des sites statiques pour les TPE et les PME
          françaises. Des pages rapides, tenues dans le temps, sans base de
          données et sans runtime serveur.
        </p>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Button variant="primary" onClick={onCta}>
            Discuter d'un projet
          </Button>
          <Button variant="secondary" onClick={onCta}>
            Voir les services
          </Button>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
