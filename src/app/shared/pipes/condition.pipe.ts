import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'condition'
})
export class ConditionPipe implements PipeTransform {

  transform(value: any): string {
    return (value === 'new') ? 'Nuevo' : 'Usado';
  }

}
