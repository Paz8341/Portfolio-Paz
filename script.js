// ===== MENÚ MÓVIL (HAMBURGUESA) =====
const headerEl = document.querySelector("header");
const toggleBtn = document.querySelector(".nav-toggle");

if (toggleBtn && headerEl) {
  toggleBtn.addEventListener("click", () => {
    headerEl.classList.toggle("open");
  });
}

// ===== DROPDOWN DE IDIOMAS =====
const dropdown = document.querySelector(".dropdown");
const dropdownBtn = document.querySelector(".dropdown-btn");

if (dropdown && dropdownBtn) {
  dropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("open");
  });

  document.addEventListener("click", () => {
    dropdown.classList.remove("open");
  });
}

// ===== MENÚ RESPONSIVE (NAV LINKS) =====
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}
