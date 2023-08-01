let edades = [];
let nombres = [];
let bandera=0;
let bandera2=0;
let nombre;
let edad;


for (let i = 0; i < 3; i++) {
    bandera=0;
    bandera2=0
    while(bandera2===0){
        nombre = prompt("Introduce un nombre:");    
    if (nombre===null || nombre.length===0 || (/[^a-zA-Z]/.test(nombre))){
        alert("No se Ingreso un nombre adecuado")
    }
    else{
        bandera2=1;
       }
    }
    while(bandera===0){
        edad = parseInt(prompt("Introduce una edad:"));
    if (isNaN(edad)){
    alert("No se Ingreso un numero adecuado")
    }
    else{
     bandera=1;
    }
    }
 
  edades.push(edad);
  nombres.push(nombre);
}

let maxEdad = Math.max(...edades);

document.write("La edad máxima es " + maxEdad);

for (let i = 0; i < edades.length; i++) {
  if (edades[i] === maxEdad) {
    document.write("<br> La edad " + maxEdad + " pertenece a " + nombres[i]);
  }
}