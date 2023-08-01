function analizarCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
      return "La cadena está formada solo por mayúsculas.";
    } else if (cadena === cadena.toLowerCase()) {
      return "La cadena está formada solo por minúsculas.";
    } else {
      return "La cadena está formada por una mezcla de mayúsculas y minúsculas.";
    }
  }
  
  let texto = prompt("Ingrese una cadena de texto:"); 
  let resultado = analizarCadena(texto); 
  document.write(resultado);