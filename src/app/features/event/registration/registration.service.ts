import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  public formComp = [];
  constructor() { }
  textChanged() {
    console.log('text changed');
  }
  emailChanged() {
    console.log('Email changed');
  }
  textAreaChanged() {
    console.log('TextArea changed');
  }
  setFormComponents(formComp) {
    this.formComp = formComp;
  }
  getFormComponents() {
    return this.formComp;
  }
}
