/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y
censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes
solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
//Mauricio Solis del Castillo. DIV Z. Grupo 2. TP 12 (integreador clase 08)	
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
	var estadoCivil;
	var sueldoBruto;
	var numeroLegajo;
	var nacionalidad;
	var nacionalidadValidada;

	do //A.	Edad, entre 18 y 90 años inclusive.
	{
		edadIngresada = prompt("Ingrese su edad: ");
		edadIngresada = parseInt(edadIngresada);
	
	} while(edadIngresada < 18 || edadIngresada > 90);
	
	do //B.	Sexo, “M” para masculino y “F” para femenino
	{
		sexoIngresado = prompt("Ingrese su sexo: (F|M)");
	
	}while(sexoIngresado != "M" && sexoIngresado != "F")

	do //C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
	{
		estadoCivilIngresado = prompt(" Ingrese su estado civil: \n" +
		" 1-para soltero \n 2-para casados \n 3-para divorciados \n 4-para viudos");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);

		switch (estadoCivilIngresado) 
		{
			case 1:
				estadoCivil = "Soltero"
				break;
			case 2:
				estadoCivil = "Casado"
				break;
			case 3:
				estadoCivil = "Divorciado"
				break;
			case 4:
				estadoCivil = "Viudo"
				break;
		}
	} while(estadoCivilIngresado < 1 || estadoCivilIngresado > 4);	
	
	do // D.Sueldo bruto, no menor a 8000.
	{
		sueldoBruto = prompt("Ingrese sueldo bruto: ");
		sueldoBruto =  parseFloat(sueldoBruto);
	
	} while(sueldoBruto < 8000);

	do //E.Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
	{
		numeroLegajo = prompt("Ingrese numero de legajo: (sin ceros a la izquierda) ");
		numeroLegajo = parseInt(numeroLegajo);
	
	} while(numeroLegajo < 1000 || numeroLegajo >9999);

	do //F.Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
	{
		nacionalidad = prompt("ingrese su nacionalidad: \n “A” para argentinos \n" +
		" “E” para extranjeros \n “N” para nacionalizados");
		
		switch(nacionalidad)
		{
			case "A":
				nacionalidadValidada = "Argentino"
				break;
			case "E":
				nacionalidadValidada = "Extranjero"
				break;
			case "N":
				nacionalidadValidada = "Nacionalizado"
				break;
		}
	}while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N");
	
	
	
	document.getElementById("txtIdEdad").value = edadIngresada; //A.Edad, entre 18 y 90 años inclusive.
	document.getElementById("txtIdSexo").value = sexoIngresado; //B.Sexo, “M” para masculino y “F” para femenino
	document.getElementById("txtIdEstadoCivil").value = estadoCivil; //C.Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
	document.getElementById("txtIdSueldo").value = sueldoBruto; // D.Sueldo bruto, no menor a 8000.
	document.getElementById("txtIdLegajo").value = numeroLegajo; //E.Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
	document.getElementById("txtIdNacionalidad").value = nacionalidadValidada; //F.Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
	
}
			
	

	
	





	
	
