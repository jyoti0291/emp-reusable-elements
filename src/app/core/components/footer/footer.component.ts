import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'emp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public version: object;
  public description = '& copy; 2016 Rakuten, Inc.All rights reserved.';
  constructor() { }

  ngOnInit() {
    this.version = { value: '13.0.5-RELEASE' };
  }
}
