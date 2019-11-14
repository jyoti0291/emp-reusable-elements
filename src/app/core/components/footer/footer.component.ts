import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'emp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public version: object;
  constructor() { }

  ngOnInit() {
    this.version = { value: 1.0 };
  }
}
