import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldConfig } from '../components.interface';

@Component({
  selector: 'rx-error-container',
  templateUrl: './error-container.component.html',
  styleUrls: ['./error-container.component.scss']
})
export class ErrorContainerComponent implements OnInit {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
