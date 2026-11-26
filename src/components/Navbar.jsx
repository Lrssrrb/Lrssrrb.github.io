import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "ABOUT ME", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "PROJECTS", href: "#profiles" },
    { label: "EDUCATION", href: "#education" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="top-area">
      <div className="header-area">
        <nav
          className={`navbar navbar-default navbar-fixed dark ${
            scrolled ? "sticked" : "no-background"
          }`}
          style={{
            backgroundColor: scrolled ? "#fff" : "transparent",
            boxShadow: scrolled ? "0 2px 5px rgba(0,0,0,0.1)" : "none",
            transition: "all 0.3s ease",
          }}
        >
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
              >
                <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand" href="#welcome-hero">
                {personalInfo.brand}
              </a>
            </div>

            <div
              className={`collapse navbar-collapse menu-ui-design ${
                menuOpen ? "in" : ""
              }`}
              id="navbar-menu"
            >
              <ul className="nav navbar-nav navbar-right">
                {navItems.map((item) => (
                  <li key={item.href} className="smooth-menu">
                    <a href={item.href} onClick={() => setMenuOpen(false)}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="clearfix"></div>
    </header>
  );
}
