export class Videojuegos {
    constructor(datos) {
        this.id = datos.id;
        this.titulo = datos.titulo;
        this.categoria = datos.Categoria;
        this.plataforma = datos.plataforma;
        this.tamaño = datos.tamaño;
        this.precio = datos.precio;
        this.fechaLanzamiento = datos.fechaLanzamiento;
    }

    get precio() {
        return this._precio;
    }

    set precio(cantidad) {
        if (typeof cantidad !== "number" || cantidad < 0) {
            throw new Error(`Cantidad no válida en «${this.titulo}»: ${cantidad}`);
        }
        this._precio = cantidad;
    }

    get precioTexto() {
        const euros = Math.floor(this.precio);
        const centimos = Math.round((this.precio - euros) * 100);

        return `${euros} euros y ${centimos} centimos`;
    }

    descripcion() {
        return `Categoria: ${this.categoria}, 
        Plataforma: ${this.plataforma}, 
        Tamaño: ${this.tamaño}, 
        Precio: ${this.precioTexto}`;
    }
}