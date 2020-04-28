import { Component, OnInit } from '@angular/core';
// import { EventService } from 'services';
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
  fields: any = fieldConfig.registration;
  public minCheck = 1;

  constructor(private commonService: CommonService, private regService: RegistrationService) { }

  ngOnInit() {
      this.form = this.commonService.prepareForm(this.fields);
      this.fields.userTeamSelect.value = 1;
      console.log(this.form.value);
      this.form.patchValue({
          description: 'Hello World!!!'
      });

      // this.form.get('team').setValue('1', {
      //     onlySelf: true
      // });
      this.form.get('team').setValue(1, {
        onlySelf: true
      });

      console.log(this.form.get('team'));
      // console.log(this.group.get(this.field.name));
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
