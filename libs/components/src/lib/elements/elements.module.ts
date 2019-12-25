import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { LogoComponent } from './logo/logo.component';
import { IconComponent } from './icon/icon.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [SharedModule],
  declarations: [LogoComponent, IconComponent, ButtonComponent],
  exports: [LogoComponent, IconComponent, ButtonComponent]
})
export class ElementsModule {}
