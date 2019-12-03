import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'app/core/guards/auth/';
import { EventRegistrationComponent } from './event-registration.component';


const routes: Routes = [
  { path: 'event', component: EventRegistrationComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [EventRegistrationComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [AuthGuard]
})
export class EventRegistrationModule { }
