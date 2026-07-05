/**
 * Slide7Education — Education & Certifications section component.
 * Converted from slide7-education.html.
 */
const CERTIFICATIONS = [
  { icon: "✅", title: "Java Programming Fundamentals", issuer: "Self-paced / Coursework · 2025", status: "earned" },
  { icon: "✅", title: "Spring Boot & REST API Development", issuer: "Self-paced Learning · 2025", status: "earned" },
  { icon: "✅", title: "Full Stack Web Development", issuer: "Self-paced Learning · 2025", status: "earned" },
  { icon: "⏳", title: "AWS / Cloud Fundamentals", issuer: "[UPDATE THIS] Planned · 2026", status: "planned" },
];

export default function Edu() {
  return (
    <>
      <style>{`
        .aurora { position: fixed; inset: 0; z-index: -2; overflow: hidden; background: var(--void); }
        .aurora::before { content: ""; position: absolute; inset: 0; background: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124,58,237,0.25), transparent); }
        .blob { position: absolute; border-radius: 50%; filter: blur(100px); animation: float 12s ease-in-out infinite; }
        .blob1 { width: 55vw; height: 55vw; max-width: 800px; max-height: 800px; top: -20%; left: -20%; background: rgba(124,58,237,0.28); }
        .blob2 { width: 45vw; height: 45vw; max-width: 650px; max-height: 650px; top: -5%; right: -15%; background: rgba(34,211,238,0.2); animation-delay: -4s; }
        .blob3 { width: 50vw; height: 50vw; max-width: 700px; max-height: 700px; bottom: -25%; left: 25%; background: rgba(236,72,153,0.15); animation-delay: -8s; }
        @keyframes float { 0%, 100% { transform: translate(0,0) scale(1); } 50% { transform: translate(4%, 6%) scale(1.15); } }
        .grid-overlay { position: fixed; inset: 0; z-index: -1; opacity: 0.15; background-image: linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px); background-size: 64px 64px; mask-image: linear-gradient(to bottom, black 60%, transparent 100%); }
        header { position: fixed; top: 0; left: 0; right: 0; z-index: 999; padding: 18px 0; }
        nav { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; padding: 10px 28px; background: var(--glass); border: 1px solid var(--glass-border); backdrop-filter: blur(20px); border-radius: 999px; }
        .logo { font-family: var(--font-display); font-weight: 700; font-size: 1.2rem; color: var(--text-primary); text-decoration: none; }
        .logo span { color: var(--accent-light); }
        .nav-links { display: flex; gap: 4px; list-style: none; flex-wrap: wrap; }
        .nav-links a { color: var(--text-secondary); text-decoration: none; font-size: 0.85rem; font-weight: 500; padding: 8px 14px; border-radius: 999px; transition: all 0.3s ease; }
        .nav-links a:hover, .nav-links a.active { color: var(--text-primary); background: rgba(255,255,255,0.08); }
        .hire-btn { background: var(--text-primary); color: var(--void); padding: 10px 22px; border-radius: 999px; font-weight: 600; font-size: 0.85rem; text-decoration: none; transition: transform 0.3s ease; }
        .hire-btn:hover { transform: translateY(-2px); }
        @media (max-width: 900px) { .nav-links { display: none; } }
        .page-wrap { max-width: 1000px; margin: 0 auto; padding: 150px 28px 100px; }
        .eyebrow { display: inline-flex; align-items: center; gap: 8px; border: 1px solid var(--glass-border); background: var(--glass); padding: 8px 18px; border-radius: 999px; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em; color: var(--accent-light); margin-bottom: 20px; }
        h2.section-title { font-family: var(--font-display); font-size: clamp(2.2rem, 5vw, 3.4rem); font-weight: 800; line-height: 1.15; margin-bottom: 18px; letter-spacing: -0.02em; }
        h2.section-title.small { font-size: 2rem; margin-bottom: 30px; }
        .gradient-text { background: linear-gradient(90deg, var(--accent-light), var(--cyan) 50%, var(--magenta)); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; color: transparent; animation: gradientMove 6s ease infinite; }
        @keyframes gradientMove { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .section-desc { font-size: 1.05rem; color: var(--text-secondary); max-width: 640px; line-height: 1.7; margin-bottom: 50px; }
        .glass-card { background: var(--glass); border: 1px solid var(--glass-border); backdrop-filter: blur(20px); border-radius: 24px; transition: all 0.35s ease; }
        .glass-card:hover { transform: translateY(-6px); border-color: rgba(124,58,237,0.35); box-shadow: 0 16px 40px rgba(124,58,237,0.18); }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(28px); filter: blur(6px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
        .fade-in { opacity: 0; animation: fadeInUp 0.8s ease forwards; }
        footer.mini-footer { text-align: center; padding: 40px 28px; color: var(--text-tertiary); font-size: 0.85rem; border-top: 1px solid var(--glass-border); }
        footer.mini-footer a { color: var(--accent-light); text-decoration: none; }

        .edu-card { padding: 32px; margin-bottom: 60px; }
        .edu-top { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 14px; align-items: flex-start; margin-bottom: 16px; }
        .edu-left { display: flex; gap: 16px; align-items: flex-start; }
        .edu-icon { width: 50px; height: 50px; border-radius: 16px; background: rgba(124,58,237,0.15); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; flex-shrink: 0; }
        .edu-left h3 { font-size: 1.2rem; margin-bottom: 4px; }
        .edu-left .inst { font-size: 0.85rem; color: var(--text-tertiary); }
        .edu-date { font-size: 0.78rem; border: 1px solid var(--glass-border); background: rgba(255,255,255,0.05); padding: 7px 14px; border-radius: 999px; color: var(--text-secondary); white-space: nowrap; }
        .edu-desc { font-size: 0.92rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 18px; }
        .edu-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .edu-tags span { font-size: 0.72rem; border: 1px solid var(--glass-border); background: rgba(255,255,255,0.05); padding: 6px 14px; border-radius: 999px; color: var(--text-secondary); }
        .cert-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        @media (max-width: 650px) { .cert-grid { grid-template-columns: 1fr; } }
        .cert-card { padding: 22px; display: flex; gap: 16px; align-items: flex-start; }
        .cert-icon { width: 44px; height: 44px; border-radius: 12px; background: rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0; }
        .cert-info h4 { font-size: 0.98rem; margin-bottom: 4px; }
        .cert-info .issuer { font-size: 0.8rem; color: var(--text-tertiary); }
        .cert-status { display: inline-block; margin-top: 8px; font-size: 0.65rem; text-transform: uppercase; font-weight: 700; letter-spacing: 0.08em; padding: 4px 10px; border-radius: 999px; }
        .status-earned { background: rgba(52,211,153,0.15); color: #6ee7b7; border: 1px solid rgba(52,211,153,0.3); }
        .status-planned { background: rgba(255,255,255,0.08); color: var(--text-tertiary); border: 1px solid var(--glass-border); }
      `}</style>

      <div className="aurora">
        <div className="blob blob1" />
        <div className="blob blob2" />
        <div className="blob blob3" />
      </div>
      <div className="grid-overlay" />

      <header>
        <nav>
          <a href="/" className="logo">AM<span>.</span></a>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/tech-stack">Tech Stack</a></li>
            <li><a href="/journey">Journey</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/education" className="active">Education</a></li>
            <li><a href="/achievements">Achievements</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <a href="/contact" className="hire-btn">Hire Me</a>
        </nav>
      </header>

      <main className="page-wrap">
        <div className="eyebrow fade-in">EDUCATION</div>
        <h2 className="section-title fade-in">
          Formal foundation, <span className="gradient-text">self-driven depth.</span>
        </h2>
        <p className="section-desc fade-in">
          Academic grounding in computer science, paired with relentless independent building.
        </p>

        <div className="glass-card edu-card fade-in">
          <div className="edu-top">
            <div className="edu-left">
              <div className="edu-icon">🎓</div>
              <div>
                <h3>B.Tech, Computer Science Engineering</h3>
                <div className="inst">Shri Ram swaroop memorial collage of engineeering and management</div>
              </div>
            </div>
            <div className="edu-date">2024 — 2028</div>
          </div>
          <p className="edu-desc">
            Focused coursework in data structures, algorithms, database systems, and software
            engineering, paired with self-driven full stack and AI projects.
          </p>
          <div className="edu-tags">
            <span>Data Structures &amp; Algorithms</span>
            <span>Database Management Systems</span>
            <span>Object-Oriented Programming</span>
            <span>Computer Networks</span>
          </div>
        </div>

        <div className="eyebrow fade-in">CERTIFICATIONS</div>
        <h2 className="section-title small fade-in">
          Credentials &amp; <span className="gradient-text">continuous learning.</span>
        </h2>

        <div className="cert-grid">
          {CERTIFICATIONS.map((cert) => (
            <div className="glass-card cert-card fade-in" key={cert.title}>
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-info">
                <h4>{cert.title}</h4>
                <div className="issuer">{cert.issuer}</div>
                <span className={`cert-status status-${cert.status}`}>
                  {cert.status === "earned" ? "Earned" : "Planned"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="mini-footer">
        &copy; 2026 Abhay Maurya. Built with React &amp; JSX. Next: <a href="/achievements">Achievements →</a>
      </footer>
    </>
  );
}
