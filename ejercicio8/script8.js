document.addEventListener('DOMContentLoaded', function() {
    const input_nombre = document.getElementById('nombre');
    const input_apellido = document.getElementById('apellido');
    const input_edad = document.getElementById('edad');
    const boton_agregar = document.getElementById('boton_agregar');
    const fila_datos_personales = document.querySelector('#personas tbody');

//función para agregar todos los datos de ingreso a una fila de la tabla
function agregarDatosPersona(persona) {
    const fila = fila_datos_personales.insertRow();
    for (const campo of persona) {
        const celda = fila.insertCell();
        celda.textContent = campo;
    }
//Eliminar fila de la tabla
    const eliminar_celda = fila.insertCell();
    const boton_eliminar = document.createElement('button');
    boton_eliminar.textContent = 'Eliminar';
    boton_eliminar.className = 'btn btn-danger';
    boton_eliminar.addEventListener('click', function() {
        fila.remove();
    });
    eliminar_celda.appendChild(boton_eliminar);
}
//función para limpiar los campos del formulario
function limpiarCamposFormulario() {
    input_nombre.value = '';
    input_apellido.value = '';
    input_edad.value = '';
}

boton_agregar.addEventListener('click', function(event) {
    event.preventDefault();
    const nombre = input_nombre.value.trim();
    const apellido = input_apellido.value.trim();
    const edad = input_edad.value.trim();

    if (nombre && apellido && edad) {
        const datos_persona = [nombre, apellido, edad];
        agregarDatosPersona(datos_persona);
        limpiarCamposFormulario();
    } else {
        alert('Es necesario completar todos los campos del formulario.');
    }
    });
    
});
