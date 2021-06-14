import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Materiales } from 'src/app/interfaces/materiales.intercafe';
import { Oficinas } from 'src/app/interfaces/oficinas.interface';
import { Om } from 'src/app/interfaces/oficinasmateriales.interface';
import { AdministradorService } from 'src/app/services/administrador.service';

@Component({
  selector: 'app-traslado-material',
  templateUrl: './traslado-material.component.html',
  styleUrls: ['./traslado-material.component.css']
})
export class TrasladoMaterialComponent implements OnInit {

  oficinas:Oficinas[];
  almacenes:Om[];
  materialAlmacen:[];
  oficinaOrigen:any={};
  oficinaDestino:any={};
  materialSeleccionado:any={};
  
  

  constructor(public administradorService:AdministradorService,private router:Router) { }

  ngOnInit(): void {
    this.mostrarOficinas();
    this.mostrarAlmacen();
  }

  mostrarOficinas(){
    this.administradorService.getOficina().subscribe((resp:Oficinas[])=>{
      this.oficinas=resp;
      console.log(this.oficinas);
    });
  }
  mostrarAlmacen(){
    this.administradorService.getAlmacen().subscribe((resp:Om[])=>{
      this.almacenes=resp;
      console.log(this.almacenes);
    })
  }
  mostrar(id_oficina){
    
  }

}
