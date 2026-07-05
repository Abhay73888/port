/**
 * Slide6Projects — Projects section component.
 * Converted from slide6-projects.html. Project data is extracted into
 * an array and rendered via `.map()`, replacing six near-identical
 * hand-written card blocks.
 */
const PROJECTS = [
  {
    cover: "cover-1",
    coverLabel: "NexusBank",
    status: "Template",
    title: "NexusBank — Banking REST API",
    tagline: "A secure, production-style core banking backend.",
    stack: ["Java", "Spring Boot", "MongoDB", "JWT"],
    github: "https://github.com/abhaymaurya/nexusbank-api",
    demo: null,
  },
  {
    cover: "cover-2",
    coverLabel: "DevConnect",
    status: "Template",
    title: "DevConnect — Developer Social Platform",
    tagline: "A full stack community platform for developers.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/abhaymaurya/devconnect",
    demo: null,
  },
  {
    cover: "cover-3",
    coverLabel: "AI Study Buddy",
    status: "Template",
    title: "AI Study Buddy",
    tagline: "An AI-powered assistant that turns notes into quizzes.",
    stack: ["Java", "Spring Boot", "React", "AI API"],
    github: "https://github.com/abhaymaurya/ai-study-buddy",
    demo: null,
  },
  {
    cover: "cover-4",
    coverLabel: "TaskFlow",
    status: "Template",
    title: "TaskFlow — Kanban Productivity App",
    tagline: "A drag-and-drop task manager with real-time sync.",
    stack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/abhaymaurya/taskflow",
    demo: null,
  },
  {
    cover: "cover-5",
    coverLabel: "Algo Visualizer",
    status: "Template",
    title: "Algorithm Visualizer",
    tagline: "Interactive visualizations of sorting & pathfinding.",
    stack: ["JavaScript", "HTML5", "Canvas API"],
    github: "https://github.com/abhaymaurya/algo-visualizer",
    demo: null,
  },
  {
    cover: "cover-6",
    coverLabel: "This Portfolio",
    status: "Live",
    title: "This Portfolio",
    tagline: "The site you're looking at right now.",
    stack: ["React", "JSX", "CSS3"],
    github: "https://github.com/abhaymaurya/portfolio",
    demo: "/",
  },
];

export default function Sl6() {
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
        .glass-card { background: var(--glass); border: 1px solid var(--glass-border); backdrop-filter: blur(20px); border-radius: 24px; transition: all 0.35s ease; }
        .glass-card:hover { transform: translateY(-8px); border-color: rgba(124,58,237,0.35); box-shadow: 0 20px 45px rgba(124,58,237,0.2); }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(28px); filter: blur(6px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
        .fade-in { opacity: 0; animation: fadeInUp 0.8s ease forwards; }
        footer.mini-footer { text-align: center; padding: 40px 28px; color: var(--text-tertiary); font-size: 0.85rem; border-top: 1px solid var(--glass-border); }
        footer.mini-footer a { color: var(--accent-light); text-decoration: none; }

        .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; }
        @media (max-width: 950px) { .projects-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 650px) { .projects-grid { grid-template-columns: 1fr; } }
        .project-card { overflow: hidden; display: flex; flex-direction: column; }
        .project-cover { height: 160px; position: relative; display: flex; align-items: flex-end; padding: 16px; font-family: var(--font-display); font-weight: 700; font-size: 1.1rem; color: rgba(255,255,255,0.9); }
        .cover-1 { background: linear-gradient(135deg, #7c3aed, #22d3ee); }
        .cover-2 { background: linear-gradient(135deg, #ec4899, #7c3aed); }
        .cover-3 { background: linear-gradient(135deg, #22d3ee, #f59e0b); }
        .cover-4 { background: linear-gradient(135deg, #7c3aed, #10b981); }
        .cover-5 { background: linear-gradient(135deg, #f59e0b, #ec4899); }
        .cover-6 { background: linear-gradient(135deg, #22d3ee, #7c3aed); }
        .status-badge { position: absolute; top: 14px; right: 14px; font-size: 0.62rem; text-transform: uppercase; font-weight: 700; letter-spacing: 0.1em; padding: 4px 10px; border-radius: 999px; background: rgba(255,255,255,0.15); backdrop-filter: blur(6px); }
        .project-body { padding: 22px; display: flex; flex-direction: column; flex: 1; }
        .project-body h3 { font-size: 1.1rem; margin-bottom: 6px; }
        .project-body .tagline { font-size: 0.82rem; color: var(--text-tertiary); margin-bottom: 14px; }
        .stack-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 18px; }
        .stack-chip { font-size: 0.68rem; border: 1px solid var(--glass-border); background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 999px; color: var(--text-secondary); }
        .project-links { margin-top: auto; display: flex; gap: 10px; }
        .project-links a { flex: 1; text-align: center; font-size: 0.78rem; font-weight: 600; padding: 9px; border-radius: 10px; text-decoration: none; transition: all 0.3s ease; }
        .link-github { border: 1px solid var(--glass-border); color: var(--text-primary); }
        .link-github:hover { border-color: rgba(255,255,255,0.4); }
        .link-demo { background: var(--text-primary); color: var(--void); }
        .link-demo:hover { opacity: 0.85; }
        .note-box { margin-top: 40px; padding: 18px 24px; font-size: 0.85rem; color: var(--text-tertiary); text-align: center; }
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
            <li><a href="/projects" className="active">Projects</a></li>
            <li><a href="/education">Education</a></li>
            <li><a href="/achievements">Achievements</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <a href="/contact" className="hire-btn">Hire Me</a>
        </nav>
      </header>

      <main className="page-wrap">
        <div className="eyebrow fade-in">FEATURED PROJECTS</div>
        <h2 className="section-title fade-in">
          Things I've actually <span className="gradient-text">built and shipped.</span>
        </h2>
        <p className="section-desc fade-in">
          Real-world-style applications built to master the full stack — from database to deploy.
        </p>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <div className="glass-card project-card fade-in" key={project.title}>
              <div className={`project-cover ${project.cover}`}>
                {project.coverLabel}
                <span className="status-badge">{project.status}</span>
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p className="tagline">{project.tagline}</p>
                <div className="stack-row">
                  {project.stack.map((tech) => (
                    <span className="stack-chip" key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="link-github">
                    GitHub
                  </a>
                  {project.demo && (
                    <a href={project.demo} className="link-demo">Live Demo</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card note-box fade-in">
          [UPDATE THIS] — These are polished template projects matching my stack. Swap in your
          real GitHub repos &amp; live links as you ship them.
        </div>
      </main>

      <footer className="mini-footer">
        &copy; 2026 Abhay Maurya. Built with React &amp; JSX. Next: <a href="/education">Education →</a>
      </footer>
    </>
  );
}
