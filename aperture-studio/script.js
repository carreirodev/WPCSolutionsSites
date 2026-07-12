document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initNavbarScroll();
  initSmoothNavigation();
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

function initSmoothNavigation() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;

    const targetId = link.getAttribute("href");
    const isPageTop = targetId === "#";
    const target = isPageTop ? document.documentElement : document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();

    const navbar = document.getElementById("navbar");
    const destination = isPageTop
      ? 0
      : Math.max(
          0,
          target.getBoundingClientRect().top + window.scrollY - (navbar?.offsetHeight || 60) - 20,
        );

    animateScrollTo(destination, 1100, () => {
      window.history.pushState(null, "", targetId);
    });
  });
}

let activeScrollFrame = null;

function animateScrollTo(destination, duration, onComplete) {
  if (activeScrollFrame) cancelAnimationFrame(activeScrollFrame);

  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;
  const start = window.scrollY;
  const distance = destination - start;
  const startedAt = performance.now();

  root.style.scrollBehavior = "auto";

  const step = (now) => {
    const progress = Math.min((now - startedAt) / duration, 1);
    const eased =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, start + distance * eased);

    if (progress < 1) {
      activeScrollFrame = requestAnimationFrame(step);
      return;
    }

    activeScrollFrame = null;
    root.style.scrollBehavior = previousScrollBehavior;
    onComplete?.();
  };

  activeScrollFrame = requestAnimationFrame(step);
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
