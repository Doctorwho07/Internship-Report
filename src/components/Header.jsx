import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";
const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Accueil
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link button-link ${
                    currentPath === "/about" ? "active-link" : ""
                  }`}
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
                >
                  Remerciements
                </Link>
              </li>
            </ul>
            <div className="ml-auto theme-switch-wrapper">
              <label className="theme-switch" htmlFor="theme-toggle">
                <input type="checkbox" id="theme-toggle" />
                <span className="slider"></span>
              </label>
              <span id="theme-label">Clair</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
