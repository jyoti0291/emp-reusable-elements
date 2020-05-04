import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rx-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  public formSrc = {components: []};
  constructor() { }

  ngOnInit() {
  }

}
