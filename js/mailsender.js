// Obtener referencia al botón
const btn = document.getElementById('button');

// Agregar evento al formulario
document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   // Cambiar texto del botón para indicar que está enviando
   btn.value = 'Enviando...';
   
   // Mostrar mensaje de estado (si existe)
   const formStatus = document.getElementById('form-status');
   if (formStatus) {
     formStatus.style.display = 'block';
     formStatus.textContent = 'Enviando mensaje...';
     formStatus.style.color = 'blue';
   }

   // IDs de servicio y plantilla de EmailJS
   const serviceID = 'service_inn8zwa'; // Puedes usar 'default_service' si prefieres
   const templateID = 'template_78dri8m';

   // Enviar el formulario
   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      // Restablecer botón
      btn.value = 'Enviar';
      
      // Mostrar mensaje de éxito
      if (formStatus) {
        formStatus.textContent = '¡Mensaje enviado con éxito!';
        formStatus.style.color = 'green';
        
        // Ocultar mensaje después de 5 segundos
        setTimeout(function() {
          formStatus.style.display = 'none';
        }, 5000);
      } else {
        alert('¡Mensaje enviado con éxito!');
      }
      
      // Limpiar formulario
      this.reset();
    }, (err) => {
      // Restablecer botón
      btn.value = 'Enviar';
      
      // Mostrar error
      if (formStatus) {
        formStatus.textContent = 'Error al enviar el mensaje';
        formStatus.style.color = 'red';
      } else {
        alert(JSON.stringify(err));
      }
      
      // Mostrar detalles del error en la consola
      console.error('Error al enviar email:', err);
    });
});