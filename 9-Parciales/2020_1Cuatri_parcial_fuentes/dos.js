/*
Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/

function mostrar()
{
  var respuesta;
  var tipoIngresado;
  var cantidadIngresada;
  var precioIngresado;
  var acumuladorCantidad;
  var brutoSinDescuento;
  var acumuladorArena;
  var acumuladorCemento;
  var acumuladorCal;
  var precioArena;
  var precioCal;
  var precioCemento;
  var masBolsas;
  var masCaro;


  acumuladorCal = 0;
  acumuladorArena = 0;
  acumuladorCemento = 0;

  acumuladorCantidad = 0;
  
  respuesta = "si";

  while(respuesta == "si")
  {
    tipoIngresado = prompt("Ingrese el tipo de producto");
    while(isNaN(tipoIngresado) == false || tipoIngresado != 'arena' && tipoIngresado != 'cal' && tipoIngresado != 'cemento')
    {
      tipoIngresado = prompt("ERROR. Ingrese el tipo de producto nuevamente");
    }
    
    cantidadIngresada = prompt("Ingrese la cantidad de bolsas");
    while(isNaN(cantidadIngresada) == true)
    {
      cantidadIngresada = prompt("ERROR. Ingrese la cantidad de bolsas nuevamente");
    }
    cantidadIngresada = parseInt(cantidadIngresada);
    acumuladorCantidad = acumuladorCantidad + cantidadIngresada;

    precioIngresado = prompt("Ingrese el precio del producto");
    while(isNaN(precioIngresado) == true || precioIngresado < 0)
    {
      precioIngresado = prompt("ERROR. Ingrese el precio del producto nuevamente");
    }
    precioIngresado = parseInt(precioIngresado);


    switch (tipoIngresado) 
    {
      case 'arena':
        acumuladorArena = acumuladorArena + cantidadIngresada;
        precioArena = precioIngresado ;
        break;
      case 'cal':
        acumuladorCal = acumuladorCal + cantidadIngresada;
        precioCal = precioIngresado;
      break;
      case 'cemento':
        acumuladorCemento = acumuladorCemento + cantidadIngresada;
        precioCemento = precioIngresado;



    }





    respuesta = prompt("Quiere ingresar otro producto: 'si', 'no'")
  }

  // precio mas caro
  if(precioArena > precioCal && precioArena > precioCemento)
	{
		masCaro = "arena";
	}
	else
	{
		if(precioCal > acumuladorAlcohol && precioCal > precioCemento)
		{
      masCaro = "cal";
		}
		else
		{
      masCaro = "cemento";
		}
	}

  // mayor cantidad de bolsas
  if(acumuladorArena > acumuladorCal && acumuladorArena > precioCemento)
	{
		masBolsas = "arena";
	}
	else
	{
		if(acumuladorCal > acumuladorArena && acumuladorCal > acumuladorCemento)
		{
      masBolsas = "cal";
		}
		else
		{
      masBolsas = "cemento";
		}
	}
 
  //ingreso bruto sin descuento
  brutoSinDescuento = (acumuladorArena * precioArena)+ (acumuladorCal * precioCal) + (acumuladorCemento * precioCemento);
  console.log("acm arena" + acumuladorArena + " acumulador cal" + acumuladorCal + "acumulador de cemento " + acumuladorCemento);
  console.log("acm arena" + precioArena + " acumulador cal" + precioCal + "acumulador de cemento " + precioCemento);
  alert("El informe a pagar bruto sin descuento es " + brutoSinDescuento);
  if(acumuladorCantidad>9 && acumuladorCantidad<29)
  {
    descuento = 0.85;
    importeConDescuento = brutoSinDescuento * descuento;
  }
  else
  {
    descuento = 0.75;
    importeConDescuento = brutoSinDescuento * descuento;


  }
  alert("el precio con descuento es de " + importeConDescuento );
  alert("el tipo con mas cantidad de bolsas es " + masBolsas );
  alert("El tipo con el precio mas caro es: " + masCaro );
}
