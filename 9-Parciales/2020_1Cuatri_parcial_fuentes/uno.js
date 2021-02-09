/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	var productoUno;
	var productoDos;
	var productoTres;    
	var precioUno;
	var precioDos;
	var precioTres;
	var unidadesUno;
	var unidadesDos;
	var unidadesTres;


	//Entrada de datos.
	productoUno = prompt("Ingrese el primer producto (sin mayuscula): ", "Ej.: alcohol" );
	preioUno = prompt("Ingrese el precio del primer (sin mayuscula): ", "Ej.:150");
	unidadesUno = prompt("Ingrese la cantidad de unidades que tiene el primer producto (sin mayus):", "Desde 1 hasta 999");

	productoDos = prompt("Ingrese el segundo producto (sin mayuscula): ", "Ej.: alcohol" );
	precioDos = prompt("Ingrese el precio del segundo producto (sin mayuscula): ", "Ej.:150");
	unidadesDos = prompt("Ingrese la cantidad de unidades que tiene el segundo producto (sin mayus):", "Desde 1 hasta 999");

	productoTres = prompt("Ingrese el segundo producto (sin mayuscula): ", "Ej.: alcohol" );
	precioTres = prompt("Ingrese el precio del segundo producto (sin mayuscula): ", "Ej.:150");
	unidadesTres = prompt("Ingrese la cantidad de unidades que tiene el segundo producto (sin mayus):", "Desde 1 hasta 999");


	//validacion y seleccion.

	if (productoUno, productoDos, productoTres == "alcohol" or "jabon" or "barbijo")
	
		if (precioDos, precioDos, precioTres > 100 and <300)

		
			if (unidadesUno, unidadesDos, unidadesTres > 0 and < 1000)

				//seleccion de precio
				if (unidadesUno >= unidadesDos and unidadesTres)
					alert("");






			else
				alert("las unidades no cumplen los requisitos");
		else
			alert("El precio esta fuera de los estandares de estos productos");
	else 
		alert("Los productos seleccionados no cumplen con la normativa de seguridad contra el Covid-19");


}