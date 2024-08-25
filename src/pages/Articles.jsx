import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import projects from "../Projects.js";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Articles = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="container mt-5" id="articles">
      <h1 className="mb-4">Mes Articles</h1>
      <p className="lead">
        Découvrez mes projets et réalisations récents par thématique.
      </p>
      <div className="carousel-wrapper mb-5">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          emulateTouch={true}
          useKeyboardArrows={true}
          dynamicHeight={true}
          centerMode={!isMobile}
          centerSlidePercentage={isMobile ? 100 : 40}
          showIndicators={true}
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            const indicatorStyle = isSelected
              ? { backgroundColor: "#507075" }
              : { backgroundColor: "#ccc" };
            return (
              <li
                style={{
                  ...indicatorStyle,
                  display: "inline-block",
                  width: 15,
                  height: 15,
                  borderRadius: "50%",
                  margin: "0 8px",
                  cursor: "pointer",
                }}
                aria-label={`${label} ${index + 1}`}
                onClick={onClickHandler}
                key={index}
              />
            );
          }}
          renderItem={(item, options) => {
            const isSelected = options.isSelected;
            const cardStyle = isSelected
              ? {
                  transform: "scale(1.05)",
                  border: "2px solid #507075",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                }
              : {
                  transform: "scale(1)",
                  border: "1px solid #ddd",
                };
            return (
              <div
                key={options.key}
                className="d-flex justify-content-center"
                style={{
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                <div
                  className="card shadow-sm"
                  style={{
                    ...cardStyle,
                    width: isMobile ? "90%" : "24rem",
                    margin: "20px",
                    height: isMobile ? "300px" : "35rem",
                    borderRadius: "15px",
                    overflow: "hidden",
                  }}
                >
                  {item}
                </div>
              </div>
            );
          }}
        >
          {projects.map((project, index) => (
            <div key={index}>
              <div
                style={{
                  height: isMobile ? "200px" : "25rem",
                  overflow: "hidden",
                }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.theme}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "brightness(90%)",
                      transition: "filter 0.3s ease",
                    }}
                  />
                ) : (
                  <div
                    className="card-img-top"
                    style={{
                      height: "100%",
                      backgroundColor: "#e9ecef",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span className="text-muted">Image non disponible</span>
                  </div>
                )}
              </div>
              <div className="card-body text-center">
                <h5 className="card-title" style={{ fontWeight: "bold" }}>
                  {project.theme}
                </h5>
                {project.description && (
                  <p className="card-text text-muted">{project.description}</p>
                )}
                <Link to={`/projects/${project.id}`} className="btn mt-3">
                  Découvrir
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default React.memo(Articles);
