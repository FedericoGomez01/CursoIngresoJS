/*
Gomez Federico 1H
Ejercicio 7
*/

function mostrar()
{
	var edad;
	var estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;
	edad = parseInt(edad);

	if(edad < 18 && estadoCivil == "Casado" || "Divorciado")
	{
		alert("Es muy pequeño para NO ser soltero");
	}

}//FIN DE LA FUNCIÓN