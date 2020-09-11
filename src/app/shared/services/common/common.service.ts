import { Injectable } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

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

  public prepareForm(fields) {
    const keys = Object.keys(fields);
    const group = this.fb.group({});
    keys.forEach((key) => {
      if (fields[key].inputType === 'checkbox') {
        return;
      }
      if (fields[key].hasOwnProperty('validations')) {
        // commented here to add validation from strategic pattern
        // fields[key].validations = this.validationService.prepareValidation(fields[key].validations);
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
  public isEqual(value, other) {
    const type = Object.prototype.toString.call(value);
    if (type !== Object.prototype.toString.call(other)) return false;
    if (['[object]', '[object Object]'].indexOf(type) < 0) return false;
    const valueLen = type === '[object]' ? value.length : Object.keys(value).length;
    const otherLen = type === '[object]' ? other.length : Object.keys(other).length;
    if (valueLen !== otherLen) return false;
    if (type === '[object]') {
      for (let i = 0; i < valueLen; i++) {
        if (this.compare(value[i], other[i]) === false) return false;
      }
    } else {
      for (const key in value) {
        if (value.hasOwnProperty(key)) {
          if (this.compare(value[key], other[key]) === false) return false;
        }
      }
    }
    return true;
  }
  compare(item1, item2) {
    const itemType = Object.prototype.toString.call(item1);
    if (['[object]', '[object Object]'].indexOf(itemType) >= 0) {
      if (!this.isEqual(item1, item2)) return false;
    } else {
      if (itemType !== Object.prototype.toString.call(item2)) return false;
      if (itemType === '[object Function]') {
        if (item1.toString() !== item2.toString()) return false;
      } else {
        if (item1 !== item2) return false;
      }
    }
  }
}
