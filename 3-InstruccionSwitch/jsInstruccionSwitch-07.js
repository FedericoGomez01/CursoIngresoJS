/**
Gomez Federico 1H
Al selecionar un destino , indicar el punto 
cardinal de nuestro pais en
donde se encuentra Norte, Sur, Este u Oeste


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

/*
Gomez Federico 1 H
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, se pide el ingreso de una 
estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un 
descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un 
aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un 
aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio 
sin descuento
*/



function mostrar()
{
	var estacionAño;
	var localidad;
	var tarifa;
	var descuento;
	var aumento;

	estacionAño = document.getElementById("txtIdEstacion").value;
	localidad = document.getElementById("txtIdDestino").value;

	tarifa = 15000;

	if(estacionAño == "Invierno")
	{
		if(localidad == "Bariloche")
		{
			aumento = 0.2;
		}
		else
		{
			if(localidad == "Mar del plata")
			{
				descuento = 0.2;
			}
			else
			{
				descuento = 0.1;
			}
		}
	}
	else
	{
		if(estacionAño == "Verano")
		{
			if(localidad == "Bariloche")
			{
				descuento = 0.2;
			}
			else
			{
				if(localidad == "Mar del plata")
				{
					aumento = 0.2;
				}
				else
				{
					aumento = 0.1;
				}
			}
		}
		else
		{
			if(localidad == "Cordoba")
			{
				aumento = 0;
			}
			else
			{
				aumento = 0,1;
			}

		}
	}


	precioFinal = tarifa - (tarifa*descuento);
	precioFinal = tarifa + (tarifa*aumento);

	console.log("precio final: " + precioFinal + "aumento: " + aumento + "descuento: " + descuento);
	alert(precioFinal);

}