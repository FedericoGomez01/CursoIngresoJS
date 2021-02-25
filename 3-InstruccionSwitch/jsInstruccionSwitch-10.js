/*
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos,
 informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
*/


function mostrar()
{

	var estacionIngresada;
	var informarViaje;
	var localidad;

	estacionIngresada=txtIdEstacion.value;
	localidad = txtIdDestino.value;


	switch (estacionIngresada) 
	{
		case "Invierno":
			switch (localidad) 
			{
				case "Bariloche":
					informarViaje = "Se viaja"; 	
					break;
			
				default:
					informarViaje = "No se viaja";

			}
			break;
		case "Verano":
			switch (localidad) 
			{
				case "Mar del Plata":
				case "Cataratas":
					informarViaje = "Se viaja"; 
					break;
			
				default:
					informarViaje = "No se viaja";
			}
			break;
		case "Otoño":	
			switch (localidad) 
			{
				case "Mar del Plata":
				case "Cataratas":
				case "Bariloche":
				case "Cordoba":
					informarViaje = "Se viaja"; 
					break;
			}
			break;
		case "Primavera":
			switch (localidad) 
			{				
				case "Bariloche":
					informarViaje = "Se viaja"
					break;

				default:
					case "Mar del Plata":
					case "Cataratas":
					case "Cordoba":
					informarViaje = "No se viaja";
					break;
			}		
			break;

	}

	alert("En "+ estacionIngresada + ", " + informarViaje + " a " + localidad);




}//FIN DE LA FUNCIÓN