
    function agregarAlCarrito(producto, precio) {
      // Animación simple al hacer clic
      const btn = document.querySelector('.add-button');
      btn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        btn.style.transform = 'scale(1)';
      }, 100);
    }
