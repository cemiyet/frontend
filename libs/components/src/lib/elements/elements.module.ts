import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { LogoComponent } from './logo/logo.component';
import { TextComponent } from './text/text.component';
import { IconComponent } from './icon/icon.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [SharedModule],
  declarations: [LogoComponent, TextComponent, IconComponent, ButtonComponent],
  exports: [LogoComponent, TextComponent, IconComponent, ButtonComponent]
})
export class ElementsModule {}
