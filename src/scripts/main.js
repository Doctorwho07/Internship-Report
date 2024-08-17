import "/src/styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function loadPage(page) {
  let content;

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
      setupNavigation();
      toggleTheme();
  }
}
function toggleTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const themeLabel = document.getElementById("theme-label");

  if (themeToggle.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    document
      .getElementById("theme-stylesheet")
      .setAttribute("href", "/src/styles/theme-dark.css");
    themeLabel.textContent = "Dark";
    themeLabel.style.color = "white";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    document
      .getElementById("theme-stylesheet")
      .setAttribute("href", "/src/styles/theme-light.css");
    themeLabel.textContent = "Light";
    themeLabel.style.color = "#213547";
  }
}

// Charger le thème initial basé sur le `data-theme` ou par défaut
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeLabel = document.getElementById("theme-label");

  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    themeToggle.checked = true;
    themeLabel.textContent = "Dark";
    themeLabel.style.color = "white"; // Texte en blanc pour le thème sombre
  } else {
    themeToggle.checked = false;
    themeLabel.textContent = "Light";
    themeLabel.style.color = "#213547"; // Texte en couleur foncée pour le thème clair
  }
});

document.querySelector("#theme-toggle").addEventListener("change", toggleTheme);

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
