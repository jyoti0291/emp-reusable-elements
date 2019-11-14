import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { FeaturesModule } from './features';
import { LoginComponent } from './core/components/login/login.component';
import { SharedModule } from './shared';
import { FooterComponent } from './core/components/footer/footer.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { LoginService } from './core/services/login';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: 'event', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent
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
    SharedModule,
    FormsModule
  ],
  providers: [Title, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation of translation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
