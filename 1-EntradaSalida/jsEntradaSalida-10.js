/*
Gomez Federico 1H
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var decremento;
	var resultado;

	importe = document.getElementById('txtIdImporte').value;
	importe = parseInt(importe);


	//decremento = importe * 0.25;
	//resultado = importe - decremento;

	//resultado = importe - (importe * 0.25);

	resultado = importe * 0.75

	document.getElementById('txtIdResultado').value = resultado;
}
