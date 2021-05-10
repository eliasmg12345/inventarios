import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pacientes } from 'src/app/interfaces/usuarios.interface';
import { PacientesService } from 'src/app/services/pacientes.service';
import Swal from 'sweetalert2/src/sweetalert2.js';

@Component({
  selector: 'app-nuevo-historial',
  templateUrl: './nuevo-historial.component.html',
  styleUrls: ['./nuevo-historial.component.css']
})
export class NuevoHistorialComponent implements OnInit {


  mostrar=false;

  pacientes:Pacientes[];

  fecha=new Date().getDate()+'-'+(new Date().getMonth()+1)+'-'+new Date().getFullYear();
  
  newhistorial:any={
    fechahistorial:this.fecha
  };

  constructor(private pacientesService:PacientesService,private route:Router) {
   }
    
  ngOnInit(): void {
    this.obtenerPacientes();
  }


  obtenerPacientes(){
    this.pacientesService.getPaciente().subscribe((resp:Pacientes[])=>{
      this.pacientes=resp;
    });
  }




  AltaHistorial(){

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Desea registrar el NUEVO HISTORIAL?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar!',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.pacientesService.altaHistorial(this.newhistorial).subscribe(resp=>{
          if(resp['resultado']==='OK'){



          swalWithBootstrapButtons.fire(
            'Registrado!',
            'Historial  registradp.',
            'success'
          )
          
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
