document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initSmoothNavigation();
  initScrollReveal();
  initContactFormTracking();
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
    document.body.classList.remove("menu-open");
    setExpanded(false);
  };

  const openMenu = () => {
    navLinks.classList.add("active");
    navToggle.classList.add("active");
    if (navOverlay) navOverlay.classList.add("active");
    document.body.classList.add("menu-open");
    setExpanded(true);
  };

  navToggle.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (navOverlay) {
    navOverlay.addEventListener("click", () => closeMenu());
  }

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeMenu());
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("active")) {
      closeMenu();
      navToggle.focus();
    }
  });

  window.matchMedia("(min-width: 781px)").addEventListener("change", (event) => {
    if (event.matches) {
      closeMenu();
    }
  });
}

function initSmoothNavigation() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;

    const targetId = link.getAttribute("href");
    const target = targetId ? document.querySelector(targetId) : null;
    if (!target) return;

    event.preventDefault();

    const header = document.querySelector(".site-header");
    const offset = targetId === "#top" ? 0 : (header?.offsetHeight || 76) + 24;
    const destination = Math.max(
      0,
      target.getBoundingClientRect().top + window.scrollY - offset,
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
  const revealElements = document.querySelectorAll(".reveal");
  if (!revealElements.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealElements.forEach((element) => element.classList.add("active"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("active");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.1 }
  );

  revealElements.forEach((el) => observer.observe(el));
}

function initContactFormTracking() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", () => {
    const payload = {
      event: "wpc_contact_submit",
      formId: "contactForm",
      page: window.location.pathname || "/",
    };

    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push(payload);
      return;
    }

    window.dispatchEvent(new CustomEvent("wpc:contact_submit", { detail: payload }));
  });
}
