// js/scroll.js

// Función para desplazarse suavemente a secciones
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 80,
      behavior: "smooth",
    });
  }
}

// Animación al hacer scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(
    ".animate-fadeInUp, .animate-fadeInDown, .animate-fadeIn, .animate-scaleIn"
  );

  elements.forEach((element) => {
    const position = element.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
      element.style.opacity = 1;
      element.style.visibility = "visible";
      element.style.transform = "translateY(0)";
    }
  });
}

// Inicializar animaciones
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(
    ".animate-fadeInUp, .animate-fadeInDown, .animate-fadeIn, .animate-scaleIn"
  ).forEach((el) => {
    el.style.opacity = 0;
    el.style.visibility = "hidden";
    if (el.classList.contains("animate-fadeInUp")) {
      el.style.transform = "translateY(30px)";
    }
    if (el.classList.contains("animate-fadeInDown")) {
      el.style.transform = "translateY(-30px)";
    }
    if (el.classList.contains("animate-scaleIn")) {
      el.style.transform = "scale(0.8)";
    }
    el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  });

  animateOnScroll();
});

window.addEventListener("scroll", animateOnScroll);
