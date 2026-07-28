document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const installButton = document.querySelector("[data-install-app]");
  let deferredInstallPrompt = null;

  const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem("kentucky-theme");
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    localStorage.setItem("kentucky-theme", theme);

    if (!themeToggle) return;
    const isDark = theme === "dark";
    const label = isDark ? "Activer le thème clair" : "Activer le thème sombre";
    themeToggle.setAttribute("aria-label", label);
    themeToggle.setAttribute("title", label);
    themeToggle.innerHTML = `<i data-lucide="${isDark ? "sun" : "moon"}" class="theme-toggle__icon"></i>`;
    if (window.lucide) window.lucide.createIcons();
  };

  applyTheme(getPreferredTheme());

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
    });
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    if (installButton) installButton.hidden = false;
  });

  if (installButton) {
    installButton.addEventListener("click", async () => {
      if (!deferredInstallPrompt) return;
      deferredInstallPrompt.prompt();
      const choiceResult = await deferredInstallPrompt.userChoice;
      if (choiceResult.outcome === "accepted") installButton.hidden = true;
      deferredInstallPrompt = null;
    });
  }

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    if (installButton) installButton.hidden = true;
  });

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
      try {
        const registration = await navigator.serviceWorker.register("./service-worker.js");
        console.info("Service Worker enregistré :", registration.scope);
      } catch (error) {
        console.error("Échec de l'enregistrement du Service Worker :", error);
      }
    });
  }

  if (window.lucide) window.lucide.createIcons();

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
});
