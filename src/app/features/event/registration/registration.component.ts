import { Component, OnInit } from '@angular/core';
//import { EventService } from 'services';
import { FormGroup } from '@angular/forms';
import { CommonService } from 'services';
import { fieldConfig } from 'app/shared/config';


@Component({
  selector: 'emp-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  fields: object = fieldConfig.registration;
  public minCheck = 1;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    // this.form.patchValue({
    //   name1: 'any name'
    // });
    this.form = this.commonService.prepareForm(this.fields);
    console.log(this.form);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      //this.submit.emit(this.form.value);
    } else {
      this.commonService.validateAllFormFields(this.form);
    }
  }
  local(temp: any) {
    //console.log(temp);

  }

}
