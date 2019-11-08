import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { FeaturesModule } from './features';
import { LoginComponent } from './core/components/login/login.component';
import { SharedModule } from './shared';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: 'event', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CoreModule,
    FeaturesModule,
    SharedModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
