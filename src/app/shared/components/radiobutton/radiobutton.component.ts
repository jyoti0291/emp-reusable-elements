import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldConfig } from '../components.interface';

@Component({
  selector: 'emp-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss']
})
export class RadiobuttonComponent implements OnInit {
  @Input() data;
  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
