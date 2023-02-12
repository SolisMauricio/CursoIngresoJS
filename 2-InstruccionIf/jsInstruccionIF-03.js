function mostrar()
{
/* Mauricio Solis del Castillo. DIV Z: Grupo 2. IF Ejercicio 3 */
	var edadIngresada;
	var EsmayorDeEdad = 18;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada >= EsmayorDeEdad)
	{
		alert("usted es mayor de edad.");
	}
	else
	{
		alert("Usted es menor de edad.");
	}
}//FIN DE LA FUNCIÓN