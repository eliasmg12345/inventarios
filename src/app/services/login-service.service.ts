import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  url='http://localhost/APINVE/';

  constructor(private http:HttpClient) { }

  loginUsuario(login){
    return this.http.post(`${this.url}Loginp.php`,JSON.stringify(login));
  }
}
