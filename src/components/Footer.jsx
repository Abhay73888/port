import { useRef, useState } from "react";

/**
 * Slide10Footer — Closing "Thank You" section with interactive terminal
 * easter egg and sitemap footer.
 * Converted from slide10-footer.html. The vanilla-JS command handler
 * (`termInput.addEventListener('keydown', ...)`) has been replaced with
 * a React `useState` array of terminal lines + a controlled input, so
 * output is rendered declaratively instead of via direct DOM mutation.
 */
export default function Footer() {
  const [lines, setLines] = useState([
    "Welcome to Abhay Maurya's terminal. Type 'help' to get started.",
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  function runCommand(raw) {
    const cmd = raw.trim().toLowerCase();
    if (cmd === "") return;

    if (cmd === "clear") {
      setLines([]);
      setInput("");
      return;
    }

    let output;
    if (cmd === "help") output = "Commands: about, skills, contact, sudo hire abhay, clear";
    else if (cmd === "about") output = "Abhay Maurya — Full Stack Software Engineer & Java Developer.";
    else if (cmd === "skills") output = "Java, Spring Boot, React, MongoDB, SQL, AI.";
    else if (cmd === "contact") output = "abhay.maurya.dev@gmail.com";
    else if (cmd === "sudo hire abhay") output = "Permission granted ✅ Welcome to the team!";
    else output = `command not found: ${cmd}`;

    setLines((prev) => [...prev, output]);
    setInput("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") runCommand(input);
  }

  return (
    <>
      <style>{`
        body { min-height: 100vh; display: flex; flex-direction: column; }
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
        .page-wrap { max-width: 1100px; margin: 0 auto; padding: 150px 28px 60px; flex: 1; }
        .gradient-text { background: linear-gradient(90deg, var(--accent-light), var(--cyan) 50%, var(--magenta)); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; color: transparent; animation: gradientMove 6s ease infinite; }
        @keyframes gradientMove { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(28px); filter: blur(6px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
        .fade-in { opacity: 0; animation: fadeInUp 0.8s ease forwards; }
        .glass-card { background: var(--glass); border: 1px solid var(--glass-border); backdrop-filter: blur(20px); border-radius: 24px; }
        .thanks-hero { text-align: center; padding: 40px 0 60px; }
        .thanks-hero h1 { font-family: var(--font-display); font-size: clamp(2rem, 6vw, 3.6rem); font-weight: 800; margin-bottom: 18px; }
        .thanks-hero p { font-size: 1.05rem; color: var(--text-secondary); max-width: 560px; margin: 0 auto 30px; line-height: 1.7; }
        .terminal { max-width: 640px; margin: 0 auto 70px; border-radius: 18px; overflow: hidden; }
        .terminal-bar { display: flex; align-items: center; gap: 8px; padding: 12px 16px; background: rgba(255,255,255,0.04); border-bottom: 1px solid var(--glass-border); }
        .tdot { width: 11px; height: 11px; border-radius: 50%; }
        .tdot.red { background: #ef4444; } .tdot.yellow { background: #f59e0b; } .tdot.green { background: #22c55e; }
        .terminal-title { margin-left: 8px; font-family: monospace; font-size: 0.75rem; color: var(--text-tertiary); }
        .terminal-body { padding: 18px; font-family: 'Courier New', monospace; font-size: 0.85rem; min-height: 140px; color: var(--text-secondary); }
        .terminal-body .prompt { color: var(--cyan); }
        .term-input { background: transparent; border: none; outline: none; color: var(--text-primary); font-family: inherit; font-size: inherit; width: 80%; }
        .footer-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; margin-bottom: 40px; }
        @media (max-width: 700px) { .footer-grid { grid-template-columns: repeat(2, 1fr); } }
        .footer-col h4 { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-tertiary); margin-bottom: 16px; }
        .footer-col a, .footer-col span { display: block; font-size: 0.88rem; color: var(--text-secondary); text-decoration: none; margin-bottom: 10px; }
        .footer-col a:hover { color: var(--text-primary); }
        .footer-bottom { border-top: 1px solid var(--glass-border); padding-top: 26px; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 12px; }
        .footer-bottom p { font-size: 0.78rem; color: var(--text-tertiary); }
        .back-top { width: 42px; height: 42px; border-radius: 50%; background: var(--glass); border: 1px solid var(--glass-border); display: flex; align-items: center; justify-content: center; color: var(--text-secondary); text-decoration: none; transition: all 0.3s ease; }
        .back-top:hover { color: var(--text-primary); transform: translateY(-3px); }
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
            <li><a href="/achievements">Achievements</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <a href="/contact" className="hire-btn">Hire Me</a>
        </nav>
      </header>

      <main className="page-wrap">
        <div className="thanks-hero fade-in">
          <h1>
            Thanks for scrolling this far <span className="gradient-text">— let's talk.</span>
          </h1>
          <p>
            If you made it to the end, you already know I care about details. Try the terminal
            below, then head to the contact page.
          </p>
        </div>

        <div
          className="glass-card terminal fade-in"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="terminal-bar">
            <span className="tdot red" />
            <span className="tdot yellow" />
            <span className="tdot green" />
            <span className="terminal-title">abhay@portfolio:~</span>
          </div>
          <div className="terminal-body">
            {lines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
            <div>
              <span className="prompt">❯</span>{" "}
              <input
                ref={inputRef}
                className="term-input"
                type="text"
                autoComplete="off"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-col fade-in">
            <h4>Navigate</h4>
            <a href="/about">About</a>
            <a href="/skills">Skills</a>
            <a href="/projects">Projects</a>
            <a href="/journey">Journey</a>
          </div>
          <div className="footer-col fade-in">
            <h4>More</h4>
            <a href="/education">Education</a>
            <a href="/achievements">Achievements</a>
            <a href="/tech-stack">Tech Stack</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="footer-col fade-in">
            <h4>Connect</h4>
            <a href="https://github.com/abhaymaurya" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/abhaymaurya" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://leetcode.com/u/abhaymaurya" target="_blank" rel="noreferrer">LeetCode</a>
          </div>
          <div className="footer-col fade-in">
            <h4>Quick Info</h4>
            <span>Delhi, India</span>
            <span>Open to Internships &amp; SDE roles</span>
            <a href="mailto:abhay.maurya.dev@gmail.com">abhay.maurya.dev@gmail.com</a>
          </div>
        </div>

        <div className="footer-bottom fade-in">
          <p>&copy; 2026 Abhay Maurya. Built from scratch with React &amp; JSX.</p>
          <a href="/" className="back-top" title="Back to top">↑</a>
        </div>
      </main>
    </>
  );
}
