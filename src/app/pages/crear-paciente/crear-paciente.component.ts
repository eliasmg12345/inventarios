import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacientesService } from '../../services/pacientes.service';
import Swal from 'sweetalert2/src/sweetalert2.js';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent {

  pacientes:any={};

  constructor(private pacientesServices:PacientesService, private router:Router) {}

   AltaPaciente(){

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Desea registrar?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar!',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.pacientesServices.altaPaciente(this.pacientes).subscribe(resp=>{
          if(resp['resultado']==='OK'){



          swalWithBootstrapButtons.fire(
            'Registrado!',
            'Articulo registradp.',
            'success'
          )
          this.router.navigate(['nuevo-historial']);
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
