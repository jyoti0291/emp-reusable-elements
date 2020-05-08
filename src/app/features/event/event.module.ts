import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './event.component';
import { ListComponent } from './list/list.component';
import { RegistrationComponent } from './registration/registration.component';
import { EventFormBuilderComponent } from './event-form-builder/event-form-builder.component';
import { EventFormRendererComponent } from './event-form-renderer/event-form-renderer.component';
const routes: Routes = [
  {
    path: 'event',
    component: EventComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch : 'full'
      },
      {
        path: 'registration',
        component: RegistrationComponent,
      },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'create',
        component: EventFormBuilderComponent,
      },
      {
        path: 'view',
        component: EventFormRendererComponent,
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class EventModule { }
