import { Component, OnInit } from '@angular/core';
import { cargos } from 'src/app/interfaces/cargos.interface';
import { AdministradorService } from 'src/app/services/administrador.service';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {

  cargos:cargos[];
  cargosPermiso1: any=[];
  cargosPermiso2: any=[];

  constructor(public administradorService:AdministradorService) { }

  ngOnInit(): void {
    this.mostrarCargos();
  }

  mostrarCargos(){
    this.administradorService.getCargo().subscribe((resp:cargos[])=>{
      this.cargos=resp;
      console.log(this.cargos);
      
      
      for (let a of this.cargos){
        if (a.nombre_cargo==='administrador'){
          this.cargosPermiso1.push(a.nombre_permiso);
        }else if(a.nombre_cargo==='asesor'){
          this.cargosPermiso2.push(a.nombre_permiso);
        }
      }
      console.log(this.cargosPermiso1);
      console.log(this.cargosPermiso2);

    });

    
  }



}
