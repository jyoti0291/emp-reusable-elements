import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rx-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
