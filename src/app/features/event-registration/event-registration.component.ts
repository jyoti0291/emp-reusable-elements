import { Component, OnInit } from '@angular/core';
import { CommonService, FacadeService } from 'services';

@Component({
  selector: 'emp-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.scss']
})
export class EventRegistrationComponent implements OnInit {
  private apiURL = '/emp/emp/services/manage/app';
  constructor(private facadeService: FacadeService, private commonService: CommonService) {
    this.facadeService.setTitle('event');
  }

  ngOnInit() {
    this.commonService.getVersion(this.apiURL).subscribe(response => {
      if (response) {
        console.log(response);
      }
    });
  }
}
