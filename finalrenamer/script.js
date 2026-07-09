/**
 * Final Renamer Website - Interactive Scripts
 */

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  initMobileNav();

  // Scroll Reveal Animations
  initScrollReveal();

  // Smooth Scroll for Anchor Links
  initSmoothScroll();

  initTracking();
});

/**
 * Mobile Navigation Toggle
 */
function initMobileNav() {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      navToggle.classList.toggle("active");
      const expanded = navLinks.classList.contains("active");
      navToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
      navToggle.setAttribute("aria-label", expanded ? "Fechar menu" : "Abrir menu");
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Abrir menu");
      });
    });
  }
}

/**
 * Scroll Reveal Animations using Intersection Observer
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealElements.forEach((element) => element.classList.add("active"));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add staggered delay for cards in the same row
        const delay = entry.target.dataset.delay || (index % 4) * 100;

        setTimeout(() => {
          entry.target.classList.add("active");
        }, delay);

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el, index) => {
    el.dataset.delay = (index % 4) * 100;
    observer.observe(el);
  });
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const navbarHeight = document.getElementById("navbar").offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.scrollY -
          navbarHeight -
          20;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

function initTracking() {
  const trackables = document.querySelectorAll("[data-track]");
  if (!trackables.length) return;

  const emit = (eventName, detail) => {
    const payload = { event: eventName, ...detail };
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push(payload);
      return;
    }
    window.dispatchEvent(new CustomEvent(eventName, { detail: payload }));
  };

  trackables.forEach((el) => {
    el.addEventListener("click", () => {
      emit("finalrenamer_click", {
        tag: el.getAttribute("data-track"),
        href: el.getAttribute("href") || null,
        page: window.location.pathname || "/finalrenamer/",
      });
    });
  });
}

/**
 * Add hover effect to feature cards (optional enhancement)
 */
document.querySelectorAll(".feature-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px) scale(1.02)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});
