import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

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
}
