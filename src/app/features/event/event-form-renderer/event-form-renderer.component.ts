import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Formio, FormioAppConfig } from 'angular-formio';
import { RegistrationService } from '../registration/registration.service';

@Component({
  selector: 'rx-event-form-renderer',
  templateUrl: './event-form-renderer.component.html',
  styleUrls: ['./event-form-renderer.component.scss']
})
export class EventFormRendererComponent implements OnInit {
  public formOptions = null;
  public form;
  public selectField;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private regService: RegistrationService) { }

  ngOnInit() {
  }

  editForm() {
    this.router.navigate(['../create', {edit: true }], { relativeTo: this.activatedRoute });
  }

  setLangugage(language) {
    const self = this;
    if (language !== 'null') {
      const formComp = localStorage.getItem('formComponents');
      const formOption = {
        components: JSON.parse(formComp)
      };
      Formio.createForm(document.getElementById('formio'), formOption, {
        readOnly: false,
        language: 'en',
        i18n: {
          en: {
            Submit: 'Submit'
          }
        }
      }).then((form) => {
        const formTranslations = self.regService.getFormTranslations() ? self.regService.getFormTranslations() : JSON.parse(localStorage.getItem('formTranslations'));
        form.i18next.options.resources.ja = {
          translation: formTranslations
        };
        form.language = language;
      });
    }
  }

}
