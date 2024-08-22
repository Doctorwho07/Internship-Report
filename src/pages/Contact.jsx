import React from "react";
import "../styles/contact.css";

const Contact = () => (
  <div className="container mt-5">
    <h1>Contactez-moi</h1>
    <p>
      Vous avez des questions ou vous souhaitez me contacter directement ? Voici
      comment vous pouvez me joindre :
    </p>
    <div className="mb-4">
      <h3>Contact Direct</h3>
      <p>
        <strong>Email :</strong>{" "}
        <a href="mailto:alexis.rouches@icloud.com">alexis.rouches@icloud.com</a>
      </p>
      <p>
        <strong>Téléphone :</strong> <a href="tel:0778221121">0778221121</a>
      </p>
    </div>
    <div className="alert alert-info" role="alert">
      Le formulaire de contact n'est pas encore opérationnel. Veuillez utiliser
      les informations ci-dessus pour me contacter.
    </div>
  </div>
);

export default Contact;
