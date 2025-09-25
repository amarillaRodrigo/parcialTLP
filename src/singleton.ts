class Configuracion {
    private static instancia: Configuracion | null = null;
    private store: Map<string, string> = new Map();
  
    private constructor() {}
  
    static obtenerInstancia(): Configuracion {
      if (!this.instancia) {
        this.instancia = new Configuracion();
      }
      return this.instancia;
    }
  
    set(clave: string, valor: string): void {
      this.store.set(clave, valor);
    }
  
    get(clave: string): string | undefined {
      return this.store.get(clave);
    }
  }


const conf1 = Configuracion.obtenerInstancia();
const conf2 = Configuracion.obtenerInstancia();

conf1.set("modo", "producción");
console.log(conf2.get("modo"));