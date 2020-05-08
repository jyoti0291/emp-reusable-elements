import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { fieldConfig } from 'app/shared/config';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rx-event-form-builder',
  templateUrl: './event-form-builder.component.html',
  styleUrls: ['./event-form-builder.component.scss']
})
export class EventFormBuilderComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  generateForm() {
    this.router.navigate(['../view'], { relativeTo: this.activatedRoute });
  }

}