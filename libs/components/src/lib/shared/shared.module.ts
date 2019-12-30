import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorVariantDirective } from './color-variant.directive';
import { FontSizeDirective } from './font-size.directive';
import { IconLocationDirective } from './icon-location.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ColorVariantDirective, FontSizeDirective, IconLocationDirective],
  exports: [CommonModule, ColorVariantDirective, FontSizeDirective, IconLocationDirective]
})
export class SharedModule {}
