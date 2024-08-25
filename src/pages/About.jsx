import React from "react";

const About = () => (
  <div className="container mt-5" id="about">
    <h1 className="mb-4">À propos</h1>
    <p className="lead">
      Bienvenue sur mon blog où je partage mes expériences professionnelles, les
      erreurs rencontrées, et les solutions trouvées, en tant qu'étudiant en
      troisième année de Bachelor à Lyon Ynov Campus.
    </p>
    <div className="row mb-5">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title mb-0">Contexte Académique</h2>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Formation :</strong> Actuellement en troisième année de
                Bachelor à Lyon Ynov Campus, je me spécialise en infrastructure
                réseau et cybersécurité. Mon parcours est enrichi par une
                alternance qui me permet d'allier théorie et pratique,
                consolidant ainsi mes compétences.
              </li>
              <li className="list-group-item">
                <strong>Projet académique :</strong> Ce blog a été développé
                pour documenter mes apprentissages, tant dans le milieu
                professionnel que dans le cadre de ma formation. J'ai choisi de
                développer ce site en utilisant React et Vite, deux technologies
                que je ne maîtrisais pas au départ. Pour faciliter la mise en
                page, j'ai opté pour Bootstrap et des composants simples, afin
                de conserver un design sobre et moderne.
              </li>
              <li className="list-group-item">
                <strong>Expérience pratique :</strong> La formation à Ynov
                Campus comprend des projets pratiques, des connaissances
                théoriques, un stage obligatoire en deuxième année, ainsi qu'une
                alternance en troisième année, ce qui me permet d'acquérir une
                solide expérience dans le domaine de la cybersécurité et de
                l'infrastructure réseau.
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
            <h2 className="card-title mb-0">Objectifs du Site</h2>
          </div>
          <div className="card-body">
            <p>J'ai conçu ce site avec plusieurs objectifs :</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Documenter mon parcours :</strong> Présenter les
                éléments essentiels de mon parcours et offrir une vue d'ensemble
                de mes expériences.
              </li>
              <li className="list-group-item">
                <strong>Montrer ma progression :</strong> Illustrer comment j'ai
                évolué au cours de ma formation, en mettant en avant les
                compétences acquises et les projets réalisés.
              </li>
              <li className="list-group-item">
                <strong>Maintenir le site à jour :</strong> J'ai conçu ce site
                pour qu'il soit évolutif et réponde aux exigences futures, avec
                une publication automatisée d'articles en fonction de mes
                expériences.
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
            <h2 className="card-title mb-0">Réalisation du Site</h2>
          </div>
          <div className="card-body">
            <p>
              J'ai décidé de me lancer quelques défis pour réaliser ce blog :
            </p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Développement :</strong> J'ai choisi d'utiliser deux
                technologies que je ne connaissais pas : Vite, pour accélérer la
                compilation, et React, une technologie très répandue et réputée
                pour sa facilité d'utilisation. J'ai également opté pour
                Bootstrap, afin de gagner du temps sur la partie design.
              </li>
              <li className="list-group-item">
                <strong>Hébergement :</strong> Pour rendre mon blog accessible,
                j'ai choisi de l'héberger avec Vercel, un outil gratuit qui
                permet de déployer automatiquement une nouvelle version après
                chaque push sur GitHub. Vercel offre aussi la possibilité de
                maintenir en ligne la dernière version fonctionnelle, d'obtenir
                des erreurs détaillées grâce à un système de logs, et de gérer
                le nom de domaine. Il propose également d'autres fonctionnalités
                que je n'ai pas encore explorées, comme la gestion de variables
                sécurisées.
              </li>
              <li className="list-group-item">
                <strong>Gestion des données :</strong> Toutes les données du
                blog sont stockées dans un tableau en JavaScript, ce qui me
                permet de les compléter, de les organiser par thématique, et de
                les modifier facilement si je souhaite ajouter des informations.
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
            <h2 className="card-title mb-0">Améliorations Futures</h2>
          </div>
          <div className="card-body">
            <p>Voici quelques exemples d'améliorations envisagées :</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Publication de posts :</strong> J'aimerais mettre en
                place un accès sécurisé uniquement pour moi, me permettant
                d'ajouter des articles via un formulaire.
              </li>
              <li className="list-group-item">
                <strong>Hébergement :</strong> Une fois la mise en place de mon
                serveur personnel terminée, j'hébergerai ce blog dessus et
                prendrai un nom de domaine personnalisé.
              </li>
              <li className="list-group-item">
                <strong>Stockage des données :</strong> J'aimerais également
                stocker toutes mes données, images et informations dans une base
                de données distante avec un accès sécurisé.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
