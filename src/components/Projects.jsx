import { useState } from "react";
import { projects } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";

const architectureSpecs = {
  "Online Shopping Application (REST API)": [
    "POST /api/users/login  →  Session Token Auth",
    "GET|POST /api/products  →  Catalog & Stock Filtering",
    "POST|PUT /api/carts     →  Cart Item & Quantity Sync",
    "POST /api/orders        →  Transactional Order Checkout",
    "@RestControllerAdvice   →  GlobalExceptionHandler (MyError)",
  ],
  "Blog Microservices Architecture (blog-micro)": [
    "blog-app-server         →  Eureka Service Registry",
    "blog-app-api-gateway    →  Centralized Routing & Load Balancing",
    "blog-app-user           →  User Profiles & Credentials",
    "blog-app-post           →  Articles & Author Mapping",
    "blog-app-category/comment →  Taxonomy & Discussion Threads",
  ],
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState({});
  const [ref, visible] = useReveal();

  const getTab = (title) => activeTab[title] || "overview";

  return (
    <section id="profiles" className="profiles">
      <div
        ref={ref}
        className={`skill-content reveal-block ${visible ? "is-visible" : ""}`}
      >
        <div className="section-heading text-center">
          <h2>featured projects</h2>
        </div>

        <div className="container" style={{ marginTop: "40px" }}>
          <div className="row">
            {projects.map((project) => {
              const currentTab = getTab(project.title);
              const specs = architectureSpecs[project.title] || [];

              return (
                <div key={project.title} className="col-md-6">
                  <div className="backend-project-card">
                    <div>
                      <div className="project-card-top-bar">
                        <span className="project-subtitle">{project.subtitle}</span>
                        <div className="project-tab-switcher">
                          <button
                            type="button"
                            className={currentTab === "overview" ? "active" : ""}
                            onClick={() =>
                              setActiveTab({ ...activeTab, [project.title]: "overview" })
                            }
                          >
                            Overview
                          </button>
                          <button
                            type="button"
                            className={currentTab === "architecture" ? "active" : ""}
                            onClick={() =>
                              setActiveTab({
                                ...activeTab,
                                [project.title]: "architecture",
                              })
                            }
                          >
                            Modules / APIs
                          </button>
                        </div>
                      </div>

                      <h3>{project.title}</h3>

                      {currentTab === "overview" ? (
                        <>
                          <p>{project.description}</p>
                          <ul className="project-highlights">
                            {project.highlights.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <div className="project-arch-console">
                          {specs.map((line, idx) => (
                            <div key={idx} className="arch-line">
                              <span className="arch-prompt">$</span> {line}
                            </div>
                          ))}
                        </div>
                      )}
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
