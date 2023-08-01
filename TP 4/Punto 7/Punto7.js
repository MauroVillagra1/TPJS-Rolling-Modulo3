
class Contacto {
    constructor(nombre, telefono) {
      this.nombre = nombre;
      this.telefono = telefono;
    }
  }
  
  class Agenda {
    constructor(tamano = 10) {
      this.contactos = [];
      this.tamano = tamano;
    }
  
    aniadirContacto(contacto) {
      if (this.agendaLlena()) {
        console.log("La agenda está llena. No se pueden agregar más contactos.");
        return;
      }
  
      if (this.existeContacto(contacto)) {
        console.log("El contacto ya existe en la agenda.");
        return;
      }
  
      this.contactos.push(contacto);
      console.log("Contacto añadido correctamente.");
    }
  
    existeContacto(contacto) {
      return this.contactos.some((c) => c.nombre === contacto.nombre);
    }
  
    listarContactos() {
      console.log("Lista de contactos:");
      for (let contacto of this.contactos) {
        console.log(`- Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}`);
      }
    }
  
    buscarContacto(nombre) {
      const contactoEncontrado = this.contactos.find((c) => c.nombre === nombre);
  
      if (contactoEncontrado) {
        console.log(`El contacto "${contactoEncontrado.nombre}" tiene el teléfono "${contactoEncontrado.telefono}".`);
      } else {
        console.log(`No se encontró ningún contacto con el nombre "${nombre}".`);
      }
    }
  
    eliminarContacto(contacto) {
      const indice = this.contactos.findIndex((c) => c.nombre === contacto.nombre);
  
      if (indice !== -1) {
        this.contactos.splice(indice, 1);
        console.log("Contacto eliminado correctamente.");
      } else {
        console.log("El contacto no existe en la agenda.");
      }
    }
  
    agendaLlena() {
      return this.contactos.length >= this.tamano;
    }
  
    huecosLibres() {
      return this.tamano - this.contactos.length;
    }
  }
  
  // Crear una instancia de la agenda
  const agenda = new Agenda();
  
  // Función para mostrar el menú y procesar las opciones seleccionadas por el usuario
  function mostrarMenu() {
    const nombreBuscar = "";
    let opcion;
    do {
      opcion = prompt(`Selecciona una opción:
        1. Añadir contacto
        2. Verificar si un contacto existe
        3. Listar contactos
        4. Buscar contacto por nombre
        5. Eliminar contacto
        6. Verificar si la agenda está llena
        7. Verificar huecos libres
        0. Salir`);
  
      switch (opcion) {
        case "1":
          const nombre = prompt("Ingresa el nombre del contacto:");
          const telefono = prompt("Ingresa el teléfono del contacto:");
          const nuevoContacto = new Contacto(nombre, telefono);
          agenda.aniadirContacto(nuevoContacto);
          break;
        case "2":
        nombreBuscar = prompt("Ingresa el nombre del contacto a verificar:");
          const contactoBuscar = new Contacto(nombreBuscar, "");
          const existe = agenda.existeContacto(contactoBuscar);
          console.log(`El contacto ${existe ? "existe" : "no existe"} en la agenda.`);
          break;
        case "3":
          agenda.listarContactos();
          break;
          case "4":
            nombreBuscar = prompt("Ingresa el nombre del contacto a buscar:");
            agenda.buscarContacto(nombreBuscar);
            break;
          case "5":
            const nombreEliminar = prompt("Ingresa el nombre del contacto a eliminar:");
            const contactoEliminar = new Contacto(nombreEliminar, "");
            agenda.eliminarContacto(contactoEliminar);
            break;
          case "6":
            console.log(`La agenda ${agenda.agendaLlena() ? "está llena." : "no está llena."}`);
            break;
          case "7":
            console.log(`Hay ${agenda.huecosLibres()} huecos libres en la agenda.`);
            break;
          case "0":
            console.log("Saliendo del programa...");
            break;
          default:
            console.log("Opción inválida. Inténtalo nuevamente.");
            break;
        }
      } while (opcion !== "0");
    }
    
    // Mostrar el menú
    mostrarMenu();
    
         
  