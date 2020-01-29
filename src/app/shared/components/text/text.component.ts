import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldConfig } from '../components.interface';
import { MinLength, Pattern, Required, ValidationService } from 'services';

@Component({
  selector: 'rx-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  @Output() changedValue = new EventEmitter<string>();

  charactercountleft: number;
  public displayErrors: boolean;

  constructor() {}
  ngOnInit() {
    const vsInstance = new ValidationService();

    const required = vsInstance.run(new Required());
    const min = vsInstance.run(new MinLength(this.field.validationConfig.minlength));
    const pattern = vsInstance.run(new Pattern(this.field.validationConfig.pattern));

    this.group.controls[this.field.name].setValidators([required.validator, min.validator, pattern.validator]);
    this.field.validationMessages.push(min , pattern , required);

    //this.charactercountleft = this.data.max - (this.group.value.name1 ? this.group.value.name1.length : 0 );
  }

  onChange() {
    this.changedValue.emit(this.group.controls[this.field.name].value);
  }
}
