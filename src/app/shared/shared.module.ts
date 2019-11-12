import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PipesModule } from './pipes/index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
  ]
})
export class SharedModule { }
