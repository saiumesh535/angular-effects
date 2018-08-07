import { Injectable } from '@angular/core';
import { MyEffect } from 'dist/angular-effects';

@Injectable()
export class TestEffect {
  constructor () {}

  @MyEffect('NAME')
  public onNameChange(name: string): void {
    console.log('nameChanged', name);
  }

}

