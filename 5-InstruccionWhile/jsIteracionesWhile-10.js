/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;
	var sumaPositivo;
	var contadorPositivos;
	var contadorNegarivos;
	var contadorCeros;

	contadorPositivos = 0;
	contadorNegarivos = 0;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado == 0)
		{
			contadorCeros ++ ;
		}
		else
		{
			if()
		}
		if(numeroIngresado > 0 )
		{
			sumaPositivo = sumaPositivo + numeroIngresado;
			contadorPositivos ++;
		}
		else
		{
			sumaNegativos = sumaNegativos + numeroIngresado;
			contadorNegarivos ++;
		}

		
		respuesta=prompt("desea continuar?");
	}//fin del while

	document.write("la suma de negativos es :"+sumaNegativos);
}//FIN DE LA FUNCIÓN