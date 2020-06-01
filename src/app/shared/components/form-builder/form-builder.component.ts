import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../../features/event/registration/registration.service';
import { Formio } from 'angular-formio';
import { Components , Utils  } from 'formiojs';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'rx-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  public formSrc = { components: [] };
  public formComponents = [];
  edit: String;
  private sub: any;
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

  constructor(private route: ActivatedRoute, private regService: RegistrationService) { }

  ngOnInit() {
    this.addTranslationTab();
    this.sub = this.route.params.subscribe(params => {
       this.edit = params['edit'];
    });
    if (this.edit) {
      this.regService.setFormComponents(JSON.parse(localStorage.getItem("formComponents")));
    }
    let formComp = this.regService.getFormComponents();
    this.formSrc.components = formComp;
  }

  addTranslationTab() {
    for (let component in Components.components) {
      const editForm = Components.components[component].editForm;
      Components.components[component].editForm = function() {
        const form = editForm();
        const tabs = Utils.getComponent(form.components, 'tabs', true);
        let count = 0;
        tabs.components[0].components.filter(function (itm) {
          if (itm.key == 'translation') {
            count++;
          }
        });
        if (count == 0) {
          tabs.components[0].components.push({
            input: true,
            key: "translation",
            label: "Translation",
            placeholder: "Field Translation",
            tooltip: "The label for this field that will appear next to it.",
            type: "textfield",
            weight: 0
          });
        }
        return form;
      };
    }
  }

  onChange(event) {
    event.builder.i18next.options.resources.ja = {};
    if (event.form.components.length) {
      let translationObj = {};
      for (let field of event.form.components) {
        translationObj[field.label] = field.translation;
      }
      event.builder.i18next.options.resources.ja = {
        translation: translationObj
      };
    }
    this.regService.setFormComponents(event.form.components);
  }
}
