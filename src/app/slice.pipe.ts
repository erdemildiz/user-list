import { Pipe, PipeTransform } from '@angular/core';
/*
 Gelen dizinin belirtilen index değerlerinden kesilmesini(slice) edilmesini sağlar
 @value array
 @args Object{ b: başlangıç index, e: Sonlandırıcı index }
 @return array
*/
@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // Başlangıç index
    let begin = args.b;
    // Sonlandırıcı index
    let end = args.e;
    // Slice et
    return value.slice(begin, end);
  }

}
