import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FacadeService } from './services';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  providers: [
    FacadeService
  ]
})
export class CoreModule { }
