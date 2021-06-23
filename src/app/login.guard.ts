import { Injectable, Input } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from './services/login-service.service';
import { take, map } from 'rxjs/operators';
import { UserResponse } from './interfaces/usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {


  constructor(private loginService: LoginServiceService, private router:Router){}

  canActivate(): Observable<boolean> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // return this.loginService.user$.pipe(
      // take(1),
      // map((user: UserResponse) => (!user ? true : false))
      // )
      return true;
    
  }
  
}
