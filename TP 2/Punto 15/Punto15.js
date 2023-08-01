let frase = prompt("Ingrese una frase: ");
let contador=0;

for (let i = 0; i < frase.length; i++) {
  const letra = frase.charAt(i).toLowerCase();

  if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    contador++;
  }
}

document.write("Las Cantidad de Vocales son "+ contador)