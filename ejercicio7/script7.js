document.addEventListener('DOMContentLoaded', function() {
    const input_fruta = document.getElementById('input_fruta');
    const boton_agregar_fruta = document.getElementById('boton_agregar');
    const lista = document.getElementById('lista_frutas');

    boton_agregar_fruta.addEventListener('click', function() {
        const fruta = input_fruta.value.trim();
        if (/^[A-Za-z\s]+$/.test(fruta)) {  //valida que no se ingrese carcateres diferentes de letras
            let existe = false;
            const items = lista.querySelectorAll('li');
            for (const item of items) {
                if (item.textContent.startsWith(fruta)) {
                    existe = true;
                    break;
                }
            }

            if (!existe) {
                const nueva_fruta = document.createElement('li');
                nueva_fruta.textContent = fruta;

                const boton_eliminar = document.createElement('button');
                boton_eliminar.textContent = 'Eliminar';
                boton_eliminar.addEventListener('click', function() {
                    lista.removeChild(nueva_fruta);
                });

                nueva_fruta.appendChild(boton_eliminar);
                lista.appendChild(nueva_fruta);
            } else {
                window.alert('La fruta ingresada ya existe en la lista.');
            }

            input_fruta.value = '';
        } else {
            window.alert('Debes ingresar un nombre de fruta válido (solo caracteres alfabéticos).');
        }
    });
});