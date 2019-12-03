import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PipesModule } from './pipes/index';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    PipesModule,
    TranslateModule
  ]
})
export class SharedModule { }
