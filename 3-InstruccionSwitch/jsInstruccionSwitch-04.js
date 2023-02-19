function mostrar()
{
/* Mauricio Solis del Castillo. DIV Z: Grupo 2. Switch Ejercicio 4*/
	var mesDelAño;
	var mensaje;

	mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case "Febrero":
			mensaje = "Este mes tiene 28 dias";
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Este mes tiene 30 dias";
			break;
		default:
			mensaje = "Este mes tiene 31 dias";
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN