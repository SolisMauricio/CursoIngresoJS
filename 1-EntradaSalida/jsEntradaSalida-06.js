/*
Mauricio Solis del Castillo. DIV Z. Grupo 2. E/S Ejercicio 6.

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var resultadoFinal;

	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	resultadoFinal = primerNumero + segundoNumero;
	alert(resultadoFinal);
}
