const imagesSrc = [
  {src: 'IMG/carrusel/1721399409669.jpg', alt: 'Imagen 1', desc: 'Vista panorámica del lugar'},
  {src: 'IMG/carrusel/1727101293107.jpg', alt: 'Imagen 2', desc: 'Detalle arquitectónico en primer plano'},
  {src: 'IMG/carrusel/1727101540455.jpg', alt: 'Imagen 3', desc: 'Perspectiva lateral de la estructura'},
  {src: 'IMG/carrusel/1727101292917.jpg', alt: 'Imagen 4', desc: 'Registro frontal del entorno'},
  {src: 'IMG/carrusel/1726085414899.jpg', alt: 'Imagen 5', desc: 'Vista central destacada'},
  {src: 'IMG/carrusel/1721064132310.jpg', alt: 'Imagen 6', desc: 'Detalle en segundo plano'},
  {src: 'IMG/carrusel/1721067358126.jpg', alt: 'Imagen 7', desc: 'Captura general desde otro ángulo'},
  {src: 'IMG/carrusel/20250425_115834.jpg', alt: 'Imagen 8', desc: 'Perspectiva panorámica del área'},
  {src: 'IMG/carrusel/IMG_20241023_122541.jpg', alt: 'Imagen 9', desc: 'Vista arquitectónica de referencia'},
  {src: 'IMG/carrusel/c1.jpg', alt: 'Imagen 10', desc: 'Detalle específico de la construcción'},
  {src: 'IMG/carrusel/c2.jpg', alt: 'Imagen 11', desc: 'Registro de un elemento estructural'},
  {src: 'IMG/carrusel/IMG_20240403_114402.jpg', alt: 'Imagen 12', desc: 'Vista general del espacio abierto'},
  {src: 'IMG/carrusel/1730127154619.jpg', alt: 'Imagen 13', desc: 'Captura panorámica en perspectiva'},
  {src: 'IMG/carrusel/20250425_115249.jpg', alt: 'Imagen 14', desc: 'Detalle frontal de la fachada'},
  {src: 'IMG/carrusel/20250425_091319 - copia.jpg', alt: 'Imagen 15', desc: 'Revisión en ángulo diferente'},
  {src: 'IMG/carrusel/20250425_113356.jpg', alt: 'Imagen 16', desc: 'Detalle arquitectónico lateral'},
  {src: 'IMG/carrusel/20250425_112641.jpg', alt: 'Imagen 17', desc: 'Vista central de la estructura'},
  {src: 'IMG/carrusel/20250425_102040.jpg', alt: 'Imagen 18', desc: 'Captura panorámica del entorno cercano'},
  {src: 'IMG/carrusel/20250425_115740.jpg', alt: 'Imagen 19', desc: 'Detalle final de la construcción'}
];

const carouselContent = document.getElementById("carouselContent");

// --- VELOCIDAD DE ANIMACIÓN (en segundos) ---
carouselContent.style.animationDuration = '15s'; // <── más rápido (antes 30s o 40s)

// Insertar imágenes en el carrusel y duplicarlas para efecto infinito
for (let i = 0; i < 2; i++) {
  imagesSrc.forEach(imgData => {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const caption = document.createElement("figcaption");

    img.src = imgData.src;
    img.alt = imgData.alt;
    caption.textContent = imgData.desc;

    figure.appendChild(img);
    figure.appendChild(caption);
    carouselContent.appendChild(figure);
  });
}

// --- Drag / Touch ---
let isDown = false;
let startX;
let scrollLeft;

carouselContent.addEventListener("mousedown", e => {
  isDown = true;
  carouselContent.style.animationPlayState = "paused";
  startX = e.pageX - carouselContent.offsetLeft;
  scrollLeft = carouselContent.scrollLeft;
});
carouselContent.addEventListener("mouseleave", () => { isDown = false; });
carouselContent.addEventListener("mouseup", () => {
  isDown = false;
  carouselContent.style.animationPlayState = "running";
});
carouselContent.addEventListener("mousemove", e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carouselContent.offsetLeft;
  const walk = (x - startX) * 2;
  carouselContent.scrollLeft = scrollLeft - walk;
});

carouselContent.addEventListener("touchstart", e => {
  isDown = true;
  carouselContent.style.animationPlayState = "paused";
  startX = e.touches[0].pageX - carouselContent.offsetLeft;
  scrollLeft = carouselContent.scrollLeft;
});
carouselContent.addEventListener("touchend", () => {
  isDown = false;
  carouselContent.style.animationPlayState = "running";
});
carouselContent.addEventListener("touchmove", e => {
  if (!isDown) return;
  const x = e.touches[0].pageX - carouselContent.offsetLeft;
  const walk = (x - startX) * 2;
  carouselContent.scrollLeft = scrollLeft - walk;
});
