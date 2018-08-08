import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { IEffect, IDispatch } from './Types';
import { effects } from './addingEffect';


@Injectable()
export class Dispatch {

  constructor() { }

  /**
   *
   * @param data IDispatch
   */
  public dispatch(data: IDispatch): void {
    if (effects !== null) {
      effects.forEach((action: IEffect) => {
        if (action.type === data.type) {
          const payLoad = action.rxjs === true ? of(data.payload) : data.payload;
          action.target[action.propertyKey](payLoad);
        }
      });
    }
  }
}
