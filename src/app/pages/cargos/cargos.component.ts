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

  constructor(public administradorService:AdministradorService) { }

  ngOnInit(): void {
    this.mostrarCargos();
  }

  mostrarCargos(){
    this.administradorService.getCargo().subscribe((resp:cargos[])=>{
      this.cargos=resp;
      console.log(this.cargos);
    });
  }

  seleccionarPermiso(id_cargo){

  }



}
