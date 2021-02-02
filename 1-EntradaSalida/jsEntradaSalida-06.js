/*
Gomez Federico 1H
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numUno;
	var numDos;
	var suma;

	//Entradas
	numUno = txtIdNumeroUno.value;
	numDos = txtIdNumeroDos.value;
	
	//Conversiones (Parseo)
	/* El parseInt() es una funcion que toma el 
	dato almacenado y lo convierte en numerico*/
	numUno = parseInt(numUno);
	numDos = parseInt(numDos);


	suma = numUno + numDos;

	alert("La suma de los dos numeros es: "+ suma);
}

