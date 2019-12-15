import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './components/logo/logo.component';
import { ButtonComponent } from './components/button/button.component';
import { IllustrationComponent } from './components/illustration/illustration.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    ButtonComponent,
    IllustrationComponent
  ],
  declarations: [
    LogoComponent,
    ButtonComponent,
    IllustrationComponent
  ],
  providers: [],
})
export class SharedModule {}
