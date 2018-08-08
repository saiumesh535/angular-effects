import { Injectable } from '@angular/core';
import { Dispatch } from './dispatch';
import { IEffect } from './Types';

export const effects: IEffect[] = [];

@Injectable()
export class AddingEffects {
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

}
