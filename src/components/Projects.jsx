import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="profiles" className="profiles">
      <div className="skill-content">
        <div className="section-heading text-center">
          <h2>featured projects</h2>
        </div>

        <div className="container" style={{ marginTop: "40px" }}>
          <div className="row">
            {projects.map((project) => (
              <div key={project.title} className="col-md-6">
                <div className="backend-project-card">
                  <div>
                    <span className="project-subtitle">{project.subtitle}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <ul className="project-highlights">
                      {project.highlights.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-card-footer">
                    <div className="project-tech-list">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="skill-badge">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-github-btn"
                      >
                        <i className="fab fa-github"></i> View Source on GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
