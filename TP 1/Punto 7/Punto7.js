let numero1 = parseInt(prompt("Ingrese el Primer Numero"));
let numero2 = parseInt(prompt("Ingrese el Segundo Numero"));
let numero3 = parseInt(prompt("Ingrese el Tercer Numero"))

if(numero1>numero2 && numero1>numero3){
    document.write(numero1+" Es el Numero mas grande");
}
else if(numero2>numero1 && numero2>numero3){
    document.write(numero2+" Es el Numero Mas Grande");
}
else if(numero3>numero1 && numero3>numero1){
    document.write(numero3+" Es el Numero Mas Grande");
}
else{
    document.write("Los numeros " + numero1 +", "+numero2+", "+numero3+" Son Iguales");
}