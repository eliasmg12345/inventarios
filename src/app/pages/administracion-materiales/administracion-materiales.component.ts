import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Materiales } from 'src/app/interfaces/materiales.intercafe';
import { Oficinas } from 'src/app/interfaces/oficinas.interface';
import { Usuarios } from 'src/app/interfaces/usuarios.interface';
import { AdministradorService } from 'src/app/services/administrador.service';
import Swal from 'sweetalert2/src/sweetalert2.js';



@Component({
  selector: 'app-administracion-materiales',
  templateUrl: './administracion-materiales.component.html',
  styleUrls: ['./administracion-materiales.component.css']
})
export class AdministracionMaterialesComponent implements OnInit {

  material:any={};
  materialAgregar:any={};
  materiales:Materiales[];
  caracteristica:any={};

  constructor(public administradorService:AdministradorService,private router:Router) { }

  ngOnInit(): void {
    this.mostrarMateriales();
  }

  mostrarMateriales(){
    this.administradorService.getMaterial().subscribe((resp:Materiales[])=>{
      this.materiales=resp;
      console.log(this.materiales);
    });
  }

  descripcionMaterial(mat){
    console.log(mat);
    this.caracteristica=mat;
  }
  seleccionarMaterial(id_material){
    this.administradorService.seleccionarMaterial(id_material).subscribe((resp)=>{
      this.material=resp[0];
      console.log(this.material);
    });
  }
  editarMaterial(){
    this.administradorService.editarMaterial(this.material).subscribe((resp)=>{
      if(resp['resultado']=='OK'){
        Swal.fire({
          icon:'success',title:'Editado Correctamente',showConfirmButton:false,timer:2000
        })
        this.mostrarMateriales();
      }
    });
  }
  agregarMaterial(){

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

        this.administradorService.agregarMaterial(this.materialAgregar).subscribe(resp=>{
          
          if(resp['resultado']==='OK'){


          swalWithBootstrapButtons.fire(
            'Registrado!',
            'Material registrado.',
            'success'
          )
          this.mostrarMateriales();
          this.router.navigate(['administracion-materiales']);

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
      this.materialAgregar={};
    })
    
  }


  eliminarMaterial(id_material){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Desea Eliminar el Material?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar!',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.administradorService.eliminarMaterial(id_material).subscribe(resp=>{
          if(resp['resultado']==='OK'){


          swalWithBootstrapButtons.fire(
            'Eliminado!',
            'haga click para continuar.',
            'success'
          )
            this.mostrarMateriales();
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
    })
  }


}
