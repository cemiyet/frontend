import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorVariantDirective } from './color-variant.directive';
import { FontSizeDirective } from './font-size.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ColorVariantDirective, FontSizeDirective],
  exports: [CommonModule, ColorVariantDirective, FontSizeDirective]
})
export class SharedModule {}
