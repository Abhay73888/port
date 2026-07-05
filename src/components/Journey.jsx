/**
 * Slide5Journey — Journey timeline section component.
 * Converted from slide5-journey.html. Static content mapped from a
 * data array for cleaner JSX (avoids repeating the same markup block
 * six times).
 */
const TIMELINE = [
  {
    year: "2024",
    title: "Started B.Tech in Computer Science Engineering",
    org: "Engineering College",
    desc: "Began formal CS education — data structures, algorithms, OOP, and discrete mathematics laid the foundation for everything that followed.",
    tags: ["DSA", "OOP", "Foundations"],
  },
  {
    year: "2024",
    title: "First Lines of Real Code",
    org: "Self-Taught",
    desc: "Picked up HTML, CSS, and JavaScript outside the classroom, building small static sites to understand how the web actually works.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    year: "2025",
    title: "Dove into Java & Backend Engineering",
    org: "Self-Taught + Coursework",
    desc: "Went deep on core Java — OOP principles, collections, multithreading — then moved into Spring Boot to build real REST APIs.",
    tags: ["Java", "Spring Boot", "REST APIs"],
  },
  {
    year: "2025",
    title: "Full Stack Development",
    org: "Personal Projects",
    desc: "Combined React on the frontend with Spring Boot and Node.js on the backend, connecting to SQL and MongoDB to ship complete applications.",
    tags: ["React", "MongoDB", "SQL"],
  },
  {
    year: "2026",
    title: "Building in Public",
    org: "GitHub & Portfolio",
    desc: "Shifted focus toward polished, production-quality projects — clean commit history, documentation, deployment — while practicing DSA for interviews.",
    tags: ["Git", "Open Source", "DSA"],
  },
  {
    year: "2028",
    title: "Graduating & Entering the Industry",
    org: "Target Milestone",
    desc: "On track to graduate with a strong full stack + AI portfolio, ready to contribute as a Software Development Engineer from day one.",
    tags: ["Goal", "SDE", "Full Stack"],
  },
];

export default function Slide5Journey() {
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
        .gradient-text { background: linear-gradient(90deg, var(--accent-light), var(--cyan) 50%, var(--magenta)); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; color: transparent; animation: gradientMove 6s ease infinite; }
        @keyframes gradientMove { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .section-desc { font-size: 1.05rem; color: var(--text-secondary); max-width: 640px; line-height: 1.7; margin-bottom: 60px; }
        .glass-card { background: var(--glass); border: 1px solid var(--glass-border); backdrop-filter: blur(20px); border-radius: 24px; transition: all 0.35s ease; }
        .glass-card:hover { transform: translateY(-6px); border-color: rgba(124,58,237,0.35); box-shadow: 0 16px 40px rgba(124,58,237,0.18); }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(28px); filter: blur(6px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
        .fade-in { opacity: 0; animation: fadeInUp 0.8s ease forwards; }
        footer.mini-footer { text-align: center; padding: 40px 28px; color: var(--text-tertiary); font-size: 0.85rem; border-top: 1px solid var(--glass-border); }
        footer.mini-footer a { color: var(--accent-light); text-decoration: none; }

        .timeline { position: relative; padding-left: 40px; }
        .timeline::before { content: ""; position: absolute; left: 9px; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom, var(--accent), rgba(255,255,255,0.08)); }
        .timeline-item { position: relative; margin-bottom: 34px; }
        .timeline-dot { position: absolute; left: -40px; top: 6px; width: 20px; height: 20px; border-radius: 50%; background: var(--accent); border: 3px solid var(--void); box-shadow: 0 0 16px rgba(124,58,237,0.6); }
        .timeline-card { padding: 24px 28px; }
        .timeline-year { font-family: monospace; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent-light); }
        .timeline-card h3 { font-size: 1.15rem; margin: 8px 0 2px; }
        .timeline-org { font-size: 0.85rem; color: var(--text-tertiary); margin-bottom: 12px; }
        .timeline-card p.desc { font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 14px; }
        .tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .tag { border: 1px solid var(--glass-border); background: rgba(255,255,255,0.05); font-size: 0.72rem; color: var(--text-tertiary); padding: 5px 12px; border-radius: 999px; }
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
            <li><a href="/journey" className="active">Journey</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/education">Education</a></li>
            <li><a href="/achievements">Achievements</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <a href="/contact" className="hire-btn">Hire Me</a>
        </nav>
      </header>

      <main className="page-wrap">
        <div className="eyebrow fade-in">JOURNEY</div>
        <h2 className="section-title fade-in">
          From first commit to <span className="gradient-text">future engineer.</span>
        </h2>
        <p className="section-desc fade-in">Every milestone that shaped how I think about building software.</p>

        <div className="timeline">
          {TIMELINE.map((item) => (
            <div className="timeline-item fade-in" key={`${item.year}-${item.title}`}>
              <div className="timeline-dot" />
              <div className="glass-card timeline-card">
                <div className="timeline-year">{item.year}</div>
                <h3>{item.title}</h3>
                <div className="timeline-org">{item.org}</div>
                <p className="desc">{item.desc}</p>
                <div className="tags">
                  {item.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="mini-footer">
        &copy; 2026 Abhay Maurya. Built with React &amp; JSX. Next: <a href="/projects">Projects →</a>
      </footer>
    </>
  );
}
