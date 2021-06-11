import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Oficinas } from 'src/app/interfaces/oficinas.interface';
import { AdministradorService } from 'src/app/services/administrador.service';

@Component({
  selector: 'app-administracion-oficinas',
  templateUrl: './administracion-oficinas.component.html',
  styleUrls: ['./administracion-oficinas.component.css']
})
export class AdministracionOficinasComponent implements OnInit {

  oficinas:Oficinas[];

  constructor(public administradorService:AdministradorService,private router:Router) { }

  ngOnInit(): void {
    this.mostrarOficinas();
  
  }
  mostrarOficinas(){
    this.administradorService.getOficina().subscribe((resp:Oficinas[])=>{
      this.oficinas=resp;
      console.log(this.oficinas);
    });
  }
  seleccionarOficina(id_oficina){
    this.administradorService.seleccionarOficina(id_oficina).subscribe((resp:Oficinas[])=>{
      this.oficinas=resp;
    });
    
  }

}
