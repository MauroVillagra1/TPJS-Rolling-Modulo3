let ciudades = [];
let ciudad="";
while(ciudad!=null)
{
    ciudad = prompt("Introduce Una Ciudad");
    ciudades.push(ciudad);
}

ciudades.pop(); // Elmina el ultimo elemento que es un elemento null
ciudades[1]="Barcelona"; 
ciudades.push("Paris"); //añade al final del array

var lista = "<ul>";

for (var i = 0; i < ciudades.length; i++) {
  lista += "<li>" + ciudades[i] + "</li>";
}

lista += "</ul>"; //ordena el array como una lista


document.write(lista+"<br>");
document.write("Numero de Ciudades: "+ciudades.length+"<br>");
document.write("Ciudad 1: "+ciudades[0]+"<br>Ciudad 3: "+ciudades[2]+"<br>Ultima Ciudad: "+ciudades[ciudades.length-2]+"<br>Ultima Ciudad: "+ciudades[ciudades.length-1]);
