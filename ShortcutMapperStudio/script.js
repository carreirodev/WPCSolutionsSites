document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initScrollReveal();
  initStoreTracking();
});

function initMobileNav() {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const navOverlay = document.getElementById("navOverlay");

  if (!navToggle || !navLinks) return;

  const closeMenu = () => {
    navLinks.classList.remove("active");
    navToggle.classList.remove("active");
    navOverlay?.classList.remove("active");
    document.body.classList.remove("menu-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Abrir menu");
  };

  const openMenu = () => {
    navLinks.classList.add("active");
    navToggle.classList.add("active");
    navOverlay?.classList.add("active");
    document.body.classList.add("menu-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Fechar menu");
  };

  navToggle.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      closeMenu();
      return;
    }

    openMenu();
  });

  navOverlay?.addEventListener("click", closeMenu);
  navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navLinks.classList.contains("active")) {
      closeMenu();
      navToggle.focus();
    }
  });

  window.matchMedia("(min-width: 781px)").addEventListener("change", (event) => {
    if (event.matches) closeMenu();
  });
}

function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  if (!revealElements.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealElements.forEach((element) => element.classList.add("active"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("active");
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.1 },
  );

  revealElements.forEach((element) => observer.observe(element));
}

function initStoreTracking() {
  document.querySelectorAll("[data-track]").forEach((link) => {
    link.addEventListener("click", () => {
      const payload = {
        event: "shortcut_remapper_store_click",
        placement: link.dataset.track,
        page: window.location.pathname,
      };

      if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push(payload);
        return;
      }

      window.dispatchEvent(new CustomEvent("wpc:store_click", { detail: payload }));
    });
  });
}
