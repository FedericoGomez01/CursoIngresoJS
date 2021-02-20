/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	var i;


	claveIngresada = prompt("ingrese el número clave.");
	
	i = 0;

	while((claveIngresada != "utn750") && (i <= 1 ))
	{	
		claveIngresada = prompt("Reingrese la contraseña");

		i = i + 1;
		console.log(i);
	}
	if(i == 2 && claveIngresada != "utn750")
	{
		alert("Su cuenta ah sido bloqueada");
	}
	else
	{
		alert("Ingreso correctamente");
	}
	

	

	
}//FIN DE LA FUNCIÓN
