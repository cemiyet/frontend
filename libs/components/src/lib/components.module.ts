import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './shared/shared.module';
import { ElementsModule } from './elements/elements.module';

import { IllustrationComponent } from './illustration/illustration.component';
import { TextInputComponent } from './text-input/text-input.component';

@NgModule({
  imports: [CommonModule, SharedModule, ElementsModule],
  declarations: [IllustrationComponent, TextInputComponent],
  exports: [ElementsModule, IllustrationComponent, TextInputComponent]
})
export class ComponentsModule {}
