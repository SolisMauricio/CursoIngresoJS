/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.

Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/
function mostrar()
{
	var tipoDeDato;
	var precio;
	var cantidadDeUnidades;
	var marca;
	var fabricante;
	var menorPrecioAlcohol;
	var bandera;
	var contadorAlcoholMasBarato;
	var fabricanteAlcohol;
	var acumulandoAlcohol;
	var acumulandoBarbijo;
	var acumulandoJabon;
	var contadorAlcohol;
	var contadorBarbijo;
	var contadorJabon;
	var promedio;
	var masUnidades;

	bandera = true;

	acumulandoAlcohol = 0;
	acumulandoBarbijo = 0;
	acumulandoJabon = 0;
	contadorAlcohol = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;
	

	for(var i=0; i<5; i++)
	{
		do
		{
			tipoDeDato= prompt("ingrese producto barbijo, jabon o alcohol");
			
		}while(tipoDeDato!="barbijo" && tipoDeDato!="jabon" && tipoDeDato!="alcohol");

		do
		{
			precio= prompt("ingrese un precio entre 100 y 300");
			precio=parseInt(precio);
			
		}while(isNaN(precio)|| precio<100 || precio>300);

		do
		{
			cantidadDeUnidades= prompt("ingrese una cantidad de unidades entre 1 y 1000");
			cantidadDeUnidades=parseInt(cantidadDeUnidades);
		}while(isNaN(cantidadDeUnidades) || cantidadDeUnidades<1 || cantidadDeUnidades >1000);

		marca= prompt("ingrese una marca");

		fabricante= prompt("ingrese un fabricante");

		switch(tipoDeDato)
		{
			case "alcohol":
				if(precio < menorPrecioAlcohol || bandera == true)
				{
					menorPrecioAlcohol = precio;
					bandera = false;
					contadorAlcoholMasBarato = cantidadDeUnidades;
					fabricanteAlcohol = fabricante;
				}
				contadorAlcohol = contadorAlcohol + 1;
				acumulandoAlcohol = acumulandoAlcohol + cantidadDeUnidades;

				break;

			case "barbijo":

				contadorBarbijo = contadorBarbijo + 1;
				acumulandoBarbijo = acumulandoBarbijo + cantidadDeUnidades;

				break;
			case "jabon":

				contadorJabon = contadorJabon + 1;
				acumulandoJabon = acumulandoJabon + cantidadDeUnidades;
				break;	
		}
	}
	
	if (acumulandoAlcohol > acumulandoBarbijo && acumulandoAlcohol > acumulandoJabon)
	{
		masUnidades = "alcohol";
		promedio = acumulandoAlcohol / contadorAlcohol;
	}
	else
	{
		if (acumulandoBarbijo > acumulandoJabon)
		{
			masUnidades = "barbijo";
			promedio = acumulandoBarbijo / contadorBarbijo;
		}
		else
		{
			masUnidades = "jabon";
			promedio = acumulandoJabon / contadorJabon;
		}
	}

	document.write
	(
	"<br> El alcohol mas barato es " + menorPrecioAlcohol + ", compro " + contadorAlcoholMasBarato + " de marca " + fabricanteAlcohol +
	"<br> Usted a comprado mas " + masUnidades + ", con un promedio de: " + promedio.toFixed(2) + 
	"<br> Usted a comprado " + acumulandoJabon + " de jabon.")
}
