// Article.jsx — single post layout
function Article() {
  return (
    <article style={{ padding: "72px 40px 32px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 11,
            color: "#2E6F6A",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: 18,
          }}
        >
          Journal · Pratique
        </div>
        <h1
          style={{
            fontFamily: "IBM Plex Sans, sans-serif", fontWeight: 600,
            fontSize: 42,
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            color: "#2B2D2B",
            margin: "0 0 14px",
          }}
        >
          Le pattern <Accent>islands</Accent>, en pratique.
        </h1>
        <div
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 12,
            color: "#6B6B62",
            display: "flex",
            gap: 14,
            marginBottom: 36,
          }}
        >
          <span>14 avril 2026</span>
          <span style={{ color: "#ADA896" }}>·</span>
          <span>7 min de lecture</span>
          <span style={{ color: "#ADA896" }}>·</span>
          <span>par Sébastien C.</span>
        </div>

        <p style={{ fontSize: 18, color: "#45453F", lineHeight: 1.6, margin: "0 0 28px", maxWidth: 600 }}>
          Hydrater juste ce qu'il faut, quand il faut. Un retour sur trois
          projets en production avec <a href="#">Astro 5</a>, livrés entre
          novembre 2025 et avril 2026.
        </p>

        <h2
          style={{
            fontFamily: "IBM Plex Sans, sans-serif", fontWeight: 600,
            fontSize: 28,
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
            color: "#2B2D2B",
            margin: "40px 0 16px",
          }}
        >
          Le principe, en deux lignes.
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "#2B2D2B", margin: "0 0 18px", maxWidth: 600 }}>
          Tu rends la page en HTML statique à la build. Tu hydrates seulement
          les fragments interactifs — un menu, un formulaire, un carrousel —
          avec <code>client:load</code>, <code>client:visible</code> ou{" "}
          <code>client:idle</code>. Le reste reste du HTML, servi comme du
          plat.
        </p>

        <blockquote
          style={{
            margin: "32px 0",
            fontFamily: "IBM Plex Sans, sans-serif", fontWeight: 600,
            fontSize: 22,
            lineHeight: 1.3,
            letterSpacing: "-0.005em",
            color: "#2B2D2B",
            borderLeft: "2px solid #2E6F6A",
            paddingLeft: 16,
          }}
        >
          Le site charge sous 400 ms sur une fibre moyenne. Et surtout, il continue de charger vite dans deux ans, sans que personne n'y touche.
        </blockquote>

        <h2
          style={{
            fontFamily: "IBM Plex Sans, sans-serif", fontWeight: 600,
            fontSize: 28,
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
            color: "#2B2D2B",
            margin: "40px 0 16px",
          }}
        >
          Un exemple concret.
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "#2B2D2B", margin: "0 0 14px", maxWidth: 600 }}>
          La page d'accueil de <a href="#">Le Pain des Glycines</a>, une boulangerie lyonnaise, contient un seul îlot :
          un formulaire de commande. Le reste est du HTML.
        </p>
        <pre
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 13,
            background: "#FAF7EE",
            border: "0.5px solid #F1EDE0",
            padding: "14px 16px",
            borderRadius: 8,
            overflowX: "auto",
            lineHeight: 1.55,
            margin: "0 0 20px",
          }}
        >
{`---
import OrderForm from '../components/OrderForm.jsx';
---
<Layout title="Le Pain des Glycines">
  <Hero />
  <OrderForm `}<span style={{ color: "#2E6F6A" }}>client:visible</span>{` />
  <Footer />
</Layout>`}
        </pre>

        <p style={{ fontSize: 16, lineHeight: 1.7, color: "#2B2D2B", margin: "0 0 14px", maxWidth: 600 }}>
          L'hydratation ne démarre que quand le formulaire entre dans la
          viewport. Avant ça : zéro JS chargé, zéro parse, zéro exécution.
        </p>

        <div
          style={{
            display: "flex",
            gap: 6,
            flexWrap: "wrap",
            margin: "40px 0 0",
            paddingTop: 24,
            borderTop: "0.5px solid #F1EDE0",
          }}
        >
          <TagTech>astro 5.x</TagTech>
          <TagTech>performance</TagTech>
          <TagTech>architecture</TagTech>
        </div>
      </div>
    </article>
  );
}

Object.assign(window, { Article });
