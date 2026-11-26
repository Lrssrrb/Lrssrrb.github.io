import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";

const roles = [
  "Backend Java Developer • Microservices & Event-Driven Systems",
  "Spring Boot • Apache Kafka • Distributed Caching (Redis)",
  "High-Throughput Middleware & REST API Architect",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = roles[roleIndex];
    const speed = isDeleting ? 30 : 55;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText.length < currentFullText.length) {
        setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
      } else if (!isDeleting && displayedText.length === currentFullText.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

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
              <p className="hero-fade-up delay-2 hero-typing-line">
                {displayedText}
                <span className="typing-cursor">|</span>
              </p>
              <a
                href={personalInfo.resumePath}
                download
                className="hero-fade-up delay-3 hero-resume-btn"
              >
                download resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
