import { Component, OnInit } from '@angular/core';
import { Om } from 'src/app/interfaces/oficinasmateriales.interface';
import { AdministradorService } from 'src/app/services/administrador.service';

@Component({
  selector: 'app-almacen-material',
  templateUrl: './almacen-material.component.html',
  styleUrls: ['./almacen-material.component.css']
})
export class AlmacenMaterialComponent implements OnInit {

  almacenes:Om[];

  constructor(public administradorService:AdministradorService) { }

  ngOnInit(): void {
    this.mostrarAlmacen();
  }

  mostrarAlmacen(){
    this.administradorService.getAlmacen().subscribe((resp:Om[])=>{
      this.almacenes=resp;
      console.log(this.almacenes);
    })
  }

}
