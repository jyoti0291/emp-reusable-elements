import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../../features/event/registration/registration.service';

@Component({
  selector: 'rx-form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.scss']
})
export class FormRendererComponent implements OnInit {
  public formSrc = {
    components: []
  };
  public formComponents = [];
  constructor(private regService: RegistrationService) { }

  ngOnInit() {
    this.formComponents = this.regService.getFormComponents();
    const formComp = localStorage.getItem('formComponents');
    this.formSrc.components = JSON.parse(formComp);
  }

  onSubmit(event) {
    console.log(event);
  }

}
