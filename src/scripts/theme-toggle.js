document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeLabel = document.getElementById("theme-label");

  if (!themeToggle || !themeLabel) {
    console.error("Élément manquant:", { themeToggle, themeLabel });
    return;
  }

  themeToggle.addEventListener("change", toggleTheme);
  toggleTheme();
});

function toggleTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const themeLabel = document.getElementById("theme-label");
  removeExistingThemeStyles();

  if (themeToggle.checked) {
    applyDarkTheme();
    themeLabel.textContent = "Sombre";
    themeLabel.style.color = "white";
  } else {
    applyLightTheme();
    themeLabel.textContent = "Clair";
    themeLabel.style.color = "#213547";
  }
}

function applyDarkTheme() {
  const style = document.createElement("style");
  style.id = "theme-style";
  style.innerHTML = `
    body {
      background-color: #121212;
      color: white;
    }
    .slider {
      background-color: #444;
    }
    a {
      color: #ffffff !important;
    }
    a:hover {
      color: #cfcfcf !important;
    }
    button {
      background-color: #1a1a1a !important;
      color: #ffffff !important;
    }
    h1, h2, h3, h4, h5, p {
      color: #ffffff !important;
    }
  `;
  document.head.appendChild(style);
}

function applyLightTheme() {
  const style = document.createElement("style");
  style.id = "theme-style";
  style.innerHTML = `
    body {
      background-color: white;
      color: #213547;
    }
    .slider {
      background-color: #ccc;
    }
    a {
      color: #213547 !important;
    }
    a:hover {
      color: #333333 !important;
    }
    h1, h2, h3, h4, h5, p {
      color: #213547 !important;
    }
  `;
  document.head.appendChild(style);
}

function removeExistingThemeStyles() {
  const existingStyle = document.getElementById("theme-style");
  if (existingStyle) {
    existingStyle.remove();
  }
}
