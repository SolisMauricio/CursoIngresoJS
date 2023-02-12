function mostrar()
{
/* Mauricio Solis del Castillo. DIV Z: Grupo 2. IF Ejercicio 6 */	
	var edadIngresada;
	var mensaje;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada > 17)
	{
		mensaje = "La persona es mayor de edad.";
	}
	else
	{
		if(edadIngresada > 12)
		{
			mensaje = "La persona es adolescente."
		}
		else
		{
			if(edadIngresada < 14)
			{
			mensaje = "La persona es un niño."
			}
		}	
	}		
	alert(mensaje);
}//FIN DE LA FUNCIÓN