import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
