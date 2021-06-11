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
import { AdministracionOficinasComponent } from './pages/administracion-oficinas/administracion-oficinas.component';
import { AgregarOficinasComponent } from './pages/agregar-oficinas/agregar-oficinas.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { CargosComponent } from './pages/cargos/cargos.component';
import { AdministracionMaterialesComponent } from './pages/administracion-materiales/administracion-materiales.component';
import { IngresoMaterialComponent } from './pages/ingreso-material/ingreso-material.component';
import { SalidaMaterialComponent } from './pages/salida-material/salida-material.component';
import { TrasladoMaterialComponent } from './pages/traslado-material/traslado-material.component';
import { ReporteMaterialComponent } from './pages/reporte-material/reporte-material.component';
import { MovimientoMaterialComponent } from './pages/movimiento-material/movimiento-material.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    LoginComponent,
    FiltrartablaPipe,
    AdministracionOficinasComponent,
    AgregarOficinasComponent,
    UsuariosComponent,
    CargosComponent,
    AdministracionMaterialesComponent,
    IngresoMaterialComponent,
    SalidaMaterialComponent,
    TrasladoMaterialComponent,
    ReporteMaterialComponent,
    MovimientoMaterialComponent,
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
