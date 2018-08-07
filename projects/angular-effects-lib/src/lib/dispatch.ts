import { Injectable } from '@angular/core';
import { IEffect, IDispatch } from './Types';

const effects: IEffect[] = [];

@Injectable()
export class Dispatch {

  constructor() { }

  /**
   *
   * @param type string
   * @param target Object
   * @param propertyKey string
   * @param descriptionKey TypedPropertyDescriptor<Function>
   */
  public addEffect(type: string, target: Object, propertyKey: string, descriptionKey: TypedPropertyDescriptor<Function>): void {
    effects.push({ type, target, propertyKey, descriptionKey });
  }

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
