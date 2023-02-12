/*
Mauricio Solis del Castillo. DIV Z: Grupo 2. E/S Ejercicio 9

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldoIniciaSinAumento;
	var porcentajeQueAumentar;
	var sueldoFinalConAumento;
	

	sueldoIniciaSinAumento = document.getElementById("txtIdSueldo").value;

	sueldoIniciaSinAumento = parseInt(sueldoIniciaSinAumento);
	
	porcentajeQueAumentar = sueldoIniciaSinAumento * 10 / 100;

	sueldoFinalConAumento = sueldoIniciaSinAumento + porcentajeQueAumentar;

	document.getElementById("txtIdResultado").value = "sueldo final con aumento: " + sueldoFinalConAumento;
	
}
