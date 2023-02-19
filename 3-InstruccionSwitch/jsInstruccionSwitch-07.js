function mostrar()
{
/* Mauricio Solis del Castillo. DIV Z: Grupo 2. Switch Ejercicio 7 */	
	var destinoIngresado;
	var mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado)
	{
		case "Bariloche":
			mensaje = "Bariloche se encuentra al sur";
			break;
		case "Cataratas":
			mensaje = "Cataratas se encuentra al norte";
			break;		
		case "Mar del plata":
			mensaje = "Mar del plata se encuentra al este"; 	
			break;
		case "Ushuaia":
			mensaje = "Ushuaia se encuentra al sur";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN