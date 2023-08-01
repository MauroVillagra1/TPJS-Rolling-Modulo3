class Persona {
    constructor(nombre, edad, profesion) {
      this.nombre = nombre;
      this.edad = edad;
      this.profesion = profesion;
    }
  
    saludar() {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años. Soy ${this.profesion}.`);
    }
  
    despedirse() {
      console.log(`Adiós, hasta luego.`);
    }
  }
  
  const persona1 = new Persona("Juan", 30, "ingeniero");
  const persona2 = new Persona("María", 25, "abogada");
  
  persona1.saludar();
  persona1.despedirse();
  
  persona2.saludar();
  persona2.despedirse();