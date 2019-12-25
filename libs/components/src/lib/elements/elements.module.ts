import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorVariantDirective } from './color-variant.directive';

import { IconComponent } from './icon/icon.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ColorVariantDirective, IconComponent, ButtonComponent],
  exports: [IconComponent, ButtonComponent]
})
export class ElementsModule {}
