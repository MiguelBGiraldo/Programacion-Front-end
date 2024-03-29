import { Component, OnInit } from '@angular/core';
import { ProductoDTO } from 'src/app/modelo/producto-dto';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ProductoService } from 'src/app/servicios/producto.service';


@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.css']
})
export class GestionProductosComponent implements OnInit {

  productos: ProductoGetDTO[];
  seleccionados: ProductoGetDTO[];
  textoBtnEliminar: string;

  constructor(private productoServicion: ProductoService) {
    console.log("Eyyy");
    this.productos = [];
    this.seleccionados = [];
    this.textoBtnEliminar = "";
  }
  ngOnInit(): void {
    this.productos = this.productoServicion.listar();
  }

  seleccionar(producto: ProductoGetDTO, estado: boolean) {

    if (estado) {
      this.seleccionados.push(producto);
    } else {
      this.seleccionados = this.seleccionados.filter(i => i != producto);
    }
  }
  private actualizarMensaje() {
    const tam = this.seleccionados.length;
    if (tam != 0) {
      if (tam == 1) {
        this.textoBtnEliminar = "1 elemento";
      } else {
        this.textoBtnEliminar = tam + " elementos";
      }
    } else {
      this.textoBtnEliminar = "";
    }
  }

  public borrarProductos() {
    this.seleccionados.forEach(e => {
      this.productos = this.productos.filter(i => i != e);
    });
    this.seleccionados = [];
    this.actualizarMensaje();
  }
}
