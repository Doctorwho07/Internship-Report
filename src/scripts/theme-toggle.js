function toggleTheme() {
  const theme = document.documentElement.getAttribute("data-theme");
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    document
      .getElementById("theme-stylesheet")
      .setAttribute("href", "/src/styles/theme-light.css");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    document
      .getElementById("theme-stylesheet")
      .setAttribute("href", "/src/styles/theme-dark.css");
  }
}

document
  .querySelector("#theme-toggle-btn")
  .addEventListener("click", toggleTheme);
