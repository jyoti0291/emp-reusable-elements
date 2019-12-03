import { NgModule } from '@angular/core';

import { TrustedPipe } from './trusted/trusted.pipe';

@NgModule({
  declarations: [TrustedPipe],
  imports: [],
  exports: [TrustedPipe]
})
export class PipesModule { }
