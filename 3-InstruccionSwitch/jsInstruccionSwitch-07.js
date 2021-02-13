/**
Gomez Federico 1H
Al selecionar un destino , indicar el punto 
cardinal de nuestro pais en
donde se encuentra Norte, Sur, Este u Oeste
 */

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;


	switch (destinoIngresado)
	{
		case "Mar del plata":
			alert("Se encuentra en el Este de Argentina");
			break;
		case "Cataratas":
			alert("Se encuentra en el Norte de Argentina");
			break;
		default:
			alert("Se encuentra en el sur de Argentina");
			break;
	}

}//FIN DE LA FUNCIÓN