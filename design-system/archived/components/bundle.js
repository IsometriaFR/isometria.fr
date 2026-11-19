/* @ds-bundle: {"format":4,"namespace":"IsometriaDesignSystem_f73f3a","components":[],"sourceHashes":{"ui_kits/sebc/Article.jsx":"4c46ebfbd47e","ui_kits/sebc/Footer.jsx":"2a5edb86c2ea","ui_kits/sebc/Header.jsx":"48f8cd53f4b3","ui_kits/sebc/Hero.jsx":"0d2b23e66251","ui_kits/sebc/Journal.jsx":"518314adc491","ui_kits/sebc/Primitives.jsx":"05d3c527ff83","ui_kits/sebc/Services.jsx":"f6da513e877e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.IsometriaDesignSystem_f73f3a = window.IsometriaDesignSystem_f73f3a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/sebc/Article.jsx
try { (() => {
// Article.jsx — single post layout
function Article() {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      padding: "72px 40px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "JetBrains Mono, monospace",
      fontSize: 11,
      color: "#2E6F6A",
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      marginBottom: 18
    }
  }, "Journal \xB7 Pratique"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "IBM Plex Sans, sans-serif",
      fontWeight: 600,
      fontSize: 42,
      lineHeight: 1.1,
      letterSpacing: "-0.015em",
      color: "#2B2D2B",
      margin: "0 0 14px"
    }
  }, "Le pattern ", /*#__PURE__*/React.createElement(Accent, null, "islands"), ", en pratique."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "JetBrains Mono, monospace",
      fontSize: 12,
      color: "#6B6B62",
      display: "flex",
      gap: 14,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("span", null, "14 avril 2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#ADA896"
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "7 min de lecture"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#ADA896"
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "par S\xE9bastien C.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: "#45453F",
      lineHeight: 1.6,
      margin: "0 0 28px",
      maxWidth: 600
    }
  }, "Hydrater juste ce qu'il faut, quand il faut. Un retour sur trois projets en production avec ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Astro 5"), ", livr\xE9s entre novembre 2025 et avril 2026."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "IBM Plex Sans, sans-serif",
      fontWeight: 600,
      fontSize: 28,
      lineHeight: 1.25,
      letterSpacing: "-0.01em",
      color: "#2B2D2B",
      margin: "40px 0 16px"
    }
  }, "Le principe, en deux lignes."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.7,
      color: "#2B2D2B",
      margin: "0 0 18px",
      maxWidth: 600
    }
  }, "Tu rends la page en HTML statique \xE0 la build. Tu hydrates seulement les fragments interactifs \u2014 un menu, un formulaire, un carrousel \u2014 avec ", /*#__PURE__*/React.createElement("code", null, "client:load"), ", ", /*#__PURE__*/React.createElement("code", null, "client:visible"), " ou", " ", /*#__PURE__*/React.createElement("code", null, "client:idle"), ". Le reste reste du HTML, servi comme du plat."), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: "32px 0",
      fontFamily: "IBM Plex Sans, sans-serif",
      fontWeight: 600,
      fontSize: 22,
      lineHeight: 1.3,
      letterSpacing: "-0.005em",
      color: "#2B2D2B",
      borderLeft: "2px solid #2E6F6A",
      paddingLeft: 16
    }
  }, "Le site charge sous 400 ms sur une fibre moyenne. Et surtout, il continue de charger vite dans deux ans, sans que personne n'y touche."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "IBM Plex Sans, sans-serif",
      fontWeight: 600,
      fontSize: 28,
      lineHeight: 1.25,
      letterSpacing: "-0.01em",
      color: "#2B2D2B",
      margin: "40px 0 16px"
    }
  }, "Un exemple concret."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.7,
      color: "#2B2D2B",
      margin: "0 0 14px",
      maxWidth: 600
    }
  }, "La page d'accueil de ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Le Pain des Glycines"), ", une boulangerie lyonnaise, contient un seul \xEElot : un formulaire de commande. Le reste est du HTML."), /*#__PURE__*/React.createElement("pre", {
    style: {
      fontFamily: "JetBrains Mono, monospace",
      fontSize: 13,
      background: "#FAF7EE",
      border: "0.5px solid #F1EDE0",
      padding: "14px 16px",
      borderRadius: 8,
      overflowX: "auto",
      lineHeight: 1.55,
      margin: "0 0 20px"
    }
  }, `---
import OrderForm from '../components/OrderForm.jsx';
---
<Layout title="Le Pain des Glycines">
  <Hero />
  <OrderForm `, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#2E6F6A"
    }
  }, "client:visible"), ` />
  <Footer />
</Layout>`), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.7,
      color: "#2B2D2B",
      margin: "0 0 14px",
      maxWidth: 600
    }
  }, "L'hydratation ne d\xE9marre que quand le formulaire entre dans la viewport. Avant \xE7a : z\xE9ro JS charg\xE9, z\xE9ro parse, z\xE9ro ex\xE9cution."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      margin: "40px 0 0",
      paddingTop: 24,
      borderTop: "0.5px solid #F1EDE0"
    }
  }, /*#__PURE__*/React.createElement(TagTech, null, "astro 5.x"), /*#__PURE__*/React.createElement(TagTech, null, "performance"), /*#__PURE__*/React.createElement(TagTech, null, "architecture"))));
}
Object.assign(window, {
  Article
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sebc/Article.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sebc/Footer.jsx
try { (() => {
// Footer.jsx
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "0.5px solid #F1EDE0",
      marginTop: 96,
      padding: "48px 40px 56px",
      background: "#FEFDF9"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1040,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
      gap: 40,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 13,
      color: "#6B6B62",
      lineHeight: 1.6,
      maxWidth: 320
    }
  }, "Un studio web ind\xE9pendant bas\xE9 \xE0 Lyon. Sites statiques, tenus dans le temps, pour TPE et PME qui veulent un web qui dure.")), /*#__PURE__*/React.createElement(FooterCol, {
    title: "Studio",
    links: ["Services", "Références", "Journal", "Contact"]
  }), /*#__PURE__*/React.createElement(FooterCol, {
    title: "\xC9crire",
    links: ["hello@sebc.dev", "+33 6 00 00 00 00"],
    mono: true
  }), /*#__PURE__*/React.createElement(FooterCol, {
    title: "Ailleurs",
    links: ["LinkedIn ↗", "GitHub ↗", "RSS ↗"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1040,
      margin: "40px auto 0",
      paddingTop: 20,
      borderTop: "0.5px solid #F1EDE0",
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "JetBrains Mono, monospace",
      fontSize: 11,
      color: "#ADA896"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Isometria \u2014 studio ind\xE9pendant"), /*#__PURE__*/React.createElement("span", null, "v1.2 \xB7 mai 2026")));
}
function FooterCol({
  title,
  links,
  mono
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "Nunito Sans, sans-serif",
      fontSize: 11,
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "#6B6B62",
      margin: "0 0 14px"
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: mono ? "JetBrains Mono, monospace" : "Nunito Sans, sans-serif",
      fontSize: mono ? 12 : 13,
      color: "#2B2D2B",
      textDecoration: "none",
      border: "none"
    }
  }, l)))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sebc/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sebc/Header.jsx
try { (() => {
// Header.jsx — top nav
function Header({
  current,
  onNavigate
}) {
  const items = [{
    key: "home",
    label: "Accueil"
  }, {
    key: "services",
    label: "Services"
  }, {
    key: "journal",
    label: "Journal"
  }, {
    key: "article",
    label: "Article"
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      borderBottom: "0.5px solid #F1EDE0",
      background: "transparent"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1040,
      margin: "0 auto",
      padding: "18px 40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 28,
      alignItems: "center"
    }
  }, items.map(it => {
    const active = current === it.key;
    return /*#__PURE__*/React.createElement("a", {
      key: it.key,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate(it.key);
      },
      style: {
        fontFamily: "Nunito Sans, sans-serif",
        fontSize: 14,
        fontWeight: active ? 500 : 400,
        color: active ? "#2E6F6A" : "#2B2D2B",
        textDecoration: "none",
        border: "none"
      }
    }, it.label);
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: () => onNavigate("services")
  }, "Discuter d'un projet"))));
}
Object.assign(window, {
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sebc/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sebc/Hero.jsx
try { (() => {
// Hero.jsx — home hero
function Hero({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 40px 48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1040,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "info",
    dot: true
  }, "Disponible \xB7 printemps 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "IBM Plex Sans, sans-serif",
      fontWeight: 600,
      fontSize: 56,
      lineHeight: 1.05,
      letterSpacing: "-0.02em",
      color: "#2B2D2B",
      margin: "24px 0 20px",
      maxWidth: 760
    }
  }, "Le web ", /*#__PURE__*/React.createElement(Accent, null, "artisanal"), ", avec des racines."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Nunito Sans, sans-serif",
      fontSize: 18,
      lineHeight: 1.6,
      color: "#45453F",
      maxWidth: 600,
      margin: "0 0 32px"
    }
  }, "Je con\xE7ois et livre des sites statiques pour les TPE et les PME fran\xE7aises. Des pages rapides, tenues dans le temps, sans base de donn\xE9es et sans runtime serveur."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onCta
  }, "Discuter d'un projet"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onCta
  }, "Voir les services"))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sebc/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sebc/Journal.jsx
try { (() => {
// Journal.jsx — index of articles
function Journal({
  onOpen
}) {
  const posts = [{
    slug: "astro-islands",
    kicker: "Pratique",
    title: "Le pattern islands, en pratique.",
    accent: "islands",
    date: "14 avril 2026",
    read: "7 min",
    excerpt: "Hydrater juste ce qu'il faut, quand il faut. Un retour sur trois projets en production avec Astro 5.",
    tags: ["astro 5.x", "performance"]
  }, {
    slug: "static-is-enough",
    kicker: "Opinion",
    title: "Pour 80 % des sites, le statique suffit.",
    accent: "statique",
    date: "03 avril 2026",
    read: "5 min",
    excerpt: "Un plaidoyer tranquille pour les sites sans base de données — et les cas où ça ne suffit plus.",
    tags: ["architecture", "cloudflare"]
  }, {
    slug: "forfait",
    kicker: "Studio",
    title: "Pourquoi je facture au forfait.",
    accent: "forfait",
    date: "21 mars 2026",
    read: "4 min",
    excerpt: "Le client sait combien il paie. Je sais combien je gagne. Et on se concentre sur le site, pas sur le compteur.",
    tags: ["méthode"]
  }, {
    slug: "kreon-nunito",
    kicker: "Design",
    title: "Kreon + Nunito : pourquoi ce duo.",
    accent: "duo",
    date: "10 mars 2026",
    read: "6 min",
    excerpt: "Retour sur le choix typographique du studio : slab humaniste pour la voix, sans humaniste pour la clarté.",
    tags: ["typographie", "identité"]
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 40px 48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1040,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "neutral"
  }, "Journal"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "IBM Plex Sans, sans-serif",
      fontWeight: 600,
      fontSize: 42,
      lineHeight: 1.1,
      letterSpacing: "-0.015em",
      color: "#2B2D2B",
      margin: "20px 0 14px",
      maxWidth: 760
    }
  }, "Notes techniques, ", /*#__PURE__*/React.createElement(Accent, null, "carnets"), " d'atelier."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: "#45453F",
      maxWidth: 580,
      margin: "0 0 48px"
    }
  }, "Un article par mois, parfois deux. Tutoiement assum\xE9 \u2014 j'\xE9cris pour mes pairs."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 20
    }
  }, posts.map(p => /*#__PURE__*/React.createElement("a", {
    key: p.slug,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen(p.slug);
    },
    style: {
      textDecoration: "none",
      border: "none",
      color: "inherit"
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "110px 1fr 140px",
      gap: 32,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "JetBrains Mono, monospace",
      fontSize: 11,
      color: "#2E6F6A",
      marginTop: 6
    }
  }, p.kicker), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "IBM Plex Sans, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      lineHeight: 1.25,
      letterSpacing: "-0.01em",
      color: "#2B2D2B",
      margin: "0 0 8px"
    }
  }, p.title.replace(p.accent, "||").split("||").reduce((acc, chunk, i, arr) => {
    acc.push(chunk);
    if (i < arr.length - 1) acc.push(/*#__PURE__*/React.createElement(Accent, {
      key: i
    }, p.accent));
    return acc;
  }, [])), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "#45453F",
      lineHeight: 1.6,
      margin: "0 0 12px",
      maxWidth: 560
    }
  }, p.excerpt), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement(TagTech, {
    key: t
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "JetBrains Mono, monospace",
      fontSize: 11,
      color: "#6B6B62",
      textAlign: "right",
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", null, p.date), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#ADA896"
    }
  }, p.read)))))))));
}
Object.assign(window, {
  Journal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sebc/Journal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sebc/Primitives.jsx
try { (() => {
// Primitives.jsx — shared atoms for the Isometria kit
const {
  useState
} = React;
function Logo({
  tone = "ink"
}) {
  const src = tone === "ink" ? "../../assets/Logos/isometria-wordmark.svg" : "../../assets/Logos/isometria-wordmark-inverted.svg";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Isometria",
    style: {
      height: 24,
      width: "auto",
      display: "block"
    }
  }));
}
function Button({
  variant = "primary",
  children,
  onClick,
  size = "md"
}) {
  const base = {
    fontFamily: "Nunito Sans, sans-serif",
    fontWeight: 500,
    fontSize: size === "sm" ? 13 : 14,
    padding: size === "sm" ? "8px 16px" : "11px 22px",
    borderRadius: 8,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    lineHeight: 1,
    transition: "background 140ms ease, color 140ms ease, border-color 140ms ease"
  };
  const styles = {
    primary: {
      ...base,
      background: "#2E6F6A",
      color: "#FEFDF9",
      border: "none"
    },
    secondary: {
      ...base,
      background: "transparent",
      color: "#2E6F6A",
      border: "1px solid #2E6F6A",
      padding: size === "sm" ? "7px 15px" : "10px 21px"
    },
    ghost: {
      ...base,
      background: "transparent",
      color: "#2E6F6A",
      border: "none",
      padding: "8px 12px"
    }
  };
  const [hover, setHover] = useState(false);
  const hoverStyle = variant === "primary" ? {
    background: "#3D807A"
  } : variant === "secondary" ? {
    background: "#DCE9E7",
    color: "#265A56"
  } : {
    color: "#265A56"
  };
  return /*#__PURE__*/React.createElement("button", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: onClick,
    style: {
      ...styles[variant],
      ...(hover ? hoverStyle : {})
    }
  }, children);
}
function Badge({
  variant = "info",
  children,
  dot = false
}) {
  const styles = {
    info: {
      background: "#DCE9E7",
      color: "#2E6F6A",
      border: "none"
    },
    neutral: {
      background: "#FFFFFE",
      color: "#6B6B62",
      border: "0.5px solid #F1EDE0"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...styles[variant],
      fontFamily: "Nunito Sans, sans-serif",
      fontSize: 11,
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      padding: "4px 10px",
      borderRadius: 999,
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      lineHeight: 1.4
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "currentColor",
      display: "inline-block"
    }
  }), children);
}
function TagTech({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "JetBrains Mono, monospace",
      fontSize: 11,
      color: "#2B2D2B",
      background: "#FEFDF9",
      border: "0.5px solid #DCD6C4",
      padding: "3px 8px",
      borderRadius: 4
    }
  }, children);
}
function Card({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFFFFE",
      border: "0.5px solid #F1EDE0",
      borderRadius: 10,
      padding: "1.5rem 1.5rem",
      ...style
    }
  }, children);
}
function Accent({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#2E6F6A",
      fontWeight: 600
    }
  }, children);
}
function ExternalArrow() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Nunito Sans, sans-serif",
      marginLeft: 4
    }
  }, "\u2197");
}
Object.assign(window, {
  Logo,
  Button,
  Badge,
  TagTech,
  Card,
  Accent,
  ExternalArrow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sebc/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sebc/Services.jsx
try { (() => {
// Services.jsx + Stats.jsx
function Services() {
  const items = [{
    kicker: "01",
    title: "Site vitrine",
    accent: "vitrine",
    body: "Un site sur-mesure, 4 à 8 pages, pensé pour durer sans maintenance lourde. Livraison en 4 à 6 semaines.",
    tags: ["astro 5.x", "tailwind v4", "cloudflare pages"]
  }, {
    kicker: "02",
    title: "Journal et newsletter",
    accent: "journal",
    body: "Une plateforme éditoriale légère, pour publier des articles longs et envoyer une newsletter sans outil tiers.",
    tags: ["astro content", "mdx", "resend"]
  }, {
    kicker: "03",
    title: "Outils internes",
    accent: "internes",
    body: "Petites applications métiers pour structurer un flux de travail : fiches clients, planning, suivi de devis.",
    tags: ["tauri v2", "spring boot", "postgres"]
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 40px 48px",
      borderTop: "0.5px solid #F1EDE0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1040,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "IBM Plex Sans, sans-serif",
      fontWeight: 600,
      fontSize: 32,
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
      color: "#2B2D2B",
      margin: "0 0 10px",
      maxWidth: 640
    }
  }, "Trois offres, ", /*#__PURE__*/React.createElement(Accent, null, "lisibles"), ", au forfait."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: "#6B6B62",
      maxWidth: 600,
      margin: "0 0 40px"
    }
  }, "Chaque projet est cadr\xE9 avant signature, avec un prix fixe et un calendrier pr\xE9cis. Pas de r\xE9gie, pas de facture surprise."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 20
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.kicker
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "JetBrains Mono, monospace",
      fontSize: 11,
      color: "#2E6F6A",
      marginBottom: 14
    }
  }, it.kicker), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "IBM Plex Sans, sans-serif",
      fontWeight: 600,
      fontSize: 20,
      letterSpacing: "-0.005em",
      color: "#2B2D2B",
      margin: "0 0 10px"
    }
  }, "Site ", /*#__PURE__*/React.createElement(Accent, null, it.accent)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "#45453F",
      lineHeight: 1.6,
      margin: "0 0 18px"
    }
  }, it.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6
    }
  }, it.tags.map(t => /*#__PURE__*/React.createElement(TagTech, {
    key: t
  }, t))))))));
}
function Stats() {
  const stats = [["7 ans", "d'indépendance"], ["24", "sites livrés"], ["100\u00a0%", "statique"], ["4–6", "semaines par projet"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "64px 40px",
      borderTop: "0.5px solid #F1EDE0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 940,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 32
    }
  }, stats.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "IBM Plex Sans, sans-serif",
      fontWeight: 600,
      fontSize: 42,
      color: "#2E6F6A",
      lineHeight: 1,
      letterSpacing: "-0.015em",
      marginBottom: 6
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#6B6B62"
    }
  }, l)))));
}
Object.assign(window, {
  Services,
  Stats
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sebc/Services.jsx", error: String((e && e.message) || e) }); }

})();
