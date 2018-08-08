import { Injectable } from '@angular/core';
import { Dispatch } from './dispatch';
import { AddingEffects } from './addingEffect';

let effects = null;

if (effects === null) {
  effects = new AddingEffects();
}

/**
 * @param type string
 */
export const Effect = (type: string) => {
  return function (target: Object, propertyKey: string, descriptionKey: TypedPropertyDescriptor<Function>) {
    effects.addEffect(type, target, propertyKey, descriptionKey);
  };
};

