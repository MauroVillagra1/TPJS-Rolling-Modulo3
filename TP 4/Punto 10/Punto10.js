class Aeropuerto {
    constructor(nombreAeropuerto) {
      this.nombreAeropuerto = nombreAeropuerto;
      this.listaAviones = [];
    }
  
    agregarAvion(avion) {
      this.listaAviones.push(avion);
      console.log(`El avión "${avion.nombre}" ha sido agregado al aeropuerto.`);
    }
  
    buscarAvion(nombreAvion) {
      const avionEncontrado = this.listaAviones.find(avion => avion.nombre === nombreAvion);
  
      if (avionEncontrado) {
        console.log(`Información del avión "${avionEncontrado.nombre}":`);
        console.log(`- Capacidad: ${avionEncontrado.capacidad}`);
        console.log(`- Destino: ${avionEncontrado.destino}`);
        console.log(`- Pasajeros: ${avionEncontrado.listaPasajeros.join(", ")}`);
      } else {
        console.log(`No se encontró el avión con el nombre "${nombreAvion}".`);
      }
    }
  }
  
  class Avion {
    constructor(nombre, capacidad, destino) {
      this.nombre = nombre;
      this.capacidad = capacidad;
      this.destino = destino;
      this.listaPasajeros = [];
    }
  
    abordar(pasajero) {
      if (this.listaPasajeros.length < this.capacidad) {
        this.listaPasajeros.push(pasajero);
        console.log(`El pasajero "${pasajero}" ha abordado el avión "${this.nombre}".`);
      } else {
        console.log(`El avión "${this.nombre}" está lleno. No se puede abordar.`);
      }
    }
  }
  
  const aeropuerto = new Aeropuerto("Aeropuerto Internacional");
  
  const avion1 = new Avion("Avión 1", 100, "Ciudad A");
  const avion2 = new Avion("Avión 2", 150, "Ciudad B");
  const avion3 = new Avion("Avión 3", 120, "Ciudad C");
  
  aeropuerto.agregarAvion(avion1);
  aeropuerto.agregarAvion(avion2);
  aeropuerto.agregarAvion(avion3);
  
  aeropuerto.buscarAvion("Avión 2");
  avion2.abordar("Pasajero 1");
  avion2.abordar("Pasajero 2");
  avion2.abordar("Pasajero 3");
  