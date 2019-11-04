import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FacadeService } from './services';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { InterceptorProvider } from './interceptors';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    FacadeService,
    InterceptorProvider
  ]
})
export class CoreModule { }
