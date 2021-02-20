/*
Gomez Federico 1H
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");


	while(numeroIngresado > 9 || numeroIngresado < 0)
	{
		numeroIngresado = prompt("Reingrese un numero de 0 a 9 inclusive.");
	}

	document.getElementById("txtIdNumero").value = numeroIngresado;
}//FIN DE LA FUNCIÓN