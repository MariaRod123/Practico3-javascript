
const productos = document.querySelectorAll('#productos li');
const nombre_producto_ingresado = document.getElementById('nombre_producto');
const boton_agregar_producto = document.getElementById('agregar_producto');
const productos_agregados = document.getElementById('resultados');


for (const producto of productos) {
    producto.addEventListener('click', function() {
        const nombre = producto.getAttribute('nombre');
        nombre_producto_ingresado.value = nombre;
    });
}

boton_agregar_producto.addEventListener('click', function() {
    const nombre = nombre_producto_ingresado.value;
    if (nombre.trim() === '') {
        window.alert('Debe seleccionar un producto primero.');
        return;
    }

    const resultado = document.createElement('span');
    resultado.textContent = nombre;
    productos_agregados.appendChild(resultado);
    productos_agregados.appendChild(document.createTextNode(' '));

    nombre_producto_ingresado.value = '';
});
