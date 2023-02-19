/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
/* Mauricio Solis del Castillo. DIV Z: Grupo 2. While Ejercicio 7*/
	
	var numeroIngresado;
	var contador;
	var acumulador;
	var respuesta;
	var promedio;
	
	contador = 0;
	acumulador = 0;
	respuesta = "si";

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseFloat(numeroIngresado);

		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;
		
		// pregunto hasta que el usuario quiera
		respuesta = prompt("Desea seguir ingresando numeros? (si|no)");
		while(respuesta != "si" && respuesta != "no")
		{
			respuesta = prompt("Desea seguir ingresando numeros? (si|no)");
		}
	}

	promedio = acumulador / contador;
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value;

}//FIN DE LA FUNCIÓN