import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'emp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public version: object;
  public description = '&copy; 2016 Rakuten, Inc.All rights reserved.';
  private footerClass = '';
  constructor(private router: Router) { }

  ngOnInit() {
    this.version = { value: '13.0.5-RELEASE' };
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          if (this.router.url === '/landingpage' || this.router.url === '/') {
            this.footerClass = 'landingPage';
          } else {
            this.footerClass = '';
          }
        }
      }
    );
  }
}
