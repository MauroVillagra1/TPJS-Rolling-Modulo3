let texto = prompt("Ingrese un texto");
let caracteres = texto.split("");
let caracteresInvertidos = caracteres.reverse();
let textoInvertido = caracteresInvertidos.join("");
document.write(textoInvertido);