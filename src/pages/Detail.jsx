import React from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import projects from "../Projects";

const Detail = () => {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return <h2>Projets non trouvés</h2>;
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">{project.theme}</h1>

      <div className="row mb-5">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h2 className="card-title mb-0">Détails des Projets</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {project.posts.map((post, index) => (
                  <li key={index} className="list-group-item">
                    <h4>{post.projet}</h4>
                    <p>
                      <strong>Date :</strong> {post.date}
                    </p>
                    <p>
                      <strong>Statut :</strong> {post.statut}
                    </p>
                    <p>
                      <strong>Logiciels :</strong> {post.logiciels}
                    </p>
                    <p>
                      <strong>Problèmes :</strong> {post.problemes}
                    </p>
                    <p>
                      <strong>Solutions :</strong> {post.solutions}
                    </p>
                    <p>
                      <strong>Connaissances :</strong> {post.connaissances}
                    </p>
                    <img
                      src={post.image}
                      alt="image"
                      style={{
                        width: "55vw",
                        height: "auto",
                        maxWidth: "100%",
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
