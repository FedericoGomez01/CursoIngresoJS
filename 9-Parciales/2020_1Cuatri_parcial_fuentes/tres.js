/*
En el ingreso a un viaje en avion nos solicitan nombre , edad, 
sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/
function mostrar()
{
	var ingreso;
	var sexo;
	var nombre;
	var edad;
	var estadoCivil;
	var temperatura;
	var acumulador;
	var valortemp;
	var mayortemp;
	var mayoresviudos;

	ingreso = "si"
	acumulador = 0;
	ingreso = ingreso.toLocaleLowerCase()
	valortemp = 0;

	while(ingreso == "si")
	{
		nombre = prompt("Ingrese el nombre de la persona");
		edad = prompt("Ingrese la edad de la persona");
		sexo = prompt("Ingrese el sexo de la persona: 'f' o 'm'");
		estadoCivil = prompt("Ingrese el estado civil de la persona: 'soltero', 'casado' o 'viudo'");
		temperatura = prompt("Ingrese la temperatura de la persona");
		temperatura = parseFloat(temperatura);

		if(temperatura > valortemp)
		{
			mayortemp = nombre;
		}

		if(estadoCivil == "viudo" && edad > 17)
		{
			mayoresviudos = mayoresviudos + 1;
		}

		if(sexo == "m" && estadoCivil == "soltero")
		{
			
		}


		ingreso = prompt("Va a ingresar una nueva persona: 'si', 'no'");
	}


}
