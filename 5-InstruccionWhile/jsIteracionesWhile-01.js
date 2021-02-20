/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.
function mostrar()
{
	var i;//variable de control (i, j, k)

	i = 0;

	while(i < 10)
	{
		

		document.write((i + 1) + "<br>");

		i = i + 1;//proceso de conteo 


	}

}


	contador = 0;
	acumulador = 0;
	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		acumulador = acumulador + 1;
		contador = contador + 1
		respuesta = prompt("Quiere seguir calculando: ")
	}

	alert('iteración while');
//FIN DE LA FUNCIÓN 

Gomez Federico 1H
1. Ingresar 5 numeros, y determinar la cantidad de numeros que son mayores que 10 
y menores 20 (incluisive en ambos casos)
Mismo ejercicio, pero no se cuantos numeros se ingresan.
(Lo decide el usuario). Mostrar tambien el promedio de los numeros que cumplen la condicion.
*/
function mostrar()
{
	var contador;
	var cuentaIngresados;
	var numeroIngresado;
	var ingreso;
	var acumulador;
	var promedio;

	contador = 0;
	cuentaIngresados = 0;
	acumulador = 0;
	ingreso = "si";
	ingreso = ingreso.toLocaleLowerCase();


	while(ingreso == "si")
	{
		numeroIngresado = prompt("Ingresar un valor: ");
		numeroIngresado = parseInt(numeroIngresado);
		

		if(numeroIngresado>9 && numeroIngresado<21 )
		{
			cuentaIngresados = cuentaIngresados + 1;
		}
		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;
		ingreso = prompt("Quiere ingresar un nuevo valor: 'si' o 'no'");
	}
	promedio = acumulador / contador;

	alert("El promedio es de: " + promedio);
	alert("La cantidad de numeros ingresados entre 10 y 20 son: " + cuentaIngresados);
}
