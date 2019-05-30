

//Script para añadir desplazamiento suave

<script>
					$(document).ready(function(){
  			// Agrega desplazamiento suave a anclas en barra de navegación y pie.
  					$(".navbar a, footer a[href='#myPage']").on('click', function(event) {
			// Removiendo comportamiento por defecto.
  					event.preventDefault();
  			// Almacenando el contenedor destino.
 					 var hash = this.hash;
  			// Agregando desplazamiento suave.
  			// El 900 son los milisegundos para moverse.
  					$('html, body').animate({
 			// Moviendo sitio a contenedor destino.
   					 scrollTop: $(hash).offset().top
  						}, 900, function(){
   			 // Añade el ancla a la dirección.
    				window.location.hash = hash;
    					});
 					 });
				})
</script>

