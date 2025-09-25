interface INuevoInventario {
    agregarEquipo(nombre: string, tipo: string, estado: string): void;
    listarEquipos(): { nombre: string; tipo: string; estado: string }[];
  }

class InventarioViejo {
  private items: string[] = [];

  addItem(nombre: string): void {
    this.items.push(nombre);
  }

  getItems(): string[] {
    return [...this.items];
  }
}


class AdaptadorInventario implements INuevoInventario {
  private metaPorNombre = new Map<string, { tipo: string; estado: string }>();

  constructor(private inventarioViejo: InventarioViejo) {}

  agregarEquipo(nombre: string, tipo: string, estado: string): void {
    this.inventarioViejo.addItem(nombre);
    this.metaPorNombre.set(nombre, { tipo, estado });
  }

  listarEquipos(): { nombre: string; tipo: string; estado: string }[] {
    const nombres = this.inventarioViejo.getItems();
    return nombres.map((nombre) => {
      const meta = this.metaPorNombre.get(nombre) ?? { tipo: undefined as unknown as string, estado: undefined as unknown as string };
      return { nombre, ...meta };
    });
  }
}


const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Router Cisco", "Red", "disponible");
console.log(adaptador.listarEquipos());