/*Tenemos que crear un programa que verifique si el usuario puede subirse a una montaña rusa,
para esto el usuario deberá ingresar los siguientes datos por prompt: Altura y edad. 
Si el usuario mide menos de 120 cm debemos indicar que no puede subirse a la montaña rusa,
en cambio sí tiene la altura correspondiente debemos preguntar su edad y mostrarle al usuario
por alert el monto a pagar.
El monto a pagar:
200$: para menores de edad y mayores de 80
400$: Mayores de edad, menores o iguales a 80
A tener en cuenta: Si preguntamos la altura del usuario y no puede subir no deberíamos
preguntarle la edad.*/
function mostrar()
{ 
	var altura;
	var edad;
	var alturaMinima;
	var mensajeSiNoSube;
	alturaMinima = 120;

	altura = prompt("Ingrese altura");
	altura = parseInt(altura);
	edad = prompt("Ingrese edad");

	if(altura < alturaMinima)
	{
		mensajeSiNoSube = "No tiene la altura suficiente para subir."
	}
	else
	{
		edad;
	}
	alert(mensajeSiNoSube);



}












// function mostrar()
// {
// /* Mauricio Solis del Castillo. DIV Z: Grupo 2. IF Ejercicio 1 */
// 	var edadIngresada;

// 	edadIngresada = document.getElementById("txtIdEdad").value;
// 	edadIngresada = parseInt(edadIngresada);
	
// 	if(edadIngresada == 15);
// 	{
// 		alert("niña bonita.");
// 	}
// }//FIN DE LA FUNCIÓN

