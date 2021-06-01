import { Component, OnInit } from '@angular/core';
import { Cargos } from 'src/app/interfaces/cargos.interface';
import { Permisos } from 'src/app/interfaces/permisos.interface';
import { AdministradorService } from 'src/app/services/administrador.service';
import Swal from 'sweetalert2/src/sweetalert2.js';


@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {

  cargos:Cargos[];
  permiso:any={};
  cargo:any={};
  permisoEditar:any={};

  constructor(public administradorService:AdministradorService) { }

  ngOnInit(): void {
    this.mostrarCargos();
  }

  mostrarCargos(){
    this.administradorService.getCargo().subscribe((resp:Cargos[])=>{
      this.cargos=resp;
      console.log(this.cargos);
    });
  }

  seleccionarPermiso(id_cargo){
    this.administradorService.seleccionarPermiso(id_cargo).subscribe((resp)=>{
      this.permiso=resp;
      console.log(this.permiso);
    });
  }


  seleccionarPermisoEditar(id_permiso){
    this.administradorService.seleccionarPermisoEditar(id_permiso).subscribe((resp)=>{
      this.permisoEditar=resp[0];
      console.log(this.permisoEditar);
    });
  }

  editarPermiso(){
    this.administradorService.editarPermiso(this.permisoEditar).subscribe((resp)=>{
      if(resp['resultado']=='OK'){


        Swal.fire({
          icon: 'success',
          title: 'EDITADO CORRECTAMENTE',
          showConfirmButton: false,
          timer: 2500
        })

        this.mostrarCargos();
      }
    });
  }



  eliminarPermiso(id_permiso){

  }

  seleccionarCargo(id_cargo){
    this.administradorService.seleccionarCargo(id_cargo).subscribe((resp)=>{
      this.cargo=resp[0];
      console.log(this.cargo);
    });
  }

  editarCargo(){
    this.administradorService.editarCargo(this.cargo).subscribe((resp)=>{
      if(resp['resultado']=='OK'){


        Swal.fire({
          icon: 'success',
          title: 'EDITADO CORRECTAMENTE',
          showConfirmButton: false,
          timer: 2500
        })

        this.mostrarCargos();
      }
    });
  }

  eliminarCargo(id_cargo){

  }



}
