import React from "react";
import { Link } from "react-router-dom";

const PlanDuSite = () => (
  <div className="container mt-5" id="sitemap">
    <h1 className="mb-4">Plan du site</h1>

    <div className="row mb-5">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title mb-0">Navigation</h2>
          </div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">
                <Link to="/">Accueil</Link>
              </li>
              <li className="list-group-item">
                <Link to="/about">À propos</Link>
              </li>
              <li className="list-group-item">
                <Link to="/entreprise">Entreprise</Link>
              </li>
              <li className="list-group-item">
                <Link to="/articles">Articles</Link>
              </li>
              <li className="list-group-item">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="list-group-item">
                <Link to="/bilan">Bilan</Link>
              </li>
              <li className="list-group-item">
                <Link to="/mentions-legales">Mentions légales</Link>
              </li>
              <li className="list-group-item">
                <Link to="/remerciements">Remerciements</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PlanDuSite;
