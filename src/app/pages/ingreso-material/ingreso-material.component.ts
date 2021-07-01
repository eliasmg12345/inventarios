import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Materiales } from 'src/app/interfaces/materiales.intercafe';
import { Oficinas } from 'src/app/interfaces/oficinas.interface';
import { Om } from 'src/app/interfaces/oficinasmateriales.interface';
import { AdministradorService } from 'src/app/services/administrador.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ingreso-material',
  templateUrl: './ingreso-material.component.html',
  styleUrls: ['./ingreso-material.component.css']
})
export class IngresoMaterialComponent implements OnInit {

  oficinas:Oficinas[];
  materiales:Materiales[];
  almacenes:Om[];
  oficinaAlmacen:Om[];
  cantidadMaterial:any={};
  ingresoMaterial:any={};

  constructor(private administradorService:AdministradorService,private router:Router) { }

  ngOnInit(): void {
    this.mostrarOficinas();
    this.mostrarMateriales();
    this.mostrarAlmacen();

  }
  mostrarOficinas(){
    this.administradorService.getOficina().subscribe((resp:Oficinas[])=>{
      this.oficinas=resp;
      console.log(this.oficinas);
    });
  }
  mostrarMateriales(){
    this.administradorService.getMaterial().subscribe((resp:Materiales[])=>{
      this.materiales=resp;
      console.log(this.materiales);
    });
  }
  mostrarAlmacen(){
    this.administradorService.getAlmacen().subscribe((resp:Om[])=>{
      this.almacenes=resp;
      console.log(this.almacenes);
    })
  }
  seleccionarOficinaAlmacen(id_oficina){
    this.administradorService.seleccionarOficinaAlmacen(id_oficina).subscribe((resp:Om[])=>{
      this.oficinaAlmacen=resp;
      console.log(this.oficinaAlmacen);
    });
    this.oficinaAlmacen=[];
  }
  mostrarCantidad(id_material){
    let material=this.oficinaAlmacen.filter((mat)=>mat.id_material==id_material)[0];
    // let material=this.oficinaAlmacen.filter((material)=>material.id_material==cantidad);\
    this.cantidadMaterial=material.cantidad;
    console.log(material.cantidad);
  }

  ingresarMaterial(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Desea Agregar?',
      text: "No se podra revertir el proceso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar!',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.administradorService.ingresoMaterial(this.ingresoMaterial).subscribe((resp)=>{
          
          if(resp['resultado']==='OK'){


          swalWithBootstrapButtons.fire(
            'Registrado!',
            'Material registrado.',
            'success'
          )
          this.router.navigate(['almacen']);

        }else{
          swalWithBootstrapButtons.fire(
            '-----',
            'xxxx',
            'error'
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
      this.ingresoMaterial={};
    })
  }

  

}
