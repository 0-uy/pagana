
  // Selecciona todas las imágenes de producto
  const images = document.querySelectorAll('.health-product-image');

  images.forEach(image => {
    image.addEventListener('click', () => {
      // Verifica si la imagen ya tiene el zoom
      if (image.classList.contains('image-zoomed')) {
        image.classList.remove('image-zoomed');
        document.querySelector('.overlay').style.display = 'none';
      } else {
        image.classList.add('image-zoomed');
        document.querySelector('.overlay').style.display = 'block';
      }
    });
  });

  // Agrega un fondo oscuro detrás de la imagen ampliada
  document.body.insertAdjacentHTML('beforeend', '<div class="overlay"></div>');
  document.querySelector('.overlay').addEventListener('click', () => {
    document.querySelectorAll('.image-zoomed').forEach(img => img.classList.remove('image-zoomed'));
    document.querySelector('.overlay').style.display = 'none';
  });
