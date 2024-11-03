import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {
  transform(status: boolean): string {
    const INVALID_STATUS = status === undefined || status === null;

    if(INVALID_STATUS) {
      return 'Status indisponível ou inválido';
    }

    return status ? 'Ativo' : 'Inativo';
  }
}
