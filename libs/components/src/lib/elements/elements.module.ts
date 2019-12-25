import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { IconComponent } from './icon/icon.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [SharedModule],
  declarations: [IconComponent, ButtonComponent],
  exports: [IconComponent, ButtonComponent]
})
export class ElementsModule {}
