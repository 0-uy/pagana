
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Mostrar estado de carga
  document.getElementById('form-status').style.display = 'block';
  document.getElementById('form-status').textContent = 'Enviando mensaje...';
  
  // Tus IDs de servicio y plantilla de EmailJS
  const serviceID = 'service_inn8zwa';
  const templateID = 'template_78dri8m';
  
  // Enviar el email usando el formulario actual
  emailjs.sendForm(serviceID, templateID, this)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      document.getElementById('form-status').textContent = '¡Mensaje enviado con éxito!';
      document.getElementById('form-status').style.color = 'green';
      document.getElementById('contact-form').reset(); // Limpiar el formulario
      
      // Ocultar el mensaje después de 5 segundos
      setTimeout(function() {
        document.getElementById('form-status').style.display = 'none';
      }, 5000);
    })
    .catch(function(error) {
      console.log('FAILED...', error);
      document.getElementById('form-status').textContent = 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.';
      document.getElementById('form-status').style.color = 'red';
    });
});