import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { ProductoComponent } from './pagina/producto/producto.component';
import { BusquedaComponent } from './pagina/busqueda/busqueda.component';
import { GestionProductosComponent } from './pagina/gestion-productos/gestion-productos.component';


const routes: Routes = [
  { path: "", component:InicioComponent},
  { path: "login", component:LoginComponent},
  { path: "registro", component:RegistroComponent},
  { path: "producto", component:ProductoComponent},
  { path: "busqueda/:texto", component:BusquedaComponent},
  { path: "gestion-productos",component:GestionProductosComponent},
  { path: "editar-producto/:codigo", component: ProductoComponent },
  { path: "**" , pathMatch : "full", redirectTo : ""},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
