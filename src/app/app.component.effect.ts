import { Injectable } from '@angular/core';
import { MyEffect } from 'angular-effects';

@Injectable()
export class AppCompEffect {
  constructor () {}

  @MyEffect('NAME')
  public onNameChange(name: string): void {
    console.log('nameChanged', name);
  }

}

