/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
/* Mauricio Solis del Castillo. DIV Z: Grupo 2. While Ejercicio 4*/	
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9 inclusive.");
	numeroIngresado = parseInt(numeroIngresado);

	while(numeroIngresado < 0 || numeroIngresado > 9)
	{
		numeroIngresado = prompt("ingrese un número entre 0 y 9 inclusive.");
	}
	document.getElementById("txtIdNumero").value = numeroIngresado;
}//FIN DE LA FUNCIÓN