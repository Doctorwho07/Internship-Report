import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Assurez-vous d'importer Bootstrap CSS

const Entreprise = () => (
  <div className="container mt-5">
    <h1 className="mb-4">L'Entreprise CIMRA</h1>
    <p className="lead">
      Découvrez comment CIMRA peut transformer vos défis informatiques en
      solutions simples et efficaces.
    </p>

    {/* Section Qui Sont-Ils ? */}
    <div className="row mb-5">
      <div className="col-md-12">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Qui Sont-Ils ?</h2>
            <p className="card-text">
              <strong>CIMRA</strong> est une entreprise informatique située à
              Lyon, spécialisée dans la fourniture de solutions informatiques
              adaptées aux besoins des professionnels. Depuis sa création en
              2007, CIMRA a su se faire un nom dans la région Rhône-Alpes grâce
              à ses services sur mesure pour les petites et moyennes entreprises
              (TPE/PME).
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Section Les Services Proposés */}
    <div className="row mb-5">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title mb-0">Les Services Proposés</h2>
          </div>
          <div className="card-body">
            <p>
              CIMRA offre une gamme complète de services informatiques pour
              répondre à diverses exigences :
            </p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Infogérance et Maintenance Informatique :</strong>{" "}
                Externaliser la gestion de votre parc informatique avec CIMRA
                permet de se concentrer pleinement sur le cœur de métier. Des
                services de maintenance préventive, curative, et support
                technique sont inclus, ainsi qu'un prêt de matériel sans surcoût
                en cas de panne.
              </li>
              <li className="list-group-item">
                <strong>Cybersécurité :</strong> Avec la montée des
                cybermenaces, la protection des données et des infrastructures
                est cruciale. CIMRA propose des solutions de sécurité robustes,
                y compris antivirus, firewalls, et sauvegardes externalisées,
                pour protéger les applications et les réseaux.
              </li>
              <li className="list-group-item">
                <strong>Téléphonie IP :</strong> Pour améliorer la communication
                interne et la satisfaction des clients, CIMRA offre des
                solutions de téléphonie IP. Cela inclut des conseils pour une
                migration réussie, des solutions logicielles performantes, et
                des équipements modernes.
              </li>
              <li className="list-group-item">
                <strong>Conseil en Logiciels de Gestion Commerciale :</strong>{" "}
                Trouver le bon logiciel peut transformer la gestion d’une
                entreprise. CIMRA aide à choisir et à mettre en place des outils
                comme EBP ou Odoo, parfaitement adaptés aux besoins spécifiques.
              </li>
              <li className="list-group-item">
                <strong>Solution de Télétravail :</strong> Le télétravail
                devient de plus en plus courant. CIMRA facilite cette transition
                avec des outils comme des VPN sécurisés, des solutions de
                collaboration, et des équipements performants pour maintenir la
                productivité à distance.
              </li>
              <li className="list-group-item">
                <strong>
                  Vente et Installation de Matériel Informatique :
                </strong>{" "}
                Que ce soit pour des ordinateurs, des imprimantes ou des
                serveurs, CIMRA propose une large gamme de matériel
                informatique. Les services incluent le conseil, l’installation,
                et le dépannage pour garantir des équipements opérationnels.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Section L'Équipe Derrière CIMRA */}
    <div className="row mb-5">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title mb-0">L'Équipe Derrière CIMRA</h2>
          </div>
          <div className="card-body">
            <p>
              L'équipe de CIMRA est composée de passionnés de technologie prêts
              à résoudre les défis informatiques :
            </p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Nicolas Bert :</strong> Directeur associé depuis 2011,
                Nicolas gère les projets, les achats de matériel, la maintenance
                et le développement des outils de gestion commerciale.
              </li>
              <li className="list-group-item">
                <strong>Antoine Di Rienzo :</strong> Après plusieurs stages et
                une intégration en 2018, Antoine est devenu associé en 2021. Il
                se spécialise dans les systèmes et serveurs, ainsi que dans la
                sécurité informatique et la téléphonie IP.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Section Contact */}
    <div className="row mb-5">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title mb-0">Contact</h2>
          </div>
          <div className="card-body">
            <p>
              Pour toute question ou information supplémentaire, voici comment
              joindre CIMRA :
            </p>
            <p>
              <strong>Adresse :</strong> 50 Rue Ampère, 69680 Chassieu, Lyon
            </p>
            <p>
              <strong>Email :</strong>{" "}
              <a href="mailto:contact@cimra.fr">contact@cimra.fr</a>
            </p>
            <p>
              <strong>Téléphone :</strong>{" "}
              <a href="tel:+33427469940">+33 (0)4 27 46 99 40</a>
            </p>
            <p>
              <strong>Horaires :</strong> Lundi au vendredi, de 9h à 19h
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Section Pourquoi Opter pour CIMRA ? */}
    <div className="row mb-5">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title mb-0">Pourquoi Opter pour CIMRA ?</h2>
          </div>
          <div className="card-body">
            <p>
              Choisir CIMRA, c’est faire le choix d’un partenaire informatique
              qui combine expertise et proximité. Avec plus de 15 ans
              d’expérience, l’équipe s’engage à fournir des solutions efficaces
              et personnalisées, tout en restant disponible et réactive. CIMRA
              est là pour assurer la sérénité informatique et permettre aux
              entreprises de se concentrer sur leur développement.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Section Suivez CIMRA */}
    <div className="row mb-5">
      <div className="col-md-12">
        <div className="card text-center">
          <div className="card-body">
            <h2 className="card-title">Suivez CIMRA</h2>
            <p>
              Pour rester informé des dernières nouveautés et services de CIMRA,
              retrouvez l’entreprise sur{" "}
              <a
                href="https://www.linkedin.com/company/cimraindex/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Entreprise;
