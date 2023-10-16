const botonObtenerHtml= document.getElementById('boton_html');
botonObtenerHtml.addEventListener('click', obtenerHTML)

function obtenerHTML() {
    let parrafo = document.getElementById('parrafo');
    let parrafoConHTML= parrafo.outerHTML;

    let resultado = document.getElementById('resultado');
    resultado.textContent=  parrafoConHTML ;
  }