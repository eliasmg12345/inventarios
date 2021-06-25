import { Component, OnInit } from '@angular/core';
import { Movimientos } from 'src/app/interfaces/movimientos.interface';
import { AdministradorService } from 'src/app/services/administrador.service';

@Component({
  selector: 'app-movimiento-material',
  templateUrl: './movimiento-material.component.html',
  styleUrls: ['./movimiento-material.component.css']
})
export class MovimientoMaterialComponent implements OnInit {

  movimientos:Movimientos[];

  constructor(public administradorService:AdministradorService) { }

  ngOnInit(): void {
    this.mostrarMovimiento();
  }

  mostrarMovimiento(){
    this.administradorService.getMovimiento().subscribe((resp:Movimientos[])=>{
      this.movimientos=resp;
      console.log(this.movimientos);
    })
  }

}
