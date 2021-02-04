/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var fahrenheit;
	var grados;
	var resultado;

	//Entrada del valor del usuario
	fahrenheit = document.getElementById('txtIdTemperatura').value;

	//Parseo de datos del usuario.
	fahrenheit = parseInt(fahrenheit);


	//conversion a grados centigrados.
	grados = fahrenheit - 32;
	resultado = grados * 5/9;

	resultado = resultado.toFixed(1);

	//Salida del valor.
	alert(fahrenheit + " grados fahrenheit, equivale a " + resultado + " grados Centigrados.");
}

function CentigradosFahrenheit () 
{
	var centigrados;
	var grados;
	var resultado;

	//Entrada del valor del usuario.
	centigrados = document.getElementById('txtIdTemperatura').value;

	//Parseo de los datos.
	centigrados = parseInt(centigrados);

	//pasando de centigrados a fahrenheit
	grados = centigrados * 9/5;
	resultado = grados + 32;

	//salida del programa.
	alert(centigrados + " grados centigrados quivalen a " + resultado +" grados fahrenheit.");
}
