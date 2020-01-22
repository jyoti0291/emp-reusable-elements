import { Injectable } from '@angular/core';
import { ValidatorContract } from './interface';

@Injectable({
  providedIn: 'root'
})

//config:any;
export class ValidationService1 {
  constructor(private data) {

  }
  run(normal: ValidatorContract) {
    return normal.init(this.data);
  }
}
