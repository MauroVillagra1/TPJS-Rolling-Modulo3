let cadena = "";
let siguiente = true;

while (siguiente===true) {
  let entrada = prompt("Ingrese una cadena de texto o presione cancelar para finalizar:");

  if (entrada === null) {
    siguiente = false;
  } else {
    cadena += entrada + "-";
  }
}

if (cadena === "") {
  document.write("No se ingresó ninguna cadena de texto.");
} else {
  cadena = cadena.slice(0, -1); 
  document.write("Cadenas ingresadas: " + cadena);
}