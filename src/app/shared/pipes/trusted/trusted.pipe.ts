import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trusted'
})
export class TrustedPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
