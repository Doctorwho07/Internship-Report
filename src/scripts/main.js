document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeLabel = document.getElementById("theme-label");

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

  if (themeToggle.checked) {
    applyDarkTheme();
    themeLabel.textContent = "Dark";
    themeLabel.style.color = "white";
  } else {
    applyLightTheme();
    themeLabel.textContent = "Light";
    themeLabel.style.color = "#213547";
  }
}

function applyDarkTheme() {
  const style = document.createElement("style");
  style.innerHTML = `
    body {
      background-color: #121212;
      color: white;
    }
    .theme-switch-wrapper {
      background-color: #333;
    }
    .slider {
      background-color: #444;
    }
  `;
  document.head.appendChild(style);
}

function applyLightTheme() {
  const style = document.createElement("style");
  style.innerHTML = `
    body {
      background-color: white;
      color: #213547;
    }
    .theme-switch-wrapper {
      background-color: #f5f5f5;
    }
    .slider {
      background-color: #ccc;
    }
  `;
  document.head.appendChild(style);
}
