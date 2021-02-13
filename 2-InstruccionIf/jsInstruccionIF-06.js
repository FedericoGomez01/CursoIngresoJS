/*function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad > 18)
	{
		alert("Sos mayor de edad");
	}
	else
	{
		if(edad > 12 && edad < 18)
		{
			alert("Sos un adolescente");
		}
		else
		{
			alert("Sos un niño");
		}
	}



}//FIN DE LA FUNCIÓN



Gomez Federico 1H

pedir a una persoan que fue de vaciones , la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento
hata 80km/h= lento
hasta 100= buen ritmo
hasta 120= ahi de la ley
mas = eso no se hace
*/


function mostrar()
{
	var distancia;
	var tiempo;
	var velocidad;

	// Entrada
	distancia = document.getElementById("txtIdEdad").value;
	tiempo = prompt("Ingese el tiempo que tardo en llegar");

	// Parseo
	distancia = parseInt(distancia);
	tiempo = parseInt(tiempo);
	velocidad = distancia/tiempo;

	// Mi info
	console.log("distancia " + distancia);
	console.log("tiempo " + tiempo);
	console.log("velocidad " + velocidad);

	// salida segun velocidad
	if(velocidad < 61)
	{
		alert("muy lento");
	}
	else
	{
		if(velocidad < 81)
		{
			alert("lento");
		}
		else
		{
			if(velocidad < 101)
			{
				alert("buen ritmo");
			}
			else
			{
				if(velocidad < 121)
				{
					alert("ahi de la ley");
				}
				else
				{
					alert("Eso no se hace");
				}
			}
		}
	}
}