class Producto {
    constructor(codigo, nombre, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
    }
  
    imprimeDatos() {
      console.log("Código: " + this.codigo);
      console.log("Nombre: " + this.nombre);
      console.log("Precio: " + this.precio);
    }
  }
  
  // Crear instancias de la clase Producto
  let producto1 = new Producto("001", "Camisa", 29.99);
  let producto2 = new Producto("002", "Pantalón", 49.99);
  let producto3 = new Producto("003", "Zapatos", 79.99);
  
  // Guardar las instancias en un array
  let productos = [producto1, producto2, producto3];
  
  // Mostrar los valores de los objetos instanciados
  for (let producto of productos) {
    producto.imprimeDatos();
    console.log("------------------");
  }
  
  
  
  
  
  