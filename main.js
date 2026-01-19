document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initScrollReveal();
  initContactFormTracking();
});

function initMobileNav() {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (!navToggle || !navLinks) return;

  const setExpanded = (expanded) => {
    navToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    navToggle.setAttribute("aria-label", expanded ? "Fechar menu" : "Abrir menu");
  };

  const closeMenu = () => {
    navLinks.classList.remove("active");
    navToggle.classList.remove("active");
    setExpanded(false);
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    navToggle.classList.toggle("active", isOpen);
    setExpanded(isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeMenu());
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (e) => {
    if (!navLinks.classList.contains("active")) return;
    if (navLinks.contains(e.target) || navToggle.contains(e.target)) return;
    closeMenu();
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
