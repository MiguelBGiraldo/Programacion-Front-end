import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDTO } from 'src/app/modelo/producto-dto';
import { ProductoService } from '../../servicios/producto.service';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent implements OnInit {

  categorias: string[];
  categoriaSeleccionadas: string[];
  archivos!: FileList;
  producto: ProductoDTO;
  txtBoton: string = "Crear Producto";
  esEdicion = false;
  codigoProducto: number = 0;
  productoService:ProductoService;

  constructor(private route: ActivatedRoute) {
    this.categorias = [];
    this.categoriaSeleccionadas = [];
    this.producto = new ProductoDTO();
    this.productoService = new ProductoService();
    
    this.route.params.subscribe(params => {
      this.codigoProducto = <number>params["codigo"];
      let objetoProducto = this.productoService.obtener(this.codigoProducto);
      if (objetoProducto != null) {
        this.producto = objetoProducto;
        this.esEdicion = true;
        //this.txtBoton = 'Editar Producto';
      }
    });
  }

  ngOnInit(): void {
    this.categorias.push('Tecnología');
    this.categorias.push('Hogar');
    this.categorias.push('Deportes');
    this.categorias.push('Moda');
    this.categorias.push('Mascotas');
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.archivos = event.target.files;
    }
  }

  crearProducto() {
    if (this.archivos != null && this.archivos.length > 0) {
      console.log(this.producto);
    }
    else {
      console.log("Debe seleccionar al menos una imagen");
    }
  }

  ;
  checkSeleccionado(categoriaSelected: any, checked: any) {
    if (checked.checked) { //Si el elemento fue seleccionado
      //Agregamos la categoría seleccionada al arreglo de categorías seleccionadas
      this.categoriaSeleccionadas.push(categoriaSelected);
    } else { //Si el elemento fue deseleccionado
      //Removemos la categoría seleccionada del arreglo de categorías seleccionadas
      this.categoriaSeleccionadas.splice(this.categoriaSeleccionadas.indexOf(categoriaSelected), 1);
    }
  }

}
