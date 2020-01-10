import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output, OnChanges } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

import { FieldConfig } from '../components.interface';
import { ValidationService1, MinLength, Required } from 'services';

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
    const sortProgram = new ValidationService1({key: '3'});
    sortProgram.runSort(new MinLength());
    const result = sortProgram.runSort(new Required());
    this.group.controls[this.field.name].setValidators(result.validator);
    this.field.validations.push(result);
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
