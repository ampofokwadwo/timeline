const clock = document.getElementById("clock");
const toggleBtn = document.getElementById("toggleTheme");
const body = document.body;

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

function updateThemeButton() {
  const isDarkMode = body.classList.contains("dark-mode");
  toggleBtn.textContent = isDarkMode ? "☀️ Toggle Theme" : "🌙 Toggle Theme";
  toggleBtn.setAttribute("aria-pressed", String(isDarkMode));
}

function toggleTheme() {
  body.classList.toggle("dark-mode");
  updateThemeButton();
}

setInterval(updateClock, 1000);
updateClock();
updateThemeButton();

toggleBtn.addEventListener("click", toggleTheme);

document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "t") {
    toggleTheme();
  }
});
