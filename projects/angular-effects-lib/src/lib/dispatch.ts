import { Injectable } from '@angular/core';
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
          action.target[action.propertyKey](data.payload);
        }
      });
    }
  }
}
