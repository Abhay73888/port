const Myproject = () => {
  return (
    <section id="projects" className="projects-section">
      <style>{`
        .projects-section {
          position: relative;
          min-height: 100vh;
          padding: 6rem 1.5rem 3rem;
          color: #f5f5f7;
          background: linear-gradient(135deg, #05050a 0%, #0f0f1a 100%);
          overflow: hidden;
        }

        .projects-section::before,
        .projects-section::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.5;
          pointer-events: none;
        }

        .projects-section::before {
          width: 22rem;
          height: 22rem;
          top: -4rem;
          left: -4rem;
          background: rgba(124, 58, 237, 0.2);
        }

        .projects-section::after {
          width: 20rem;
          height: 20rem;
          bottom: -5rem;
          right: -3rem;
          background: rgba(34, 211, 238, 0.15);
        }

        .projects-grid {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.25rem;
        }

        .project-card {
          padding: 1.25rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .project-card:hover {
          transform: translateY(-4px);
          border-color: rgba(124, 58, 237, 0.35);
        }

        .project-card h3 {
          margin-bottom: 0.5rem;
        }

        .project-card p {
          color: #a1a1b0;
          line-height: 1.6;
          margin-bottom: 0.75rem;
        }

        .project-link {
          color: #ab93ff;
          font-weight: 600;
          text-decoration: none;
        }

        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="projects-grid">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>A sleek personal portfolio built with React and modern styling patterns.</p>
          <a href="#" className="https://port-lilac-zeta.vercel.app/">View project →</a>
        </div>
        <div className="project-card">
          <h3>API Backend</h3>
          <p>A RESTful backend with structured services and secure APIs.</p>
          <a href="#" className="project-link">View project →</a>
        </div>
        <div className="project-card">
          <h3>UI Component System</h3>
          <p>A reusable component library for responsive and accessible interfaces.</p>
          <a href="#" className="project-link">View project →</a>
        </div>
      </div>
    </section>
  )
}

export default Myproject
