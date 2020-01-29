import { Component, OnInit } from '@angular/core';
//import { EventService } from 'services';
import { FormGroup } from '@angular/forms';
import { CommonService } from 'services';
import { fieldConfig } from 'app/shared/config';


@Component({
  selector: 'rx-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  fields: object = fieldConfig.registration;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    // this.form.patchValue({
    //   name1: 'any name'
    // });
    this.form = this.commonService.prepareForm(this.fields);
    fieldConfig.registration.userTeamSelect.value = 1;
  }

  onSubmit(event: Event) {
  }
  local(temp: any) {
    //console.log(temp);
  }
}
