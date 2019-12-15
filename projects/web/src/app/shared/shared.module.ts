import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './components/logo/logo.component';
import { ButtonComponent } from './components/button/button.component';
import { IllustrationComponent } from './components/illustration/illustration.component';
import { TextInputComponent } from './components/text-input/text-input.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    ButtonComponent,
    IllustrationComponent,
    TextInputComponent
  ],
  declarations: [
    LogoComponent,
    ButtonComponent,
    IllustrationComponent,
    TextInputComponent
  ],
  providers: [],
})
export class SharedModule {}
