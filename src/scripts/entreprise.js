export default function () {
  // Injecter le lien vers le fichier CSS spécifique pour cette page
  const linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.href = "/src/styles/entreprise.css";
  document.head.appendChild(linkElement);

  return `
          <div class="container mt-5">
            <h1>CIMRA - Votre Partenaire Informatique à Lyon</h1>
            <p>Depuis plus de 15 ans, CIMRA accompagne les PME et TPE de la région Rhône-Alpes dans leur transformation numérique. Découvrez nos solutions adaptées à vos besoins.</p>
            
            <!-- Section Vision -->
            <div class="card mt-4">
              <div class="card-body">
                <h5 class="card-title">Notre Mission</h5>
                <p class="card-text">Chez CIMRA, nous sommes dévoués à fournir des solutions informatiques sur mesure, incluant l'infogérance, la cybersécurité, la téléphonie IP, et bien plus. Notre objectif est de garantir la sérénité de votre infrastructure informatique.</p>
              </div>
            </div>
            
            <!-- Section Services -->
            <div class="card mt-4">
              <div class="card-body">
                <h5 class="card-title">Nos Services</h5>
                <ul class="list-group">
                  <li class="list-group-item">Infogérance et maintenance informatique</li>
                  <li class="list-group-item">Cybersécurité</li>
                  <li class="list-group-item">Téléphonie IP</li>
                  <li class="list-group-item">Conseil en logiciel de gestion commerciale</li>
                  <li class="list-group-item">Solutions de télétravail</li>
                  <li class="list-group-item">Vente et installation de matériel informatique</li>
                </ul>
              </div>
            </div>
            
            <!-- Section Valeurs -->
            <div class="card mt-4">
              <div class="card-body">
                <h5 class="card-title">Nos Valeurs</h5>
                <p class="card-text">Nous croyons en la proximité, la réactivité, et l'expertise technique. Nous entretenons une relation privilégiée avec chaque client, en nous engageant à fournir un service de haute qualité, personnalisé et réactif.</p>
              </div>
            </div>
            
            <!-- Section Témoignages -->
            <div class="card mt-4">
              <div class="card-body">
                <h5 class="card-title">Témoignages de Clients</h5>
                <p class="card-text"><strong>Noé Mathieu:</strong> "Une super entreprise informatique de proximité, agile et réactive !"</p>
                <p class="card-text"><strong>Hervé Fabre:</strong> "Entreprise de confiance, très réactive. Excellent dans leur domaine."</p>
                <p class="card-text"><strong>Sébastien C:</strong> "Prestation rapide et excellente. Entreprise sérieuse et très réactive."</p>
              </div>
            </div>
    
            <!-- Button -->
          </div>
        `;
}
