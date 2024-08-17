function toggleTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const themeLabel = document.getElementById("theme-label");

  if (themeToggle.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    document
      .getElementById("theme-stylesheet")
      .setAttribute("href", "/src/styles/theme-dark.css");
    themeLabel.textContent = "Dark";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    document
      .getElementById("theme-stylesheet")
      .setAttribute("href", "/src/styles/theme-light.css");
    themeLabel.textContent = "Light";
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
  } else {
    themeToggle.checked = false;
    themeLabel.textContent = "Light";
  }
});

document.querySelector("#theme-toggle").addEventListener("change", toggleTheme);
