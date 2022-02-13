import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class CarPipesPipe implements PipeTransform {

  transform(arreglo: any[], texto: string): any[] {
    if (texto === '') {
      console.log(arreglo);
      return arreglo;
    }
    texto = texto.toLowerCase();
    return arreglo.filter(item =>{
     return item.make.toLowerCase()
              .includes(texto);
    });
  }

}
