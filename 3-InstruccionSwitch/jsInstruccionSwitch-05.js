function mostrar()
{
 /* Mauricio Solis del Castillo. DIV Z: Grupo 2. Switch Ejercicio 5*/
	var horaDelDia;
	var mensaje;

	horaDelDia = document.getElementById("txtIdHora").value;
	horaDelDia = parseInt(horaDelDia);
	
	switch (horaDelDia)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:				
			mensaje =  "Es de mañana.";
			break; 
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN