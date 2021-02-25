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

	var acumuladorAlcohol;
	var acumuladorBarbijos;
	var acumuladorJabones;

	var contadorTipo;
	var contadorPrecio;
	var contadorCantidad;
	var contadorMarca;
	var contadorFabricante;

	var contadorAlcohol;
	var contadorJabon;
	var contadorBarbijo;
	
	contadorAlcohol = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;
	contadorTipo = 0;
	contadorPrecio = 0;
	contadorCantidad = 0;
	contadorMarca= 0;
	contadorFabricante = 0;

	i=0;

	acumuladorAlcohol = 0;
	acumuladorJabones = 0;
	acumuladorBarbijos = 0;

	//Entrada de datos.
	while(i<2)
	{
		//Validacion tipo
		tipoIngresado = prompt("Ingrese un prducto de prevención de contagio: 'barbijo', 'alcohol' o 'jabón'");
		while(isNaN(tipoIngresado) == false || tipoIngresado != 'barbijo' && tipoIngresado != 'alcohol' && tipoIngresado != 'jabon')
		{
			tipoIngresado = prompt("Error reingrese el tipo de producto: 'barbijo', 'alcohol' o 'jabón'");
		}
		contadorTipo ++;

		// Validacion precio
		precioIngresado = prompt("Ingrese el precio del producto ingresado:");
		while(isNaN(precioIngresado) == true && precioIngresado < 100 || precioIngresado > 300)
		{
			precioIngresado = prompt("Error reingrese el precio: ");	
		}
		precioIngresado = parseInt(precioIngresado);
		contadorPrecio++;

		// Validacion cantidad
		cantidadUnidades = prompt("Ingrese la cantidad de unidades del producto: maximo 1000");
		while(isNaN(cantidadUnidades) == true && cantidadUnidades < 0 || cantidadUnidades > 1000)
		{
			cantidadUnidades = prompt("Error reingrese la cantidad de unidades: maximo 1000 ");
				
		}
		cantidadUnidades = parseInt(cantidadUnidades);
		contadorCantidad++;

		// Validacion de Marca
		marcaIngresada + prompt("Ingrese la marca del producto:");
		while(isNaN(marcaIngresada) == false)
		{
			marcaIngresada = prompt("Error reingrese marca:  ");
		}

		contadorMarca++;
		// Validacion de fabricante
		fabricante = prompt("Ingrese la fabricante del producto:");
		while(isNaN(fabricante) == false)
		{
			fabricante = prompt("Error reingrese fabricante:  ");
			
		}
		contadorFabricante++;

		switch (tipoIngresado) 
		{
			case "alcohol":
				acumuladorAlcohol = acumuladorAlcohol + cantidadUnidades;

				if(precioIngresado < alcoholBarato || contadorAlcohol == 0)
				{
					// a)Del más barato de los alcohol, la cantidad de unidades y el fabricante
					alcoholBarato = precioIngresado;
					console.log("contador cantidad" + contadorCantidad + precioIngresado+ "  alcoholbarato"+alcoholBarato);
					alcoholBaratoFabricante = fabricante;
					alcoholBaratoCantidad = cantidadUnidades;
					contadorAlcohol ++;
				}
				else
				{
					alcoholBarato = "No hay alcohol"
				}	
				// B) Del tipo con mas unidades, el promedio por compra
			case "barbijo":
				acumuladorBarbijos = acumuladorBarbijos + cantidadUnidades;
				contadorBarbijo ++;
				break;
			case "jabon":
				acumuladorJabones = acumuladorJabones + cantidadUnidades; //C) cantidad de jabones
				contadorJabon ++;
				break;
			
		}
		i=i+1;
	}

	if(acumuladorJabones > acumuladorAlcohol && acumuladorJabones > acumuladorBarbijos)
	{
		promedio = acumuladorJabones / contadorJabon;
		console.log("jabones prom " +promedio + contadorJabon);
	}
	else 
	{
		if(acumuladorAlcohol > acumuladorJabones && acumuladorAlcohol > acumuladorBarbijos)
		{
			promedio = acumuladorAlcohol / contadorAlcohol;
			console.log("alcohol prom " +promedio + contadorAlcohol);
		}
		else
		{	
			promedio = acumuladorBarbijos / contadorBarbijo;
			console.log("barbijo prom " +promedio + contadorBarbijo);
		}
	}
	
	alert("La cantidad del mas barato de los alcohol " + alcoholBaratoCantidad + " y el fabricante es "+ alcoholBaratoFabricante);
	alert("La cantidad total de jabones es de: " + acumuladorJabones);
	alert("el promedio del tipo de producto con mayor unidades es: " + promedio);

}*/

/*
Federico Gomez 1H 
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
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

//Entrada de 5 productos y validarlos
// a) Del más barato de los alcohol, la cantidad de unidades y el fabricante 
// b) Del tipo con mas unidades, el promedio por compra
// c) Cuántas unidades de jabones hay en total


function mostrar()
{
	var i;

	var tipoIngresado;
	var precioIngresado;
	var cantidadIngresada;
	var marcaIngresada;
	var fabricanteIngresado;
	var acumuladorAlcohol;
	var acumuladorBarbijos
	var acumuladorJabon;
	var contadorAlcohol;
	var contadorJabon;
	var contadorBarbijo;
	var alcoholBarato;
	var alcoholBaratoUnidades;
	var alcoholBaratoFabricante;

	i=0;
	acumuladorAlcohol = 0;
	acumuladorBarbijos = 0;
	acumuladorJabon = 0;
	contadorAlcohol = 0;
	contadorJabon = 0;
	contadorBarbijo = 0;

	while(i<5)
	{
		tipoIngresado = prompt("Ingrese el tipo de producto: alcohol, barbijo o jabon ");
		while(isNaN(tipoIngresado) == false || tipoIngresado != 'barbijo' && tipoIngresado != 'jabon' && tipoIngresado != 'alcohol')
		{
			tipoIngresado = prompt("ERROR. Ingrese nuevamente el tipo de producto: alcohol, barbijo o jabon ");
		}

		precioIngresado = prompt("Ingrese el precio");
		while(isNaN(precioIngresado) == true && precioIngresado < 100 || precioIngresado > 300)
		{
			tipoIngresado = prompt("ERROR. Ingrese nuevamente el precio");
		}
		precioIngresado = parseInt(precioIngresado);


		cantidadIngresada = prompt("Ingrese la cantidad");
		while(isNaN(cantidadIngresada) == true && cantidadIngresada < 1 || cantidadIngresada > 1000)
		{
			tipoIngresado = prompt("ERROR. Ingrese nuevamente la cantidad");
		}
		cantidadIngresada = parseInt(cantidadIngresada);


		marcaIngresada = prompt("Ingrese la marca del producto");
		while(isNaN(marcaIngresada) == false)
		{
			marcaIngresada = prompt("ERROR. Ingrese nuevamente la marca");
		}

		fabricanteIngresado = prompt("Ingrese el fabricante del producto");
		while(isNaN(fabricanteIngresado) == false)
		{
			fabricanteIngresado = prompt("ERROR. Ingrese nuevamente el fabricante");
		}

		// a) Del más barato de los alcohol, la cantidad de unidades y el fabricante 
		// b) Del tipo con mas unidades, el promedio por compra
		// c) Cuántas unidades de jabones hay en total
		switch (tipoIngresado) {
			case "alcohol":
				acumuladorAlcohol = acumuladorAlcohol + cantidadIngresada;

				if(precioIngresado < alcoholBarato || contadorAlcohol == 0)
				{
					alcoholBarato = precioIngresado;
					alcoholBaratoUnidades = cantidadIngresada;
					alcoholBaratoFabricante = fabricanteIngresado;
				}

				contadorAlcohol ++;
				break;

			case "jabon":
				acumuladorJabon = acumuladorJabon + cantidadIngresada; //c resuelto en esta linea
				contadorJabon ++;
				break;
			case "barbijo":
				acumuladorBarbijos = acumuladorBarbijos + cantidadIngresada;
				contadorBarbijo++;


		}
		i=i+1;
	}
	
	if(acumuladorAlcohol > acumuladorBarbijos && acumuladorAlcohol > acumuladorJabon)
	{
		promedio = acumuladorAlcohol / contadorAlcohol;
	}
	else
	{
		if(acumuladorBarbijos > acumuladorAlcohol && acumuladorBarbijos > acumuladorJabon)
		{
			promedio = acumuladorBarbijos / contadorBarbijo;
		}
		else
		{
			promedio = acumuladorJabon / contadorJabon;
		}
	}


	alert("Del más barato de los alcohol, la cantidad de unidades es " + alcoholBaratoUnidades+ " y el fabricante es " + alcoholBaratoFabricante);
	alert("el promedio de el articulo con mas unidades es " + promedio);
	alert("cantidad de jabones en total es de " + acumuladorJabon);
}
