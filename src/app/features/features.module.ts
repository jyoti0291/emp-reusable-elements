import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { EventComponent } from './event/event.component';
import { EventModule } from './event/event.module';
import { ListComponent } from './event/list/list.component';
import { RegistrationComponent } from './event/registration/registration.component';
import { EventFormBuilderComponent } from './event/event-form-builder/event-form-builder.component';
import { EventFormRendererComponent } from './event/event-form-renderer/event-form-renderer.component';
import { SharedModule } from 'shared';


@NgModule({
  declarations: [EventComponent, RegistrationComponent, ListComponent, EventFormBuilderComponent, EventFormRendererComponent],
  imports: [
    CommonModule,
    EventModule,
    FormsModule,
    RouterModule,
    TranslateModule,
    SharedModule
  ],
  exports: [
  ]
})
export class FeaturesModule { }
