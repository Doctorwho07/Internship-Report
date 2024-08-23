import React from "react";

const About = () => (
  <div className="container mt-5" id="about">
    <h1 className="mb-4">À propos</h1>
    <p className="lead">
      Bienvenue sur ma page personnelle, conçue pour offrir un aperçu de mon
      parcours académique et des raisons qui m'ont conduit à créer ce site. En
      tant qu'étudiant en deuxième année de Bachelor à Ynov Lyon, je souhaite
      vous présenter les fondements de ma formation, les objectifs que je me
      fixe, et les perspectives qui orientent mon avenir professionnel.
    </p>

    <div className="row mb-5">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title mb-0">Contexte Académique</h2>
          </div>
          <div className="card-body">
            <p className="card-text">
              Actuellement en deuxième année de Bachelor à Ynov Lyon, je me
              spécialise en [spécialité, par exemple "Développement Web",
              "Cybersécurité"]. Ce programme rigoureux combine théorie et
              pratique, permettant aux étudiants de développer des compétences
              solides dans leur domaine de prédilection. La formation comprend
              des projets pratiques et un stage obligatoire, permettant de
              consolider les connaissances acquises.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="row mb-5">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title mb-0">Objectifs du Site</h2>
          </div>
          <div className="card-body">
            <p>Ce site a été conçu pour remplir plusieurs fonctions clés :</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Documenter mon parcours :</strong> Présenter les
                éléments essentiels de mon parcours académique et professionnel,
                et offrir une vue d'ensemble de mes expériences et réalisations.
              </li>
              <li className="list-group-item">
                <strong>Montrer ma progression :</strong> Illustrer comment j'ai
                évolué au cours de ma formation, en mettant en avant les
                compétences acquises et les projets menés à bien.
              </li>
              <li className="list-group-item">
                <strong>Partager mes réflexions :</strong> Publier des articles
                et des réflexions sur des sujets liés à mon domaine d'études et
                à mes expériences pratiques.
              </li>
            </ul>
            <p>
              Ce site est conçu pour être une vitrine de mon parcours,
              accessible à toute personne souhaitant en savoir plus sur mon
              profil académique et professionnel.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
