function calcularPerimetroRectangulo(base, altura) {
    let perimetro = 2 * (base + altura);
    return perimetro;
  }
  
  let base = parseFloat(prompt("Ingrese el valor de la base del rectángulo:"));
  let altura = parseFloat(prompt("Ingrese el valor de la altura del rectángulo:"));
  
  let perimetro = calcularPerimetroRectangulo(base, altura);
  
  document.write("El perímetro del rectángulo es: " + perimetro);