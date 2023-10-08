
const imagen_lista = document.getElementById("imagen"); 
const boton = document.getElementById("boton_cambiar"); 

//Array que contiene las imagenes 
const lista_imagenes = ["./img/imagen1.jpg", "./img/imagen2.jpg", "./img/imagen3.jpg","./img/imagen4.jpg", "./img/imagen5.jpg", "./img/imagen6.jpg", "./img/imagen7.jpg", "./img/imagen8.jpg", "./img/imagen9.jpg", "./img/imagen10.jpg" ]; 

boton_cambiar.addEventListener("click", cambiarImagen);

function cambiarImagen() {     
     //calcula un indice aleatorio
    let indice_imagen_aleatoria = Math.floor(Math.random() * lista_imagenes.length);
    /* math.random() lo que hace es calcular un valor aleatorio entre 0 y 1 que va a ser decimal por lo que el método
    math.floor() redondea el valor decimal a entero para que sea válido como indice del array */
    

    //accede a la imagen aleatoria a través del indice aleatorio calculado
    let elemento_aleatorio = lista_imagenes[indice_imagen_aleatoria]; 
    
    //cambia la imagen por la aleatoria
    imagen_lista.src = elemento_aleatorio; 
    imagen_lista.alt = "Imagen aleatoria"; 

} 
