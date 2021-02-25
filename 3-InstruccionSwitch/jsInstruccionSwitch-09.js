/*




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
				descuento = 0;
			}
			else
			{
				aumento = 0.1;
			}

		}
	}

	if(aumento)
	{
		precioFinal = tarifa + (tarifa*aumento);
	}
	else
	{
		precioFinal = tarifa - (tarifa*descuento);
	}


	console.log("precio final: " + precioFinal + "aumento: " + aumento + "descuento: " + descuento);
	alert(precioFinal);

}
Gomez Federico 1H

una agencia de viajes debe sacar las tarifas de los viajes,
se cobra $15.000 por cada estadia como base, se 
pide el ingreso de una estacion del año y localidad
para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas
y Cordoba tiene un descuento del 10% Mar del plata tiene
un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas
y Cordoba tiene un aumento del 10% Mar del plata tiene
un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento
del 10% cataratas tiene un aumento del 10% Mar del
plata tiene un aumento del 10% y Cordoba tiene el 
precio sin descuento
*/

function mostrar()
{
	var tarifaViajes;
	var estadiaBase;
	var estacionDelAño;
	var localidad;
	var aumento;

	estadiaBase = 15000;

	estacionDelAño = document.getElementById('txtIdEstacion').value;
	localidad = document.getElementById('txtIdDestino').value;


	switch (estacionDelAño) 
	{
		case "Invierno":
			switch (localidad) 
			{
				case "Bariloche":
					aumento = 1.20;
					break;
				case "Cataratas":
				case "Cordoba":
					aumento = 0.90;
					break;
				case "Mar del Plata":
					aumento = 0.80;
					break;
			}
			break;
		case "Verano":
			switch (localidad) 
			{
				case "Bariloche":
					aumento = 0.80;
					break;
				case "Cataratas":
				case "Cordoba":
					aumento = 1.10;
					break;
				case "Mar del Plata":
					aumento = 1.20;
					break;
			}
			break;
		default:
			switch (localidad) 
			{
				case "Bariloche":
				case "Mar del Plata":
				case "Cataratas":
					aumento = 1.10;
					break;
				case "Cordoba":
					aumento = 1;
			}
			break;
	}

	tarifaViajes = estadiaBase * aumento;

	alert("El precio del viaje que quiere realizar es de: "+ tarifaViajes);
}