import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { fieldConfig } from 'app/shared/config';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationService } from '../registration/registration.service';

@Component({
  selector: 'rx-event-form-builder',
  templateUrl: './event-form-builder.component.html',
  styleUrls: ['./event-form-builder.component.scss']
})
export class EventFormBuilderComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private regService: RegistrationService) { }

  ngOnInit() {
  }

  generateForm() {
    let formComponents = this.regService.getFormComponents();
    localStorage.setItem("formComponents", JSON.stringify(formComponents));
    console.log(JSON.stringify(formComponents));
    this.router.navigate(['../view'], { relativeTo: this.activatedRoute });
  }

}