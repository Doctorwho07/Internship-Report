import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="container mt-5">
    <img src="/logo/logo.png" alt="logo" className="image" />

    <div
      className="jumbotron text-center bg-light p-5 mb-5"
      style={{
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        color: "#fff",
      }}
    >
      <h1 className="display-4 font-weight-bold">Bienvenue sur mon blog</h1>
      <p className="lead">
        Je suis Alexis ROUCHES, étudiant en Cybersécurité à Lyon Ynov Campus.
        Explorez mon parcours et mes réalisations.
      </p>
      <Link to="/about" className="btn btn-primary btn-lg mt-4">
        Découvrir
      </Link>
    </div>
  </div>
);

export default Home;
