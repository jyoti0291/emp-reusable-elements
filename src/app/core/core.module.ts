import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { CommonService } from './services';
import { FacadeService } from './services';
import { LoginService } from './services';
import { InterceptorProvider } from './interceptors';
import { LandingpageComponent } from './components/landingpage/landingpage.component';

@NgModule({
  declarations: [ HeaderComponent, LandingpageComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    CommonService,
    FacadeService,
    InterceptorProvider,
    LoginService
  ]
})
export class CoreModule { }
