import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError,BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserResponse, Usuarios } from '../interfaces/usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private user = new BehaviorSubject<UserResponse>(null);


  url='http://localhost/APINVE/';

  constructor(private http:HttpClient) { }

  get user$(): Observable<UserResponse> {
    return this.user.asObservable();
  }

  loginUsuario(login:Usuarios): Observable<UserResponse | void>{
    return this.http
    .post<UserResponse>(`${this.url}Loginp.php`,login)
    .pipe(
      map((user: UserResponse) => {
      this.saveLocalStorage(user);
      this.user.next(user);
      console.log(this.user);
      return user;
    }),
    catchError((err) => this.handlerError(err))
  );
  
  }


  private saveLocalStorage(user: UserResponse): void {
    const { userId, message, ...rest } = user;
    localStorage.setItem('', JSON.stringify(rest));
  }

  private handlerError(err): Observable<never> {
    let errorMessage = 'An errror occured retrienving data';
    if (err) {
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
