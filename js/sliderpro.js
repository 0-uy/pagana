const images = [
    'images/medialuna rellena.jpg',
    'images/alfarosa.png',
    'images/pannuez.jpg',
];

let currentIndex = 0;
const sliderImg = document.getElementById('slider-img');

function prevSlide() {
    currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    sliderImg.src = images[currentIndex];
}

function nextSlide() {
    currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    sliderImg.src = images[currentIndex];
}