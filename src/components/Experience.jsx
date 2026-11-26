import { experiences } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-heading text-center">
        <h2>experience</h2>
      </div>

      {experiences.map((exp) => (
        <div key={exp.company} className="container">
          <div className="experience-content">
            <div className="main-timeline">
              <ul>
                <li>
                  <div className="single-timeline-box fix">
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
      ))}
    </section>
  );
}
