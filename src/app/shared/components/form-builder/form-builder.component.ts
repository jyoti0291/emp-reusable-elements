import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rx-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  public formSrc = { components: [] };
  public formOptions = {
    builder: {
      basic: {
        components: {
          time: false,
          password: false,
          phoneNumber: false,
          number: false,
          content: false,
          selectboxes: false,
        }
      },
      advanced: false,
      data: false,
      layout: false
    },
    editForm: {
      textfield: [
        {
          key: 'api',
          ignore: true
        },
        {
          key: 'layout',
          ignore: true
        },
        {
          key: 'conditional',
          ignore: true
        },
        {
          key: 'logic',
          ignore: true
        }
      ]
    }
  }
  constructor() { }

  ngOnInit() {
  }

  onChange(event) {
  }

}
