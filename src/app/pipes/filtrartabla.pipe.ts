import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrartabla'
})
export class FiltrartablaPipe implements PipeTransform {

  transform(value: any,args: any[]): any {

    

    const resultadoBusqueda=[];
    //for que realice el  recorrido de los argumentos en el valor que estamos introduciendo
    for(let nombre of value){
      //lo que pongamos en el formulario de busqueda nos tiene que detectar ya sea por mayuscula y minuscular
      //tenemos que poner una condicion 
      if(nombre.nompaciente.toLowerCase().indexOf(args)>-1 || nombre.nompaciente.toUpperCase().indexOf(args)>-1 || nombre.nompaciente.indexOf(args)>-1){
        resultadoBusqueda.push(nombre);
      };
    };
    return resultadoBusqueda;
  }

}
