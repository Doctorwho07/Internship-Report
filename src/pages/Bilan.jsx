import React from "react";

const Bilan = () => (
  <div className="container mt-5" id="bilan">
    <h1 className="mb-4">Bilan</h1>

    <div className="row mb-5">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title mb-0">1. Introduction</h2>
          </div>
          <div className="card-body">
            <p className="card-text">
              Découvrez le bilan de notre travail et nos réalisations au cours
              de cette période.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="row mb-5">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title mb-0">2. Tableaux des Projets</h2>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Projet</th>
                    <th scope="col">Statut</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Projet 1</td>
                    <td>Terminé</td>
                    <td>01/01/2024</td>
                  </tr>
                  <tr>
                    <td>Projet 2</td>
                    <td>En cours</td>
                    <td>15/02/2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row mb-5">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title mb-0">3. Conclusion</h2>
          </div>
          <div className="card-body">
            <p className="card-text">
              Ce bilan montre les avancées importantes réalisées durant cette
              période, avec une note particulière sur l'achèvement de projets
              clés et la progression des travaux en cours.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Bilan;
