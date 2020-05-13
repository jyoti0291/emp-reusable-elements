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
    // let formComp = localStorage.getItem("formComponents");
    this.formSrc.components = this.formComponents;
    console.log(this.formSrc);
  }

  onSubmit(event) {
    console.log(event.data);
  }

}
