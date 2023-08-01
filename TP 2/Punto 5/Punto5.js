let dni, bandera=0, valorLetra=0, Letra;


while(bandera!==1)
{
    dni = parseInt(prompt("Ingrese un Dni"));
    if(isNaN(dni)){
      
        alert("El Numero no es valido")
            
    }
    else{
        if (dni >=0 && dni <=99999999 && dni!==null){
            bandera=1;
            valorLetra = dni % 23;
            if (valorLetra===0){
                Letra="T";
            }
            else if (valorLetra===1){
                Letra="R";
            }
            else if (valorLetra===2){
                Letra="W";
            }
            else if (valorLetra===3){
                Letra="A";
            }
            else if (valorLetra===4){
                Letra="G";
            }
            else if (valorLetra===5){
                Letra="M";
            }
            else if (valorLetra===6){
                Letra="Y";
            }
            else if (valorLetra===7){
                Letra="F";
            }
            else if (valorLetra===8){
                Letra="P";
            }
            else if (valorLetra===9){
                Letra="D";
            }
            else if (valorLetra===10){
                Letra="X";
            }
            else if (valorLetra===11){
                Letra="B";
            }
            else if (valorLetra===12){
                Letra="N";
            }
            else if (valorLetra===13){
                Letra="J";
            }
            else if (valorLetra===14){
                Letra="Z";
            }
            else if (valorLetra===15){
                Letra="S";
            }
            else if (valorLetra===16){
                Letra="Q";
            }
            else if (valorLetra===17){
                Letra="V";
            }
            else if (valorLetra===18){
                Letra="H";
            }
            else if (valorLetra===19){
                Letra="L";
            }
            else if (valorLetra===20){
                Letra="C";
            }
            else if (valorLetra===21){
                Letra="K";
            }
            else{
                Letra="E";
            }
        }
      
        else
        {
            alert("Dni no valido")
        }
    }    
}

document.write("La letra encriptada es: "+ Letra);


