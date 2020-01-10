import { Component, OnInit } from '@angular/core';
//import { EventService } from 'services';
import { FormGroup } from '@angular/forms';
import { CommonService } from 'services';

@Component({
  selector: 'emp-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  fields: object = {
    usernameText : {
      type: 'input',
      label: 'Username1',
      inputType: 'text',
      name: 'name1',
      validations: [ {required : true} , {minlength: 5 }, {pattern: 'alpha'}]
    },
    genderRadio :  {
      label: 'Select Gender',
      name: 'gender',
      inputType: 'radio',
      options: ['Male', 'Female'],
      validations: [ {required : true}]
    },
    userRoleCheckbox :  {
      label: 'Select Role',
      name: 'role',
      inputType: 'checkbox',
      options: [{ key: 1, text: 'Admin'},
      { key: 2, text: 'Director'},
      { key: 3, text: 'Professor'},
      { key: 4, text: 'Student'}],
      validations: [ {required : true}]
    }
  };
  public remember = 1;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    // this.form.patchValue({
    //   name1: 'Ajay'
    // });
    this.form = this.commonService.prepareForm(this.fields);
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
    console.log(temp);

  }

}
