import heroPhoto from '../assets/hero-photo.jpg'

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <style>{`
        :root {
          color-scheme: dark;
        }

        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6rem 1.5rem 3rem;
          color: #f5f5f7;
          background: linear-gradient(135deg, #05050a 0%, #0f0f1a 100%);
          overflow: hidden;
        }

        .hero-section::before,
        .hero-section::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.55;
          pointer-events: none;
        }

        .hero-section::before {
          width: 28rem;
          height: 28rem;
          top: -6rem;
          left: -6rem;
          background: rgba(124, 58, 237, 0.22);
        }

        .hero-section::after {
          width: 24rem;
          height: 24rem;
          bottom: -8rem;
          right: -6rem;
          background: rgba(34, 211, 238, 0.16);
        }

        .hero-card {
          position: relative;
          z-index: 1;
          width: min(100%, 1100px);
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2rem;
          align-items: center;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          width: fit-content;
          padding: 0.6rem 1rem;
          border-radius: 999px;
          background: rgba(124, 58, 237, 0.16);
          color: #ab93ff;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .dot {
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 999px;
          background: #34d399;
        }

        h1 {
          font-size: clamp(2rem, 5vw, 3.4rem);
          line-height: 1.1;
          margin-bottom: 1rem;
        }

        .gradient-text {
          background: linear-gradient(90deg, #ab93ff, #22d3ee 50%, #ec4899);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .subtitle {
          font-size: 1rem;
          line-height: 1.7;
          color: #a1a1b0;
          margin-bottom: 1.5rem;
          max-width: 600px;
        }

        .cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.4rem;
        }

        .btn-primary,
        .btn-secondary {
          padding: 0.9rem 1.2rem;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 600;
          transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
        }

        .btn-primary {
          background: white;
          color: #05050a;
        }

        .btn-secondary {
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: #f5f5f7;
          background: rgba(255, 255, 255, 0.06);
        }

        .btn-primary:hover,
        .btn-secondary:hover {
          transform: translateY(-2px);
          border-color: rgba(124, 58, 237, 0.35);
        }

        .socials {
          display: flex;
          gap: 0.75rem;
        }

        .socials a {
          width: 2.4rem;
          height: 2.4rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          color: #f5f5f7;
          text-decoration: none;
          font-size: 0.9rem;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .socials a:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.12);
        }

        .hero-visual {
          min-height: 280px;
          border-radius: 20px;
          background: radial-gradient(circle at top left, rgba(124, 58, 237, 0.35), transparent 45%),
            radial-gradient(circle at bottom right, rgba(34, 211, 238, 0.25), transparent 40%),
            rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          overflow: hidden;
        }

        .hero-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 16px;
          display: block;
        }

        @media (max-width: 800px) {
          .hero-card {
            grid-template-columns: 1fr;
          }

          .hero-visual {
            min-height: 220px;
          }
        }
      `}</style>

      <div className="hero-card">
        <div>
          <div className="badge">
            <span className="dot" /> Open to internships & full-time roles
          </div>

          <h1>
           Built with Passion.
Driven by Innovation..<br />
            I build <span className="gradient-text">digital experiences.</span>
          </h1>

          <p className="subtitle">
            CSE undergraduate crafting production-ready interfaces and backend solutions with a focus on clean architecture and thoughtful user experiences.
          </p>

          <div className="cta-group">
            <a href="#projects" className="btn-primary">View My Work →</a>
            <a href="/Abhay_Kumar_Maurya_Visual_Resume.html" className="btn-secondary" download>
              Download Resume ⬇
            </a>
          </div>

          <div className="socials">
            <a href="https://github.com/Abhay73888" target="_blank" rel="noreferrer">GH</a>
            <a href="https://linkedin.com/in/abhay-maurya-71b960231" target="_blank" rel="noreferrer">in</a>
            <a href="https://leetcode.com/abhaykumarmaurya65" target="_blank" rel="noreferrer">LC</a>
          </div>
        </div>

        <div className="hero-visual">
          <img src={heroPhoto} alt="Profile" />
        </div>
      </div>
    </section>
  )
}

export default Hero
