

function validarSalidaRegreso(event) {
    var fechaSalida = new Date(document.getElementById("fechaSalida").value);
    var fechaRegreso = new Date(document.getElementById("fechaRegreso").value);
    var fechaActual = new Date();
    var errorElement = document.getElementById("error-message");
  
    if (fechaSalida < fechaActual) {
      event.preventDefault();
      errorElement.textContent = "La fecha de salida no puede ser anterior a la fecha actual.";
    } else if (fechaSalida > fechaRegreso) {
      event.preventDefault();
      errorElement.textContent = "La fecha de salida no puede ser posterior a la fecha de regreso.";
    } else {
      errorElement.textContent = ""; // Limpiar el mensaje de error si no hay errores
    }
  }
  