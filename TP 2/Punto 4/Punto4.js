let suma = 0;
let numero=0;

while (numero !== null) {
  numero = prompt("Introduce un número:");
  if (isNaN(numero)) {
    alert("Debe introducir un número válido.");
  } else if(numero!==null){
    suma += parseFloat(numero);
  }
}

document.write("La suma total es: " + parseInt(suma));