# Angular Effects Implementation

## Getting Started

### Installing

```
npm i angular-effects
```

###Example (TypeScript)

```ts

// app.component.effect.ts
import { Injectable } from '@angular/core';
import { MyEffect } from 'dist/angular-effects';

@Injectable()
export class AppCompEffect {
  constructor () {}

  @MyEffect('NAME')
  public onNameChange(name: string): void {
    console.log('nameChanged', name);
  }
}


// app.module.ts

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
    // adding your effects to EffectModule
    EffectModule.forRoot([AppCompEffect, TestEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// app.component.ts

import { Component } from '@angular/core';
import { Dispatch } from 'dist/angular-effects';

@Component({
  selector: 'app-root',
  template: `<input type="text" [(ngModel)]="name"  (ngModelChange)="onChange(name)">`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-effects-app';

  constructor(private dispatch: Dispatch) {}

  public onChange(name: string): void {
    this.dispatch.dispatch({ type: 'NAME', payload: name });
  }

```