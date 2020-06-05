import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../../features/event/registration/registration.service';
import { Formio } from 'angular-formio';
import { Components , Utils  } from 'formiojs';


@Component({
  selector: 'rx-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  public formSrc = { components: [] };
  public formComponents = [];
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
      }
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

  constructor(private regService: RegistrationService) { }

  ngOnInit() {
    const editForm = Components.components.textfield.editForm;
    const form = editForm();
    const tabs = Utils.getComponent(form.components, 'tabs', true);
    if (!tabs.components.some(item => item.key === 'custom')) {
      this.addCustomTab(form, tabs);
    }
    let formComp = localStorage.getItem('formComponents');
    this.formComponents = this.regService.getFormComponents();
    this.formSrc.components = this.formComponents;
  }

  addCustomTab(form: any, tabs: any) {
    Components.components.textfield.editForm = () => {
      const customTab = [{
        input: true,
        key: 'typeofUser',
        label: 'User Type',
        placeholder: 'User Type',
        tooltip: 'user type.',
        type: 'textfield',
        weight: 0
      },
      {
        weight: 700,
        type: 'radio',
        label: 'Permission',
        tooltip: 'permission.',
        key: 'permission',
        input: true,
        inline: true,
        values: [
          {
            label: 'Read',
            value: 'read'
          },
          {
            label: 'Edit',
            value: 'edit'
          },
          {
            label: 'Delete',
            value: 'delete'
          }
        ]
      }];
      tabs.components.push({
        key: 'custom',
        label: 'Custom',
        components: customTab
      });
      return form;
    };
  }

  onChange(event) {
    this.regService.setFormComponents(event.form.components);
  }
}
