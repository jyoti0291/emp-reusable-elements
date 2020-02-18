import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { TextArea } from '../components.interface';
import { MinLength, Pattern, Required, ValidationService  } from 'services';

@Component({
  selector: 'rx-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  @Input() field: TextArea;
  @Input() group: FormGroup;
  @Output() changedValue = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    const vsInstance = new ValidationService();

    const required = vsInstance.run(new Required());
    const min = vsInstance.run(new MinLength(this.field.validationConfig.minlength));
    const pattern = vsInstance.run(new Pattern(this.field.validationConfig.pattern));

    this.group.controls[this.field.name].setValidators([required.validator, min.validator, pattern.validator]);
    this.field.validationMessages.push(min , pattern , required);
  }

  onChange() {
    this.changedValue.emit(this.group.controls[this.field.name].value);
  }
}
