let numero1 = parseInt(prompt("Ingrese el Primer Numero"));
let numero2 = parseInt(prompt("Ingrese el Segundo Numero"));

if(numero1>numero2){
    document.write(numero1+" Es el Numero mas grande");
}
else if(numero2>numero1){
    document.write(numero2+" Es el Numero Mas Grande");
}
else{
    document.write("El numero " + numero1 +" y el Numero "+numero2+" Son Iguales");
}