import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { PipesModule } from './pipes/index';
import { CommonLayoutService } from './services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [TranslateModule, PipesModule],
  providers: [
    CommonLayoutService
  ]
})
export class SharedModule { }
