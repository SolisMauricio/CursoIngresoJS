/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
/* Mauricio Solis del Castillo. DIV Z: Grupo 2. While Ejercicio 5*/	
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado != "f" && sexoIngresado !="m")
	{
		alert("Error!!! ingreso mal el sexo");
		sexoIngresado = prompt("ingrese f ó m .");
	}
	
	document.getElementById("txtIdSexo").value = sexoIngresado;
}//FIN DE LA FUNCIÓN