import { useState } from "react";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleSendEmail = () => {
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      personalInfo.email
    )}&su=${encodeURIComponent("Backend Engineering Opportunity")}`;
    window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="contact" id="contact">
      <div className="content">
        <div className="title">
          <span>Don&apos;t be a stranger</span>
        </div>
        <div className="text">
          <div className="topic">Open to Backend &amp; Distributed Systems Roles</div>
          <p>
            Based in {personalInfo.location}. Feel free to reach out for backend
            engineering opportunities or technical discussions.
          </p>
          <br />
          <div className="button">
            <div className="media-icons">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <i
                  className="fab fa-github"
                  style={{ fontSize: "2em", margin: "0 12px" }}
                ></i>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i
                  className="fab fa-linkedin"
                  style={{ fontSize: "2em", margin: "0 12px" }}
                ></i>
              </a>
              <span className="contact-phone-icon" aria-label="Phone">
                <i
                  className="fa fa-mobile"
                  style={{ fontSize: "2em", margin: "0 12px", color: "#5c647b" }}
                ></i>
              </span>
              <p style={{ marginTop: "10px" }}>
                {personalInfo.phone} &bull; {personalInfo.email}
              </p>
            </div>
            <br />
            <div className="contact-action-group">
              <button
                type="button"
                onClick={handleSendEmail}
                className="contact-btn-primary"
              >
                Send Email
              </button>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="contact-btn-secondary"
              >
                {copied ? "Email Copied!" : "Copy Email"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
