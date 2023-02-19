/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
/* Mauricio Solis del Castillo. DIV Z: Grupo 2. While Ejercicio 3*/	
	var claveIngresada;
	var claveCorrecta;

	claveCorrecta = "utn750";

	claveIngresada = prompt("ingrese el número clave.");
	
	while(claveIngresada != claveCorrecta)
	{
		alert("Error!!! clave incorrecta...");
		claveIngresada = prompt("Ingrese el numero de clave");
	}
	alert("Clave correcta...")
}//FIN DE LA FUNCIÓN
