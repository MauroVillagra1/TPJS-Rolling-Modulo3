class Persona {
    constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.DNI = this.generaDNI();
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.anioNacimiento = anioNacimiento;
    }
  
    mostrarGeneracion() {
      const generaciones = {
        "Generación Z": { rango: { inicio: 1997, fin: 2012 }, rasgo: "nativos digitales" },
        "Millennials": { rango: { inicio: 1981, fin: 1996 }, rasgo: "crecieron con la tecnología" },
        "Generación X": { rango: { inicio: 1965, fin: 1980 }, rasgo: "experiencia en el mundo analógico y digital" },
        "Baby Boomers": { rango: { inicio: 1946, fin: 1964 }, rasgo: "marcaron cambios culturales y sociales" },
        "Silent Generation": { rango: { inicio: 1928, fin: 1945 }, rasgo: "vivieron momentos de guerra y reconstrucción" }
      };
  
      for (let generacion in generaciones) {
        const rango = generaciones[generacion].rango;
        if (this.anioNacimiento >= rango.inicio && this.anioNacimiento <= rango.fin) {
          console.log(`La persona pertenece a la generación "${generacion}" y su rasgo característico es "${generaciones[generacion].rasgo}".`);
          return;
        }
      }
  
      console.log("No se pudo determinar la generación de la persona.");
    }
  
    esMayorDeEdad() {
      if (this.edad >= 18) {
        console.log(`${this.nombre} es mayor de edad.`);
      } else {
        console.log(`${this.nombre} no es mayor de edad.`);
      }
    }
  
    mostrarDatos() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Edad: ${this.edad}`);
      console.log(`DNI: ${this.DNI}`);
      console.log(`Sexo: ${this.sexo}`);
      console.log(`Peso: ${this.peso}`);
      console.log(`Altura: ${this.altura}`);
      console.log(`Año de Nacimiento: ${this.anioNacimiento}`);
    }
  
    generaDNI() {
      const dni = Math.floor(Math.random() * 90000000) + 10000000;
      return dni.toString();
    }
  }
  
  const persona = new Persona("Juan", 25, "H", 70, 170, 1995);
  
  persona.mostrarGeneracion();
  persona.esMayorDeEdad();
  persona.mostrarDatos();
  