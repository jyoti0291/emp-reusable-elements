import { Injectable } from '@angular/core';
import { ValidatorContract } from './interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ValidationService {
  run(normal: ValidatorContract) {
    return normal.init();
  }
  prepareValidators(...data) {
    return data.filter(item => item !== undefined).map(item => item.validator);
  }
}
