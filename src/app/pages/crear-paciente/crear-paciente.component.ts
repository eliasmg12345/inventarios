import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacientesService } from '../../services/pacientes.service';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent {

  pacientes:any={};

  constructor(private pacientesServices:PacientesService, private router:Router) {
    
   }

   AltaPaciente(){
     this.pacientesServices.altaPaciente(this.pacientes).subscribe(resp=>{
       if(resp['resultado']==='OK'){
         console.log('exitoso');
         this.router.navigate(['nuevo-historial']);
       }
     });
   }

}
