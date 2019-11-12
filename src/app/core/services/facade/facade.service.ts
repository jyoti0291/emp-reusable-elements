import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class FacadeService {
  public title: string;
  constructor( private titleService: Title, private translate: TranslateService) { }
  setTitle(name: string) {
    this.translate.get(name).subscribe((text: string) => {
      this.titleService.setTitle('EMP | ' + text);
    });
  }
}
