import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FacadeService } from './services';
import { LoginService } from './services';
import { InterceptorProvider } from './interceptors';

@NgModule({
  declarations: [ HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    FacadeService,
    InterceptorProvider,
    LoginService
  ]
})
export class CoreModule { }
