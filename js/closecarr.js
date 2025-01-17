// Función para cerrar el carrito
function cerrarCarrito() {
    document.getElementById('carritoDropdown').style.display = 'none';
  }
  
  // Detectar la tecla Escape para cerrar el carrito
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      cerrarCarrito();
    }
  });
  