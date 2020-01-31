import { Component, OnInit } from '@angular/core';
//import { EventService } from 'services';
import { FormGroup } from '@angular/forms';
import { CommonService } from 'services';
import { fieldConfig } from 'app/shared/config';
import { RegistrationService } from './registration.service';


@Component({
  selector: 'rx-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  fields: object = fieldConfig.registration;

  constructor(private commonService: CommonService, private regService: RegistrationService) { }

  ngOnInit() {
    // this.form.patchValue({
    //   name1: 'any name'
    // });
    this.form = this.commonService.prepareForm(this.fields);
    fieldConfig.registration.userTeamSelect.value = 1;
  }

  onSubmit(event: Event) {
    console.log(event);
  }
  textChanged(temp: Event) {
    this.regService.textChanged();
  }
  emailChanged(temp: Event) {
    this.regService.emailChanged();
  }
  textAreaChanged(temp: Event) {
    this.regService.textAreaChanged();
  }
}
