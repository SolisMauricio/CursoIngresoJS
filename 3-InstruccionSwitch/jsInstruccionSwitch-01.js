function mostrar()
{
/* Mauricio Solis del Castillo. DIV Z: Grupo 2. Switch Ejercicio 1*/
	//tomo el mes
	var mesDelAño;
	var mensaje;
	
	mesDelAño = document.getElementById("txtIdMes").value;

	switch (mesDelAño)
	{
		case "Enero":
			mensaje = "que comiences bien el año!!!.";
			break;
		case "Marzo":
			mensaje = "a clases!!!.";
			break;
		case "Julio":
			mensaje = "se vienen las vacaciones!!!.";
			break;
		case "Diciembre":
			mensaje = "Felices fiestas!!!.";
			break;
		default:
			mensaje = "No hay eventos";
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN