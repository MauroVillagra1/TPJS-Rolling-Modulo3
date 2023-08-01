let edad = parseInt(prompt("Ingrese su edad:"));

if (isNaN(edad)) {
  document.write("La edad ingresada no es un número válido.");
} else {
  if (edad >= 18) {
    document.write("Ya puedes conducir.");
  } else {
    document.write("No puedes conducir aún.");
  }
}