import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Oficinas } from 'src/app/interfaces/oficinas.interface';
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
  usuarioAgregar:any={};
  usuario:any={};
  oficinas:Oficinas[];


  constructor(public administradorService:AdministradorService,private router:Router) { }

  ngOnInit(): void {
    this.mostrarUsuarios();
    this.mostrarOficinas();
  }

  mostrarUsuarios(){
    this.administradorService.getUsuario().subscribe((resp:Usuarios[])=>{
      this.usuarios=resp;
      console.log(this.usuarios);
    });
  }


  seleccionarUsuario(id_usuario){
    this.administradorService.seleccionarUsario(id_usuario).subscribe((resp)=>{
      this.usuario=resp[0];
      console.log(this.usuario);
    });
  }
  editarUsuario(){
    this.administradorService.editarUsuario(this.usuario).subscribe((resp)=>{
      if(resp['resultado']=='OK'){
        Swal.fire({
          icon:'success',title:'Editado Correctamente',showConfirmButton:false,timer:2000
        })
        this.mostrarUsuarios();
      }
    })
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

        this.administradorService.agregarUsuario(this.usuarioAgregar).subscribe(resp=>{
          if(resp['resultado']==='OK'){



          swalWithBootstrapButtons.fire(
            'Registrado!',
            'Usuario registrado.',
            'success'
          )
          this.router.navigate(['/usuarios']);
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
      this.usuarioAgregar={};

    })
  }

  eliminarUsuario(id_usuario,nombre){
    
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: `Desea Eliminar al usuario(a): ${nombre}?`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar!',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.administradorService.eliminarUsuario(id_usuario).subscribe(resp=>{
          if(resp['resultado']==='OK'){


          swalWithBootstrapButtons.fire(
            'Eliminado!',
            'haga click para continuar.',
            'success'
          )
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

  mostrarOficinas(){
    this.administradorService.getOficina().subscribe((resp:Oficinas[])=>{
      this.oficinas=resp;
      console.log(this.oficinas);
    });
  }
}
