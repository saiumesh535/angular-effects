import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppCompEffect } from './app.component.effect';
import { EffectModule } from 'dist/angular-effects';
import { TestEffect } from './test.effect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EffectModule.forRoot([AppCompEffect, TestEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
