import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { LogoComponent } from './logo/logo.component';
import { TextComponent } from './text/text.component';
import { IconComponent } from './icon/icon.component';
import { ButtonComponent } from './button/button.component';
import { TagComponent } from './tag/tag.component';
import { DividerComponent } from './divider/divider.component';

@NgModule({
  imports: [SharedModule],
  declarations: [LogoComponent, TextComponent, IconComponent, ButtonComponent, TagComponent, DividerComponent],
  exports: [LogoComponent, TextComponent, IconComponent, ButtonComponent, TagComponent, DividerComponent]
})
export class ElementsModule {}
