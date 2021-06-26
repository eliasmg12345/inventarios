import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Oficinas } from 'src/app/interfaces/oficinas.interface';
import { Om } from 'src/app/interfaces/oficinasmateriales.interface';
import { AdministradorService } from 'src/app/services/administrador.service';
import Swal from 'sweetalert2';

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
  oficinaAlmacen:Om[];
  cantidadMaterial:any={};
  trasladoMaterial:any={};
  

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
  seleccionarOficinaAlmacen(id_oficina:number){
    
    this.administradorService.seleccionarOficinaAlmacen(id_oficina).subscribe((resp:Om[])=>{
      this.oficinaAlmacen=resp;
      console.log(this.oficinaAlmacen);
    });
    this.oficinaAlmacen=[];
  }

  mostrar(id_oficina){
    
  }
  onChangeCantidad(cantidad){
    
    let material=this.oficinaAlmacen.filter((material)=>material.id_material==cantidad);
    let can= material[0];
    this.cantidadMaterial=can;
    console.log(this.cantidadMaterial);
  }
  trasladarMaterial(){
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

        this.administradorService.trasladarMaterial(this.trasladoMaterial).subscribe((resp)=>{
          
          if(resp['resultado']==='OK'){


          swalWithBootstrapButtons.fire(
            'Registrado!',
            'Material registrado.',
            'success'
          )
          this.router.navigate(['almacen']);

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
      this.trasladoMaterial={};
    })
  }


}
