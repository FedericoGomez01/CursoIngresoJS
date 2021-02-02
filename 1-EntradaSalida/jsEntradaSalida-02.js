/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;

	nombre = prompt("Por favor, ingrese su nombre:", "ej.: Juan lopez");
	//el prompt le retorna el dato asignado por el usuario a la variable 'nombre'
	alert("El nombre ingresado es: "+ nombre);
}

