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
  permiso:Permisos[];
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
    this.administradorService.seleccionarPermiso(id_cargo).subscribe((resp:Permisos[])=>{
      if(resp.length===0){
        this.permiso=[];
      }
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
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Desea Eliminar el paciente?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar!',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.administradorService.eliminarPermiso(id_permiso).subscribe(resp=>{
          if(resp['resultado']==='OK'){



          swalWithBootstrapButtons.fire(
            'Eliminado!',
            'haga click para continuar.',
            'success'
          )
            this.mostrarCargos();
        }
      });

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'xxxx',
          'error'
        )
      }
    })
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
