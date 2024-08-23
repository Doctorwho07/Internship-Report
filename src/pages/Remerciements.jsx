import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Remerciements = () => (
  <div className="container mt-5" id="remerciements">
    <h1 className="mb-4">Remerciements</h1>
    <p className="lead">
      Je souhaite remercier toutes les personnes qui ont contribué au bon
      déroulement de mon stage.
    </p>

    <div className="row mb-5">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title mb-0">Responsables</h2>
          </div>
          <div className="card-body">
            <p className="card-text">Merci aux responsables :</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a
                  href="https://www.linkedin.com/in/nicolasbert/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                  <strong>Nicolas BERT</strong>
                </a>
              </li>
              <li className="list-group-item">
                <a
                  href="https://www.linkedin.com/in/antoine-di-rienzo-155855151/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                  <strong>Antoine DI RIENZO</strong>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="row mb-5">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title mb-0">Alternants</h2>
          </div>
          <div className="card-body">
            <p className="card-text">Merci aux alternants :</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a
                  href="https://www.linkedin.com/in/lucas-sender-544131237/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                  <strong>Lucas SENDER</strong>
                </a>
              </li>
              <li className="list-group-item">
                <strong>Anisse VRIZ</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="row mb-5">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title mb-0">Clients</h2>
          </div>
          <div className="card-body">
            <p className="card-text">
              Merci aux différents clients de l'entreprise{" "}
              <strong>CIMRA</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="row mb-5">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title mb-0">Équipe Relation École et Entreprise</h2>
          </div>
          <div className="card-body">
            <p className="card-text">
              Merci à l'équipe relation école et entreprise.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Remerciements;
