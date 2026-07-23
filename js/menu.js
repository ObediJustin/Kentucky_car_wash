document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const internalLinks = Array.from(document.querySelectorAll('a[href^="#"]'));
  const sections = Array.from(document.querySelectorAll("main section[id]"));

  const headerOffset = () => (header ? header.offsetHeight + 10 : 0);

  const closeMenu = () => {
    if (!navLinks || !menuToggle) return;
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  const setHeaderState = () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 40);
  };

  const setActiveLink = (id) => {
    if (!id || !navLinks) return;
    navLinks.querySelectorAll("a").forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  };

  const scrollToSection = (hash, pushState = true) => {
    const target = document.querySelector(hash);
    if (!target) return false;
    const top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset();
    window.scrollTo({ top, behavior: "smooth" });
    if (pushState && window.location.hash !== hash) history.pushState(null, "", hash);
    setActiveLink(hash.slice(1));
    closeMenu();
    return true;
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

  internalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;
      if (document.querySelector(hash)) {
        event.preventDefault();
        scrollToSection(hash);
      }
    });
  });

  if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveLink(visible.target.id);
    }, { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.4, 0.7] });
    sections.forEach((section) => observer.observe(section));
  }

  window.addEventListener("popstate", () => {
    if (window.location.hash) scrollToSection(window.location.hash, false);
  });

  if (window.location.hash && document.querySelector(window.location.hash)) {
    window.setTimeout(() => scrollToSection(window.location.hash, false), 120);
  }
});
