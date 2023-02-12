/*
Mauricio Solis del Castillo. DIV Z. Grupo 2. E/S integrador 3.

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados
 con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit 
(ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaEnGradosFahrenheit;
    var temperaturaTrasformadaEnGradosCentigrados;

    temperaturaEnGradosFahrenheit = document.getElementById("txtIdTemperatura").value;
    temperaturaEnGradosFahrenheit = parseFloat(temperaturaEnGradosFahrenheit);
    temperaturaTrasformadaEnGradosCentigrados = (temperaturaEnGradosFahrenheit - 32) / 1.8;

    alert(temperaturaEnGradosFahrenheit + " Grados fahrenheit son: " + temperaturaTrasformadaEnGradosCentigrados + " grados centígrados.");
}

function CentigradosFahrenheit () 
{
    var temperaturaEnGradosCentigrados;
	var temperaturaTrasformadaEnGradosFahrenheit;

    temperaturaEnGradosCentigrados = document.getElementById("txtIdTemperatura").value;
    temperaturaEnGradosCentigrados = parseFloat(temperaturaEnGradosCentigrados);
    temperaturaTrasformadaEnGradosFahrenheit = temperaturaEnGradosCentigrados * 1.8 + 32;

    alert(temperaturaEnGradosCentigrados + " Grados centigrado son: " + temperaturaTrasformadaEnGradosFahrenheit + " grados fahrenheit.");
}