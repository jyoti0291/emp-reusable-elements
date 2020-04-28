import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Text } from '../components.interface';
import { MinLength, Pattern, Required, ValidationService } from 'services';

@Component({
  selector: 'rx-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  @Input() field: Text;
  @Input() group: FormGroup;

  @Output() changedValue = new EventEmitter<string>();

  charactercountleft: number;
  public displayErrors: boolean;

  constructor(private vsInstance: ValidationService) {}
  ngOnInit() {

    const min = this.vsInstance.run(new MinLength(this.field.validationConfig));
    const pattern = this.vsInstance.run(new Pattern(this.field.validationConfig));
    const required = this.vsInstance.run(new Required(this.field.validationConfig));

    const validatorResult = this.vsInstance.prepareValidators(min, pattern, required );
    this.group.controls[this.field.name].setValidators([...validatorResult]);
    this.field.validationMessages.push(min , pattern , required);
    // this.charactercountleft = this.data.max - (this.group.value.name1 ? this.group.value.name1.length : 0 );
  }

  onChange() {
    this.changedValue.emit(this.group.controls[this.field.name].value);
  }
}
