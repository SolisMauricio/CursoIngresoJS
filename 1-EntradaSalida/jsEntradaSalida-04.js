/* 
Mauricio Solis del Castillo. DIV Z. Grupo 2 E/S Ejercicio 4

Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;

	nombre = prompt("ingrese su nombre");
	document.getElementById("txtIdNombre").value = nombre;
}
