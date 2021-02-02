/*
Gomez Federico 1H
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numUno;
	var numDos;
	var sumar;

	numUno = document.getElementById('txtIdNumeroUno').value;
	numDos = document.getElementById('txtIdNumeroDos').value;

	numUno = parseInt(numUno);
	numDos = parseInt(numDos);

	sumar = numUno + numDos;

	alert("El resultado de la suma de sus numeros es: " + sumar);
}
function restar()
{
	var numUno;
	var numDos;
	var restar;

	numUno = document.getElementById('txtIdNumeroUno').value;
	numDos = document.getElementById('txtIdNumeroDos').value;

	numUno = parseInt(numUno);
	numDos = parseInt(numDos);

	restar = numUno - numDos;

	alert("El resultado de la suma de sus numeros es: " + restar);
}

function multiplicar()
{ 
	var numUno;
	var numDos;
	var multiplicar;

	numUno = document.getElementById('txtIdNumeroUno').value;
	numDos = document.getElementById('txtIdNumeroDos').value;

	numUno = parseInt(numUno);
	numDos = parseInt(numDos);

	multiplicar = numUno * numDos;

	alert("El resultado de la suma de sus numeros es: " + multiplicar);
}

function dividir()
{
	var numUno;
	var numDos;
	var division;

	numUno = document.getElementById('txtIdNumeroUno').value;
	numDos = document.getElementById('txtIdNumeroDos').value;

	numUno = parseInt(numUno);
	numDos = parseInt(numDos);

	division = numUno / numDos;

	alert("El resultado de la suma de sus numeros es: " + division);
}