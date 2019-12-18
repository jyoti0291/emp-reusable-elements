import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './event.component';
import { ListComponent } from './list/list.component';
import { RegistrationComponent } from './registration/registration.component';
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
