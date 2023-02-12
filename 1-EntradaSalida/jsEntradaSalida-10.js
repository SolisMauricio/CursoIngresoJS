/*
Mauricio Solis del Castillo. DIV Z: Grupo 2. E/S Ejercicio 10

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importeIngresado;
	var descuentoQueAplicar;
	var importeFinalConDescuento;

	importeIngresado = document.getElementById("txtIdImporte").value;

	importeIngresado = parseInt(importeIngresado);

	descuentoQueAplicar = importeIngresado *25 / 100;

	importeFinalConDescuento = importeIngresado - descuentoQueAplicar;

	document.getElementById("txtIdResultado").value = importeFinalConDescuento;

}