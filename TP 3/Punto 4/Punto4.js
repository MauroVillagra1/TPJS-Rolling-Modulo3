function determinarParImpar(numero) {
    if (numero % 2 === 0) {
      return "El número es par";
    } else {
      return "El número es impar";
    }
  }
  
  var numero = prompt("Ingrese un número entero:"); 
  var resultado = determinarParImpar(parseInt(numero)); 
  document.write(resultado);