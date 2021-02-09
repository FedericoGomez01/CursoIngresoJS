/*
Goomez Federico 1H 
Ejercicio 10
Al presionar el Botón, asignar una nota RANDOM al examen y 
mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	var notas;;

	notas = Math.floor(Math.random() * 11);
	alert("La nota random es " + notas);


	if(notas > 8)
	{
		alert("EXCELENTE");
	}
	else
	{
		if(notas >3 && notas < 9)
		{
			alert("APROBÓ");
		}
		else
		{
			alert("Vamos, la proxima se puede");
		}
	}
}//FIN DE LA FUNCIÓN