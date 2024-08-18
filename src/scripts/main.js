document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeLabel = document.getElementById("theme-label");
  const themeStylesheet = document.getElementById("theme-stylesheet");

  if (!themeToggle || !themeLabel) {
    console.error("Élément manquant:", { themeToggle, themeLabel });
    return;
  }

  themeToggle.addEventListener("change", toggleTheme);
  toggleTheme(); // Charger le thème initial
});

function toggleTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const themeLabel = document.getElementById("theme-label");

  // Créez dynamiquement le lien du stylesheet
  let themeStylesheet = document.getElementById("theme-stylesheet");
  if (!themeStylesheet) {
    themeStylesheet = document.createElement("link");
    themeStylesheet.id = "theme-stylesheet";
    themeStylesheet.rel = "stylesheet";
    document.head.appendChild(themeStylesheet);
  }

  if (themeToggle.checked) {
    themeStylesheet.href = "/src/styles/theme-dark.css";
    themeLabel.textContent = "Dark";
    themeLabel.style.color = "white";
  } else {
    themeStylesheet.href = "/src/styles/theme-light.css";
    themeLabel.textContent = "Light";
    themeLabel.style.color = "#213547";
  }
}
