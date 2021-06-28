import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Materiales } from 'src/app/interfaces/materiales.intercafe';
import { Oficinas } from 'src/app/interfaces/oficinas.interface';
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
  ingresoMaterial:any={};

  constructor(private administradorService:AdministradorService,private router:Router) { }

  ngOnInit(): void {
    this.mostrarOficinas();
    this.mostrarMateriales();

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
            'YA EXISTE EL MATERIAL',
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
