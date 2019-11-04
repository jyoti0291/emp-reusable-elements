import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
