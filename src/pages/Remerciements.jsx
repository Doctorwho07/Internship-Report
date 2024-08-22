import React from "react";

const Remerciements = () => (
  <div className="container mt-5 remerciements-container">
    <h1 className="remerciements-title">Remerciements</h1>
    <p className="remerciements-text">
      Je souhaite remercier toutes les personnes qui ont contribué au bon
      déroulement de mon stage.
    </p>
    <ul className="remerciements-list">
      <li className="remerciements-item">
        Merci aux responsables{" "}
        <a
          href="https://www.linkedin.com/in/nicolasbert/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          <strong>Nicolas BERT</strong>
        </a>{" "}
        et{" "}
        <a
          href="https://www.linkedin.com/in/antoine-di-rienzo-155855151/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          <strong>Antoine DI RIENZO</strong>
        </a>
        .
      </li>
      <li className="remerciements-item">
        Merci aux alternants{" "}
        <a
          href="https://www.linkedin.com/in/lucas-sender-544131237/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          <strong>Lucas SENDER</strong>
        </a>{" "}
        et <strong>Anisse VRIZ</strong>.
      </li>
      <li className="remerciements-item">
        Merci aux différents clients de l'entreprise <strong>CIMRA</strong>.
      </li>
      <li className="remerciements-item">
        Merci à l'équipe relation école et entreprise.
      </li>
    </ul>
  </div>
);

export default Remerciements;
