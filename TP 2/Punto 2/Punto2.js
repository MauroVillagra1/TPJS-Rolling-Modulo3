let nota = prompt("Introduce tu nota del 0-10:");


if (isNaN(nota)) {
  document.write("Introduce un número válido");
} else if (nota < 0 || nota > 10) {
  document.write("Número erróneo");
} else if (nota >= 0 && nota <= 2) {
  document.write ("Muy deficiente");
} else if (nota >= 3 && nota <= 4) {
  document.write("Insuficiente");
} else if (nota >= 5 && nota <= 6) {
  document.write("Suficiente");
} else if (nota == 7) {
  document.write("Bien");
} else if (nota >= 8 && nota <= 9) {
  document.write("Notable");
} else {
  document.write("Sobresaliente");
}