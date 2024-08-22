import React from "react";
import articles from "../articlesTab.js";
import "../styles/articles.css";

const Articles = () => (
  <div className="container mt-5">
    <h1 className="mb-4">Articles</h1>
    <div className="row">
      {articles.map((article, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div className="card">
            <img
              src={`/path/to/images/${article.photo}`}
              alt={article.title}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">
                <strong>Date:</strong>{" "}
                {new Date(article.dateCreated).toLocaleDateString()}
                <br />
                <strong>Thème:</strong> {article.theme}
              </p>
              <p className="card-text">{article.description}</p>
            </div>
            <ul className="list-group list-group-flush">
              {article.content.map((item, itemIndex) => (
                <li key={itemIndex} className="list-group-item">
                  <h6>{item.subtitle}</h6>
                  <p>{item.details}</p>
                  <img
                    src={`/path/to/images/${item.photo}`}
                    alt={item.subtitle}
                    className="img-fluid"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Articles;
