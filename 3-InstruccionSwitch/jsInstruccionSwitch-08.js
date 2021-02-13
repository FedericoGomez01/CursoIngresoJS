/**
Al seleccionar un destino informar si hace 
FRIO o CALOR en ese destino
*/

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	console.log(destinoIngresado);

	switch (destinoIngresado)
	{
		case "Cataratas":
		case "Mar del plata":
			alert("Calor");
			break;
		default:
			alert("Frio");
			break;
	}

}//FIN DE LA FUNCIÓN