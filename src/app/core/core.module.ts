import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from 'shared';

import { CommonService, LandingpageService } from './services';
import { FacadeService } from './services';
import { LoginService } from './services';
import { InterceptorProvider } from './interceptors';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { CommonLayoutService } from 'app/shared/services';

const appRoutes: Routes = [
  { path: 'landingpage', component: LandingpageComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [ LandingpageComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    TranslateModule,
    SharedModule
  ],
  providers: [
    CommonService,
    FacadeService,
    InterceptorProvider,
    LoginService,
    CommonLayoutService,
    LandingpageService
  ]
})
export class CoreModule { }
