// Primitives.jsx — shared atoms for the Isometria kit
const { useState } = React;

function Logo({ tone = "ink" }) {
  const src = tone === "ink"
    ? "../../assets/Logos/isometria-wordmark.svg"
    : "../../assets/Logos/isometria-wordmark-inverted.svg";
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={src}
        alt="Isometria"
        style={{ height: 24, width: "auto", display: "block" }}
      />
    </div>
  );
}

function Button({ variant = "primary", children, onClick, size = "md" }) {
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
    transition: "background 140ms ease, color 140ms ease, border-color 140ms ease",
  };
  const styles = {
    primary: { ...base, background: "#2E6F6A", color: "#FEFDF9", border: "none" },
    secondary: {
      ...base,
      background: "transparent",
      color: "#2E6F6A",
      border: "1px solid #2E6F6A",
      padding: size === "sm" ? "7px 15px" : "10px 21px",
    },
    ghost: { ...base, background: "transparent", color: "#2E6F6A", border: "none", padding: "8px 12px" },
  };
  const [hover, setHover] = useState(false);
  const hoverStyle =
    variant === "primary"
      ? { background: "#3D807A" }
      : variant === "secondary"
      ? { background: "#DCE9E7", color: "#265A56" }
      : { color: "#265A56" };
  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      style={{ ...styles[variant], ...(hover ? hoverStyle : {}) }}
    >
      {children}
    </button>
  );
}

function Badge({ variant = "info", children, dot = false }) {
  const styles = {
    info: { background: "#DCE9E7", color: "#2E6F6A", border: "none" },
    neutral: { background: "#FFFFFE", color: "#6B6B62", border: "0.5px solid #F1EDE0" },
  };
  return (
    <span
      style={{
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
        lineHeight: 1.4,
      }}
    >
      {dot && (
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "currentColor",
            display: "inline-block",
          }}
        />
      )}
      {children}
    </span>
  );
}

function TagTech({ children }) {
  return (
    <span
      style={{
        fontFamily: "JetBrains Mono, monospace",
        fontSize: 11,
        color: "#2B2D2B",
        background: "#FEFDF9",
        border: "0.5px solid #DCD6C4",
        padding: "3px 8px",
        borderRadius: 4,
      }}
    >
      {children}
    </span>
  );
}

function Card({ children, style }) {
  return (
    <div
      style={{
        background: "#FFFFFE",
        border: "0.5px solid #F1EDE0",
        borderRadius: 10,
        padding: "1.5rem 1.5rem",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Accent({ children }) {
  return <span style={{ color: "#2E6F6A", fontWeight: 600 }}>{children}</span>;
}

function ExternalArrow() {
  return <span style={{ fontFamily: "Nunito Sans, sans-serif", marginLeft: 4 }}>↗</span>;
}

Object.assign(window, { Logo, Button, Badge, TagTech, Card, Accent, ExternalArrow });
