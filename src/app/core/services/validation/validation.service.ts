import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }
  prepareValidation(list: Array<object>) {
    const result: any = [];
    list.forEach((item) => {
      const temp = Object.keys(item)[0];
      switch (temp) {
        case 'required':
          result.push({
            name: 'required',
            validator: Validators.required,
            message: 'Required!'
          });
          break;
        case 'minlength':
          result.push({
            name: 'minlength',
            validator: Validators.minLength(5),
            message: '5 Required'
          });
          break;
        case 'pattern':
          result.push({
            name: 'pattern',
            validator: Validators.pattern('^[a-zA-Z]+$'),
            message: 'Accept only text'
          });
          break;
        default:
          break;
      }
    });
    return result;
  }
}
