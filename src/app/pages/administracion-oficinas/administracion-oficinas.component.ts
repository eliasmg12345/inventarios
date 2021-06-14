import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Oficinas } from 'src/app/interfaces/oficinas.interface';
import { AdministradorService } from 'src/app/services/administrador.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-administracion-oficinas',
  templateUrl: './administracion-oficinas.component.html',
  styleUrls: ['./administracion-oficinas.component.css']
})
export class AdministracionOficinasComponent implements OnInit {

  oficinas:Oficinas[];
  oficina:Oficinas[];
  selOficina:any={};
  oficinaAgregar:any={};

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
  seleccionarOficinaUsuario(id_oficina){
      this.administradorService.seleccionarOficinaUsuario(id_oficina).subscribe((resp:Oficinas[])=>{
        console.log(resp);
        this.oficina=resp;
      });
      this.oficina=[];
    
  }
  seleccionarOficina(id_oficina){
    this.administradorService.seleccionarOficina(id_oficina).subscribe((resp)=>{      
      this.selOficina=resp[0];
      console.log(this.selOficina);
    });
  }
  editarOficina(){
    this.administradorService.editarOficina(this.selOficina).subscribe((resp)=>{
      if(resp['resultado']=='OK'){
        Swal.fire({
          icon:'success',
          title:'EDITADO CORRECTAMENTE',
          showConfirmButton:false,
          timer:2500
        })
        this.mostrarOficinas();
      }
    });
  }

  agregarOficina(){
    
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Desea registrar?',
      text: "Se agregara irreversiblemente el registro!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar!',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.administradorService.agregarOficina(this.oficinaAgregar).subscribe(resp=>{
          if(resp['resultado']==='OK'){



          swalWithBootstrapButtons.fire(
            'Registrado!',
            'Oficina registrado.',
            'success'
          )
          this.router.navigate(['/adiministracion-oficinas']);
          this.mostrarOficinas();
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
      this.oficinaAgregar={};

    })
  }

}
