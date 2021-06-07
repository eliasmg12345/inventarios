import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  url='http://localhost/APINVE/';

  constructor(private http:HttpClient) {}

  //mostrar usuarios
  getUsuario(){
    return this.http.get(`${this.url}MostrarUsuarios.php`);      
  }

  getCargo(){
    return this.http.get(`${this.url}MostrarCargos.php`);
  }

  seleccionarPermiso(id_cargo:number){
    return this.http.get(`${this.url}SeleccionarPermiso.php?id_cargo=${id_cargo}`);
  }

  seleccionarPermisoEditar(id_permiso:number){
    return this.http.get(`${this.url}SeleccionarPermisoEditar.php?id_permiso=${id_permiso}`);
  }

  editarPermiso(permisos){
    return this.http.post(`${this.url}EditarPermiso.php`,JSON.stringify(permisos));
  }

  eliminarPermiso(id_permiso){
    return this.http.get(`${this.url}EliminarPermiso.php?id_permiso=${id_permiso}`);
  }
  
  seleccionarCargo(id_cargo:number){
    return this.http.get(`${this.url}SeleccionarCargo.php?id_cargo=${id_cargo}`);
  }

  editarCargo(cargos){
    return this.http.post(`${this.url}EditarCargo.php`,JSON.stringify(cargos));
  }


  agregarCargo(id_cargo){
    return this.http.post(`${this.url}AgregarCargo.php`,JSON.stringify(id_cargo));
  }
}
