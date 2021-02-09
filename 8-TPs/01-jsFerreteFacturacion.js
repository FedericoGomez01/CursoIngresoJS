/*1.
Gomez Federico 1H
	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;


	//entrada de los datos.
	precioUno = document.getElementById('txtIdPrecioUno').value;
	precioDos = document.getElementById('txtIdPrecioDos').value;
	precioTres = document.getElementById('txtIdPrecioTres').value;

	//parseo de datos.
	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	//ecuacion 
	suma = precioUno + precioDos + precioTres;

	//salida de datos procesados.
	alert("La suma de los 3 productos es: " + suma);

}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var promedio;

	//entrada de los datos
	precioUno = document.getElementById('txtIdPrecioUno').value;
	precioDos = document.getElementById('txtIdPrecioDos').value;
	precioTres = document.getElementById('txtIdPrecioTres').value;

	//parsear de datos.
	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	//ecuacion de los datos.
	promedio = (precioUno + precioDos + precioTres) / 3;

	//toFixed para achicar el numero float.
	promedio = promedio.toFixed(2);

	//salida de los datos procesados.
	alert("El promedio del precio de los tres productos es de: " + promedio);
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var resultado;
	var aumento;

	//entrada de los datos
	precioUno = document.getElementById('txtIdPrecioUno').value;
	precioDos = document.getElementById('txtIdPrecioDos').value;
	precioTres = document.getElementById('txtIdPrecioTres').value;

	//parsear de datos.
	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	//ecuacionde los datos (sumar un 21%)
	aumento = (precioUno + precioDos + precioTres) * 0.21;
	suma = (precioUno + precioDos + precioTres);
	resultado = suma + aumento;
	resultado = resultado.toFixed(2);

	//salida de los datos procesados.
	alert("El precio final de los tres productos mas el 'IVA' es: " + resultado);


}