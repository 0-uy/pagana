// Función para abrir el modal
function abrirFormulario() {
    const modal = document.getElementById('formularioPedido');
    modal.style.display = 'block';
  }
  
  // Función para cerrar el modal
  function cerrarFormulario() {
    const modal = document.getElementById('formularioPedido');
    modal.style.display = 'none';
  }
  
  // Función para manejar el envío del pedido
  function enviarPedido() {
    // Aquí irá la lógica para procesar el pedido
    const form = document.getElementById('formularioPedido');
    const formData = new FormData(form);
    
    // Aquí puedes agregar la lógica para enviar los datos
    console.log('Pedido enviado');
    cerrarFormulario();
  }
  
  // Cerrar el modal si se hace clic fuera del contenido
  window.onclick = function(event) {
    const modal = document.getElementById('formularioPedido');
    if (event.target === modal) {
      cerrarFormulario();
    }
  }