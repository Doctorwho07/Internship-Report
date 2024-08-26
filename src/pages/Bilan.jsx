import React, { useState } from "react";
import projects from "../Projects.js";

const Bilan = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const getSortedPosts = () => {
    let allPosts = projects.flatMap((project) =>
      project.posts.map((post) => ({
        ...post,
        theme: project.theme,
      }))
    );

    if (sortConfig.key !== null) {
      allPosts.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return allPosts;
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedPosts = getSortedPosts();

  return (
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
                Mon stage a duré 6 semaines, du 1er juillet au 9 août 2024.
                L'équipe de CIMRA a su m'expliquer et me mettre en place tout le
                nécessaire pour veiller au bon déroulement. À travers ce bilan,
                je souhaite mettre en évidence les missions que j'ai su mener, y
                compris celles encore en cours.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <a href="https://alexis-r.link" className="btn">
          Ma lettre de recommandation CIMRA
        </a>
      </div>
      <div className="row mb-5">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h2 className="card-title mb-0">2. Tableaux des Projets</h2>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <p>Sélectionner la colonne pour trier</p>

                <table className="table">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        onClick={() => handleSort("theme")}
                        className="d-none d-md-table-cell"
                      >
                        Thème{" "}
                        {sortConfig.key === "theme"
                          ? sortConfig.direction === "asc"
                            ? "▲"
                            : "▼"
                          : ""}
                      </th>
                      <th scope="col" onClick={() => handleSort("projet")}>
                        Projet{" "}
                        {sortConfig.key === "projet"
                          ? sortConfig.direction === "asc"
                            ? "▲"
                            : "▼"
                          : ""}
                      </th>
                      <th
                        scope="col"
                        onClick={() => handleSort("statut")}
                        className="status"
                      >
                        Statut{" "}
                        {sortConfig.key === "statut"
                          ? sortConfig.direction === "asc"
                            ? "▲"
                            : "▼"
                          : ""}
                      </th>
                      <th
                        scope="col"
                        onClick={() => handleSort("date")}
                        className="date"
                      >
                        Date{" "}
                        {sortConfig.key === "date"
                          ? sortConfig.direction === "asc"
                            ? "▲"
                            : "▼"
                          : ""}
                      </th>
                      <th
                        scope="col"
                        onClick={() => handleSort("logiciels")}
                        className="d-none d-md-table-cell"
                      >
                        Logiciels{" "}
                        {sortConfig.key === "logiciels"
                          ? sortConfig.direction === "asc"
                            ? "▲"
                            : "▼"
                          : ""}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedPosts.map((post, index) => (
                      <tr key={index}>
                        <td className="d-none d-md-table-cell">{post.theme}</td>
                        <td>{post.projet}</td>
                        <td className="status">{post.statut}</td>
                        <td className="date">{post.date}</td>
                        <td className="d-none d-md-table-cell">
                          {post.logiciels}
                        </td>
                      </tr>
                    ))}
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
              <h2 className="card-title mb-0">3. Compétences Acquises</h2>
            </div>
            <div className="card-body">
              <p>
                Pendant mon stage, j'ai acquis plusieurs compétences clés qui
                ont contribué à mon développement professionnel dans le domaine
                de l'informatique. Voici un aperçu des compétences que j'ai
                développées :
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>
                    Diagnostic et résolution de problèmes techniques :
                  </strong>{" "}
                  Je suis capable de diagnostiquer et résoudre des problèmes
                  techniques à distance, en utilisant des outils de gestion à
                  distance comme TeamViewer et des procédures de dépannage pour
                  des clients tels que Volkswagen et Cochet.
                </li>
                <li className="list-group-item">
                  <strong>
                    Configuration et mise en place de réseaux locaux :
                  </strong>{" "}
                  Je suis capable de configurer et mettre en place des réseaux
                  locaux, en effectuant des installations matérielles et des
                  configurations logicielles pour des systèmes tels que Windows
                  Server, dans un cadre professionnel de support technique.
                </li>
                <li className="list-group-item">
                  <strong>
                    Installation et configuration de logiciels et systèmes :
                  </strong>{" "}
                  Je suis capable d'installer et de configurer des logiciels et
                  des systèmes d'exploitation sur des serveurs et des postes de
                  travail, y compris l'activation des licences et la
                  configuration de sauvegardes avec ArcServe SPX, pour assurer
                  une gestion efficace des données.
                </li>
                <li className="list-group-item">
                  <strong>
                    Préparation et passage de certifications techniques :
                  </strong>{" "}
                  Je suis capable de préparer et passer des certifications
                  techniques, en suivant des cours spécialisés comme ArcServe et
                  en réalisant des tests pour valider mes compétences, pour
                  obtenir des qualifications professionnelles reconnues.
                </li>
                <li className="list-group-item">
                  <strong>
                    Création et configuration de machines virtuelles :
                  </strong>{" "}
                  Je suis capable de créer et de configurer des machines
                  virtuelles en utilisant Hyper-V et d'autres outils de
                  virtualisation, en initialisant des ISO, des VHDX, et en
                  mettant en place des environnements de récupération, pour
                  assurer la continuité des services en cas de sinistre.
                </li>
                <li className="list-group-item">
                  <strong>Rédaction de documents techniques détaillés :</strong>{" "}
                  Je suis capable de rédiger des documents techniques détaillés,
                  en expliquant les procédures de reprise d'activité après
                  sinistre et les configurations de machines virtuelles, pour
                  garantir la clarté et la précision des processus techniques.
                </li>
                <li className="list-group-item">
                  <strong>
                    Diagnostics et réparations de matériel informatique :
                  </strong>{" "}
                  Je suis capable de réaliser des diagnostics et des réparations
                  de matériel informatique, en effectuant des tests sur les
                  disques durs, les composants, et en démontant des unités pour
                  remplacer des pièces comme les CPUs et GPUs, pour optimiser la
                  performance des systèmes.
                </li>
                <li className="list-group-item">
                  <strong>
                    Mise en œuvre de procédures de sécurité informatique :
                  </strong>{" "}
                  Je suis capable de mettre en œuvre des procédures de sécurité
                  informatique, en configurant des VPNs, en réalisant des
                  changements de mot de passe sécurisés et en analysant des logs
                  pour détecter des problèmes de connexion à des bases de
                  données, pour maintenir la sécurité des systèmes.
                </li>
                <li className="list-group-item">
                  <strong>
                    Communication avec équipes techniques et clients :
                  </strong>{" "}
                  Je suis capable de communiquer efficacement avec des équipes
                  techniques et des clients, en participant à des appels de
                  support technique, en rédigeant des rapports de problème, et
                  en collaborant avec les responsables pour résoudre les
                  incidents, pour assurer une résolution rapide et efficace des
                  problèmes.
                </li>
                <li className="list-group-item">
                  <strong>
                    Gestion et optimisation des ressources informatiques :
                  </strong>{" "}
                  Je suis capable de gérer et d'optimiser les ressources
                  informatiques, en récupérant et en réutilisant des composants
                  pour assembler de nouveaux systèmes, pour répondre aux besoins
                  variés des clients et maximiser l'utilisation des ressources
                  disponibles.
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
              <h2 className="card-title mb-0">3. Conclusion</h2>
            </div>
            <div className="card-body">
              <p className="card-text">
                Ce bilan présente les tâches qui m'ont été confiées, avec les
                dates de réalisation et leur statut. J'ai eu l'opportunité de
                déployer des serveurs, des postes de travail et des machines
                virtuelles, tout en assurant la maintenance tant au niveau
                matériel que logiciel. J'ai également eu l'occasion de
                travailler sur l'infrastructure réseau et la cybersécurité, en
                utilisant des outils tels qu'Active Directory, PfSense, OpenVPN,
                ainsi que des scripts PowerShell. Le déroulement de mes missions
                a été très satisfaisant, et j'ai pu acquérir une compréhension
                approfondie de chaque technologie que j'ai manipulée.
              </p>
              <p className="card-text">
                Un grand merci à toute l'équipe de CIMRA pour votre soutien et
                votre expertise. Mon stage était très bien organisé, j'ai
                éprouvé beaucoup de plaisir a venir chaque jour et n'hésitais
                pas à faire des heures supplémentaires volontaires. A la suite
                de ce stage, l'entreprise m'a proposée de continuer sur une
                alternance, cependant ayant déjà trouvé mon alternance pour
                2024-2025 j'ai du refusé. Mais, ils me gardent une place pour
                2025-2026. Je suis très reconnaissant pour cette opportunité et
                de l'accompagnement qui m'a été donné. Je joingnerai la lettre
                de recommandation du responsable quand je l'aurai reçue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bilan;
