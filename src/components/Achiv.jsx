/**
 * Slide8Achievements — Achievements & Coding Profiles section component.
 * Converted from slide8-achievements.html.
 */
const ACHIEVEMENTS = [
  { icon: "🔥", title: "Consistent Problem Solver", desc: "Practicing DSA daily to build strong fundamentals for technical interviews." },
  { icon: "💻", title: "Self-Directed Builder", desc: "Shipped multiple end-to-end apps spanning Java/Spring Boot backends and React frontends." },
  { icon: "🚀", title: "Early AI Adopter", desc: "Integrated AI/LLM capabilities into personal projects ahead of formal coursework." },
  { icon: "🎯", title: "Fast Learner", desc: "Went from zero backend knowledge to building JWT-secured REST APIs within months." },
];

const PROFILES = [
  { icon: "🐙", title: "GitHub", handle: "@Abhay73888", desc: "Source code, commit history, and open contributions.", href: "https://github.com/Abhay73888", live: true },
  { icon: "🟧", title: "LeetCode", handle: "@abhaykumarmaurya65", desc: "DSA practice — problem-solving under real constraints.", href: "https://leetcode.com/abhaykumarmaurya65", live: true },
  { icon: "🟩", title: "GeeksforGeeks", handle: "@abhaykumar253e", desc: "Additional DSA & CS fundamentals practice.", href: "https://www.geeksforgeeks.org/profile/abhaykumar253e", live: true },
  { icon: "🟢", title: "HackerRank", handle: "@abhaykumarmaury2", desc: "Skill certifications and coding challenges.", href: "https://www.hackerrank.com/profile/abhaykumarmaury2", live: true },
];

export default function Achiv() {
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

        .achieve-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; margin-bottom: 70px; }
        @media (max-width: 950px) { .achieve-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 500px) { .achieve-grid { grid-template-columns: 1fr; } }
        .achieve-card { padding: 24px; }
        .achieve-icon { width: 48px; height: 48px; border-radius: 16px; background: linear-gradient(135deg, rgba(124,58,237,0.25), rgba(34,211,238,0.1)); display: flex; align-items: center; justify-content: center; font-size: 1.3rem; margin-bottom: 14px; }
        .achieve-card h3 { font-size: 1rem; margin-bottom: 8px; }
        .achieve-card p { font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6; }
        .profile-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        @media (max-width: 950px) { .profile-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 500px) { .profile-grid { grid-template-columns: 1fr; } }
        .profile-card { padding: 22px; text-decoration: none; color: inherit; display: block; }
        .profile-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }
        .profile-icon { font-size: 1.6rem; }
        .add-link-badge { font-size: 0.62rem; border: 1px solid var(--glass-border); padding: 3px 8px; border-radius: 999px; color: var(--text-tertiary); }
        .profile-card h4 { font-size: 0.98rem; margin-bottom: 2px; }
        .profile-card .handle { font-size: 0.78rem; color: var(--text-tertiary); margin-bottom: 10px; }
        .profile-card .desc { font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5; }
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
            <li><a href="/education">Education</a></li>
            <li><a href="/achievements" className="active">Achievements</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <a href="/contact" className="hire-btn">Hire Me</a>
        </nav>
      </header>

      <main className="page-wrap">
        <div className="eyebrow fade-in">ACHIEVEMENTS</div>
        <h2 className="section-title fade-in">
          Wins that matter <span className="gradient-text">more than trophies.</span>
        </h2>
        <p className="section-desc fade-in">
          Consistency, initiative, and momentum — the traits that actually predict long-term
          engineering success.
        </p>

        <div className="achieve-grid">
          {ACHIEVEMENTS.map((item) => (
            <div className="glass-card achieve-card fade-in" key={item.title}>
              <div className="achieve-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="eyebrow fade-in">CODING PROFILES</div>
        <h2 className="section-title small fade-in">
          Where I practice &amp; <span className="gradient-text">prove my skills.</span>
        </h2>

        <div className="profile-grid">
          {PROFILES.map((profile) => (
            <a
              href={profile.href}
              target={profile.live ? "_blank" : undefined}
              rel={profile.live ? "noreferrer" : undefined}
              className="glass-card profile-card fade-in"
              key={profile.title}
            >
              <div className="profile-top">
                <span className="profile-icon">{profile.icon}</span>
                {!profile.live && <span className="add-link-badge">Add Link</span>}
              </div>
              <h4>{profile.title}</h4>
              <div className="handle">{profile.handle}</div>
              <p className="desc">{profile.desc}</p>
            </a>
          ))}
        </div>
      </main>

      <footer className="mini-footer">
        &copy; 2026 Abhay Maurya. Built with React &amp; JSX. Next: <a href="/contact">Contact →</a>
      </footer>
    </>
  );
}
