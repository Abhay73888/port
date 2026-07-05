/**
 * Slide4TechStack — Tech Stack marquee section component.
 * Converted from slide4-techstack.html. The infinite scroll is pure
 * CSS `@keyframes`, so no JS/hooks are required — the two tech arrays
 * are simply mapped twice (duplicated) for a seamless CSS loop.
 */
const ROW_ONE = [
  { icon: "☕", name: "Java" },
  { icon: "🍃", name: "Spring Boot" },
  { icon: "⚛️", name: "React" },
  { icon: "🟢", name: "Node.js" },
  { icon: "🍀", name: "MongoDB" },
  { icon: "🗄️", name: "MySQL" },
  { icon: "JS", name: "JavaScript" },
  { icon: "TS", name: "TypeScript" },
];

const ROW_TWO = [
  { icon: "🌐", name: "HTML5" },
  { icon: "🎨", name: "CSS3" },
  { icon: "🔧", name: "Git" },
  { icon: "🐙", name: "GitHub" },
  { icon: "🐍", name: "Python" },
  { icon: "📮", name: "Postman" },
  { icon: "💻", name: "VS Code" },
  { icon: "🎯", name: "Figma" },
];

function TechChip({ icon, name }) {
  return (
    <div className="tech-chip">
      <span className="icon">{icon}</span>
      <span className="name">{name}</span>
    </div>
  );
}

export default function Slide4TechStack() {
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
        .page-wrap { max-width: 1200px; margin: 0 auto; padding: 150px 28px 100px; }
        .eyebrow { display: inline-flex; align-items: center; gap: 8px; border: 1px solid var(--glass-border); background: var(--glass); padding: 8px 18px; border-radius: 999px; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em; color: var(--accent-light); margin-bottom: 20px; }
        h2.section-title { font-family: var(--font-display); font-size: clamp(2.2rem, 5vw, 3.4rem); font-weight: 800; line-height: 1.15; margin-bottom: 18px; letter-spacing: -0.02em; }
        .gradient-text { background: linear-gradient(90deg, var(--accent-light), var(--cyan) 50%, var(--magenta)); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; color: transparent; animation: gradientMove 6s ease infinite; }
        @keyframes gradientMove { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .section-desc { font-size: 1.05rem; color: var(--text-secondary); max-width: 640px; line-height: 1.7; margin-bottom: 50px; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(28px); filter: blur(6px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
        .fade-in { opacity: 0; animation: fadeInUp 0.8s ease forwards; }
        .delay-1 { animation-delay: 0.1s; } .delay-2 { animation-delay: 0.2s; }
        footer.mini-footer { text-align: center; padding: 40px 28px; color: var(--text-tertiary); font-size: 0.85rem; border-top: 1px solid var(--glass-border); }
        footer.mini-footer a { color: var(--accent-light); text-decoration: none; }

        .marquee-wrap { overflow: hidden; position: relative; -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); margin-bottom: 20px; }
        .marquee-track { display: flex; gap: 20px; width: max-content; animation: scrollLeft 28s linear infinite; }
        .marquee-track.reverse { animation: scrollRight 24s linear infinite; }
        @keyframes scrollLeft { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes scrollRight { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .tech-chip { display: flex; align-items: center; gap: 12px; background: var(--glass); border: 1px solid var(--glass-border); backdrop-filter: blur(20px); padding: 16px 26px; border-radius: 18px; white-space: nowrap; }
        .tech-chip .icon { font-size: 1.3rem; }
        .tech-chip span.name { font-size: 0.9rem; font-weight: 500; color: var(--text-secondary); }
        .marquee-wrap:hover .marquee-track { animation-play-state: paused; }
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
            <li><a href="/tech-stack" className="active">Tech Stack</a></li>
            <li><a href="/journey">Journey</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/education">Education</a></li>
            <li><a href="/achievements">Achievements</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <a href="/contact" className="hire-btn">Hire Me</a>
        </nav>
      </header>

      <main id="tech" className="page-wrap">
        <div className="eyebrow fade-in">TECH STACK</div>
        <h2 className="section-title fade-in delay-1">
          Tools I reach for <span className="gradient-text">every day.</span>
        </h2>
        <p className="section-desc fade-in delay-2">
          A curated stack for building fast, reliable, full stack applications.
        </p>

        <div className="marquee-wrap">
          <div className="marquee-track">
            {[...ROW_ONE, ...ROW_ONE].map((tech, i) => (
              <TechChip key={`${tech.name}-${i}`} icon={tech.icon} name={tech.name} />
            ))}
          </div>
        </div>

        <div className="marquee-wrap">
          <div className="marquee-track reverse">
            {[...ROW_TWO, ...ROW_TWO].map((tech, i) => (
              <TechChip key={`${tech.name}-${i}`} icon={tech.icon} name={tech.name} />
            ))}
          </div>
        </div>
      </main>

      <footer className="mini-footer">
        &copy; 2026 Abhay Maurya. Built with React &amp; JSX. Next: <a href="/journey">Journey →</a>
      </footer>
    </>
  );
}
