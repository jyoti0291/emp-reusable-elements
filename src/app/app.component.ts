import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'emp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'emp-user-interface';
  public locale: string;
  constructor(private translate: TranslateService) {
    this.locale = localStorage.getItem('locale') || navigator.language || navigator.languages[0];
    this.locale = this.locale.indexOf('en') !== -1 ? 'en-US' : this.locale.indexOf('ja') !== -1 ? 'ja-JP' : 'en-US';
    this.translate.setDefaultLang(this.locale);
  }
}
