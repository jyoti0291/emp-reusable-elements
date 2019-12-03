import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonService } from './services';
import { FacadeService } from './services';
import { LoginService } from './services';
import { InterceptorProvider } from './interceptors';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ LandingpageComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  providers: [
    CommonService,
    FacadeService,
    InterceptorProvider,
    LoginService
  ]
})
export class CoreModule { }
