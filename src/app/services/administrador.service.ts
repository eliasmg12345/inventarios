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
  seleccionarMaterial(id_material:number){
    return this.http.get(`${this.url}SeleccionarMaterial.php?id_material=${id_material}`);
  }
  editarMaterial(materiales){
    return this.http.post(`${this.url}EditarMaterial.php`,JSON.stringify(materiales));
  }
  eliminarMaterial(id_material){
    return this.http.get(`${this.url}EliminarMaterial.php?id_material=${id_material}`);
  }
  agregarMaterial(material){
    return this.http.post(`${this.url}AgregarMaterial.php`,JSON.stringify(material));
  }

  // USUARIOS

  getUsuario(){
    return this.http.get(`${this.url}MostrarUsuarios.php`);      
  }
  seleccionarUsario(id_usuario){
    return this.http.get(`${this.url}SeleccionarUsuario.php?id_usuario=${id_usuario}`);
  }
  editarUsuario(usuarios){
    return this.http.post(`${this.url}EditarUsuario.php`,JSON.stringify(usuarios));
  }
  eliminarUsuario(id_usuario){
    return this.http.get(`${this.url}EliminarUsuario.php?id_usuario=${id_usuario}`);
  }
  agregarUsuario(usuario){
    return this.http.post(`${this.url}AgregarUsuario.php`,JSON.stringify(usuario));
  }

  // OFICINAS

  getOficina(){
    return this.http.get(`${this.url}MostrarOficinas.php`);
  }
  seleccionarOficinaUsuario(id_oficina:number){
    return this.http.get(`${this.url}SeleccionarOficinaUsuario.php?id_oficina=${id_oficina}`);
  }
  seleccionarOficina(id_oficina:number){
    return this.http.get(`${this.url}SeleccionarOficina.php?id_oficina=${id_oficina}`);
  }
  editarOficina(oficinas){
    return this.http.post(`${this.url}EditarOficina.php`,JSON.stringify(oficinas));
  }
  agregarOficina(oficina){
    return this.http.post(`${this.url}AgregarOficina.php`,JSON.stringify(oficina));
  }

  //ALMACEN
  getAlmacen(){
    return this.http.get(`${this.url}MostrarAlmacen.php`);
  }

}
