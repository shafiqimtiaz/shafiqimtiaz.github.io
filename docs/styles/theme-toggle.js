(function () {
  var STORAGE_KEY = "portfolio-theme";
  var root = document.documentElement;

  function readTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null;
    }
  }

  function writeTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      /* no-op if storage is unavailable */
    }
  }

  function normalizeTheme(theme) {
    return theme === "light" ? "light" : "dark";
  }

  function applyTheme(theme, persist) {
    var nextTheme = normalizeTheme(theme);
    root.classList.toggle("theme-light", nextTheme === "light");
    root.classList.toggle("dark", nextTheme === "dark");
    root.setAttribute("data-theme", nextTheme);

    var iconName = nextTheme === "dark" ? "light_mode" : "dark_mode";
    var labelText = nextTheme === "dark" ? "LIGHT" : "DARK";
    var ariaText = nextTheme === "dark" ? "Switch to light theme" : "Switch to dark theme";

    document.querySelectorAll("[data-theme-icon]").forEach(function (icon) {
      icon.textContent = iconName;
    });

    document.querySelectorAll("[data-theme-label]").forEach(function (label) {
      label.textContent = labelText;
    });

    document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
      button.setAttribute("aria-label", ariaText);
      button.setAttribute("title", ariaText);
    });

    if (persist) {
      writeTheme(nextTheme);
    }
  }

  function toggleTheme() {
    var currentTheme = normalizeTheme(root.getAttribute("data-theme"));
    applyTheme(currentTheme === "dark" ? "light" : "dark", true);
  }

  function mountToggle() {
    document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
      button.addEventListener("click", toggleTheme);
    });
  }

  applyTheme(readTheme(), false);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountToggle, { once: true });
  } else {
    mountToggle();
  }
})();
