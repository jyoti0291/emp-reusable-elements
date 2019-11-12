import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { FeaturesModule } from './features';
import { LoginComponent } from './core/components/login/login.component';
import { SharedModule } from './shared';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: 'event', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    CoreModule,
    FeaturesModule,
    SharedModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation of translation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
