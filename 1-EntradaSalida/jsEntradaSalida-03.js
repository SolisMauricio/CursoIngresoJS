/*
Mauricio Solis del Castillo. DIV Z. grupo 2. E/S Ejercicio integrador 2.

Ejercicio integrador clase 2: se ingresará por id el valor de una compra de productos para el hogar.
Se deberá agregar el iva (21%) y  luego se deberá restar el 5% en concepto de compra mayorista.
El programa deberá mostrar por alert importe bruto, el iva, el importe con iva, el valor del descuento y el total a pagar.*/

function mostrar()
{
	var valorDeLaCompra;
	var ivaAplicable;
	var valorDeLaCompraMasIva;
	var descuentoAplicable;
	var valorFinalDeLaCompra;
	
	valorDeLaCompra = document.getElementById("txtIdNombre").value;

	valorDeLaCompra = parseInt(valorDeLaCompra);

	ivaAplicable = valorDeLaCompra * 21 / 100;
	valorDeLaCompraMasIva = valorDeLaCompra + ivaAplicable;
	
	descuentoAplicable = valorDeLaCompraMasIva * 5 / 100;
	valorFinalDeLaCompra = valorDeLaCompraMasIva - descuentoAplicable;

	alert("Importe bruto: " + valorDeLaCompra + " Iva aplicable: " + ivaAplicable + " Importe mas iva: " + valorDeLaCompraMasIva + " Valor del descuento: " + descuentoAplicable + " total a pagar: " + valorFinalDeLaCompra + "." );

	// no encontre la forma de usar /n. Ni += para que quede mejor el codigo.
}





/*
Mauricio Solis del Castillo. DIV Z. grupo 2. E/S Ejercicio 3

Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
/*function mostrar()
{
	var nombreIngresado;
	
	nombreIngresado = document.getElementById("txtIdNombre").value;
	alert(nombreIngresado);
	
}