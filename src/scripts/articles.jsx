import React from "react";
import articles from "./articlesTab.js"; // Assurez-vous que ce chemin est correct

const Articles = () => {
  return (
    <div className="container mt-5">
      <h1>Articles</h1>
      <p>Explorez nos derniers articles et mises à jour.</p>
      <div className="row">
        {articles.map((article, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4">
              <img
                src={article.photo}
                className="card-img-top"
                alt={article.title}
              />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a href="#" className="btn btn-primary">
                  Lire plus
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
