import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EventRegistrationModule } from './event-registration';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    EventRegistrationModule
  ]
})
export class FeaturesModule { }
