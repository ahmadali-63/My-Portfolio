import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ activeSection, onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const links = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "education", title: "Education" },
    { id: "skills", title: "Skills" },
    { id: "experience", title: "Experience" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleLinkClick = (id) => {
    setMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <nav className={`navbar ${sticky ? "sticky" : ""}`}>
        <div className="nav-container">
          <button
            type="button"
            className="brand"
            onClick={() => handleLinkClick("home")}
          >
            <span className="brand-symbol">&lt;</span>
            <span className="brand-text">ahmad.dev</span>
            <span className="brand-symbol"> /&gt;</span>
          </button>

          <button
            type="button"
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
            {links.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  className={`snake-border ${activeSection === link.id ? "active" : ""}`}
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.title}
                </button>
              </li>
            ))}

            <li className="nav-resume">
              <a
                href="/Resume.pdf"
                download
                className="snake-border resume-link"
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <button
        type="button"
        className={`nav-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-label="Close navigation menu"
        tabIndex={menuOpen ? 0 : -1}
      />
    </>
  );
};

export default Navbar;
