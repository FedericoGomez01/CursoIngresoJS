function mostrar()
{
	var edad;

	//entrada de datos
	edad = document.getElementById ("txtIdEdad").value;

	//Parsear la edad
	edad = parseInt(edad);

	//Condicion
	if(edad >= 18)
	{
		alert("eres mayor de edad");
	}
	else
	{
		alert("no eres mayor de edad");
	}

}//FIN DE LA FUNCIÓN