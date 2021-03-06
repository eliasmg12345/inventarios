import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  URL='http://localhost/api/';

  constructor(private http:HttpClient) { }


  //crear paciene
  altaPaciente(paciente){
    // a;adiendo las backtics
    return this.http.post(`${this.URL}AltaPaciente.php`,JSON.stringify(paciente));
  }

  //obtener paciente
  getPaciente(){
    return this.http.get(`${this.URL}ObtenerPacientes.php`);
  }


  // seleccionar paciente del boton editar
  seleccionarPaciente(idpaciente:number){
    return this.http.get(`${this.URL}SeleccionarPaciente.php?idpaciente=${idpaciente}`);
  }

  // editar pacientes
  editarPaciente(pacientes){
    return this.http.post(`${this.URL}EditarPaciente.php`,JSON.stringify(pacientes));
  }

  // Eliminar paciente
  eliminarPaciente(idpaciente){
    return this.http.get(`${this.URL}EliminarPaciente.php?idpaciente=${idpaciente}`);
  }







  
  //Nuevo Historial
  altaHistorial(newHistorial){
    // a;adiendo las backtics
    return this.http.post(`${this.URL}NuevoHistorial.php`,JSON.stringify(newHistorial));
  }

  // Obtener historiales
  getHistorial(){
    return this.http.get(`${this.URL}ObtenerHistoriales.php`);
  }



  //Obtener expediente
  getExpedientes(idpaciente){
    return this.http.get(`${this.URL}ObtenerExpedientes.php?idpaciente=${idpaciente}`);
  }

  // Seleccionar expediente
  seleccionarExpediente(idhistorial:number){
    return this.http.get(`${this.URL}SeleccionarExpediente.php?idhistorial=${idhistorial}`);
  }
  

  // Editar EXPEDIENTE
  editarExpediente(expediente){
    return this.http.post(`${this.URL}EditarExpediente.php`,JSON.stringify(expediente));
  }


  //imprimir receta
  seleccionarRecetaPDF(idhistorial:number){
    window.open(`${this.URL}extensiones/tcpdf/pdf/rec.php?idhistorial=${idhistorial}`,'_blank');
  }
}
