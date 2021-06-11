import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  url='http://localhost/APINVE/';

  constructor(private http:HttpClient) {}

  //CARGOS Y PERMISOS
  
  getCargo(){
    return this.http.get(`${this.url}MostrarCargos.php`);
  }
  getPermiso(){
    return this.http.get(`${this.url}MostrarPermisos.php`);
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

  eliminarPermiso(id_permiso:number,id_cargo:number){
    return this.http.get(`${this.url}EliminarPermiso.php?id_cargo=${id_cargo}&id_permiso=${id_permiso}`);
  }
  
  seleccionarCargo(id_cargo:number){
    return this.http.get(`${this.url}SeleccionarCargo.php?id_cargo=${id_cargo}`);
  }

  editarCargo(cargos){
    return this.http.post(`${this.url}EditarCargo.php`,JSON.stringify(cargos));
  }


  agregarCargo(cargo){
    return this.http.post(`${this.url}AgregarCargo.php`,JSON.stringify(cargo));
  }
  agregarPermisoCargo(id_cargo,id_permiso){
    return this.http.post(`${this.url}AgregarPermisoCargo.php`,JSON.stringify(id_cargo,id_permiso));
  }

  // MATERIALES

  getMaterial(){
    return this.http.get(`${this.url}MostrarMateriales.php`);
  }
  agregarMaterial(material){
    return this.http.post(`${this.url}AgregarMaterial.php`,JSON.stringify(material));
  }
  eliminarMaterial(id_material){
    return this.http.get(`${this.url}EliminarMaterial.php?id_material=${id_material}`);
  }

  // USUARIOS

  getUsuario(){
    return this.http.get(`${this.url}MostrarUsuarios.php`);      
  }

  agregarUsuario(usuario){
    return this.http.post(`${this.url}AgregarUsuario.php`,JSON.stringify(usuario));
  }


  // OFICINAS

  getOficina(){
    return this.http.get(`${this.url}MostrarOficinas.php`);
  }
  seleccionarOficina(id_oficina:number){
    return this.http.get(`${this.url}SeleccionarOficina.php?id_oficina=${id_oficina}`);
  }



}
