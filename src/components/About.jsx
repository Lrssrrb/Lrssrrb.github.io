import { personalInfo } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-heading text-center">
        <h2>about me</h2>
      </div>
      <br />
      <div className="container">
        <div className="about-content">
          <div className="row">
            <div className="col-sm-6">
              <div className="single-about-txt">
                <h3>{personalInfo.aboutHeadline}</h3>
                <p>{personalInfo.aboutDescription}</p>
                <div className="row" style={{ marginTop: "25px" }}>
                  <div className="col-sm-6">
                    <div className="single-about-add-info">
                      <h3>location</h3>
                      <p>{personalInfo.location}</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="single-about-add-info">
                      <h3>core stack</h3>
                      <p>Java 17 • Spring Boot • Kafka</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-offset-2 col-sm-4">
              <div className="single-about-img">
                <img src={personalInfo.profileImage} alt={personalInfo.name} />
                <div className="about-list-icon">
                  <ul>
                    <li>
                      <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noreferrer"
                        title="GitHub"
                      >
                        <i className="fa fa-github" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        title="LinkedIn"
                      >
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#contact" title="Contact">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
