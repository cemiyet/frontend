import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComponentsModule } from '@cemiyet/components';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LandingPage } from './landing/landing.page';

@NgModule({
  declarations: [AppComponent, LandingPage],
  imports: [BrowserModule, AppRoutingModule, ComponentsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
