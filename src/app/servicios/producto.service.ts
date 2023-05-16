import { Injectable } from '@angular/core';
import { ProductoGetDTO } from '../modelo/producto-get-dto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: ProductoGetDTO[];
  constructor() {
    this.productos = [];

    this.productos.push(new ProductoGetDTO(1, "Televisor LG 4K", "Descripcion 1", 3500000, 2,
      ["https://picsum.photos/450/225", "https://picsum.photos/450/225"], ["TECNOLOGIA"]));
    this.productos.push(new ProductoGetDTO(2, "Tenis Nike", "Descripcion 2", 650000, 4,
      ["https://picsum.photos/450/225"], ["ROPA", "DEPORTE"]));
  }

  public listar(): ProductoGetDTO[] {
    return this.productos;
  }
  public obtener(id: number): ProductoGetDTO | undefined {

    return this.productos.find(i => i.id == id);
  }
}
