const aboutText = `
SDET / Senior QA Engineer with 7+ years of experience in Playwright (JavaScript),
API automation, and CI/CD pipelines. Specialized in building scalable automation frameworks
and AI-driven QA solutions.
`;

const skills = [
  "Playwright (JavaScript)",
  "API Testing (Postman)",
  "CI/CD Pipelines",
  "Git & GitHub",
  "SQL",
  "Agile & Scrum",
  "JIRA & QASE"
];

document.getElementById("about-text").innerText = aboutText;

const skillsList = document.getElementById("skills-list");

skills.forEach(skill => {
  const li = document.createElement("li");
  li.innerText = skill;
  skillsList.appendChild(li);
});

function showContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

const THEME_KEY = "portfolio-theme";

function applyTheme(theme) {
  const root = document.documentElement;
  const isDark = theme === "dark";
  root.setAttribute("data-theme", isDark ? "dark" : "light");

  const btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.setAttribute("aria-label", isDark ? "Switch to day mode" : "Switch to night mode");
    btn.querySelector(".theme-toggle__icon").textContent = isDark ? "🌙" : "☀";
    btn.querySelector(".theme-toggle__label").textContent = isDark ? "Day" : "Night";
  }

  try {
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
  } catch (_) {
    /* ignore */
  }
}

function initTheme() {
  let theme = "light";
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "dark" || stored === "light") {
      theme = stored;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }
  } catch (_) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }
  }
  applyTheme(theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  applyTheme(current === "dark" ? "light" : "dark");
}

document.getElementById("theme-toggle")?.addEventListener("click", toggleTheme);

initTheme();
