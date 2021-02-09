/*
Realizar el algoritmo que pida el ancho 
y el largo de un rectángulo por prompt y
 que muestre el perímetro por alert.
*/
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	//Entrada de los datos.
	ancho = prompt("Ingrese el numero del ancho del rectangulo", "Ej.: 10");
	largo = prompt("Ingrese el numero del largo del rectangulo", "Ej.: 30");

	//Parseo de los datos.
	ancho = parseInt(ancho);
	largo = parseInt(largo);

	//Ecuacion de los datos.
	perimetro = (ancho * 2) + (largo * 2);

	//Salida del programa.
	alert("El perimetro del rectangulo es: " + perimetro);


}
