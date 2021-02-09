function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad > 12 && edad < 17)
	{
		alert("No sos adolescente");
	}


}//FIN DE LA FUNCIÓN