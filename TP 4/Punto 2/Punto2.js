var cuenta = {
    titular: "Alex",
    saldo: 0,
  
    ingresar: function(cantidad) {
      if (cantidad > 0) {
        this.saldo += cantidad;
        console.log("Se ha ingresado $" + cantidad + " a la cuenta.");
      } else {
        console.log("La cantidad ingresada debe ser mayor a cero.");
      }
    },
  
    extraer: function(cantidad) {
      if (cantidad > 0 && cantidad <= this.saldo) {
        this.saldo -= cantidad;
        console.log("Se ha extraído $" + cantidad + " de la cuenta.");
      } else {
        console.log("La cantidad ingresada es inválida o excede el saldo disponible.");
      }
    },
  
    informar: function() {
      console.log("Titular de la cuenta: " + this.titular);
      console.log("Saldo disponible: $" + this.saldo);
    }
  };
  
  console.log("Descripción inicial de la cuenta:");
  cuenta.informar();
  
  cuenta.ingresar(1000);
  cuenta.extraer(500);
  
  console.log("Descripción actualizada de la cuenta:");
  cuenta.informar();