import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './login.guard';
import { AdministracionMaterialesComponent } from './pages/administracion-materiales/administracion-materiales.component';
import { AdministracionOficinasComponent } from './pages/administracion-oficinas/administracion-oficinas.component';
import { CargosComponent } from './pages/cargos/cargos.component';

import { IngresoArticuloComponent } from './pages/ingreso-articulo/ingreso-articulo.component';
import { LoginComponent } from './pages/login/login.component';

import { SalidaArticuloComponent } from './pages/salida-articulo/salida-articulo.component';
import { TrasladoArticuloComponent } from './pages/traslado-articulo/traslado-articulo.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';


const routes: Routes = [

    //LOGIN   

  {path:'psg',component:LoginComponent},
  {path:'ingreso-articulos',component:IngresoArticuloComponent,canActivate:[LoginGuard]},
    {path:'salida-articulos',component:SalidaArticuloComponent,canActivate:[LoginGuard]},
    {path:'traslado-articulos',component:TrasladoArticuloComponent,canActivate:[LoginGuard]},
    {path:'usuarios',component:UsuariosComponent,canActivate:[LoginGuard]},
    {path:'cargos',component:CargosComponent,canActivate:[LoginGuard]},
    {path:'administracion-materiales',component:AdministracionMaterialesComponent,canActivate:[LoginGuard]},
    {path:'adiministracion-oficinas',component:AdministracionOficinasComponent,canActivate:[LoginGuard]},
  
  
  {path:'',pathMatch:'full',redirectTo:'psg'},
  {path:'**',redirectTo:'psg'}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
