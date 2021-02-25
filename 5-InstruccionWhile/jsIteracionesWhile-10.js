/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. X
2-Suma de los positivos. X
3-Cantidad de positivos. X
4-Cantidad de negativos. X
5-Cantidad de ceros.     X
6-Cantidad de números pares. X
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var acumuladorNegativos;
	var acumuladorPositivo;

	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorPar;

	var promedioNegativos;
	var promedioPositivo;

	var maximoNegativo;
	var minimoPar;


	acumuladorNegativos = 0;
	acumuladorPositivo = 0;

	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCeros = 0;
	contadorPar = 0;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);

		// validacion de entrada
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("Error reingrese un numero: ");
			numeroIngresado = parseInt(numeroIngresado);
		}


		if(numeroIngresado > 0 )//Positivos
		{
			acumuladorPositivo = acumuladorPositivo + numeroIngresado;
			contadorPositivos ++;
		}
		else
		{
			// negativos
			if(numeroIngresado < 0)
			{
				if(numeroIngresado > maximoNegativo  || contadorNegativos == 0)
				{
					maximoNegativo = numeroIngresado;
				}
				acumuladorNegativos = acumuladorNegativos + numeroIngresado;
				contadorNegativos ++;
			}
			else
			{
				contadorCeros ++ ;
			}
			
		}

		if(numeroIngresado % 2 == 0)// ES PAR
		{
			if( numeroIngresado < minimoPar || contadorPar == 0 )
			{
				minimoPar = numeroIngresado;
			}
			console.log("entro a if par");
			contadorPar++;
		}

	





		
		respuesta = prompt("desea continuar?");
	}//fin del while
	// promedio
	promedioPositivo = acumuladorPositivo / contadorPositivos;
	promedioNegativos = acumuladorNegativos / contadorNegativos;


	document.write("la suma de negativos es :"+ acumuladorNegativos + "<br>");
	document.write("la suma de positivos es :"+ acumuladorPositivo + "<br>");
	document.write("la cantidad de positivos es :"+ contadorPositivos + "<br>");
	document.write("la cantidad de los negativos es :"+ contadorNegativos + "<br>");
	document.write("la cantidad de ceros es :"+ contadorCeros + "<br>");
	document.write("la cantidad de pares es :"+ contadorPar + "<br>");




	document.write("El promedio de los positivos es :"+ promedioPositivo + "<br>");
	document.write("El promedio de los negativos es :"+ promedioNegativos + "<br>");
}//FIN DE LA FUNCIÓN

/*
contadores: 
i++;

acumuladores: 
acumulador = acumulador + numingresado;
*/