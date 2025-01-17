import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';

import { CheckBoxGroup, CheckBox } from '../components.interface';


@Component({
  selector: 'rx-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  // @Input() name: string;
  // @Input() options: Array<any>;
  @Input() group: FormGroup;
  @Input() field: CheckBox;

  @Output() callback: EventEmitter<Array<any>>;
  form: FormGroup;
  hiddenControlName: string;
  constructor() { }
  ngOnInit() {
    const checkboxGroup = new FormArray(
      this.field.options.map(
        item => new FormGroup({
          id: new FormControl(item.key),
          text: new FormControl(item.value),
          checkbox: new FormControl(false)
        })
      )
    );

    this.group.addControl(this.field.name, checkboxGroup);
    if (this.field.mincheck) {
      const hiddenControl = new FormControl(this.mapItems(checkboxGroup.value), Validators.required);
      checkboxGroup.valueChanges.subscribe((v) => {
        hiddenControl.setValue(this.mapItems(v));
      });
      this.hiddenControlName = this.field.name + 'selectedItems';
      this.group.addControl(this.hiddenControlName, hiddenControl);
    }
  }
  mapItems(items: CheckBoxGroup[]) {
    const selectedItems = items.filter((item: CheckBoxGroup) => item.checkbox).map((item) => item.id);
    return selectedItems.length >= this.field.mincheck ? selectedItems : null;
  }

  onToggle() {
    // this.callback.emit(this.options);
    // let temp = this.options.filter(x => x.checked);
    // console.log(this.options);
    // temp = temp.map(x => x.value);
    // console.log( temp.map(x => x.value));
  }
}
