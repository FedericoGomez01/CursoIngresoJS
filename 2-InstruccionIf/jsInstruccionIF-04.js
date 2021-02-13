/*
Gomez Federico 1H
Ejercicio 4
Al ingresar una edad debemos informar si la persona 
es adolescente, edad entre 13 y 17 años (inclusive) 


function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	if(edad >= 13 && edad <= 17)
	{
		alert("Sos un adolescente");
	}
	else
	{
		alert("No sos un adolescente");
	}

}//FIN DE LA FUNCIÓN*/

/*
Gomez Federico 1H

ingresar el nombre y los datos requeridos para calcular el IMC , e informar a la persona si es:
Bajo peso
Peso normal
Preobesidad
Obesidad I
Obesidad II
Obesidad III
*/

function mostrar()
{
	var nombre;
	var peso;
	var altura;
	var imc;

	nombre = document.getElementById("txtIdEdad").value;
	peso = prompt("Ingrese su peso");
	altura = prompt("Ingrese su altura");

	peso = parseFloat(peso);
	altura = parseFloat(altura);

	imc = peso / (altura**2);

	console.log("su peso"+peso);
	console.log("su altura "+altura);
	console.log("su imc " +imc);

	if(imc < 18.50) // bajo peso
	{
		alert("bajo peso");
	}
	else
	{
		if(imc < 25) // peso saludable 
		{
			alert("Peso saludable");
		}
		else
		{
			if(imc < 30) //preobesidad
			{
				alert("preobesidad");
			}
			else
			{
				if(imc < 35)//obesidad i 
				{
					alert(" Obesidad I");
				}
				else
				{
					if(imc < 40)
					{
						alert("obesidad II");
					}
					else
					{
						alert("Obesidad III");
					}
				}
			}
		}
	}
}