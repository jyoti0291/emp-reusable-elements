import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventComponent } from './event/event.component';
import { EventModule } from './event/event.module';
import { ListComponent } from './event/list/list.component';
import { RegistrationComponent } from './event/registration/registration.component';


@NgModule({
  declarations: [EventComponent, RegistrationComponent, ListComponent],
  imports: [
    CommonModule,
    EventModule,
    RouterModule
  ],
  exports: [
  ]
})
export class FeaturesModule { }
