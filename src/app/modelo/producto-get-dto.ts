export class ProductoGetDTO {
    id: number = 0;
    nombre: string = "";
    descripcion: string = "";
    precio: number = 0;
    unidades: number = 0;
    imagen: string[] = [];
    categoria: string[] = [];

    constructor(id: number, nombre: string, descripcion: string, precio: number, unidades: number, imagen: string[], categoria: string[]) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.unidades = unidades;
        this.imagen = imagen;
        this.categoria = categoria;
    }

}
