import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from './icon/icon.component';
import { ColorVariantDirective } from './color-variant.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ColorVariantDirective, IconComponent],
  exports: [IconComponent]
})
export class ElementsModule {}
