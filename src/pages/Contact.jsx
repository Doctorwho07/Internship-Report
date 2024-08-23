import React from "react";

const Contact = () => (
  <div className="container mt-5" id="contact">
    <h1 className="mb-4">Contactez-moi</h1>

    <div className="row mb-5">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title mb-0">Comment me joindre</h2>
          </div>
          <div className="card-body">
            <p className="card-text">
              Vous avez des questions ou vous souhaitez me contacter directement
              ? Voici comment vous pouvez me joindre :
            </p>

            <div className="mb-4">
              <p>
                <strong>Email :</strong>{" "}
                <a href="mailto:alexis.rouches@icloud.com">
                  alexis.rouches@icloud.com
                </a>
              </p>
              <p>
                <strong>Téléphone :</strong>{" "}
                <a href="tel:0778221121">0778221121</a>
              </p>
            </div>

            <div className="alert alert-info" role="alert">
              Le formulaire de contact n'est pas encore opérationnel. Veuillez
              utiliser les informations ci-dessus pour me contacter.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
