let texto = prompt("Ingrese un texto");
let resultado = "";

for (let i = 0; i < texto.length; i++) {
  resultado += texto.charAt(i) + "-";
}

document.write(resultado.slice(0, -1));