"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Configuracion {
    static instancia = null;
    store = new Map();
    constructor() { }
    static obtenerInstancia() {
        if (!this.instancia) {
            this.instancia = new Configuracion();
        }
        return this.instancia;
    }
    set(clave, valor) {
        this.store.set(clave, valor);
    }
    get(clave) {
        return this.store.get(clave);
    }
}
const conf1 = Configuracion.obtenerInstancia();
const conf2 = Configuracion.obtenerInstancia();
conf1.set("modo", "producción");
console.log(conf2.get("modo"));
//# sourceMappingURL=singleton.js.map