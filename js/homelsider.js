var currentImg = 0;
var imgs = document.querySelectorAll(".slider img");
let dots = document.querySelectorAll(".dot");
var interval = 3000;

// Definir imágenes locales
const localImages = [
  "images/alfajor delicia de coco.jpg",
  "images/medialuna.jpg",
  "images/trufas pagana.jpg",
];

// Establece las imágenes en el DOM
for (let i = 0; i < imgs.length && i < localImages.length; i++) {
  imgs[i].src = localImages[i];
}

var timer = setInterval(changeSlide, interval);

function changeSlide(n) {
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.opacity = 0;
    dots[i].className = dots[i].className.replace(" active", "");
  }

  currentImg = (currentImg + 1) % imgs.length;

  if (n != undefined) {
    clearInterval(timer);
    timer = setInterval(changeSlide, interval);
    currentImg = n;
  }

  imgs[currentImg].style.opacity = 1;
  dots[currentImg].className += " active";
}

function calculateDays(today, eventDate) {
  const difference = eventDate.getTime() - today.getTime();
  return Math.ceil(difference / (1000 * 3600 * 24)); // convertir a días
}
