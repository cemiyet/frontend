import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './components/logo/logo.component';
import { ButtonComponent } from './components/button/button.component';
import { IllustrationComponent } from './components/illustration/illustration.component';
import { TextInputComponent } from './components/text-input/text-input.component';

import { IconLocationDirective } from './directives/icon-location.directive';


@NgModule({
  declarations: [
    IconLocationDirective,
    LogoComponent,
    ButtonComponent,
    IllustrationComponent,
    TextInputComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconLocationDirective,
    LogoComponent,
    ButtonComponent,
    IllustrationComponent,
    TextInputComponent
  ]
})
export class ComponentsModule {}
