document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initSmoothNavigation();
  initScrollReveal();
  initTracking();
});

function initNavigation() {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navbar) {
    const hero = document.getElementById("hero");
    if (hero && "IntersectionObserver" in window) {
      const navbarObserver = new IntersectionObserver(
        ([entry]) => navbar.classList.toggle("scrolled", entry.intersectionRatio < 0.92),
        { threshold: [0.92] },
      );
      navbarObserver.observe(hero);
    }
  }

  if (!navToggle || !navLinks) return;

  const setMenuState = (open) => {
    navLinks.classList.toggle("active", open);
    navToggle.classList.toggle("active", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  };

  navToggle.addEventListener("click", () => {
    setMenuState(!navLinks.classList.contains("active"));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuState(false);
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

    const navbar = document.getElementById("navbar");
    const offset = targetId === "#hero" ? 0 : (navbar?.offsetHeight || 68) + 18;
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
  const elements = document.querySelectorAll(".reveal");

  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    elements.forEach((element) => element.classList.add("active"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );

  elements.forEach((element) => observer.observe(element));
}

function initTracking() {
  document.querySelectorAll("[data-track]").forEach((element) => {
    element.addEventListener("click", () => {
      const payload = {
        event: "finalrenamer_click",
        tag: element.getAttribute("data-track"),
        href: element.getAttribute("href") || null,
        page: window.location.pathname || "/finalrenamer/",
      };

      if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push(payload);
      } else {
        window.dispatchEvent(
          new CustomEvent("finalrenamer_click", { detail: payload }),
        );
      }
    });
  });
}
