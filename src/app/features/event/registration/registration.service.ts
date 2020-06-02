import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  public formComp = [];
  public formTranslations = null;
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
  setFormTranslations(formTranslations) {
    this.formTranslations = formTranslations;
  }
  getFormTranslations() {
    return this.formTranslations;
  }
}
