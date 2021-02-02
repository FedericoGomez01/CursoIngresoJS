/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreDelEmpleado;

	nombreDelEmpleado = prompt("Ingrese el nombre:", "Nombre");
	//txtIdNombre.value = nombreDelEmpleado;
	document.getElementById('txtIdNombre').value = nombreDelEmpleado;

}



/*
Entradas: prompt,id.value o document.getElementById('').value
Procesos: concatenar
Salidas: alert, conosle.log, document.write, id.value o document.getElementById('').value

*/