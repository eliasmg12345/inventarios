import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { CrearPacienteComponent } from './pages/crear-paciente/crear-paciente.component';
import { DatosPacienteComponent } from './pages/datos-paciente/datos-paciente.component';
import { NuevoHistorialComponent } from './pages/nuevo-historial/nuevo-historial.component';
import { HistorialPacienteComponent } from './pages/historial-paciente/historial-paciente.component';
import { ExpedienteComponent } from './pages/expediente/expediente.component';

import {LoginServiceService} from './services/login-service.service';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CrearPacienteComponent,
    DatosPacienteComponent,
    NuevoHistorialComponent,
    HistorialPacienteComponent,
    ExpedienteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LoginServiceService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
