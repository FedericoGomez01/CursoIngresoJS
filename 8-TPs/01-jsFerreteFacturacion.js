/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var numUno;
	var numDos;
	var numTres;
	var suma;


	//entrada de los datos.
	numUno = document.getElementById('txtIdPrecioUno').value;
	numDos = document.getElementById('txtIdPrecioDos').value;
	numTres = document.getElementById('txtIdPrecioTres').value;

	//parseo de datos.
	numUno = parseInt(numUno);
	numDos = parseInt(numDos);
	numTres = parseInt(numTres);

	//ecuacion 
	suma = numUno + numDos + numTres;

	//salida de datos procesados.
	alert("La suma de los 3 productos es: " + suma);

}
function Promedio () 
{
	var numUno;
	var numDos;
	var numTres;
	var promedio;

	//entrada de los datos
	numUno = document.getElementById('txtIdPrecioUno').value;
	numDos = document.getElementById('txtIdPrecioDos').value;
	numTres = document.getElementById('txtIdPrecioTres').value;

	//parsear de datos.
	numUno = parseInt(numUno);
	numDos = parseInt(numDos);
	numTres = parseInt(numTres);

	//ecuacion de los datos.
	promedio = (numUno + numDos + numTres) / 3;

	//toFixed para achicar el numero float.
	promedio = promedio.toFixed(2);

	//salida de los datos procesados.
	alert("El promedio del precio de los tres productos es de: " + promedio);
}
function PrecioFinal () 
{
	var numUno;
	var numDos;
	var numTres;
	var final;
	var aumento;

	//entrada de los datos
	numUno = document.getElementById('txtIdPrecioUno').value;
	numDos = document.getElementById('txtIdPrecioDos').value;
	numTres = document.getElementById('txtIdPrecioTres').value;

	//parsear de datos.
	numUno = parseInt(numUno);
	numDos = parseInt(numDos);
	numTres = parseInt(numTres);

	//ecuacionde los datos (sumar un 21%)
	aumento = 0.21;
	final = (numUno + numDos + numTres) * aumento;

	//salida de los datos procesados.
	alert("El precio final de los tres productos mas el 'IVA' es: " + final);


}