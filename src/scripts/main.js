function toggleTheme() {
  const themeStylesheet = document.getElementById("theme-stylesheet");
  const themeLabel = document.getElementById("theme-label");
  const themeToggle = document.getElementById("theme-toggle");

  if (!themeStylesheet || !themeLabel || !themeToggle) {
    console.error("Élément manquant:", {
      themeStylesheet,
      themeLabel,
      themeToggle,
    });
    return;
  }

  if (themeToggle.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    themeStylesheet.setAttribute("href", "/src/styles/theme-dark.css");
    themeLabel.textContent = "Dark";
    themeLabel.style.color = "white";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    themeStylesheet.setAttribute("href", "/src/styles/theme-light.css");
    themeLabel.textContent = "Light";
    themeLabel.style.color = "#213547";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");

  if (!themeToggle) {
    console.error("Le thème toggle est introuvable");
    return;
  }

  themeToggle.addEventListener("change", toggleTheme);
  toggleTheme(); // Charger le thème initial
});
