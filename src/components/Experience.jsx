import { experiences } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";

function ExperienceItem({ exp, index }) {
  const [ref, visible] = useReveal(0.15);

  return (
    <div
      ref={ref}
      className={`container reveal-block ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="experience-content">
        <div className="main-timeline">
          <ul>
            <li>
              <div className="single-timeline-box fix timeline-card-hover">
                <div className="row">
                  <div className="col-md-5">
                    <img src={exp.image} alt={exp.company} />
                    <div className="experience-time text-right">
                      <h2>{exp.period}</h2>
                      <h3>{exp.role}</h3>
                    </div>
                  </div>
                  <div className="col-md-offset-1 col-md-5">
                    <div className="timeline">
                      <div className="timeline-content">
                        <h4 className="title">{exp.company}</h4>
                        <h5 className="title">{exp.location}</h5>
                        <ul>
                          {exp.bullets.map((bullet, idx) => (
                            <li key={idx} className="bullet">
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-heading text-center">
        <h2>experience</h2>
      </div>
      {experiences.map((exp, index) => (
        <ExperienceItem key={exp.company} exp={exp} index={index} />
      ))}
    </section>
  );
}
