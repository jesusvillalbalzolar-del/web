// Configuración de Supabase
const supabaseUrl = 'https://jqpoqwrallgsqzshtped.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxcG9xd3JhbGxnc3F6c2h0cGVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0NzM2NTcsImV4cCI6MjA3MzA0OTY1N30.U1V0gCQyKIQNsIRUw4RamaZzvVXYUcdaZhhXxP-YvG8';
const bucketName = 'cebne';
const folderPath = 'carrusel';

// Referencias a elementos del DOM
const carouselContent = document.getElementById("carouselContent");
const carouselPagination = document.getElementById("carouselPagination");
const prevArrow = document.getElementById("prevArrow");
const nextArrow = document.getElementById("nextArrow");
let currentSlide = 0;
let autoScrollInterval;
let isManualScroll = false;
let imagesSrc = []; // Array que se llenará dinámicamente

// Función para obtener nombres de archivos de una subcarpeta
async function obtenerNombresArchivos(subcarpeta = 'carrusel') {
    const apiHeaders = {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json'
    };

    const response = await fetch(
        `${supabaseUrl}/storage/v1/object/list/${bucketName}`,
        {
            method: 'POST',
            headers: apiHeaders,
            body: JSON.stringify({
                prefix: subcarpeta.endsWith('/') ? subcarpeta : subcarpeta + '/',
                limit: 1000,
                sortBy: { column: 'name', order: 'asc' }
            })
        }
    );

    if (!response.ok) {
        throw new Error('No se pudo listar los archivos');
    }

    const data = await response.json();
    // Devuelve solo los nombres de los archivos (no carpetas)
    return data.filter(item => item.id !== null).map(item => item.name);
}

// Función para obtener imágenes de Supabase Storage
async function loadImagesFromSupabase(subcarpeta = "carrusel") {
    try {
        carouselContent.innerHTML = '<div class="loading">Cargando imágenes...</div>';

        // Obtener nombres de archivos de la carpeta
        const nombresArchivos = await obtenerNombresArchivos(folderPath);

        if (!nombresArchivos || nombresArchivos.length === 0) {
            throw new Error('No se encontraron imágenes en el almacenamiento');
        }

        // Crear array de imágenes
        imagesSrc = nombresArchivos.map(fileName => {
            return {
                src: `${supabaseUrl}/storage/v1/object/public/${bucketName}/${subcarpeta}/${encodeURIComponent(fileName).replace(/%2F/g, "/")}`,
                alt: `Imagen ${fileName.split('/').pop()}`,
                 
            };
        });

        return imagesSrc;
    } catch (error) {
        console.error('Error al cargar imágenes desde Supabase:', error);
        throw new Error(`No se pudieron cargar las imágenes: ${error.message}`);
    }
}

// Crear puntos de paginación
function createPaginationDots() {
    carouselPagination.innerHTML = '';
    for (let i = 0; i < imagesSrc.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        if (i === 0) dot.classList.add('active');
        dot.setAttribute('data-index', i);
        dot.addEventListener('click', () => goToSlide(i));
        carouselPagination.appendChild(dot);
    }
}

// Ir a slide específico
function goToSlide(slideIndex) {
    isManualScroll = true;
    carouselContent.style.animationPlayState = "paused";
    clearInterval(autoScrollInterval);

    currentSlide = slideIndex;
    const slideWidth = carouselContent.children[0].offsetWidth + 40; // width + gap
    carouselContent.scrollLeft = slideIndex * slideWidth;

    updateActiveDot();

    setTimeout(() => {
        isManualScroll = false;
        carouselContent.style.animationPlayState = "running";
        startAutoScroll();
    }, 3000);
}

// Navegar al slide anterior
function prevSlide() {
    let newSlide = currentSlide - 1;
    if (newSlide < 0) newSlide = imagesSrc.length - 1;
    goToSlide(newSlide);
}

// Navegar al slide siguiente
function nextSlide() {
    let newSlide = currentSlide + 1;
    if (newSlide >= imagesSrc.length) newSlide = 0;
    goToSlide(newSlide);
}

// Iniciar scroll automático
function startAutoScroll() {
    clearInterval(autoScrollInterval);
    autoScrollInterval = setInterval(() => {
        if (!isManualScroll) {
            nextSlide();
        }
    }, 5000);
}

// Actualizar punto activo basado en la posición de desplazamiento
function updateActiveDot() {
    const scrollPosition = carouselContent.scrollLeft;
    const slideWidth = carouselContent.children[0].offsetWidth + 40;
    const activeIndex = Math.round(scrollPosition / slideWidth) % imagesSrc.length;

    document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
        if (index === activeIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    currentSlide = activeIndex;
}

// Insertar imágenes en el carrusel y duplicarlas para efecto infinito
function populateCarousel() {
    carouselContent.innerHTML = '';
    for (let i = 0; i < 2; i++) {
        imagesSrc.forEach(imgData => {
            const figure = document.createElement("figure");
            const img = document.createElement("img");
            img.src = imgData.src;
            img.alt = imgData.alt;
            figure.appendChild(img);
            carouselContent.appendChild(figure);
        });
    }
}

// Inicializar el carrusel
async function initializeCarousel() {
    try {
        await loadImagesFromSupabase();
        populateCarousel();
        createPaginationDots();
        startAutoScroll();

        prevArrow.addEventListener("click", prevSlide);
        nextArrow.addEventListener("click", nextSlide);
        initDragAndTouch();
        carouselContent.addEventListener("scroll", updateActiveDot);
    } catch (error) {
        console.error(error);
        carouselContent.innerHTML = `<div class="error">${error.message}</div>`;
    }
}

// --- Drag / Touch ---
function initDragAndTouch() {
    let isDown = false;
    let startX;
    let scrollLeft;

    carouselContent.addEventListener("mousedown", e => {
        isDown = true;
        carouselContent.style.animationPlayState = "paused";
        startX = e.pageX - carouselContent.offsetLeft;
        scrollLeft = carouselContent.scrollLeft;
    });

    carouselContent.addEventListener("mouseleave", () => {
        isDown = false;
        if (!isManualScroll) {
            carouselContent.style.animationPlayState = "running";
        }
    });

    carouselContent.addEventListener("mouseup", () => {
        isDown = false;
        updateActiveDot();
        if (!isManualScroll) {
            carouselContent.style.animationPlayState = "running";
        }
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
        updateActiveDot();
        if (!isManualScroll) {
            carouselContent.style.animationPlayState = "running";
        }
    });

    carouselContent.addEventListener("touchmove", e => {
        if (!isDown) return;
        const x = e.touches[0].pageX - carouselContent.offsetLeft;
        const walk = (x - startX) * 2;
        carouselContent.scrollLeft = scrollLeft - walk;
    });
}

// Iniciar la carga del carrusel cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initializeCarousel);