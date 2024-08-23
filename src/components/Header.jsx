import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src="../../public/logo/logo.png" alt="logo" className="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link button-link ${
                    currentPath === "/about" ? "active-link" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  À propos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/entreprise"
                  className={`nav-link button-link ${
                    currentPath === "/entreprise" ? "active-link" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Entreprise
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/articles"
                  className={`nav-link button-link ${
                    currentPath === "/articles" ? "active-link" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Articles
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={`nav-link button-link ${
                    currentPath === "/contact" ? "active-link" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/bilan"
                  className={`nav-link button-link ${
                    currentPath === "/bilan" ? "active-link" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Bilan
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/SiteMap"
                  className={`nav-link button-link ${
                    currentPath === "/SiteMap" ? "active-link" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Plan du site
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/mentions-legales"
                  className={`nav-link button-link ${
                    currentPath === "/mentions-legales" ? "active-link" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mentions légales
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/remerciements"
                  className={`nav-link button-link ${
                    currentPath === "/remerciements" ? "active-link" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Remerciements
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
