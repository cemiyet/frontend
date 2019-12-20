import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconLocationDirective } from './icon-location/icon-location.directive';

import { ButtonComponent } from './button/button.component';
import { LogoComponent } from './logo/logo.component';
import { IllustrationComponent } from './illustration/illustration.component';
import { TextInputComponent } from './text-input/text-input.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    IconLocationDirective,
    ButtonComponent,
    LogoComponent,
    IllustrationComponent,
    TextInputComponent
  ],
  exports: [
    IconLocationDirective,
    ButtonComponent,
    LogoComponent,
    IllustrationComponent,
    TextInputComponent
  ]
})
export class ComponentsModule {}
