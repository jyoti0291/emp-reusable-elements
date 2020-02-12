import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Button } from '../components.interface';

@Component({
  selector: 'rx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() field: Button;
  @Output() action = new EventEmitter<any>();

  constructor() { }

  return() {
    this.action.emit();
  }

}
