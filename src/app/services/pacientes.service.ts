import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  URL='http://localhost/api/';

  constructor(private http:HttpClient) { }

  altaPaciente(paciente){
    // a;adiendo las backtics
    return this.http.post(`${this.URL}AltaPaciente.php`,JSON.stringify(paciente));
  }
}
