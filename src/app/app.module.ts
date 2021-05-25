import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';


import {LoginServiceService} from './services/login-service.service';
import { LoginComponent } from './pages/login/login.component';
import { FiltrartablaPipe } from './pipes/filtrartabla.pipe';

import {NgxPaginationModule} from 'ngx-pagination';
import { IngresoArticuloComponent } from './pages/ingreso-articulo/ingreso-articulo.component';
import { SalidaArticuloComponent } from './pages/salida-articulo/salida-articulo.component';
import { MovimientoArticuloComponent } from './pages/movimiento-articulo/movimiento-articulo.component';
import { TrasladoArticuloComponent } from './pages/traslado-articulo/traslado-articulo.component';
import { AdministracionArticulosComponent } from './pages/administracion-articulos/administracion-articulos.component';
import { AgregarArticulosComponent } from './pages/agregar-articulos/agregar-articulos.component';
import { AdministracionOficinasComponent } from './pages/administracion-oficinas/administracion-oficinas.component';
import { AgregarOficinasComponent } from './pages/agregar-oficinas/agregar-oficinas.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    LoginComponent,
    FiltrartablaPipe,
    IngresoArticuloComponent,
    SalidaArticuloComponent,
    MovimientoArticuloComponent,
    TrasladoArticuloComponent,
    AdministracionArticulosComponent,
    AgregarArticulosComponent,
    AdministracionOficinasComponent,
    AgregarOficinasComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    LoginServiceService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
