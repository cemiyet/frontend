import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorVariantDirective } from './color-variant.directive';

@NgModule({
  declarations: [ColorVariantDirective],
  imports: [CommonModule],
  exports: [CommonModule, ColorVariantDirective]
})
export class SharedModule {}
