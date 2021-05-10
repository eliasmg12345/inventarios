import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearPacienteComponent } from './pages/crear-paciente/crear-paciente.component';
import { DatosPacienteComponent } from './pages/datos-paciente/datos-paciente.component';
import { HistorialPacienteComponent } from './pages/historial-paciente/historial-paciente.component';
import { LoginComponent } from './pages/login/login.component';
import { NuevoHistorialComponent } from './pages/nuevo-historial/nuevo-historial.component';

const routes: Routes = [
  {path:'crear-paciente', component:CrearPacienteComponent},
  
  {path:'datos-paciente',component:DatosPacienteComponent},
  {path:'historial-paciente',component:HistorialPacienteComponent},
  {path:'nuevo-historial',component:NuevoHistorialComponent},
  {path:'login',component:LoginComponent},
  {path:'',pathMatch:'full',redirectTo:'informacion'},
  {path:'**',redirectTo:'login'}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
