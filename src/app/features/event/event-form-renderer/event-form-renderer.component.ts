import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Formio, FormioAppConfig } from 'angular-formio';

@Component({
  selector: 'rx-event-form-renderer',
  templateUrl: './event-form-renderer.component.html',
  styleUrls: ['./event-form-renderer.component.scss']
})
export class EventFormRendererComponent implements OnInit {
  public formOptions = null;
  public form
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  editForm() {
    this.router.navigate(['../create', {edit: true }], { relativeTo: this.activatedRoute });
  }

  setLangugage() {
    let formComp = localStorage.getItem("formComponents");
    let formOption = {
      components: JSON.parse(formComp)
    }
    Formio.createForm(document.getElementById('formio'), formOption, {
      readOnly: false,
      language: 'en',
      i18n: {
        'en': {
          Submit: 'Submit'
        }
      }
    }).then(function(form) {
      form.language = 'ja';
    });
  }

}
