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
