import { NgModule } from '@angular/core';

import { TrustedPipe } from './trusted/trusted.pipe';
import { OrderbyPipe } from './orderby/orderby.pipe';

@NgModule({
  declarations: [TrustedPipe, OrderbyPipe],
  imports: [],
  exports: [TrustedPipe, OrderbyPipe]
})
export class PipesModule { }
