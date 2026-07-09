document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initNavbarScroll();
  initScrollReveal();
});

function initMobileNav() {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const navOverlay = document.getElementById("navOverlay");

  if (!navToggle || !navLinks) return;

  const setExpanded = (expanded) => {
    navToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    navToggle.setAttribute("aria-label", expanded ? "Fechar menu" : "Abrir menu");
  };

  const closeMenu = () => {
    navLinks.classList.remove("active");
    navToggle.classList.remove("active");
    if (navOverlay) navOverlay.classList.remove("active");
    setExpanded(false);
  };

  const openMenu = () => {
    navLinks.classList.add("active");
    navToggle.classList.add("active");
    if (navOverlay) navOverlay.classList.add("active");
    setExpanded(true);
  };

  navToggle.addEventListener("click", () => {
    navLinks.classList.contains("active") ? closeMenu() : openMenu();
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  if (navOverlay) navOverlay.addEventListener("click", closeMenu);
}

function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const update = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 24);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("active"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach((el) => observer.observe(el));
}
