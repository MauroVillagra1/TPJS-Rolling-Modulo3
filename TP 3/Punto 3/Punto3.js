var i=0, dado1, dado2, suma, suma2=0, suma3=0, suma4=0, suma5=0, suma6=0, suma7=0, suma8=0, suma9=0, suma10=0, suma11=0, suma12=0;
var tabla = document.createElement("table");
const apariciones = [];
var tabla = document.createElement("table");

var valor1 = "Texto 1";
var valor2 = "Texto 2";
let todassumas = [];

for(i=0; i<50; i++)
{
    dado1 = Math.ceil(Math.random() * 6);  //Math.ceil redondea el numero, al mas alto y Math.floor al mas bajo
    dado2 = Math.ceil(Math.random() * 6);
    suma = dado1+dado2;
    apariciones.push(suma);
}


for(i=0; i<50; i++)
{
    if(apariciones[i]===2){
        suma2++;
    }
    else if(apariciones[i]===3){
        suma3++;
    }
    else if(apariciones[i]===4){
        suma4++;
    }
    else if(apariciones[i]===5){
        suma5++;
    }
    else if(apariciones[i]===6){
        suma6++;
    }
    else if(apariciones[i]===7){
        suma7++;
    }
    else if(apariciones[i]===8){
        suma8++;
    }
    else if(apariciones[i]===9){
        suma9++;
    }
    else if(apariciones[i]===10){
        suma10++;
    }
    else if(apariciones[i]===11){
        suma11++;
    }
    else if(apariciones[i]===12){
        suma12++;
    }
}

todassumas.push(suma2);
todassumas.push(suma3);
todassumas.push(suma4);
todassumas.push(suma5);
todassumas.push(suma6);
todassumas.push(suma7);
todassumas.push(suma8);
todassumas.push(suma9);
todassumas.push(suma10);
todassumas.push(suma11);
todassumas.push(suma12);


for(i=0; i<12; i++)
{
    var fila1 = document.createElement("tr");
    var celda1 = document.createElement("td");
    var celda2 = document.createElement("td");
    
    if(i===0)
    {
        celda1.textContent = "Suma";
        celda2.textContent = "Apariciones";
        fila1.appendChild(celda1);
        fila1.appendChild(celda2);
    }
    else
    {
        celda1.textContent = i+1;
        celda2.textContent = ""+todassumas[i-1];
        fila1.appendChild(celda1);
        fila1.appendChild(celda2);
    }
    fila1.style.border = "1px solid black";
    celda1.style.border = "1px solid black";
    celda2.style.border = "1px solid black";
    tabla.style.border = "1px solid black";
    tabla.appendChild(fila1);
}


document.body.appendChild(tabla);
