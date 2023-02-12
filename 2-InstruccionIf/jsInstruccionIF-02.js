//Al ingresar una edad debemos informar solo si la persona es mayor de edad

function mostrar()
{	
/* Mauricio Solis del Castillo. DIV Z: Grupo 2. IF Ejercicio 2 */	
	var edadIngresada;
	var edadRequerida = 18;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada >= edadRequerida)
	{
		alert("Usted es mayor de edad.");
	}
}//FIN DE LA FUNCIÓN

//Al ingresar una edad debemos informar solo si la persona es mayor de edad

