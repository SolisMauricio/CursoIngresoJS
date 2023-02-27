/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresado;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var acumulador;

	acumulador = 0;
	respuesta = "si"; 
	multiplicacionNegativos = 1;
	
	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero: ")
		numeroIngresado = parseFloat(numeroIngresado);
		
		acumulador = acumulador + numeroIngresado;
		
		if(numeroIngresado > 0)
		{
			sumaPositivos = acumulador;
		}
		else 
		{
			if(numeroIngresado < 0)
			{
				multiplicacionNegativos = numeroIngresado * numeroIngresado;
			}
		}
		respuesta = prompt("Desea seguir ingresando numeros? (si|no)");
		while(respuesta != "si" && respuesta != "no")
		{
			respuesta = prompt("Desea seguir ingresando numeros? (si|no)");
		}
	}


	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN