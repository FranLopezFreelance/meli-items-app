import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amount'
})
export class AmountPipe implements PipeTransform {

  transform(amount: number): string {
    return new Intl.NumberFormat('de-DE', { maximumFractionDigits: 0 }).format(amount);
  }

}
