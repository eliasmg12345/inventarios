import { Component, OnInit } from '@angular/core';
import { PacientesService } from 'src/app/services/pacientes.service';
import {Pacientes} from '../../interfaces/usuarios.interface';
import Swal from 'sweetalert2/src/sweetalert2.js';

@Component({
  selector: 'app-datos-paciente',
  templateUrl: './datos-paciente.component.html',
  styleUrls: ['./datos-paciente.component.css']
})
export class DatosPacienteComponent implements OnInit {

  //obtener la lista de pacientes
  pacientes:Pacientes[];

  paciente:any={};


  //PIPE filtrarTabla
  filtrarNombre:any='';


  p:number=1;

  constructor(public pacientesService:PacientesService) { }

  ngOnInit(): void {
    this.obtenerPacientes();
  }

  obtenerPacientes(){
    this.pacientesService.getPaciente().subscribe((resp:Pacientes[])=>{
      this.pacientes=resp;
      console.log(this.pacientes);

    });
  }

  seleccionarPaciente(idpaciente){
    this.pacientesService.seleccionarPaciente(idpaciente).subscribe(resp=>{
      this.paciente=resp[0];
      console.log(this.paciente);
    });
  }

  editarPaciente(){
    this.pacientesService.editarPaciente(this.paciente).subscribe(resp=>{
      if(resp['resultado']=='OK'){


        Swal.fire({
          icon: 'success',
          title: 'EDITADO CORRECTAMENTE',
          showConfirmButton: false,
          timer: 2500
        })

        this.obtenerPacientes();
      }
    });
  }

  EliminarPaciente(idpaciente){

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

        this.pacientesService.eliminarPaciente(idpaciente).subscribe(resp=>{
          if(resp['resultado']==='OK'){



          swalWithBootstrapButtons.fire(
            'Eliminado!',
            'haga click para continuar.',
            'success'
          )
            this.obtenerPacientes();
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

}
