let bandera = 0;
while(bandera===0){
    let numero = parseInt(prompt("Ingrese un numero"));
if (isNaN(numero)){
    
alert("No se Ingreso un numero adecuado")
}
else{
    bandera=1;
    if(numero >=1 && numero <= 50)
    {
        for(let i=1; i<numero+1; i++)
        {
            document.write(i)
            if(i % 4 ===0)
            {
                document.write(" (Multiplo de 4)");
            }
            if(i % 9 ===0)
            {
                document.write(" (Multiplo de 9)");
            }
            document.write("<br>");
        }
    }
    else
    {
        alert("Numero no valido")
    }
    
}
}
