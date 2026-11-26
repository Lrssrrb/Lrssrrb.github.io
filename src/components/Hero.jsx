import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  return (
    <section id="welcome-hero" className="welcome-hero">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="header-text">
              <h2>
                hi <span>,</span> i am <br />
                Luckiraj <br />
                sisodiya <span>.</span>
              </h2>
              <p>{personalInfo.role}</p>
              <a href={personalInfo.resumePath} download>
                download resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
