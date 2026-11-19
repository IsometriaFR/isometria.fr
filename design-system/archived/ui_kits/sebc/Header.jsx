// Header.jsx — top nav
function Header({ current, onNavigate }) {
  const items = [
    { key: "home", label: "Accueil" },
    { key: "services", label: "Services" },
    { key: "journal", label: "Journal" },
    { key: "article", label: "Article" },
  ];
  return (
    <header
      style={{
        borderBottom: "0.5px solid #F1EDE0",
        background: "transparent",
      }}
    >
      <div
        style={{
          maxWidth: 1040,
          margin: "0 auto",
          padding: "18px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo />
        <nav style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {items.map((it) => {
            const active = current === it.key;
            return (
              <a
                key={it.key}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(it.key);
                }}
                style={{
                  fontFamily: "Nunito Sans, sans-serif",
                  fontSize: 14,
                  fontWeight: active ? 500 : 400,
                  color: active ? "#2E6F6A" : "#2B2D2B",
                  textDecoration: "none",
                  border: "none",
                }}
              >
                {it.label}
              </a>
            );
          })}
          <Button variant="secondary" size="sm" onClick={() => onNavigate("services")}>
            Discuter d'un projet
          </Button>
        </nav>
      </div>
    </header>
  );
}

Object.assign(window, { Header });
