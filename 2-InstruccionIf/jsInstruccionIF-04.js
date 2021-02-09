/*
Gomez Federico 1H
Ejercicio 4
Al ingresar una edad debemos informar si la persona 
es adolescente, edad entre 13 y 17 años (inclusive) 
*/

function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	if(edad >= 13 && edad <= 17)
	{
		alert("Sos un adolescente");
	}
	else
	{
		alert("No sos un adolescente");
	}

}//FIN DE LA FUNCIÓN