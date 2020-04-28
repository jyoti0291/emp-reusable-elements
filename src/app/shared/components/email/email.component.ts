import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Email } from '../components.interface';
import { MinLength, Pattern, Required, ValidationService, EmailService } from 'services';

@Component({
  selector: 'rx-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  @Input() field: Email;
  @Input() group: FormGroup;
  @Output() changedValue = new EventEmitter<string>();

  charactercountleft: number;
  public displayErrors: boolean;

  constructor(private vsInstance: ValidationService) {}

  ngOnInit() {

    const required = this.vsInstance.run(new Required(this.field.validationConfig));
    const min = this.vsInstance.run(new MinLength(this.field.validationConfig));
    const pattern = this.vsInstance.run(new Pattern(this.field.validationConfig));
    const email = this.vsInstance.run(new EmailService());

    const validatorResult = this.vsInstance.prepareValidators( email, min, pattern, required);
    this.group.controls[this.field.name].setValidators([...validatorResult]);
    this.field.validationMessages.push(email, min, pattern, required);

    // this.charactercountleft = this.data.max - (this.group.value.name1 ? this.group.value.name1.length : 0 );
  }

  onChange() {
    this.changedValue.emit(this.group.controls[this.field.name].value);
  }
}
