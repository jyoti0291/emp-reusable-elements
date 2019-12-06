import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'emp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private headerVisibility = false;
  private environmentVar = '%EMPENVVAR%';
  private headerClass = '';
  constructor(private router: Router) {
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.headerVisibility = true;
          if (this.router.url === '/landingpage' || this.router.url === '/') {
            this.headerClass = 'emp-header';
            if (this.router.url === '/') {
              this.headerVisibility = false;
            }
          } else {
            this.headerClass = '';
          }
        }
      }
    );
  }

  ngOnInit() {
  }

}
