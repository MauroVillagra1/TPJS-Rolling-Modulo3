function mostrarTablaMultiplicar(numero) {
    for (var i = 1; i <= 10; i++) {
      let resultado = numero * i;
      document.write(numero + " x " + i + " = " + resultado + "<br>");
    }
  }
  
  let numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar:"));
  
  mostrarTablaMultiplicar(numero);