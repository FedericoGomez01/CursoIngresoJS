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
	var i;
	
	var tipoIngresado;
	var precioIngresado;
	var cantidadUnidades;
	var marcaIngresada;
	var alcoholBarato;
	var alcoholBaratoFabricante;
	var alcoholBaratoCantidad;
	var banderaAlcohol;
	
	
	i=0;

	banderaAlcohol = true;

	//Entrada de datos.
	while(i<2)
	{

		
		
		

		//Validacion tipo
		tipoIngresado = prompt("Ingrese un prducto de prevención de contagio: 'barbijo', 'alcohol' o 'jabón'");
		while(isNaN(tipoIngresado) == false || tipoIngresado != 'barbijo' && tipoIngresado != 'alcohol' && tipoIngresado != 'jabon')
		{
			tipoIngresado = prompt("Error reingrese el tipo de producto: 'barbijo', 'alcohol' o 'jabón'");
			tipoIngresado = parseInt(tipoIngresado);
		}

		// Validacion precio
		precioIngresado = prompt("Ingrese el precio del producto ingresado:");
		while(isNaN(precioIngresado) == true || precioIngresado < 100 && precioIngresado > 300)
		{
			precioIngresado = prompt("Error reingrese el precio: ");
			precioIngresado = parseInt(precioIngresado);
		}

		// Validacion cantidad
		cantidadUnidades + prompt("Ingrese la cantidad de unidades del producto:");
		while(isNaN(cantidadUnidades) == false)
		{
			cantidadUnidades = prompt("Error reingrese la cantidad de unidades: ");
			cantidadUnidades = parseInt(cantidadUnidades);
		}

		// Validacion de Marca
		marcaIngresada + prompt("Ingrese la marca del producto:");
		while(isNaN(marcaIngresada) == false)
		{
			marcaIngresada = prompt("Error reingrese marca:  ");
			marcaIngresada = parseInt(marcaIngresada);
		}

		// Validacion de fabricante
		fabricante = prompt("Ingrese la fabricante del producto:");
		while(isNaN(fabricante) == false)
		{
			fabricante = prompt("Error reingrese fabricante:  ");
			fabricante = parseInt(fabricante);
		}


		// Tengo que hacer switch 
		// Del más barato de los alcohol, la cantidad de unidades y el fabricante
		/*if(tipoIngresado == "alcohol")
		{
			if(precioIngresado < alcoholBarato || banderaAlcohol == true)
			{
				alcoholBarato = precioIngresado;
				console.log(alcoholBarato);
	
				alcoholBaratoFabricante = fabricante;
				alcoholBaratoCantidad = cantidadUnidades;
				console.log("fabricante "+alcoholBaratoFabricante)
				console.log("Cantidad "+alcoholBaratoCantidad)

				
				banderaAlcohol = false;
			}
		}*/

		switch (tipoIngresado) 
		{
			case "alcohol":
				alcoholBaratoFabricante = fabricante;
				alcoholBaratoCantidad = cantidadUnidades;
				break;
		
			default:
				break;
		}
		




		i=i+1;
	}
	
	alert("La Cantidad del mas barato de los alcohol" + alcoholBaratoCantidad + " y el fabricante es "+ alcoholBaratoFabricante);
}