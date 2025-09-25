"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EquipoServidor {
    tipo;
    nombre;
    ram;
    procesador;
    constructor(tipo, nombre, ram, procesador) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    }
    detalles() {
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, CPU: ${this.procesador}`;
    }
}
class EquipoComputadora {
    tipo;
    nombre;
    ram;
    procesador;
    constructor(tipo, nombre, ram, procesador) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    }
    detalles() {
        return `Tipo: ${this.tipo} | Nombre: ${this.nombre} | RAM: ${this.ram} | CPU: ${this.procesador}`;
    }
}
class EquipoFactory {
    crearEquipo(tipo, nombre, ram, procesador) {
        switch (tipo) {
            case "Servidor":
                return new EquipoServidor(tipo, nombre, ram, procesador);
            case "Computadora":
                return new EquipoComputadora(tipo, nombre, ram, procesador);
            default:
                throw new Error("Tipo no reconocido");
        }
    }
    crearProducto(tipo, nombre, ram, procesador) {
        return this.crearEquipo(tipo, nombre, ram, procesador);
    }
}
const factory = new EquipoFactory();
const server = factory.crearEquipo("Servidor", "Dell PowerEdge", "32GB", "Xeon");
console.log(server.detalles());
//# sourceMappingURL=factory.js.map