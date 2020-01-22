import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldConfig } from '../components.interface';
import { Required, ValidationService1 } from 'services';

@Component({
  selector: 'emp-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss']
})
export class RadiobuttonComponent implements OnInit {
  @Input() data;
  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  constructor() { }

  ngOnInit() {
    const vsInstance = new ValidationService1();
    const result = vsInstance.run(new Required());
    // Adding a validator
    this.group.controls[this.field.name].setValidators(result.validator);
    // for displaying error message
    this.field.validations = [];
    this.field.validations.push(result);
  }
}
