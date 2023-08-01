let numero = parseInt(prompt("Ingresa un número"));
let bandera=0;
    if (numero % 2 === 0) {
    document.write("El "+numero+" es divisible por 2 <br>");
    bandera=1;
  } 
  if (numero % 3 === 0) {
    document.write("El "+numero+" es divisible por 3 <br>");
    bandera=1;
  } 
  if (numero % 5 === 0) {
    document.write("El "+numero+" es divisible por 5 <br>");
    bandera=1;
  } 
  if(numero % 7 == 0){
    document.write("El "+numero+" es divisible por 7 <br>");
    bandera=1;
  }
if(bandera===0) {
  document.write("El "+numero+" no es divisible por 2, 3, 5 ni 7");
}