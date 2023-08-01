var auto = {
    color: "rojo",
    marca: "Toyota",
    modelo: "Corolla",
    encendido: false,
  
    encender: function() {
      if (!this.encendido) {
        this.encendido = true;
        console.log("El auto ha sido encendido.");
      } else {
        console.log("El auto ya está encendido.");
      }
    },
  
    apagar: function() {
      if (this.encendido) {
        this.encendido = false;
        console.log("El auto ha sido apagado.");
      } else {
        console.log("El auto ya está apagado.");
      }
    }
  };
  
  console.log(auto.color); // Muestra "rojo"
  console.log(auto.marca); // Muestra "Toyota"
  console.log(auto.modelo); // Muestra "Corolla"
  
  auto.encender(); // Muestra "El auto ha sido encendido."
  auto.encender(); // Muestra "El auto ya está encendido."
  
  auto.apagar(); // Muestra "El auto ha sido apagado."
  auto.apagar(); // Muestra "El auto ya está apagado."
