import { personalInfo } from "../data/portfolioData";
import { openAndDownloadResume } from "../utils/resumeAction";

export default function Hero() {
  return (
    <section id="welcome-hero" className="welcome-hero hero-animated-bg">
      <div className="hero-floating-shapes" aria-hidden="true">
        <span className="shape shape-1"></span>
        <span className="shape shape-2"></span>
        <span className="shape shape-3"></span>
        <span className="shape shape-4"></span>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="header-text">
              <h2 className="hero-fade-up delay-1">
                hi <span>,</span> i am <br />
                Luckiraj <br />
                sisodiya <span>.</span>
              </h2>
              <p className="hero-fade-up delay-2">
                {personalInfo.shortIntro}
              </p>
              <a
                href={personalInfo.resumePath}
                onClick={(e) => openAndDownloadResume(e, personalInfo.resumePath)}
                className="hero-fade-up delay-3 hero-resume-btn"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
