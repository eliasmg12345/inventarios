import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { CrearPacienteComponent } from './pages/crear-paciente/crear-paciente.component';
import { DatosPacienteComponent } from './pages/datos-paciente/datos-paciente.component';
import { NuevoHistorialComponent } from './pages/nuevo-historial/nuevo-historial.component';
import { HistorialPacienteComponent } from './pages/historial-paciente/historial-paciente.component';
import { ExpedienteComponent } from './pages/expediente/expediente.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CrearPacienteComponent,
    DatosPacienteComponent,
    NuevoHistorialComponent,
    HistorialPacienteComponent,
    ExpedienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
