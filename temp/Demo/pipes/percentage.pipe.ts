import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage',
  standalone: true,
  pure: true, // default pure pipe
})
export class PercentagePipe implements PipeTransform {

  transform(value: number, total: number, decimal: number = 0): string {
    console.log({ value, total, decimal }, 'from pipe');
    return (value / total * 100).toFixed(decimal) + '%';
  }

}
