import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearPacienteComponent } from './pages/crear-paciente/crear-paciente.component';
import { DatosPacienteComponent } from './pages/datos-paciente/datos-paciente.component';
import { HistorialPacienteComponent } from './pages/historial-paciente/historial-paciente.component';
import { NuevoHistorialComponent } from './pages/nuevo-historial/nuevo-historial.component';

const routes: Routes = [
  {path:'crear-paciente', component:CrearPacienteComponent},
  
  {path:'datos-paciente',component:DatosPacienteComponent},
  {path:'historial-paciente',component:HistorialPacienteComponent},
  {path:'nuevo-historial',component:NuevoHistorialComponent},
  {path:'**',redirectTo:'crear-paciente'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
