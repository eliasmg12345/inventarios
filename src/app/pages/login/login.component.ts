import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../../services/login-service.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login={
    usuario:null, 
    password:null
  }


  constructor(private loginService:LoginServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  loginUsuario(){
    this.loginService.loginUsuario(this.login).subscribe(datos=>{
      if(datos['resultado']==='OK'){
        
        console.log(datos['mensaje']);
        this.router.navigate(['crear-paciente']);
        console.log('LIKEEEEE');

      }else{
        console.log(datos['mensaje']);
        console.log('sd');
      }
    })

  }

}
