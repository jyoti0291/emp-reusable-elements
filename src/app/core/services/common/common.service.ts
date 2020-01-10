import { Injectable } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ValidationService } from '../validation';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private fb: FormBuilder, private http: HttpClient, private validationService: ValidationService) { }

  public getVersion(url: string): Observable<any[]> {
    return this.http.get<any[]>(url).pipe(map((data: any) => {
      return data;
    }));
  }

  public bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  public prepareForm(fields: object) {
    const keys = Object.keys(fields);
    const group = this.fb.group({});
    keys.forEach((key) => {
      if (fields[key].inputType === 'checkbox') {
        return;
      }
      if (fields[key].hasOwnProperty('validations')) {
        // commented here to add validation from strategic pattern
        //fields[key].validations = this.validationService.prepareValidation(fields[key].validations);
      }
      const control = this.fb.control(
        fields[key].value,
        this.bindValidations(fields[key].validations || [])
      );
      group.addControl(fields[key].name, control);
    });
    return group;
  }

  public validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
}
