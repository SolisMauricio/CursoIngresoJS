function mostrar()
{
/* Mauricio Solis del Castillo. DIV Z: Grupo 2. Switch Ejercicio 3*/
	var mesDelAño;
	var mensaje;

	mesDelAño = document.getElementById("txtIdMes").value;
	
	switch(mesDelAño)
	{
		case "Febrero":
			mensaje = "Este mes no tiene más de 29 días.";
			break;
		default:
			mensaje = "Este mes tiene 30 o más días";
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN