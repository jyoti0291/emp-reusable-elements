import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { EventRegistrationComponent } from './event-registration.component';


const routes: Routes = [
  { path: 'event', component: EventRegistrationComponent }
];

@NgModule({
  declarations: [EventRegistrationComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class EventRegistrationModule { }
