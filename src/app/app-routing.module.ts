import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministracionMaterialesComponent } from './pages/administracion-materiales/administracion-materiales.component';
import { AdministracionOficinasComponent } from './pages/administracion-oficinas/administracion-oficinas.component';
import { CargosComponent } from './pages/cargos/cargos.component';

import { IngresoArticuloComponent } from './pages/ingreso-articulo/ingreso-articulo.component';
import { LoginComponent } from './pages/login/login.component';

import { SalidaArticuloComponent } from './pages/salida-articulo/salida-articulo.component';
import { TrasladoArticuloComponent } from './pages/traslado-articulo/traslado-articulo.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'ingreso-articulos',component:IngresoArticuloComponent},
  {path:'salida-articulos',component:SalidaArticuloComponent},
  {path:'traslado-articulos',component:TrasladoArticuloComponent},
  {path:'usuarios',component:UsuariosComponent},
  {path:'cargos',component:CargosComponent},
  {path:'administracion-materiales',component:AdministracionMaterialesComponent},
  {path:'adiministracion-oficinas',component:AdministracionOficinasComponent},
  
 
  
  
  {path:'',pathMatch:'full',redirectTo:'informacion'},
  {path:'**',redirectTo:'login'}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
