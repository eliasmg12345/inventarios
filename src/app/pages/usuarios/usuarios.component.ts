import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/interfaces/usuarios.interface';
import { AdministradorService } from 'src/app/services/administrador.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:Usuarios[];

  constructor(public administradorService:AdministradorService) { }

  ngOnInit(): void {
    this.mostratPacientes();
  }

  mostratPacientes(){
    this.administradorService.getUsuario().subscribe((resp:Usuarios[])=>{
      this.usuarios=resp;
      console.log(this.usuarios);
    });
  }

}
