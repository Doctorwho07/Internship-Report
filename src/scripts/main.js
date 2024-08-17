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
        setupNavigation(); // Réinitialise la navigation après le chargement
      });
      break;

    case "entreprise":
      import("/src/scripts/entreprise.js").then((module) => {
        content = module.default();
        document.querySelector("#app").innerHTML = content;
        setupNavigation(); // Réinitialise la navigation après le chargement
      });
      break;

    case "articles":
      import("/src/scripts/articles.js").then((module) => {
        content = module.default();
        document.querySelector("#app").innerHTML = content;
        setupNavigation();
      });
      break;

    case "contact":
      import("/src/scripts/contact.js").then((module) => {
        content = module.default();
        document.querySelector("#app").innerHTML = content;
        setupNavigation();
      });
      break;

    case "bilan":
      import("/src/scripts/bilan.js").then((module) => {
        content = module.default();
        document.querySelector("#app").innerHTML = content;
        setupNavigation();
      });
      break;

    case "sitemap":
      import("/src/scripts/sitemap.js").then((module) => {
        content = module.default();
        document.querySelector("#app").innerHTML = content;
        setupNavigation();
      });
      break;

    case "mentions":
      import("/src/scripts/mentions.js").then((module) => {
        content = module.default();
        document.querySelector("#app").innerHTML = content;
        setupNavigation();
      });
      break;

    case "remerciements":
      import("/src/scripts/remerciements.js").then((module) => {
        content = module.default();
        document.querySelector("#app").innerHTML = content;
        setupNavigation();
      });
      break;

    default:
      document.querySelector("#app").innerHTML = `
        <div class="container mt-5">
          <h1>Welcome to my internship report</h1>
          <p>Discover my journey and experiences working at Cimra!</p>
          <div class="d-grid gap-2 d-md-block">
            <button type="button" id="aboutLink" class="btn btn-primary">À propos</button>
            <button type="button" id="entrepriseLink" class="btn btn-secondary">Entreprise</button>
            <button type="button" id="articlesLink" class="btn btn-info">Articles</button>
            <button type="button" id="contactLink" class="btn btn-warning">Contact</button>
            <button type="button" id="bilanLink" class="btn btn-dark">Bilan</button>
            <button type="button" id="sitemapLink" class="btn btn-light">Sitemap</button>
            <button type="button" id="mentionsLink" class="btn btn-primary">Mentions</button>
            <button type="button" id="remerciementsLink" class="btn btn-success">Remerciements</button>
          </div>
        </div>
      `;
      setupNavigation(); // Réinitialise la navigation sur la page d'accueil
  }
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

  document.querySelector("#articlesLink")?.addEventListener("click", (e) => {
    e.preventDefault();
    loadPage("articles");
  });

  document.querySelector("#contactLink")?.addEventListener("click", (e) => {
    e.preventDefault();
    loadPage("contact");
  });

  document.querySelector("#bilanLink")?.addEventListener("click", (e) => {
    e.preventDefault();
    loadPage("bilan");
  });

  document.querySelector("#sitemapLink")?.addEventListener("click", (e) => {
    e.preventDefault();
    loadPage("sitemap");
  });

  document.querySelector("#mentionsLink")?.addEventListener("click", (e) => {
    e.preventDefault();
    loadPage("mentions");
  });

  document
    .querySelector("#remerciementsLink")
    ?.addEventListener("click", (e) => {
      e.preventDefault();
      loadPage("remerciements");
    });

  document.querySelector("#homeLink")?.addEventListener("click", (e) => {
    e.preventDefault();
    loadPage();
  });
}

// Charger la page d'accueil par défaut
loadPage();

// Appeler `setupNavigation` au chargement initial
setupNavigation();
