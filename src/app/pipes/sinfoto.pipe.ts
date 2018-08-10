import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {
  
  sinfoto: string = "assets/img/noimage.png";

  transform(value: any[]): string {
    if (!value) return this.sinfoto
    return (value.length > 0) ? value[1].url : this.sinfoto;
  }

}
