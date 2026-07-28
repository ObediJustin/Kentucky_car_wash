document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const viewLinks = Array.from(document.querySelectorAll("[data-view]"));
  const views = Array.from(document.querySelectorAll(".page-view"));

  const closeMenu = () => {
    if (!navLinks || !menuToggle) return;
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  const setHeaderState = () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 40);
  };

  const getValidView = (viewId) => {
    if (views.some((view) => view.id === viewId)) return viewId;
    return "home";
  };

  const showView = (viewId, pushState = true) => {
    const validView = getValidView(viewId);

    views.forEach((view) => {
      view.classList.toggle("active", view.id === validView);
    });

    viewLinks.forEach((link) => {
      link.classList.toggle("active", link.dataset.view === validView);
    });

    if (pushState && window.location.hash !== `#${validView}`) {
      history.pushState({ view: validView }, "", `#${validView}`);
    }

    closeMenu();
    window.scrollTo(0, 0);
  };

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  viewLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showView(link.dataset.view || "home");
    });
  });

  window.addEventListener("popstate", () => {
    const viewId = window.location.hash.replace("#", "") || "home";
    showView(viewId, false);
  });

  const initialView = window.location.hash.replace("#", "") || "home";
  showView(initialView, false);
});
