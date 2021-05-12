import { Component, OnInit } from '@angular/core';
import { PacientesService } from 'src/app/services/pacientes.service';
import {ActivatedRoute} from '@angular/router';
import { Historial } from 'src/app/interfaces/historial.interface';
import Swal from 'sweetalert2/src/sweetalert2.js';


@Component({
  selector: 'app-expediente',
  templateUrl: './expediente.component.html',
  styleUrls: ['./expediente.component.css']
})
export class ExpedienteComponent implements OnInit {

  exp:Historial[];

  expedientes:any={};

  expediente:any={};

  mostrar=false;

  constructor(private pacientesService:PacientesService,private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe(params=>{
      this.expedientes=params['id'];
      console.log(this.expedientes);
    });
  }

  ngOnInit(): void {
    this.obtenerExpediente();
  }


  obtenerExpediente(){
    this.pacientesService.getExpedientes(this.expedientes).subscribe((resp: Historial[])=>{
      this.exp=resp;
      console.log(this.exp);
    });
  }

  seleccionarExpediente(idhistorial){
    this.pacientesService.seleccionarExpediente(idhistorial).subscribe(resp=>{
      this.expediente=resp[0];
      console.log(this.expediente);
    })
  }


  editarExpediente(){
    this.pacientesService.editarExpediente(this.expediente).subscribe(resp=>{
      if(resp['resultado']=='OK'){


        Swal.fire({
          icon: 'success',
          title: 'EXPEDIENTE EDITADO CORRECTAMENTE',
          showConfirmButton: false,
          timer: 2500
        })

        this.obtenerExpediente();
      }
    });
  }
}
