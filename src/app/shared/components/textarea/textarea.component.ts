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

  constructor(private vsInstance: ValidationService) {}

  ngOnInit() {
    const required = this.vsInstance.run(new Required(this.field.validationConfig));
    const min = this.vsInstance.run(new MinLength(this.field.validationConfig));
    const pattern = this.vsInstance.run(new Pattern(this.field.validationConfig));

    const validatorResult = this.vsInstance.prepareValidators(min, pattern, required );
    this.group.controls[this.field.name].setValidators([...validatorResult]);

    this.field.validationMessages.push(min , pattern , required);
  }

  onChange() {
    this.changedValue.emit(this.group.controls[this.field.name].value);
  }
}
