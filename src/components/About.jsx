import abhayPhoto from "../assets/abhay-photo.jpeg"

const About = () => {
  return (
    <section id="about" className="about-section">
      <style>{`
        .about-section {
          position: relative;
          min-height: 100vh;
          padding: 6rem 1.5rem 3rem;
          color: #f5f5f7;
          background: linear-gradient(135deg, #05050a 0%, #0f0f1a 100%);
          overflow: hidden;
        }

        .about-section::before,
        .about-section::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.52;
          pointer-events: none;
        }

        .about-section::before {
          width: 24rem;
          height: 24rem;
          top: -4rem;
          right: -4rem;
          background: rgba(124, 58, 237, 0.22);
        }

        .about-section::after {
          width: 20rem;
          height: 20rem;
          bottom: -5rem;
          left: -3rem;
          background: rgba(34, 211, 238, 0.16);
        }

        .about-card {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 2rem;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
        }

        .photo-frame {
          min-height: 320px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: radial-gradient(circle at top left, rgba(124, 58, 237, 0.28), transparent 40%), rgba(255, 255, 255, 0.06);
          color: #d1d5db;
          text-align: center;
          padding: 1rem;
          overflow: hidden;
        }

        .eyebrow {
          display: inline-block;
          padding: 0.5rem 0.8rem;
          border-radius: 999px;
          background: rgba(124, 58, 237, 0.16);
          color: #ab93ff;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        h2 {
          font-size: clamp(1.8rem, 4vw, 2.7rem);
          margin-bottom: 0.8rem;
        }

        .gradient-text {
          background: linear-gradient(90deg, #ab93ff, #22d3ee 50%, #ec4899);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .description {
          color: #a1a1b0;
          line-height: 1.7;
          margin-bottom: 1.2rem;
        }

        .traits-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
          margin-top: 1.2rem;
        }

        .trait-card {
          padding: 1rem;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.06);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .trait-card h3 {
          margin-bottom: 0.4rem;
          font-size: 1rem;
        }

        .trait-card p {
          color: #a1a1b0;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        @media (max-width: 800px) {
          .about-card {
            grid-template-columns: 1fr;
          }

          .traits-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="about-card">
        <div className="photo-frame">
          <img
            src={abhayPhoto}
            alt="Abhay Maurya"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}
          />
        </div>

        <div>
          <div className="eyebrow">About me</div>
          <h2>
            The person behind the <span className="gradient-text">commits.</span>
          </h2>
          <p className="description">
            I’m a Computer Science Engineering student who enjoys turning ideas into polished software experiences. I’m especially interested in building backend systems, modern frontends, and thoughtful products that solve real problems.
          </p>
          <p className="description">
            My work blends Java, Spring Boot, React, and modern web practices, with a strong focus on clean architecture and reliable delivery.
          </p>

          <div className="traits-grid">
            <div className="trait-card">
              <h3>Fast learner</h3>
              <p>Quick to pick up new tools and turn them into working solutions.</p>
            </div>
            <div className="trait-card">
              <h3>Curious builder</h3>
              <p>I enjoy understanding how systems work and improving them.</p>
            </div>
            <div className="trait-card">
              <h3>Consistent</h3>
              <p>I keep refining my craft through daily practice and real projects.</p>
            </div>
            <div className="trait-card">
              <h3>Future-focused</h3>
              <p>I aim to build products that create lasting impact.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
