document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initNavbarScroll();
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
    setExpanded(false);
  };

  const openMenu = () => {
    navLinks.classList.add("active");
    navToggle.classList.add("active");
    if (navOverlay) navOverlay.classList.add("active");
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
    if (e.key === "Escape") closeMenu();
  });
}

function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  if (!revealElements.length) return;

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
