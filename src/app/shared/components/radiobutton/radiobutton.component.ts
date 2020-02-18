import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Radio } from '../components.interface';
import { Required, ValidationService } from 'services';

@Component({
  selector: 'rx-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss']
})
export class RadiobuttonComponent implements OnInit {
  @Input() field: Radio;
  @Input() group: FormGroup;
  constructor() { }

  ngOnInit() {
    const vsInstance = new ValidationService();
    const result = vsInstance.run(new Required());
    // Adding a validator
    this.group.controls[this.field.name].setValidators(result.validator);
    // for displaying error message
    this.field.validationMessages.push(result);
  }
}
