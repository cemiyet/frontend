import { NgModule } from '@angular/core';

import { LogoComponent } from './components/logo/logo.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  imports: [],
  exports: [
    LogoComponent,
    ButtonComponent
  ],
  declarations: [
    LogoComponent,
    ButtonComponent
  ],
  providers: [],
})
export class SharedModule {}
