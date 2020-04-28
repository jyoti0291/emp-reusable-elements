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
  constructor(private vsInstance: ValidationService) {}

  ngOnInit() {
    const required = this.vsInstance.run(new Required(this.field.validationConfig));
    // Adding a validator
    const validatorResult = this.vsInstance.prepareValidators(required);
    this.group.controls[this.field.name].setValidators([...validatorResult]);
    // for displaying error message
    this.field.validationMessages.push(required);
  }
}
