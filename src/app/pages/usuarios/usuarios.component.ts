import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/interfaces/usuarios.interface';
import { AdministradorService } from 'src/app/services/administrador.service';
import Swal from 'sweetalert2/src/sweetalert2.js';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:Usuarios[];
  usuario:any={};

  constructor(public administradorService:AdministradorService,private router:Router) { }

  ngOnInit(): void {
    this.mostrarUsuarios();
  }

  mostrarUsuarios(){
    this.administradorService.getUsuario().subscribe((resp:Usuarios[])=>{
      this.usuarios=resp;
      console.log(this.usuarios);
    });
  }

  agregarUsuario(){
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

        this.administradorService.agregarUsuario(this.usuario).subscribe(resp=>{
          if(resp['resultado']==='OK'){



          swalWithBootstrapButtons.fire(
            'Registrado!',
            'Cargo registrado.',
            'success'
          )
          this.router.navigate(['usuarios']);
          this.mostrarUsuarios();
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
