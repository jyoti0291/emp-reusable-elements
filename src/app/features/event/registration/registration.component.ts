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
  fields: any = fieldConfig.registration;
  public minCheck = 1;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
      // this.form.patchValue({
      //   name1: 'any name'
      // });
      this.form = this.commonService.prepareForm(this.fields);
      this.fields.userTeamSelect.value = 1;
      //this.fields.area.value = "hello";
    console.log(this.form.value);
    //this.form.value.description = 'he he';
     this.form.patchValue({
         description: "any name"
     });
    // this.form.patchValue({
    //     team: "1"
    // });
    // this.form.get("team").setValue("1", {
    //     onlySelf: true
    // });
    this.form.get("team").setValue(1, {
        onlySelf: true
    });

    console.log(this.form.get("team"));
      // console.log(this.group.get(this.field.name));
      // console.log(this.fields.userTeamSelect);
  }

  onSubmit(event: Event) {
        console.log(this.form.value);

    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      //this.submit.emit(this.form.value);
    } else {
      this.commonService.validateAllFormFields(this.form);
    }
  }
  local(temp: Event) {
    console.log(temp);
  }
}
