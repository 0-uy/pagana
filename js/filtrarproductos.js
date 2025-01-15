function filtrarProductos() {
    // Obtiene el valor del input de búsqueda y lo convierte a minúsculas
    let input = document.getElementById('searchInput').value.toLowerCase();
    
    // Obtiene todos los elementos de productos
    let productos = document.querySelectorAll('.health-product-card');
    
    // Recorre cada producto y muestra/oculta según el término de búsqueda
    productos.forEach((producto) => {
        // Obtiene el título del producto y lo convierte a minúsculas
        let titulo = producto.querySelector('.health-product-title').textContent.toLowerCase();
        
        // Muestra u oculta el producto basado en la coincidencia
        if (titulo.includes(input)) {
            producto.style.display = ""; // Muestra el producto
        } else {
            producto.style.display = "none"; // Oculta el producto
        }
    });
}
