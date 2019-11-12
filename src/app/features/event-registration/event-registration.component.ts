import { Component, OnInit } from '@angular/core';
import { FacadeService } from 'services';

@Component({
  selector: 'emp-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.scss']
})
export class EventRegistrationComponent implements OnInit {

  constructor(private facadeService: FacadeService) {
    this.facadeService.setTitle('event');
  }

  ngOnInit() {
  }

}
