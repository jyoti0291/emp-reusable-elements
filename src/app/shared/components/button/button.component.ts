import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FieldConfig } from '../components.interface';

@Component({
  selector: 'rx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() field: FieldConfig;
  @Output() action = new EventEmitter<any>();

  constructor() { }

  return() {
    this.action.emit();
  }

}
