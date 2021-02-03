/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var largo2;
	var ancho;
	var ancho2;
	var rectangulo;

	//recepcion de los datos 
	largo = document.getElementById('txtIdLargo').value;
	ancho = document.getElementById('txtIdAncho').value;

	//parseo de los datos
	largo = parseInt(largo);
	ancho = parseInt(ancho);

	//ecuacion de los datos.
	largo2 = largo + largo;
	ancho2 = ancho + ancho;
	rectangulo =  (largo2 + ancho2) * 3;

	//salida de datos procesados.
	alert("Para rodear el terreno con 3 alambres deberiamos comprar " + rectangulo + " metros.");

}
function Circulo () 
{
	var radio;
	var circunferencia
	var resultado;

	//recepcion de los datos 
	radio = document.getElementById('txtIdRadio').value;

	//parseo de los datos
	radio = parseInt(radio);

	//procesar los datos.

	circunferencia = 2 * 3.14159265359 * radio;

	resultado = circunferencia * 3;

	resultado = resultado.toFixed(2);


	//salida de los datos
	alert("Para reodear 3 veces el diametro del terreno deberiamos comprar " + resultado + " metros.");
}
function Materiales () 
{
	var largo;
	var ancho;
	var area;
	var cemento;
	var cal;

	//recepcion de los datos 
	largo = document.getElementById('txtIdLargo').value;
	ancho = document.getElementById('txtIdAncho').value;

	//parseo de los datos
	largo = parseInt(largo);
	ancho = parseInt(ancho);

	//ecuacion de los datos.
	area = largo * ancho;
	cemento = area * 2;
	cal = area * 3;

	//salida de los datos procesados.
	alert("Para realizar la carpeta del terreno necesitamos " + cemento + " bolsas de cemento y " + cal + " bolsas de cal.");

}