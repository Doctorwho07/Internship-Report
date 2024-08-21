import "/src/styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import renderNavbar from "/src/scripts/navbar.js";

function loadPage(page) {
  let content;
  document.getElementById("navbar").innerHTML = renderNavbar();

  switch (page) {
    case "about":
      import("/src/scripts/about.js").then((module) => {
        content = module.default();
        document.querySelector("#app").innerHTML = content;
        setupNavigation();
      });
      break;

    case "entreprise":
      import("/src/scripts/entreprise.js").then((module) => {
        content = module.default();
        document.querySelector("#app").innerHTML = content;
        setupNavigation();
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
    case "home":
      import("/src/scripts/accueil.js").then((module) => {
        content = module.default();
        document.querySelector("#app").innerHTML = content;
        setupNavigation();
      });
      break;

    default:
      document.querySelector("#app").innerHTML = `
          <div class="container mt-5">
            <h1>Erreur 404</h1>
            <p>La page que vous recherchez n'existe pas. <a href="#" id="homeLink">Retour à l'accueil</a></p>
          </div>
        `;
      setupNavigation();
  }
}

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
    loadPage("home");
  });
  window.addEventListener("load", () => {
    const currentPath = window.location.pathname;
    if (currentPath === "/" || currentPath === "/homeLink") {
      loadPage("home");
    }
  });
}
loadPage();
