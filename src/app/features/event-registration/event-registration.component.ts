import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'emp-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.scss']
})
export class EventRegistrationComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('EMP | Event Registration');
  }

  ngOnInit() {
  }

}
