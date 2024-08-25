import React, { useState } from "react";
import projects from "../Bilan.js";

const Bilan = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const getSortedProjects = () => {
    let sortedProjects = [...projects];
    if (sortConfig.key !== null) {
      sortedProjects.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortedProjects;
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedProjects = getSortedProjects();

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
                      <th scope="col" onClick={() => handleSort("theme")}>
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
                      <th scope="col" onClick={() => handleSort("statut")}>
                        Statut{" "}
                        {sortConfig.key === "statut"
                          ? sortConfig.direction === "asc"
                            ? "▲"
                            : "▼"
                          : ""}
                      </th>
                      <th scope="col" onClick={() => handleSort("date")}>
                        Date{" "}
                        {sortConfig.key === "date"
                          ? sortConfig.direction === "asc"
                            ? "▲"
                            : "▼"
                          : ""}
                      </th>
                      <th scope="col" onClick={() => handleSort("logiciels")}>
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
                    {sortedProjects.map((project, index) => (
                      <tr key={index}>
                        <td>{project.theme}</td>
                        <td>{project.projet}</td>
                        <td>{project.statut}</td>
                        <td>{project.date}</td>
                        <td>{project.logiciels}</td>
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
                approfondie de chaque technologie que j'ai manipulée. Un grand
                merci à toute l'équipe de CIMRA pour votre soutien et votre
                expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bilan;
