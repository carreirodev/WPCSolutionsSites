import { useState } from "react";

const tokens = {
  colors: {
    primary: { 50: "#FEF2F1", 100: "#FDE6E4", 200: "#FBC8C4", 300: "#F7A29C", 400: "#F06B63", 500: "#E8413C", 600: "#D42A25", 700: "#B2201B", 800: "#931C18", 900: "#7A1B18", 950: "#420A08" },
    neutral: { 0: "#FFFFFF", 25: "#FAFAFA", 50: "#F5F5F4", 100: "#EBEBEA", 200: "#D6D5D3", 300: "#B8B6B3", 400: "#9A9894", 500: "#7C7A75", 600: "#5E5C58", 700: "#48463F", 800: "#33312C", 900: "#1E1D1A", 950: "#0F0E0C" },
  },
  spacing: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160],
  radius: { none: 0, sm: 4, md: 8, lg: 12, xl: 16, full: 9999 },
  fontSize: { xs: 12, sm: 13, base: 15, lg: 18, xl: 21, "2xl": 26, "3xl": 33, "4xl": 44, "5xl": 58, "6xl": 76 },
};

const ColorSwatch = ({ name, hex, dark }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
    <div style={{
      width: "100%", aspectRatio: "1", backgroundColor: hex, borderRadius: 10,
      border: hex === "#FFFFFF" || hex === "#FAFAFA" || hex === "#F5F5F4" ? "1px solid #EBEBEA" : "none",
      boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      transition: "transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease",
      cursor: "default",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.1)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06)"; }}
    />
    <div>
      <div style={{ fontSize: 12, fontWeight: 600, color: "#48463F", fontFamily: "'Inter', sans-serif" }}>{name}</div>
      <div style={{ fontSize: 11, color: "#9A9894", fontFamily: "'Inter', sans-serif", letterSpacing: "0.02em" }}>{hex}</div>
    </div>
  </div>
);

const Section = ({ title, subtitle, children, id }) => (
  <section id={id} style={{ marginBottom: 80 }}>
    <div style={{ marginBottom: 36 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 36, fontWeight: 400, color: "#1E1D1A", margin: 0, lineHeight: 1.1 }}>{title}</h2>
      </div>
      {subtitle && <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#7C7A75", margin: 0, lineHeight: 1.6, maxWidth: 560 }}>{subtitle}</p>}
      <div style={{ width: 40, height: 2, backgroundColor: "#E8413C", marginTop: 16, borderRadius: 1 }} />
    </div>
    {children}
  </section>
);

const ComponentCard = ({ title, children, dark }) => (
  <div style={{
    backgroundColor: dark ? "#1E1D1A" : "#FFFFFF",
    borderRadius: 14, padding: "32px 28px",
    border: dark ? "1px solid #33312C" : "1px solid #EBEBEA",
    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
  }}>
    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: dark ? "#7C7A75" : "#B8B6B3", fontFamily: "'Inter', sans-serif", marginBottom: 20 }}>{title}</div>
    {children}
  </div>
);

const navItems = ["Fundação", "Cores", "Tipografia", "Espaçamento", "Componentes", "Padrões"];
const navIds = ["foundation", "colors", "typography", "spacing", "components", "patterns"];

export default function WPCDesignSystem() {
  const [activeNav, setActiveNav] = useState(0);
  const [darkPreview, setDarkPreview] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const scrollTo = (id, idx) => {
    setActiveNav(idx);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#FAFAFA", fontFamily: "'Inter', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Header */}
      <header style={{
        position: "sticky", top: 0, zIndex: 100, backgroundColor: "rgba(250,250,250,0.85)",
        backdropFilter: "blur(20px) saturate(180%)", WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderBottom: "1px solid #EBEBEA",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#E8413C" }} />
            <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: "-0.01em", color: "#1E1D1A" }}>WPC</span>
            <span style={{ fontSize: 14, fontWeight: 400, color: "#9A9894" }}>Design System</span>
          </div>
          <nav style={{ display: "flex", gap: 4 }}>
            {navItems.map((item, i) => (
              <button key={item} onClick={() => scrollTo(navIds[i], i)} style={{
                padding: "6px 14px", borderRadius: 8, border: "none", cursor: "pointer",
                fontSize: 13, fontWeight: activeNav === i ? 600 : 400, fontFamily: "'Inter', sans-serif",
                backgroundColor: activeNav === i ? "#1E1D1A" : "transparent",
                color: activeNav === i ? "#FFFFFF" : "#7C7A75",
                transition: "all 0.2s ease",
              }}>{item}</button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px 60px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "end" }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#E8413C", marginBottom: 20, fontFamily: "'Inter', sans-serif" }}>v 1.0</div>
            <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 68, fontWeight: 400, lineHeight: 0.95, color: "#1E1D1A", margin: "0 0 24px 0", letterSpacing: "-0.02em" }}>
              Design<br />System
            </h1>
            <div style={{ width: 48, height: 3, backgroundColor: "#E8413C", borderRadius: 2, marginBottom: 24 }} />
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "#5E5C58", maxWidth: 400, margin: 0 }}>
              Linguagem visual da WPC Solutions. Fundamentos, tokens e componentes para construir experiências consistentes e sofisticadas.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(4, 48px)", gridTemplateRows: "repeat(4, 48px)", gap: 6,
            }}>
              {[
                "#E8413C", "#F06B63", "#F7A29C", "#FDE6E4",
                "#0F0E0C", "#33312C", "#5E5C58", "#9A9894",
                "#1E1D1A", "#48463F", "#7C7A75", "#B8B6B3",
                "#D42A25", "#B2201B", "#931C18", "#420A08",
              ].map((c, i) => (
                <div key={i} style={{
                  backgroundColor: c, borderRadius: 8, transition: "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  animationName: "fadeScale", animationDuration: "0.5s", animationFillMode: "both",
                  animationTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                  animationDelay: `${i * 40}ms`,
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.15) rotate(2deg)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeScale {
          from { opacity: 0; transform: scale(0.7); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        * { box-sizing: border-box; }
        ::selection { background: #FDE6E4; color: #931C18; }
      `}</style>

      {/* Content */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 40px 120px" }}>

        {/* Foundation */}
        <Section id="foundation" title="Fundação" subtitle="Os princípios que guiam todas as decisões visuais da WPC Solutions. Cada escolha reflete inteligência, clareza e precisão.">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { n: "01", title: "Clareza", desc: "Cada elemento tem propósito. Eliminamos o supérfluo para que a informação respire e comunique com eficiência." },
              { n: "02", title: "Sofisticação", desc: "Detalhes tipográficos, espaçamento generoso e paleta restrita constroem uma presença visual premium." },
              { n: "03", title: "Inteligência", desc: "O design reflete a expertise em IA — preciso, estruturado e sempre a serviço do conteúdo." },
            ].map((p, i) => (
              <div key={i} style={{
                padding: "32px 28px", borderRadius: 14, backgroundColor: "#FFFFFF",
                border: "1px solid #EBEBEA", position: "relative", overflow: "hidden",
                transition: "border-color 0.3s ease",
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "#E8413C"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "#EBEBEA"}
              >
                <div style={{ fontSize: 48, fontFamily: "'Instrument Serif', serif", color: "#F5F5F4", position: "absolute", top: 16, right: 20, lineHeight: 1 }}>{p.n}</div>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#E8413C", marginBottom: 12 }}>{p.n}</div>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 24, fontWeight: 400, color: "#1E1D1A", margin: "0 0 10px 0" }}>{p.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: "#7C7A75", margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Colors */}
        <Section id="colors" title="Cores" subtitle="Paleta extraída do logo. O vermelho WPC é usado cirurgicamente como acento — nunca em excesso. O universo é predominantemente neutro.">
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#48463F", marginBottom: 16 }}>Vermelho WPC — Primary</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(11, 1fr)", gap: 10 }}>
              {Object.entries(tokens.colors.primary).map(([k, v]) => <ColorSwatch key={k} name={k} hex={v} />)}
            </div>
          </div>
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#48463F", marginBottom: 16 }}>Neutros — Base</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(11, 1fr)", gap: 10 }}>
              {Object.entries(tokens.colors.neutral).map(([k, v]) => <ColorSwatch key={k} name={k} hex={v} />)}
            </div>
          </div>

          {/* Semantic Colors */}
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#48463F", marginBottom: 16 }}>Semânticas</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            {[
              { name: "Sucesso", bg: "#E8F5E9", fg: "#2E7D32", dot: "#4CAF50" },
              { name: "Aviso", bg: "#FFF8E1", fg: "#F57F17", dot: "#FFC107" },
              { name: "Erro", bg: "#FEF2F1", fg: "#D42A25", dot: "#E8413C" },
              { name: "Info", bg: "#E3F2FD", fg: "#1565C0", dot: "#2196F3" },
            ].map((s, i) => (
              <div key={i} style={{ backgroundColor: s.bg, borderRadius: 10, padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: s.dot }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: s.fg }}>{s.name}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Typography */}
        <Section id="typography" title="Tipografia" subtitle="Instrument Serif para títulos — elegância editorial. Inter para corpo — legibilidade e modernidade. O contraste entre ambas cria hierarquia imediata.">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 32 }}>
            <ComponentCard title="Display — Instrument Serif">
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 48, color: "#1E1D1A", lineHeight: 1.05, marginBottom: 16 }}>
                Inteligência<br />aplicada.
              </div>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 28, color: "#7C7A75", lineHeight: 1.2 }}>
                Soluções que pensam por você
              </div>
              <div style={{ marginTop: 20, padding: "12px 16px", backgroundColor: "#F5F5F4", borderRadius: 8 }}>
                <code style={{ fontSize: 12, color: "#5E5C58" }}>font-family: 'Instrument Serif', serif</code>
              </div>
            </ComponentCard>
            <ComponentCard title="Body — Inter">
              <div style={{ fontFamily: "'Inter', sans-serif" }}>
                <p style={{ fontSize: 16, fontWeight: 400, lineHeight: 1.65, color: "#33312C", margin: "0 0 12px 0" }}>
                  A WPC Solutions desenvolve soluções de inteligência artificial que transformam dados em decisões estratégicas para o seu negócio.
                </p>
                <p style={{ fontSize: 14, fontWeight: 400, lineHeight: 1.6, color: "#7C7A75", margin: 0 }}>
                  Regular 400 · Medium 500 · SemiBold 600 · Bold 700
                </p>
              </div>
              <div style={{ marginTop: 20, padding: "12px 16px", backgroundColor: "#F5F5F4", borderRadius: 8 }}>
                <code style={{ fontSize: 12, color: "#5E5C58" }}>font-family: 'Inter', sans-serif</code>
              </div>
            </ComponentCard>
          </div>

          {/* Type Scale */}
          <ComponentCard title="Escala Tipográfica">
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                { label: "Display XL", size: 76, font: "serif", weight: 400, tracking: "-0.03em" },
                { label: "Display LG", size: 58, font: "serif", weight: 400, tracking: "-0.02em" },
                { label: "Display MD", size: 44, font: "serif", weight: 400, tracking: "-0.02em" },
                { label: "Heading LG", size: 33, font: "serif", weight: 400, tracking: "-0.01em" },
                { label: "Heading MD", size: 26, font: "sans", weight: 600, tracking: "-0.02em" },
                { label: "Heading SM", size: 21, font: "sans", weight: 600, tracking: "-0.01em" },
                { label: "Body LG", size: 18, font: "sans", weight: 400, tracking: "0" },
                { label: "Body", size: 15, font: "sans", weight: 400, tracking: "0" },
                { label: "Body SM", size: 13, font: "sans", weight: 400, tracking: "0.01em" },
                { label: "Caption", size: 12, font: "sans", weight: 500, tracking: "0.02em" },
              ].map((t, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 24,
                  padding: "14px 0", borderBottom: i < 9 ? "1px solid #F5F5F4" : "none",
                }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 16, minWidth: 120 }}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: "#B8B6B3", fontFamily: "'Inter', sans-serif", minWidth: 80 }}>{t.label}</span>
                    <span style={{ fontSize: 11, color: "#D6D5D3", fontFamily: "'Inter', sans-serif" }}>{t.size}px</span>
                  </div>
                  <span style={{
                    fontFamily: t.font === "serif" ? "'Instrument Serif', serif" : "'Inter', sans-serif",
                    fontSize: Math.min(t.size, 52), fontWeight: t.weight, color: "#1E1D1A",
                    letterSpacing: t.tracking, lineHeight: 1.1, textAlign: "right",
                    whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                  }}>
                    Soluções inteligentes
                  </span>
                </div>
              ))}
            </div>
          </ComponentCard>
        </Section>

        {/* Spacing */}
        <Section id="spacing" title="Espaçamento" subtitle="Escala de 4px como base. Espaçamento generoso para criar respiração visual e hierarquia.">
          <ComponentCard title="Escala de Espaçamento">
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { name: "2xs", val: 4 }, { name: "xs", val: 8 }, { name: "sm", val: 12 },
                { name: "md", val: 16 }, { name: "lg", val: 24 }, { name: "xl", val: 32 },
                { name: "2xl", val: 48 }, { name: "3xl", val: 64 }, { name: "4xl", val: 96 },
                { name: "5xl", val: 128 },
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <span style={{ fontSize: 12, fontWeight: 500, color: "#7C7A75", minWidth: 36, textAlign: "right" }}>{s.name}</span>
                  <span style={{ fontSize: 11, color: "#B8B6B3", minWidth: 40, textAlign: "right" }}>{s.val}px</span>
                  <div style={{
                    height: 24, width: Math.min(s.val * 2.5, 320), backgroundColor: "#E8413C",
                    borderRadius: 4, opacity: 0.12 + (i * 0.088),
                    transition: "width 0.3s ease",
                  }} />
                </div>
              ))}
            </div>
          </ComponentCard>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 20 }}>
            <ComponentCard title="Border Radius">
              <div style={{ display: "flex", gap: 16, alignItems: "flex-end", flexWrap: "wrap" }}>
                {[
                  { name: "sm", val: 4 }, { name: "md", val: 8 }, { name: "lg", val: 12 },
                  { name: "xl", val: 16 }, { name: "full", val: 9999 },
                ].map((r, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div style={{
                      width: 48, height: 48, backgroundColor: "#FDE6E4", border: "2px solid #E8413C",
                      borderRadius: r.val, marginBottom: 8,
                    }} />
                    <div style={{ fontSize: 11, fontWeight: 600, color: "#48463F" }}>{r.name}</div>
                    <div style={{ fontSize: 10, color: "#B8B6B3" }}>{r.val === 9999 ? "full" : r.val + "px"}</div>
                  </div>
                ))}
              </div>
            </ComponentCard>
            <ComponentCard title="Sombras">
              <div style={{ display: "flex", gap: 16, alignItems: "flex-end" }}>
                {[
                  { name: "sm", shadow: "0 1px 2px rgba(0,0,0,0.05)" },
                  { name: "md", shadow: "0 2px 8px rgba(0,0,0,0.08)" },
                  { name: "lg", shadow: "0 8px 24px rgba(0,0,0,0.1)" },
                  { name: "xl", shadow: "0 16px 48px rgba(0,0,0,0.12)" },
                ].map((s, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div style={{
                      width: 56, height: 56, backgroundColor: "#FFFFFF",
                      borderRadius: 10, boxShadow: s.shadow, marginBottom: 8,
                    }} />
                    <div style={{ fontSize: 11, fontWeight: 600, color: "#48463F" }}>{s.name}</div>
                  </div>
                ))}
              </div>
            </ComponentCard>
          </div>
        </Section>

        {/* Components */}
        <Section id="components" title="Componentes" subtitle="Blocos de construção da interface. Cada componente segue os tokens e princípios do sistema.">

          {/* Buttons */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
            <ComponentCard title="Botões — Light">
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                  <button style={{
                    padding: "12px 28px", borderRadius: 10, border: "none", cursor: "pointer",
                    backgroundColor: "#E8413C", color: "#FFFFFF", fontSize: 14, fontWeight: 600,
                    fontFamily: "'Inter', sans-serif", letterSpacing: "-0.01em",
                    transition: "all 0.2s ease", boxShadow: "0 1px 3px rgba(232,65,60,0.3)",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#D42A25"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(232,65,60,0.3)"; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#E8413C"; e.currentTarget.style.boxShadow = "0 1px 3px rgba(232,65,60,0.3)"; }}
                  >Primary</button>
                  <button style={{
                    padding: "12px 28px", borderRadius: 10, border: "none", cursor: "pointer",
                    backgroundColor: "#1E1D1A", color: "#FFFFFF", fontSize: 14, fontWeight: 600,
                    fontFamily: "'Inter', sans-serif", letterSpacing: "-0.01em",
                    transition: "all 0.2s ease",
                  }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = "#33312C"}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = "#1E1D1A"}
                  >Secondary</button>
                  <button style={{
                    padding: "12px 28px", borderRadius: 10, border: "1.5px solid #D6D5D3", cursor: "pointer",
                    backgroundColor: "transparent", color: "#48463F", fontSize: 14, fontWeight: 600,
                    fontFamily: "'Inter', sans-serif", letterSpacing: "-0.01em",
                    transition: "all 0.2s ease",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "#1E1D1A"; e.currentTarget.style.color = "#1E1D1A"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "#D6D5D3"; e.currentTarget.style.color = "#48463F"; }}
                  >Outline</button>
                </div>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <button style={{
                    padding: "10px 20px", borderRadius: 8, border: "none", cursor: "pointer",
                    backgroundColor: "#F5F5F4", color: "#5E5C58", fontSize: 13, fontWeight: 500,
                    fontFamily: "'Inter', sans-serif", transition: "all 0.2s ease",
                  }}>Ghost</button>
                  <button style={{
                    padding: "10px 20px", borderRadius: 8, border: "none", cursor: "pointer",
                    backgroundColor: "transparent", color: "#E8413C", fontSize: 13, fontWeight: 600,
                    fontFamily: "'Inter', sans-serif", transition: "all 0.2s ease",
                    textDecoration: "none",
                  }}>Link →</button>
                </div>
              </div>
            </ComponentCard>

            <ComponentCard title="Botões — Dark" dark>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                  <button style={{
                    padding: "12px 28px", borderRadius: 10, border: "none", cursor: "pointer",
                    backgroundColor: "#E8413C", color: "#FFFFFF", fontSize: 14, fontWeight: 600,
                    fontFamily: "'Inter', sans-serif", letterSpacing: "-0.01em",
                    transition: "all 0.2s ease",
                  }}>Primary</button>
                  <button style={{
                    padding: "12px 28px", borderRadius: 10, border: "none", cursor: "pointer",
                    backgroundColor: "#FFFFFF", color: "#1E1D1A", fontSize: 14, fontWeight: 600,
                    fontFamily: "'Inter', sans-serif", letterSpacing: "-0.01em",
                    transition: "all 0.2s ease",
                  }}>Secondary</button>
                  <button style={{
                    padding: "12px 28px", borderRadius: 10, border: "1.5px solid #48463F", cursor: "pointer",
                    backgroundColor: "transparent", color: "#B8B6B3", fontSize: 14, fontWeight: 600,
                    fontFamily: "'Inter', sans-serif", letterSpacing: "-0.01em",
                    transition: "all 0.2s ease",
                  }}>Outline</button>
                </div>
              </div>
            </ComponentCard>
          </div>

          {/* Inputs */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
            <ComponentCard title="Inputs">
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 500, color: "#33312C", display: "block", marginBottom: 6 }}>Nome completo</label>
                  <input type="text" placeholder="Seu nome" style={{
                    width: "100%", padding: "11px 16px", borderRadius: 10, border: "1.5px solid #D6D5D3",
                    fontSize: 14, fontFamily: "'Inter', sans-serif", color: "#1E1D1A", outline: "none",
                    backgroundColor: "#FFFFFF", transition: "border-color 0.2s ease",
                  }}
                    onFocus={e => e.currentTarget.style.borderColor = "#E8413C"}
                    onBlur={e => e.currentTarget.style.borderColor = "#D6D5D3"}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 500, color: "#33312C", display: "block", marginBottom: 6 }}>Mensagem</label>
                  <textarea placeholder="Como podemos ajudar?" rows={3} style={{
                    width: "100%", padding: "11px 16px", borderRadius: 10, border: "1.5px solid #D6D5D3",
                    fontSize: 14, fontFamily: "'Inter', sans-serif", color: "#1E1D1A", outline: "none",
                    backgroundColor: "#FFFFFF", resize: "vertical", transition: "border-color 0.2s ease",
                  }}
                    onFocus={e => e.currentTarget.style.borderColor = "#E8413C"}
                    onBlur={e => e.currentTarget.style.borderColor = "#D6D5D3"}
                  />
                </div>
              </div>
            </ComponentCard>

            {/* Badges & Tags */}
            <ComponentCard title="Badges & Status">
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <div style={{ fontSize: 11, color: "#9A9894", marginBottom: 10, fontWeight: 500 }}>Status</div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {[
                      { label: "Ativo", bg: "#E8F5E9", color: "#2E7D32", dot: "#4CAF50" },
                      { label: "Pendente", bg: "#FFF8E1", color: "#F57F17", dot: "#FFC107" },
                      { label: "Erro", bg: "#FEF2F1", color: "#D42A25", dot: "#E8413C" },
                      { label: "Inativo", bg: "#F5F5F4", color: "#7C7A75", dot: "#B8B6B3" },
                    ].map((b, i) => (
                      <span key={i} style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        padding: "5px 12px", borderRadius: 20, backgroundColor: b.bg,
                        fontSize: 12, fontWeight: 600, color: b.color,
                      }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: b.dot }} />
                        {b.label}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "#9A9894", marginBottom: 10, fontWeight: 500 }}>Tags</div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {["Machine Learning", "NLP", "Computer Vision", "LLM"].map((tag, i) => (
                      <span key={i} style={{
                        padding: "5px 14px", borderRadius: 8, fontSize: 12, fontWeight: 500,
                        backgroundColor: i === 0 ? "#1E1D1A" : "#F5F5F4",
                        color: i === 0 ? "#FFFFFF" : "#5E5C58",
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ComponentCard>
          </div>

          {/* Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 20 }}>
            {[
              { icon: "◆", title: "Automação Inteligente", desc: "Processos otimizados com IA para reduzir custos e aumentar eficiência operacional." },
              { icon: "◉", title: "Análise Preditiva", desc: "Modelos de machine learning que antecipam tendências e informam decisões estratégicas." },
              { icon: "▲", title: "Processamento de Linguagem", desc: "Soluções de NLP para extrair insights de dados não-estruturados em escala." },
            ].map((card, i) => (
              <div key={i} style={{
                padding: "32px 24px", borderRadius: 14, backgroundColor: "#FFFFFF",
                border: "1px solid #EBEBEA", cursor: "default",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative", overflow: "hidden",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.08)";
                  e.currentTarget.style.borderColor = "#E8413C";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "#EBEBEA";
                }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 10, backgroundColor: "#FEF2F1",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 18, color: "#E8413C", marginBottom: 20,
                }}>{card.icon}</div>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 600, color: "#1E1D1A", margin: "0 0 8px 0", letterSpacing: "-0.01em" }}>{card.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: "#7C7A75", margin: 0 }}>{card.desc}</p>
                <div style={{ marginTop: 20, fontSize: 13, fontWeight: 600, color: "#E8413C", cursor: "pointer" }}>Saiba mais →</div>
              </div>
            ))}
          </div>

          {/* Feature Card */}
          <div style={{
            borderRadius: 16, overflow: "hidden", border: "1px solid #EBEBEA",
            display: "grid", gridTemplateColumns: "1fr 1fr",
          }}>
            <div style={{ padding: "48px 40px", backgroundColor: "#FFFFFF" }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#E8413C", marginBottom: 16 }}>Destaque</div>
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 36, fontWeight: 400, color: "#1E1D1A", margin: "0 0 16px 0", lineHeight: 1.1 }}>
                Transforme dados em decisões
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "#5E5C58", margin: "0 0 28px 0" }}>
                Nossa plataforma de IA analisa milhões de pontos de dados em tempo real, entregando insights acionáveis para o seu negócio.
              </p>
              <button style={{
                padding: "12px 28px", borderRadius: 10, border: "none", cursor: "pointer",
                backgroundColor: "#1E1D1A", color: "#FFFFFF", fontSize: 14, fontWeight: 600,
                fontFamily: "'Inter', sans-serif",
              }}>Começar agora</button>
            </div>
            <div style={{
              backgroundColor: "#0F0E0C", display: "flex", alignItems: "center", justifyContent: "center",
              padding: 40, position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", inset: 0, opacity: 0.06, background: "radial-gradient(circle at 30% 50%, #E8413C, transparent 70%)" }} />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 3, opacity: 0.5 }}>
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} style={{
                    width: 12, height: 12, borderRadius: 2,
                    backgroundColor: Math.random() > 0.6 ? "#E8413C" : "#33312C",
                    opacity: 0.3 + Math.random() * 0.7,
                  }} />
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Patterns */}
        <Section id="patterns" title="Padrões" subtitle="Exemplos de composição usando os tokens do sistema. Light e dark mode.">
          {/* Nav preview */}
          <ComponentCard title="Navegação">
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "14px 20px", backgroundColor: "#FAFAFA", borderRadius: 10, border: "1px solid #EBEBEA",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#E8413C" }} />
                <span style={{ fontSize: 14, fontWeight: 700, color: "#1E1D1A", letterSpacing: "-0.02em" }}>WPC</span>
                <span style={{ fontSize: 14, color: "#B8B6B3" }}>Solutions</span>
              </div>
              <div style={{ display: "flex", gap: 24 }}>
                {["Soluções", "Sobre", "Cases", "Contato"].map((item, i) => (
                  <span key={i} style={{
                    fontSize: 13, fontWeight: i === 0 ? 600 : 400,
                    color: i === 0 ? "#1E1D1A" : "#7C7A75", cursor: "pointer",
                  }}>{item}</span>
                ))}
              </div>
              <button style={{
                padding: "8px 20px", borderRadius: 8, border: "none", cursor: "pointer",
                backgroundColor: "#E8413C", color: "#FFFFFF", fontSize: 13, fontWeight: 600,
                fontFamily: "'Inter', sans-serif",
              }}>Fale conosco</button>
            </div>
          </ComponentCard>

          {/* Dark mode section */}
          <div style={{
            marginTop: 20, borderRadius: 16, backgroundColor: "#0F0E0C",
            padding: "48px 40px", position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: 0, right: 0, width: 400, height: 400, opacity: 0.04, background: "radial-gradient(circle, #E8413C, transparent 70%)" }} />
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#E8413C", marginBottom: 8 }}>Dark Mode</div>
            <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 44, fontWeight: 400, color: "#FFFFFF", margin: "0 0 12px 0", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Elegância também<br />no escuro.
            </h3>
            <p style={{ fontSize: 15, color: "#7C7A75", lineHeight: 1.65, maxWidth: 480, margin: "0 0 32px 0" }}>
              O sistema mantém consistência visual em ambos os temas, adaptando contrastes e hierarquias.
            </p>
            <div style={{ display: "flex", gap: 12, marginBottom: 32 }}>
              <button style={{
                padding: "12px 28px", borderRadius: 10, border: "none", cursor: "pointer",
                backgroundColor: "#E8413C", color: "#FFFFFF", fontSize: 14, fontWeight: 600,
                fontFamily: "'Inter', sans-serif",
              }}>Primary CTA</button>
              <button style={{
                padding: "12px 28px", borderRadius: 10, border: "1.5px solid #48463F", cursor: "pointer",
                backgroundColor: "transparent", color: "#D6D5D3", fontSize: 14, fontWeight: 600,
                fontFamily: "'Inter', sans-serif",
              }}>Secondary</button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {[
                { n: "98.7%", label: "Precisão do modelo" },
                { n: "2.4s", label: "Tempo de resposta" },
                { n: "150+", label: "Clientes ativos" },
              ].map((stat, i) => (
                <div key={i} style={{
                  padding: "24px 20px", borderRadius: 12, backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}>
                  <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 32, color: "#FFFFFF", marginBottom: 4 }}>{stat.n}</div>
                  <div style={{ fontSize: 12, color: "#7C7A75" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CSS Variables Reference */}
          <div style={{ marginTop: 20 }}>
            <ComponentCard title="CSS Variables — Copia e cola">
              <pre style={{
                fontSize: 12, lineHeight: 1.8, color: "#5E5C58", margin: 0,
                fontFamily: "'SF Mono', 'Fira Code', monospace", overflowX: "auto",
                padding: "16px 20px", backgroundColor: "#FAFAFA", borderRadius: 8,
              }}>{`:root {
  /* Primary — Vermelho WPC */
  --wpc-primary-50: #FEF2F1;
  --wpc-primary-100: #FDE6E4;
  --wpc-primary-200: #FBC8C4;
  --wpc-primary-300: #F7A29C;
  --wpc-primary-400: #F06B63;
  --wpc-primary-500: #E8413C;  /* ← Cor principal */
  --wpc-primary-600: #D42A25;
  --wpc-primary-700: #B2201B;
  --wpc-primary-800: #931C18;
  --wpc-primary-900: #7A1B18;

  /* Neutros */
  --wpc-neutral-0: #FFFFFF;
  --wpc-neutral-50: #F5F5F4;
  --wpc-neutral-100: #EBEBEA;
  --wpc-neutral-200: #D6D5D3;
  --wpc-neutral-300: #B8B6B3;
  --wpc-neutral-400: #9A9894;
  --wpc-neutral-500: #7C7A75;
  --wpc-neutral-600: #5E5C58;
  --wpc-neutral-700: #48463F;
  --wpc-neutral-800: #33312C;
  --wpc-neutral-900: #1E1D1A;
  --wpc-neutral-950: #0F0E0C;

  /* Tipografia */
  --font-display: 'Instrument Serif', serif;
  --font-body: 'Inter', sans-serif;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
}`}</pre>
            </ComponentCard>
          </div>
        </Section>

        {/* Footer */}
        <div style={{
          marginTop: 80, paddingTop: 32, borderTop: "1px solid #EBEBEA",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#E8413C" }} />
            <span style={{ fontSize: 13, color: "#9A9894" }}>WPC Solutions Design System — v1.0</span>
          </div>
          <span style={{ fontSize: 12, color: "#B8B6B3" }}>Construído para escalar.</span>
        </div>
      </div>
    </div>
  );
}
