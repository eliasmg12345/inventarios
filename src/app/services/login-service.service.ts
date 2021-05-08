import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  url='http://localhost/api/';

  constructor(private http:HttpClient) { }

  loginUsuario(login){
    return this.http.post(`${this.url}Login.php`,JSON.stringify(login));
  }
}
