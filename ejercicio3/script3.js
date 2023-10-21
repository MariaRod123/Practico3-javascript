
const agregar_apellido = document.getElementById('boton_apellido');
const parrafo = document.querySelector('p');

agregar_apellido.addEventListener('click', escribirApellido);

function escribirApellido() {
  let input_apellido = document.getElementById('campo_apellido');
  let apellido = input_apellido.value;

  if (apellido !== '') {
    let contenido_parrafo = parrafo.textContent; // captura el contenido inicial del párrafo
    parrafo.textContent = contenido_parrafo + ' ' + apellido; //se agrega el apellido al contenido inicial
  } else {
    parrafo.textContent = "No has ingresado ningún apellido";
  }
}
