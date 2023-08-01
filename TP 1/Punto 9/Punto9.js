let frase = prompt("Ingrese una frase: ");
let vocales = "";

for (let i = 0; i < frase.length; i++) {
  const letra = frase.charAt(i).toLowerCase();

  if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    vocales += letra;
  }
}

document.write("Las Vocales son "+ vocales)