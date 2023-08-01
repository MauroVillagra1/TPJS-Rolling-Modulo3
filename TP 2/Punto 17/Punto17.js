let texto = prompt("Ingresa un texto:");
let vocales = ["a", "e", "i", "o", "u"];

for (let i = 0; i < texto.length; i++) {
  if (vocales.includes(texto[i].toLowerCase())) {
    let posicion = i + 1;
    document.write("La vocal " +texto[i]+" está en la posición " +posicion);
    break;
  }
}