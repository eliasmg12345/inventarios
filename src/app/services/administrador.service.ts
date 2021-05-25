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

}
