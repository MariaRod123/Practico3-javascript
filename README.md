# Practico3-javascript

1. Cambiar el texto de una etiqueta `<p> Hola Mundo </p>` por un texto "Buenas tardes". En tiempo de ejecución.

2. Obtener el HTML de una etiqueta `<p> Mi nombre es Alex </p>` e insertar en un `<div id="resultado"> </div>`
  
3. Escribir apellido en una etiqueta `<p>Hola Alex [[apellido]] </p>` mediante el click en un botón.
   
4. Desplegar una lista con productos: Manzana, Pera, Ajo en un HTML ul, li en un div id="resultado" al dar click en un boton "Ver lista"

    ```Resultado esperado:
   	<div id="resultado">
   
	     <ul>
   
	    	<li>Manzana</li>
   
	    	<li>Pera</li>
   
	    	<li>Ajo</li>
	    </ul>
   
	   </div>
    
6. Dar click en un ítem de la lista de productos y obtener el nombre en un div con id="resultado"
   
7. Dar click en un ítem de producto y cargar el nombre en un input type="text"
   
   a. Dar click en "agregar" y carga el ítem en un div resultado dentro de en una etiqueta "<p>"

  
8. Crear un input de tipo text y botón:
    
    - Agregar texto a una lista ul,li c/vez que se pulsa el botón
      
    -  Agregar un botón al lado de c/elemento de la lista con el texto: "Eliminar"
      
        - Al pulsar "Eliminar": Remover elemento de la lista
          
        - No permitir textos repetidos
          
    		Lista ejemplo:
    
    		* Manzana[Eliminar]
       
    		* Naranja[Eliminar]
			

   
9. Crear un formulario con los siguientes inputs:
   
    - Nombre, Apellido, Edad (Todos de tipo text)
      
    - Crear botón con texto: "Agregar"
      
    - Agregar c/persona a una row de una tabla
      
    - Agregar botón eliminar en una de las columnas de la row
     
    - Al pulsar "Eliminar": Remover elemento de la tabla
      
	   ```Tabla ejemplo:         
	  	<table>		
			<tr>
			    <td>Nombre</td>
			    <td>Apellido</td>
			    <td>28</td>
			    <td>
			    <button>Eliminar</button>
			    </td>
			</tr>
		  </table>

	

10. Crear una imagen que al dar click en un botón va cambiando de manera aleatoria dado un vector determinado
    
	  HTML EJEMPLO:
			`<img src="{{imagen}}" ...>
			<button>Ver otra img!</button>`

			["img1", "img2", ..., "imgN"] -> Lista de imágenes
