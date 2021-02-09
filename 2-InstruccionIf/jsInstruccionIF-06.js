function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad > 18)
	{
		alert("Sos mayor de edad");
	}
	else if(edad > 12 && edad < 18)
	{
		alert("Sos un adolescente");
	}
	else
	{
		alert("Sos un niño");
	}


}//FIN DE LA FUNCIÓN