import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output, OnChanges } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

import { FieldConfig } from '../components.interface';
import { ValidationService1, MinLength, Required } from 'services';
import { Pattern } from 'app/core/services/validation/pattern';

@Component({
  selector: 'emp-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  @Input() data;
  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  @Output() changedValue = new EventEmitter<string>();

  charactercountleft: number;
  public displayErrors: boolean;

  constructor() {}
  ngOnInit() {
    const vsInstance = new ValidationService1();

    const required = vsInstance.run(new Required());

    const min = vsInstance.run(new MinLength(this.field.validations.minlength));

    const pattern = vsInstance.run(new Pattern(this.field.validations.pattern));
    this.group.controls[this.field.name].setValidators([required.validator, min.validator, pattern.validator]);

    this.field.validations = [];
    this.field.validations.push(required);
    this.field.validations.push(min);
    this.field.validations.push(pattern);

    //this.charactercountleft = this.data.max - (this.group.value.name1 ? this.group.value.name1.length : 0 );
  }

  onChange() {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    //this.callback.emit(this.options);
    // let temp = this.options.filter(x => x.checked);
     //console.log(this.options);
    // temp = temp.map(x => x.value);
    // console.log( temp.map(x => x.value));
    this.changedValue.emit(this.group.controls[this.field.name].value);
  }
}
