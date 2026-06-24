/* ============================================================
   CONTENT
   ============================================================ */
const aboutText =
  "SDET / Senior QA Engineer with 7+ years of experience in Playwright (JavaScript), " +
  "API automation, and CI/CD pipelines. Specialized in building scalable automation frameworks " +
  "and AI-driven QA solutions. When I'm not testing systems, I'm building them — KathaKar is a " +
  "full-stack Android publishing platform I designed, developed, and shipped solo to the Play Store.";

const skills = [
  "Playwright (JavaScript)",
  "API Testing",
  "Postman",
  "CI/CD Pipelines",
  "GitHub Actions",
  "SQL",
  "JIRA & QASE",
  "Agile / Scrum",
  "Kotlin",
  "Android (Jetpack Compose)",
  "Firebase",
  "Git",
];

const aboutEl = document.getElementById("about-text");
if (aboutEl) aboutEl.textContent = aboutText;

const skillsList = document.getElementById("skills-list");
if (skillsList) {
  skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });
}

/* ============================================================
   THEME
   ============================================================ */
const THEME_KEY = "pk-theme";

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const icon = document.querySelector(".nav__theme-icon");
  if (icon) icon.textContent = theme === "dark" ? "☀" : "🌙";
  try { localStorage.setItem(THEME_KEY, theme); } catch (_) {}
}

function initTheme() {
  let theme = "dark";
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "dark" || stored === "light") {
      theme = stored;
    } else if (!window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "light";
    }
  } catch (_) {
    if (!window.matchMedia("(prefers-color-scheme: dark)").matches) theme = "light";
  }
  applyTheme(theme);
}

document.getElementById("theme-btn")?.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  applyTheme(current === "dark" ? "light" : "dark");
});

initTheme();

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll(
  ".kk-feat, .qa-card, .kk-num, .qa-shot"
).forEach((el, i) => {
  el.classList.add("reveal");
  el.style.transitionDelay = `${(i % 3) * 80}ms`;
  revealObserver.observe(el);
});
