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
          key: 'display',
          components: [
            {
              key: 'prefix',
              ignore: true,
            },
            {
              key: 'description',
              ignore: true,
            },
            {
              key: 'inputMask',
              ignore: true,
            },
            {
              key: 'mask',
              ignore: true,
            },
            {
              key: 'disabled',
              ignore: true,
            },
            {
              key: 'alwaysEnabled',
              ignore: true,
            },
            {
              key: 'showWordCount',
              ignore: true,
            },
            {
              key: 'tableView',
              ignore: true,
            },
            {
              key: 'persistent',
              ignore: true,
            },
            {
              key: 'showWordCount',
              ignore: true,
            },
            {
              key: 'clearOnHide',
              ignore: true,
            },
            {
              key: 'multiple',
              ignore: true,
            },

            {
              key: 'hidden',
              ignore: true,
            },
            {
              key: 'autofocus',
              ignore: true,
            },
            {
              key: 'protected',
              ignore: true,
            },
            {
              key: 'tabindex',
              ignore: true,
            },
            {
              key: 'allowMultipleMasks',
              ignore: true,
            },
            {
              key: 'hideLabel',
              ignore: true,
            },
            {
              key: 'errorLabel',
              ignore: true,
            },

            {
              key: 'suffix',
              ignore: true,
            }
          ]
        },
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
          key: 'data',
          ignore: true
        },
        {
          key: 'logic',
          ignore: true
        }
      ]
    }
  };

  constructor() { }

  ngOnInit() {
  }
  onChange(event) {
    localStorage.setItem("formComponents", JSON.stringify(event.form.components));
  }

}
