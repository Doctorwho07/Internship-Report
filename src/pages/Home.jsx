import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="container mt-5">
    <div className="jumbotron text-center p-5 mb-5 image-bg">
      <h1 className="display-4 font-weight-bold">Bienvenue sur mon blog</h1>
      <p className="lead">
        Je suis Alexis ROUCHES, étudiant en Cybersécurité à Lyon Ynov Campus.{" "}
        <br />
        Je vous invite à Explorer mon parcours et mes réalisations.
      </p>
      <Link to="/about" className="btn btn-lg mt-4">
        Découvrir
      </Link>
      <div className="mt-4">
        <a href="/2024-07-03-Alexis-journal.docx" download className="btn">
          Télécharger mon rapport de stage
        </a>
      </div>
    </div>
  </div>
);

export default Home;
