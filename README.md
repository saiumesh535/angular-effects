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
import { Effect } from 'angular-effects';

@Injectable()
export class AppCompEffect {
  constructor () {}

  @Effect('NAME')
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
import { EffectsModule } from 'angular-effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // adding your effects to EffectModule
    EffectsModule.forRoot([AppCompEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// app.component.ts

import { Component } from '@angular/core';
import { Dispatch } from 'angular-effects';

@Component({
  selector: 'app-root',
  template: `<input type="text" [(ngModel)]="name"  (ngModelChange)="onChange(name)">`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-effects-app';

  constructor(private ae: Dispatch) {}

  public onChange(name: string): void {
    this.ae.dispatch({ type: 'NAME', payload: name });
  }

```