import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="notfound-container">
    <h1 className="notfound-title">404</h1>
    <p className="notfound-message">
      Oups ! La page que vous recherchez n'existe pas.
    </p>
    <Link to="/" className="button-link notfound-button">
      Retour à l'accueil
    </Link>
  </div>
);

export default NotFound;
