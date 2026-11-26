import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("welcome-hero");

  const navItems = [
    { label: "ABOUT ME", href: "#about", id: "about" },
    { label: "SKILLS", href: "#skills", id: "skills" },
    { label: "EXPERIENCE", href: "#experience", id: "experience" },
    { label: "PROJECTS", href: "#profiles", id: "profiles" },
    { label: "EDUCATION", href: "#education", id: "education" },
    { label: "CONTACT", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);

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
          className={`navbar navbar-default navbar-fixed dark ${
            scrolled ? "sticked" : "no-background"
          }`}
          style={{
            backgroundColor: scrolled ? "#fff" : "transparent",
            boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.08)" : "none",
            transition: "all 0.3s ease",
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
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="clearfix"></div>
    </header>
  );
}
