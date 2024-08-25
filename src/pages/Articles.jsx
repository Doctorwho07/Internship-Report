import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import projects from "../Projects.js";

const Articles = () => {
  return (
    <div>
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.theme}</h3>
            {project.image && <img src={project.image} alt={project.title} />}
          </div>
        ))}
      </Carousel>

      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <h2>{project.title}</h2>
            <ul>
              {project.posts.map((post, postIndex) => (
                <li key={postIndex}>
                  <strong>{post.projet}</strong>
                  <br />
                  <span>Date: {post.date}</span>
                  <br />
                  <span>Statut: {post.statut}</span>
                  <br />
                  <span>Logiciels: {post.logiciels}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
