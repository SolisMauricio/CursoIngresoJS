/*
Mauricio Solis del Castillo. DIV Z: Grupo 2. E/S Ejercicio 8

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroDividendoIngresado;
	var numeroDivisorIngresado;
	var restoDeLaOperacion;

	numeroDividendoIngresado = document.getElementById("txtIdNumeroDividendo").value;
	numeroDivisorIngresado = document.getElementById("txtIdNumeroDivisor").value;

	numeroDividendoIngresado = parseInt(numeroDividendoIngresado);
	numeroDivisorIngresado = parseInt(numeroDivisorIngresado);
	
	restoDeLaOperacion = numeroDividendoIngresado % numeroDivisorIngresado;

	alert("El resto es " + restoDeLaOperacion + ".");

}
