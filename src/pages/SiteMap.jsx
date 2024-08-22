import React from "react";
import { Link } from "react-router-dom";

const PlanDuSite = () => (
  <div className="container mt-5">
    <h1>Plan du site</h1>
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
);

export default PlanDuSite;
