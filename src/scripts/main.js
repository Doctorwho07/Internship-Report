import "/src/styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// Fonction pour charger dynamiquement le contenu
function loadPage(page) {
  let content;

  switch (page) {
    case "about":
      import("/src/scripts/about.js").then((module) => {
        content = module.default();
        document.querySelector("#app").innerHTML = content;
      });
      break;
      // case "entreprise":
      //   import("/src/scripts/entreprise.js").then((module) => {
      //     content = module.default();
      //     document.querySelector("#app").innerHTML = content;
      //   });
      break;
    // Ajouter d'autres cas pour les autres pages
    default:
      document.querySelector("#app").innerHTML = `
        <div>
          <h1>Welcome to my internship report</h1>
          <p>Discover my journey and experiences working at Cimra!</p>
          <a href="about" id="aboutLink">À propos</a>
          <a href="#" id="entrepriseLink">Entreprise</a>
          <button type="button" class="btn btn-primary">Primary Button</button>
        </div>
      `;
  }

  setupNavigation();
}

// Configurer la navigation pour intercepter les clics
function setupNavigation() {
  document.querySelector("#aboutLink")?.addEventListener("click", (e) => {
    e.preventDefault();
    loadPage("about");
  });

  document.querySelector("#entrepriseLink")?.addEventListener("click", (e) => {
    e.preventDefault();
    loadPage("entreprise");
  });
}

// Charger la page d'accueil par défaut
loadPage();

// Appeler `setupNavigation` au chargement initial
setupNavigation();
