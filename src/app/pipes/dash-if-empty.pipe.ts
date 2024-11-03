import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashIfEmpty'
})
export class DashIfEmptyPipe implements PipeTransform {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  transform(value: any): string | any {
    const IS_EMPTY = value === undefined || value === null || value === '';

    if(IS_EMPTY) {
      return '-';
    }

    return value;
  }
}
