import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { CommonService } from 'services';
import { fieldConfig } from 'app/shared/config';


@Component({
  selector: 'rx-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() group: FormGroup;
  @Output() submitted = new EventEmitter<string>();

  public fields: any = fieldConfig.registration;
  public formData;
  constructor(private commonService: CommonService) { }

  onChanges(): void {
    this.group.valueChanges.subscribe(val => {
      delete val.role;
      delete val.roleselectedItems;
      this.fields.submitButton.disabled = this.commonService.isEqual(val, this.formData);
    });
  }
  ngOnInit() {
    this.fields.submitButton.disabled = false;
    this.onChanges();
    this.formData = {...this.group.value};
  }
  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.group.valid) {
      this.submitted.emit(this.group.value);
    } else {
      this.commonService.validateAllFormFields(this.group);
    }
  }
  onReset() {
    this.group.reset();
  }
}
