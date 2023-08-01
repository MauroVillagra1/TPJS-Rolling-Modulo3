class Animal {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    emitirSonido() {
      console.log("El animal está emitiendo un sonido.");
    }
  }
  
  class Perro extends Animal {
    emitirSonido() {
      console.log("Guau guau!");
    }
  }
  
  class Gato extends Animal {
    emitirSonido() {
      console.log("Miau miau!");
    }
  }
  
  const perro = new Perro("Bobby", 5);
  perro.emitirSonido();
  
  const gato = new Gato("Pelusa", 3);
  gato.emitirSonido();
  