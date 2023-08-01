let bandera = 0;
let h=0;
while(bandera===0){
    let fila = parseInt(prompt("Ingrese un Fila"));
    let columna = parseInt(prompt("Ingrese un Columna"));
if (isNaN(fila) && isNaN(columna)){
alert("No se Ingreso un numero adecuado")
}
else{
    if(fila >= 1 && fila <= 50 && columna >= 1 && columna <= 50)
    {
        bandera=1;
        for(let i=1; i<fila+1; i++)
        {
            for(let j=1; j<columna+1; j++)
            {
                h++;        
                document.write((fila*columna)-(h-1)+"\n");
            }
            document.write("<br>");
        }

    }
    else{
        alert("Numero no valido");
    }
}
}
