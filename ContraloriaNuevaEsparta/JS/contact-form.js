// js/contact-form.js

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("¡Gracias por contactarnos! Su mensaje ha sido enviado correctamente.");
      contactForm.reset();
    });
  }
});
