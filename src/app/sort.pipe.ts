import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any[], key: string, reverse?: boolean): any {
    value.sort((x, y) => {
      return (x[key] > y[key]) ? 1 : -1
    });
    
    return (reverse) ? value.reverse() : value;
  }

}
