interface Equipo {
    tipo: string;
    nombre: string;
    ram: string;
    procesador: string;
    detalles(): string;
  }
  
  class EquipoServidor implements Equipo {
    constructor(
      public tipo: string,
      public nombre: string,
      public ram: string,
      public procesador: string
    ) {}
  
    detalles(): string {
      return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, CPU: ${this.procesador}`;
    }
  }
  
  class EquipoComputadora implements Equipo {
    constructor(
      public tipo: string,
      public nombre: string,
      public ram: string,
      public procesador: string
    ) {}
  
    detalles(): string {
      return `Tipo: ${this.tipo} | Nombre: ${this.nombre} | RAM: ${this.ram} | CPU: ${this.procesador}`;
    }
  }
  
class EquipoFactory {
    crearEquipo(tipo: string, nombre: string, ram: string, procesador: string): Equipo {
      switch (tipo) {
        case "Servidor":
          return new EquipoServidor(tipo, nombre, ram, procesador);
        case "Computadora":
          return new EquipoComputadora(tipo, nombre, ram, procesador);
        default:
          throw new Error("Tipo no reconocido");
      }
    }
  

    crearProducto(tipo: string, nombre: string, ram: string, procesador: string): Equipo {
      return this.crearEquipo(tipo, nombre, ram, procesador);
    }
  }
  
 
  const factory = new EquipoFactory();
  const server = factory.crearEquipo("Servidor", "Dell PowerEdge", "32GB", "Xeon");
  console.log(server.detalles());