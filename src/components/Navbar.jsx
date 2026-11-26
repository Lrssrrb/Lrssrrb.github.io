import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import { openAndDownloadResume } from "../utils/resumeAction";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("welcome-hero");

  const navItems = [
    { label: "Home", href: "#welcome-hero", id: "welcome-hero" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#profiles", id: "profiles" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min((y / docHeight) * 100, 100) : 0);

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && section.getBoundingClientRect().top <= 140) {
          setActiveSection(navItems[i].id);
          return;
        }
      }
      setActiveSection("welcome-hero");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="top-area">
      <div className="header-area">
        <nav
          className={`navbar navbar-default navbar-fixed dark sticky-top-nav ${
            scrolled ? "sticked" : ""
          }`}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            width: "100%",
            zIndex: 1030,
            backgroundColor: "#ffffff",
            boxShadow: scrolled
              ? "0 4px 16px rgba(0,0,0,0.1)"
              : "0 2px 8px rgba(0,0,0,0.06)",
            transition: "all 0.25s ease",
          }}
        >
          <div
            className="scroll-progress-bar"
            style={{ width: `${scrollProgress}%` }}
          />
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
                  <li
                    key={item.href}
                    className={`smooth-menu ${
                      activeSection === item.id ? "active" : ""
                    }`}
                  >
                    <a href={item.href} onClick={() => setMenuOpen(false)}>
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="smooth-menu">
                  <a
                    href={personalInfo.resumePath}
                    onClick={(e) => {
                      setMenuOpen(false);
                      openAndDownloadResume(e, personalInfo.resumePath);
                    }}
                    className="nav-resume-link"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="clearfix"></div>
    </header>
  );
}
