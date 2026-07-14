(function () {
  const STORAGE_KEY = "aperture-studio-lang";
  const PAGE_DEFAULTS = { home: "en", "legal-index": "en", privacy: "en", eula: "en" };

  function mergeDicts() {
    const merged = { en: {}, pt: {} };
    (window.ApertureI18nParts || []).forEach((part) => {
      Object.assign(merged.en, part.en || {});
      Object.assign(merged.pt, part.pt || {});
    });
    return merged;
  }

  function getPageId() {
    return document.body.dataset.i18nPage || "home";
  }

  function getDefaultLang() {
    return PAGE_DEFAULTS[getPageId()] || "en";
  }

  function getLang() {
    const urlLang = new URLSearchParams(window.location.search).get("lang");
    if (urlLang === "en" || urlLang === "pt") return urlLang;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "pt") return stored;
    return getDefaultLang();
  }

  function cacheDefaults(dict) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const defaultLang = getDefaultLang();
      if (!dict[defaultLang][key]) {
        dict[defaultLang][key] = el.dataset.i18nHtml !== undefined ? el.innerHTML : el.textContent;
      }
    });
    document.querySelectorAll("[data-i18n-content]").forEach((el) => {
      const key = el.dataset.i18nContent;
      const defaultLang = getDefaultLang();
      if (!dict[defaultLang][key]) {
        dict[defaultLang][key] = el.innerHTML;
      }
    });
    if (getPageId() === "home") {
      const defaultLang = getDefaultLang();
      if (!dict[defaultLang]["meta.title"]) {
        dict[defaultLang]["meta.title"] = document.title;
      }
      const description = document.querySelector('meta[name="description"]');
      if (description && !dict[defaultLang]["meta.description"]) {
        dict[defaultLang]["meta.description"] = description.getAttribute("content") || "";
      }
    } else {
      if (!dict.en["meta.title"]) {
        dict.en["meta.title"] = document.title;
      }
      const description = document.querySelector('meta[name="description"]');
      if (description && !dict.en["meta.description"]) {
        dict.en["meta.description"] = description.getAttribute("content") || "";
      }
    }
  }

  function applyMeta(dict, lang) {
    const title = dict[lang]["meta.title"];
    const description = dict[lang]["meta.description"];
    if (title) document.title = title;
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", description);
    }
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }

  function applyTranslations(dict, lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const value = dict[lang][key];
      if (value === undefined) return;
      const attr = el.dataset.i18nAttr;
      if (attr) {
        el.setAttribute(attr, value);
      } else if (el.dataset.i18nHtml !== undefined) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });
    document.querySelectorAll("[data-i18n-content]").forEach((el) => {
      const key = el.dataset.i18nContent;
      const value = dict[lang][key];
      if (value !== undefined) el.innerHTML = value;
    });
    applyMeta(dict, lang);
    updateSwitcher(lang);
  }

  function updateUrl(lang) {
    const url = new URL(window.location.href);
    if (lang === getDefaultLang()) {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", lang);
    }
    window.history.replaceState(null, "", url);
  }

  function setLang(lang) {
    if (lang !== "en" && lang !== "pt") return;
    localStorage.setItem(STORAGE_KEY, lang);
    updateUrl(lang);
    applyTranslations(window.ApertureI18nDict, lang);
  }

  function renderSwitcher(container) {
    const lang = getLang();
    container.innerHTML = `
      <div class="lang-switcher" role="group" aria-label="${lang === "pt" ? "Idioma" : "Language"}">
        <button type="button" class="lang-btn${lang === "en" ? " is-active" : ""}" data-lang="en" aria-label="English" title="English">
          <img src="${resolveAsset("assets/flag-us.svg")}" alt="" width="22" height="15" decoding="async" />
        </button>
        <button type="button" class="lang-btn${lang === "pt" ? " is-active" : ""}" data-lang="pt" aria-label="Português (Brasil)" title="Português (Brasil)">
          <img src="${resolveAsset("assets/flag-br.svg")}" alt="" width="22" height="15" decoding="async" />
        </button>
      </div>`;
    container.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.dataset.lang));
    });
  }

  function resolveAsset(path) {
    const base = document.body.dataset.i18nBase || "";
    return `${base}${path}`;
  }

  function updateSwitcher(lang) {
    document.querySelectorAll("[data-lang-switcher] .lang-btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === lang);
    });
    document.querySelectorAll("[data-lang-switcher] .lang-switcher").forEach((group) => {
      group.setAttribute("aria-label", lang === "pt" ? "Idioma" : "Language");
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    window.ApertureI18nDict = mergeDicts();
    cacheDefaults(window.ApertureI18nDict);
    document.querySelectorAll("[data-lang-switcher]").forEach(renderSwitcher);
    applyTranslations(window.ApertureI18nDict, getLang());
  });

  window.ApertureLang = { getLang, setLang };
})();
