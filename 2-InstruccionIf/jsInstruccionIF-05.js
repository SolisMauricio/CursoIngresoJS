function mostrar()
{
/* Mauricio Solis del Castillo. DIV Z: Grupo 2. IF Ejercicio 5 */	
	var edadIngresada;
	var edadMinima = 13;
	var edadMaxima = 17;
	
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada < edadMinima || edadIngresada > edadMaxima)
	{
		alert("La persona no es adolecente");
	}
}//FIN DE LA FUNCIÓN