function mostrar()
{
/* Mauricio Solis del Castillo. DIV Z: Grupo 2. While Ejercicio 6*/
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;

	contador = 0; //variale de control
	acumulador = 0;

	while(contador < 5)
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);
		
		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;
	}
	promedio = acumulador / contador;
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN