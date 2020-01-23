import { Injectable } from '@angular/core';
import { ValidatorContract } from './interface';

@Injectable({
  providedIn: 'root'
})

export class ValidationService {
  run(normal: ValidatorContract) {
    return normal.init();
  }
}
