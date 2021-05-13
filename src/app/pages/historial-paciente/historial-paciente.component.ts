import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pacientes } from 'src/app/interfaces/usuarios.interface';
import { PacientesService } from 'src/app/services/pacientes.service';
import Swal from 'sweetalert2/src/sweetalert2.js';

@Component({
  selector: 'app-historial-paciente',
  templateUrl: './historial-paciente.component.html',
  styleUrls: ['./historial-paciente.component.css']
})
export class HistorialPacienteComponent implements OnInit {


  newhistoriales:Pacientes[];


 filtrarNombre:any='';

 PaginaActual:number=1;

  constructor(private pacientesService:PacientesService,private route:Router) { }

  ngOnInit(): void {
    this.obtenerHistoriales();
  }

  obtenerHistoriales(){
    this.pacientesService.getHistorial().subscribe((resp:Pacientes[])=>{
      this.newhistoriales=resp;
      console.log(this.newhistoriales);
    });
  }







  VerExp(idpaciente:number){

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Desea ver el expediente',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar!',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.route.navigate(['/expediente',idpaciente]);

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
