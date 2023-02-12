/*
Mauricio Solis del Castillo. DIV Z: Grupo 2. E/S Ejercicio 7

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumeroIngresado;
	var segundoNumeroIngresado;
	var resultadoDeLaOperacion;

	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;

	primerNumeroIngresado = parseInt(primerNumeroIngresado);
	segundoNumeroIngresado = parseInt(segundoNumeroIngresado);
	
	resultadoFinal = primerNumeroIngresado + segundoNumeroIngresado;

	alert(resultadoFinal);	

}


function restar()
{
	var primerNumeroIngresado;
	var segundoNumeroIngresado;
	var resultadoDeLaOperacion;
	
	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;

	primerNumeroIngresado = parseInt(primerNumeroIngresado);
	segundoNumeroIngresado = parseInt(segundoNumeroIngresado);

	resultadoFinal = primerNumeroIngresado - segundoNumeroIngresado;

	alert(resultadoFinal);	

}


function multiplicar()
{ 
	var primerNumeroIngresado;
	var segundoNumeroIngresado;
	var resultadoDeLaOperacion;

	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;

	primerNumeroIngresado = parseInt(primerNumeroIngresado);
	segundoNumeroIngresado = parseInt(segundoNumeroIngresado);

	resultadoFinal = primerNumeroIngresado * segundoNumeroIngresado;

	alert(resultadoFinal);

}


function dividir()
{
	var primerNumeroIngresado;
	var segundoNumeroIngresado;
	var resultadoDeLaOperacion;

	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;

	primerNumeroIngresado = parseInt(primerNumeroIngresado);
	segundoNumeroIngresado = parseInt(segundoNumeroIngresado);

	resultadoFinal = primerNumeroIngresado / segundoNumeroIngresado;

	alert(resultadoFinal);	

}



