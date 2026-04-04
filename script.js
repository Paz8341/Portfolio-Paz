// ===== MENÚ MÓVIL (HAMBURGUESA) =====

const headerEl = document.querySelector("header");// Selecciona el header completo (contenedor del menú)
const toggleBtn = document.querySelector(".nav-toggle"); // Selecciona el botón hamburguesa.
if (toggleBtn && headerEl) {// Comprueba que ambos existen antes de usarlo (evita errores)
  toggleBtn.addEventListener("click", () => {  // Al hacer click en la hamburguesa… 
    headerEl.classList.toggle("open");// Añade o quita la clase "open" al header (CSS abre/cierra menú)
  });
}

// ===== DROPDOWN DE IDIOMAS · DESKTOP =====
const desktopDropdown = document.querySelector(".nav-links .dropdown");
const desktopDropdownBtn = document.querySelector(".dropdown-btn");

// ===== DROPDOWN DE IDIOMAS · MÓVIL =====
const mobileDropdown = document.querySelector(".mobile-dropdown");
const langToggleMobile = document.querySelector(".lang-toggle");

// Móvil: 🌍 lenguajes

if (langToggleMobile && mobileDropdown) {
    langToggleMobile.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileDropdown.classList.toggle("open");
  });
}
// Cerrar dropdowns al hacer click fuera
document.addEventListener("click", () => {
  if (mobileDropdown) mobileDropdown.classList.remove("open");
  if (desktopDropdown) desktopDropdown.classList.remove("open");
});
// Desktop: Languages ▾
if (desktopDropdown && desktopDropdownBtn) {
  desktopDropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    desktopDropdown.classList.toggle("open");
  });
}

// ===== MENÚ RESPONSIVE (NAV LINKS) =====

const navToggle = document.querySelector(".nav-toggle");// Botón hamburguesa (otra vez, mismo botón)
const navLinks = document.querySelector(".nav-links");// Contenedor de los enlaces de navegación

if (navToggle && navLinks) {// Si existen ambos elementos
    navToggle.addEventListener("click", () => {// Click en la hamburguesa
    navLinks.classList.toggle("open");// Abre o cierra solo los links del menú
  });
}
// ===== NAVEGACIÓN SEGÚN IDIOMA =====

const navProjects = document.getElementById("nav-projects"); // Enlace del menú "Projects"
const navCV = document.getElementById("nav-cv"); // Enlace del menú "CV"

if (navProjects) {// Projects
    navProjects.addEventListener("click", (e) => {
    e.preventDefault();// Evita que el enlace navegue por defecto
const currentLang = localStorage.getItem("lang") || "en";// Lee el idioma guardado o usa inglés por defecto
    window.location.href =
    currentLang === "es" ? "./projects-es.html" : "./projects-en.html";
  });// Redirige a la página correcta según idioma
}


if (navCV) {// CV
  navCV.addEventListener("click", (e) => {
    e.preventDefault();// Evita navegación por defecto
    const currentLang = localStorage.getItem("lang") || "en";// Lee idioma actual
    window.location.href =
      currentLang === "es" ? "./cv-es.html" : "./cv-en.html";
  });// Redirige a la versión correcta del CV
}

// ===== CAMBIO DE IDIOMA =====

function cambiarIdioma(idioma) {// Función que se ejecuta al elegir idioma
  localStorage.setItem("lang", idioma);// Guarda el idioma en el navegador

  const path = window.location.pathname;// Detecta la ruta actual (qué página estamos viendo)
  
  // ===== CAMBIAR TEXTO DEL HEADER =====

  const navProjects = document.getElementById("nav-projects");// Enlace "Projects"
  const navLanguage = document.getElementById("nav-language");// Botón "Languages"

  if (idioma === "es") {// Si el idioma es español
    if (navProjects) navProjects.textContent = "Proyectos";
    if (navLanguage) navLanguage.textContent = "Idiomas ▾";
  } 
  else {// Si es inglés
    if (navProjects) navProjects.textContent = "Projects";
    if (navLanguage) navLanguage.textContent = "Languages ▾";
  }
// ===== REDIRECCIÓN SEGÚN PÁGINA =====

  if (path.includes("projects")) {// Si estamos en Projects
    window.location.href =
      idioma === "es" ? "./projects-es.html" : "./projects-en.html";
  } else if (path.includes("cv")) {// Si estamos en CV
    window.location.href =
      idioma === "es" ? "./cv-es.html" : "./cv-en.html";
  } else {// Si estamos en index u otra página
    window.location.href = "./index.html";// index u otras páginas
  }
}
// ===== SINCRONIZAR IDIOMA AL CARGAR (GitHub fix) =====

(function syncLanguageOnLoad() {// Función autoejecutable (se ejecuta al cargar la página)
  const savedLang = localStorage.getItem("lang");// Lee idioma guardado
  if (!savedLang) return;// Si no hay idioma guardado, no hace nada

  // ===== APLICAR TEXTO DEL HEADER AL CARGAR =====

  const navProjects = document.getElementById("nav-projects");
  const navLanguage = document.getElementById("nav-language");
   // Ajusta textos del menú según idioma guardado
  if (savedLang === "es") {
    if (navProjects) navProjects.textContent = "Proyectos";
    if (navLanguage) navLanguage.textContent = "Idiomas ▾";
  } else {
    if (navProjects) navProjects.textContent = "Projects";
    if (navLanguage) navLanguage.textContent = "Languages ▾";
  }

  const path = window.location.pathname;// Ruta actual

// ===== CORREGIR PÁGINAS PROJECTS =====

  if (path.includes("projects")) {
    if (savedLang === "es" && path.includes("projects-en")) {
      window.location.replace("./projects-es.html");
    }
    if (savedLang === "en" && path.includes("projects-es")) {
      window.location.replace("./projects-en.html");
    }
  }
// ===== CORREGIR PÁGINAS CV =====
  if (path.includes("cv")) {
    if (savedLang === "es" && path.includes("cv-en")) {
      window.location.replace("./cv-es.html");
    }
    if (savedLang === "en" && path.includes("cv-es")) {
      window.location.replace("./cv-en.html");
    }
  }
})();
