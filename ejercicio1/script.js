const botonCambiarTexto= document.getElementById('boton_cambiar');
botonCambiarTexto.addEventListener('click', cambiarTexto);

function cambiarTexto() {
    let texto_nuevo = document.getElementById('parrafo');
    texto_nuevo.innerText = "Buenas tardes";
  }