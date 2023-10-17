const boton_ver_lista = document.getElementById('verLista');
const lista_productos = document.getElementById('listaProductos');

boton_ver_lista.addEventListener('click', mostrarLista)

function mostrarLista(){
  if (lista_productos.style.display === 'none') {
    lista_productos.style.display = 'block';
  } else {
    lista_productos.style.display = 'none';
  }
};
