/*
Enunciado:
Bienvenidos.
mostrar por alert el mensaje "usted es xxxxx y vive en la localidad de xxxxxxxx".
*/

function mostrar()
{
  var nombre;
  var localidad;

  //entrada de datos.
  nombre = document.getElementById('elNombre').value;
  localidad = document.getElementById('laLocalidad').value;

  //salida de datos
  alert("Usted es " + nombre + " y vive en la localidad de " + localidad)

}
