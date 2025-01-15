let currentSlideIndex = 0; // Índice de la imagen actual
const slides = [
  'images/postres.jpg', // Agrega las rutas de las imágenes
  'images/pannuez.jpg',
  'images/alfarosa.png',
]; 

// Función para mostrar la siguiente imagen
function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  document.getElementById("slider-img").src = slides[currentSlideIndex];
}

// Función para mostrar la imagen anterior
function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  document.getElementById("slider-img").src = slides[currentSlideIndex];
}

// Configura el slider para que cambie automáticamente cada 2,3 segundos
setInterval(nextSlide, 2700); 