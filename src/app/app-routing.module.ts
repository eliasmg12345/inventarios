import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './login.guard';
import { AdministracionMaterialesComponent } from './pages/administracion-materiales/administracion-materiales.component';
import { AdministracionOficinasComponent } from './pages/administracion-oficinas/administracion-oficinas.component';
import { AlmacenMaterialComponent } from './pages/almacen-material/almacen-material.component';
import { CargosComponent } from './pages/cargos/cargos.component';

import { IngresoMaterialComponent } from './pages/ingreso-material/ingreso-material.component';
import { LoginComponent } from './pages/login/login.component';
import { MovimientoMaterialComponent } from './pages/movimiento-material/movimiento-material.component';

import { SalidaMaterialComponent } from './pages/salida-material/salida-material.component';
import { TrasladoMaterialComponent } from './pages/traslado-material/traslado-material.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';


const routes: Routes = [

    //LOGIN   

  {path:'psg',component:LoginComponent},
  {path:'ingreso-materiales',component:IngresoMaterialComponent,canActivate:[LoginGuard]},
    {path:'salida-materiales',component:SalidaMaterialComponent,canActivate:[LoginGuard]},
    {path:'traslado-materiales',component:TrasladoMaterialComponent,canActivate:[LoginGuard]},
    {path:'usuarios',component:UsuariosComponent,canActivate:[LoginGuard]},
    {path:'cargos',component:CargosComponent,canActivate:[LoginGuard]},
    {path:'administracion-materiales',component:AdministracionMaterialesComponent,canActivate:[LoginGuard]},
    {path:'adiministracion-oficinas',component:AdministracionOficinasComponent,canActivate:[LoginGuard]},
    {path:'movimientos',component:MovimientoMaterialComponent,canActivate:[LoginGuard]},
    {path:'almacen',component:AlmacenMaterialComponent,canActivate:[LoginGuard]},
  
  
  {path:'',pathMatch:'full',redirectTo:'psg'},
  {path:'**',redirectTo:'psg'}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
