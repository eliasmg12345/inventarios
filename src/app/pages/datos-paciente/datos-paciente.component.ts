import { Component, OnInit } from '@angular/core';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-datos-paciente',
  templateUrl: './datos-paciente.component.html',
  styleUrls: ['./datos-paciente.component.css']
})
export class DatosPacienteComponent implements OnInit {

  //obtener la lista de pacientes
  pacientes:any={};

  constructor(public pacientesService:PacientesService) { }

  ngOnInit(): void {
    this.obtenerPacientes();
  }

  obtenerPacientes(){
    this.pacientesService.getPaciente().subscribe(resp=>{
      this.pacientes=resp;
      console.log(this.pacientes);

    });
  }

}
