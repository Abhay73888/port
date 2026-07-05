import { useState } from "react";

/**
 * Slide9Contact — Contact form section component.
 * Converted from slide9-contact.html. The inline `onsubmit="handleSubmit(event)"`
 * has been replaced with a controlled-ish React form: fields are
 * uncontrolled (read via FormData on submit, matching the original's
 * plain-HTML simplicity) but submission state now lives in `useState`.
 *
 * [UPDATE THIS] — Replace FORM_ENDPOINT below with your real Formspree
 * (or EmailJS) endpoint before deploying.
 */
const FORM_ENDPOINT = "https://formspree.io/f/mzzzzabc"; // [UPDATE THIS]

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.target);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
        .page-wrap { max-width: 1100px; margin: 0 auto; padding: 150px 28px 100px; }
        .eyebrow { display: inline-flex; align-items: center; gap: 8px; border: 1px solid var(--glass-border); background: var(--glass); padding: 8px 18px; border-radius: 999px; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em; color: var(--accent-light); margin-bottom: 20px; }
        h2.section-title { font-family: var(--font-display); font-size: clamp(2.2rem, 5vw, 3.4rem); font-weight: 800; line-height: 1.15; margin-bottom: 18px; letter-spacing: -0.02em; }
        .gradient-text { background: linear-gradient(90deg, var(--accent-light), var(--cyan) 50%, var(--magenta)); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; color: transparent; animation: gradientMove 6s ease infinite; }
        @keyframes gradientMove { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .section-desc { font-size: 1.05rem; color: var(--text-secondary); max-width: 640px; line-height: 1.7; margin-bottom: 50px; }
        .glass-card { background: var(--glass); border: 1px solid var(--glass-border); backdrop-filter: blur(20px); border-radius: 24px; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(28px); filter: blur(6px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
        .fade-in { opacity: 0; animation: fadeInUp 0.8s ease forwards; }
        footer.mini-footer { text-align: center; padding: 40px 28px; color: var(--text-tertiary); font-size: 0.85rem; border-top: 1px solid var(--glass-border); }
        footer.mini-footer a { color: var(--accent-light); text-decoration: none; }

        .contact-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 40px; }
        @media (max-width: 850px) { .contact-grid { grid-template-columns: 1fr; } }
        .info-card { padding: 28px; margin-bottom: 20px; }
        .info-row { display: flex; align-items: center; gap: 14px; padding: 14px 0; border-bottom: 1px solid var(--glass-border); text-decoration: none; color: inherit; }
        .info-row:last-child { border-bottom: none; }
        .info-icon { width: 44px; height: 44px; border-radius: 12px; background: rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0; }
        .info-label { font-size: 0.72rem; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.08em; }
        .info-value { font-size: 0.92rem; font-weight: 500; }
        .social-row { display: flex; gap: 10px; margin-top: 8px; }
        .social-row a { width: 40px; height: 40px; border-radius: 50%; border: 1px solid var(--glass-border); background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; color: var(--text-secondary); text-decoration: none; font-size: 0.85rem; font-weight: 700; transition: all 0.3s ease; }
        .social-row a:hover { color: var(--text-primary); border-color: rgba(124,58,237,0.4); }
        .note { font-size: 0.78rem; color: var(--text-tertiary); line-height: 1.6; }
        .note a { color: var(--accent-light); }
        .form-card { padding: 32px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 18px; }
        @media (max-width: 500px) { .form-row { grid-template-columns: 1fr; } }
        .field { display: flex; flex-direction: column; gap: 8px; margin-bottom: 18px; }
        .field label { font-size: 0.85rem; font-weight: 500; color: var(--text-secondary); }
        .field input, .field textarea { background: rgba(255,255,255,0.05); border: 1px solid var(--glass-border); border-radius: 12px; padding: 13px 16px; color: var(--text-primary); font-family: inherit; font-size: 0.9rem; outline: none; transition: border-color 0.3s ease; }
        .field input:focus, .field textarea:focus { border-color: rgba(124,58,237,0.6); }
        .field textarea { resize: vertical; min-height: 120px; }
        .submit-btn { width: 100%; background: var(--text-primary); color: var(--void); border: none; padding: 16px; border-radius: 999px; font-weight: 700; font-size: 0.9rem; cursor: pointer; transition: transform 0.3s ease, opacity 0.3s ease; }
        .submit-btn:hover { transform: translateY(-2px); }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
        .form-msg { margin-top: 14px; font-size: 0.85rem; text-align: center; }
        .form-msg.success { color: #6ee7b7; }
        .form-msg.error { color: #fca5a5; }
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
            <li><a href="/contact" className="active">Contact</a></li>
          </ul>
          <a href="/contact" className="hire-btn">Hire Me</a>
        </nav>
      </header>

      <main className="page-wrap">
        <div className="eyebrow fade-in">CONTACT</div>
        <h2 className="section-title fade-in">
          Let's build something <span className="gradient-text">worth shipping.</span>
        </h2>
        <p className="section-desc fade-in">
          Have an opportunity, project, or just want to talk tech? My inbox is open.
        </p>

        <div className="contact-grid">
          <div className="fade-in">
            <div className="glass-card info-card">
              <a href="mailto:abhay.maurya.dev@gmail.com" className="info-row">
                <div className="info-icon">✉️</div>
                <div>
                  <div className="info-label">Email</div>
                  <div className="info-value">abhay.maurya.dev@gmail.com</div>
                </div>
              </a>
              <div className="info-row">
                <div className="info-icon">📍</div>
                <div>
                  <div className="info-label">Location</div>
                  <div className="info-value">Delhi, India</div>
                </div>
              </div>
              <div className="info-row">
                <div className="info-icon">📞</div>
                <div>
                  <div className="info-label">Phone</div>
                  <div className="info-value">+91 90000 00000</div>
                </div>
              </div>
                <div style={{ paddingTop: "16px" }}>
                <div className="social-row">
                  <a href="https://github.com/Abhay73888" target="_blank" rel="noreferrer">GH</a>
                  <a href="https://linkedin.com/in/abhaymaurya" target="_blank" rel="noreferrer">in</a>
                  <a href="https://leetcode.com/abhaykumarmaurya65" target="_blank" rel="noreferrer">LC</a>
                </div>
              </div>
            </div>
            <p className="note fade-in">
              [UPDATE THIS] — Contact form posts to a Formspree placeholder endpoint. Create a
              free account at{" "}
              <a href="https://formspree.io" target="_blank" rel="noreferrer">formspree.io</a>,
              then replace FORM_ENDPOINT in Slide9Contact.jsx.
            </p>
          </div>

          <div className="glass-card form-card fade-in">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Jane Doe" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="jane@company.com" required />
                </div>
              </div>
              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Internship opportunity at..." />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell me a bit about the opportunity or project..." required />
              </div>
              <button type="submit" className="submit-btn" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending..." : "Send Message →"}
              </button>
              {status === "success" && (
                <p className="form-msg success">✅ Message sent! I'll get back to you soon.</p>
              )}
              {status === "error" && (
                <p className="form-msg error">Something went wrong. Please email me directly instead.</p>
              )}
            </form>
          </div>
        </div>
      </main>

      <footer className="mini-footer">
        &copy; 2026 Abhay Maurya. Built with React &amp; JSX. Next: <a href="/footer">Footer →</a>
      </footer>
    </>
  );
}
