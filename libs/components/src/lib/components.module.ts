import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsModule } from './elements/elements.module';

import { IconLocationDirective } from './icon-location/icon-location.directive';

import { ButtonComponent } from './button/button.component';
import { LogoComponent } from './logo/logo.component';
import { IllustrationComponent } from './illustration/illustration.component';
import { TextInputComponent } from './text-input/text-input.component';

@NgModule({
  imports: [CommonModule, ElementsModule],
  declarations: [
    IconLocationDirective,
    ButtonComponent,
    LogoComponent,
    IllustrationComponent,
    TextInputComponent
  ],
  exports: [
    ElementsModule,
    IconLocationDirective,
    ButtonComponent,
    LogoComponent,
    IllustrationComponent,
    TextInputComponent
  ]
})
export class ComponentsModule {}
