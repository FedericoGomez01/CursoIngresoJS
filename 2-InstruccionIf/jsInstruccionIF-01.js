function mostrar()
{
	var edad;

	//entrada de datos
	edad = document.getElementById ("txtIdEdad").value;

	//Parsear la edad
	edad = parseInt(edad);

	//sentencia
	if(edad == 15)
	{
		alert("niña bonita");
	}
	else
	{
		alert("no ganaste un millon de dolares");
	}
}
//FIN DE LA FUNCIÓN
//txtIdEdad

/*
aritmeticos: +, -, *, /, %
relacionales: >, <, <=, >=, !=, ==
logicos: && (and), || (or), ! (no)
*/