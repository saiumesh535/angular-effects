import { Injectable } from '@angular/core';
import { Dispatch } from './dispatch';

let dispatch = null;

if (dispatch === null) {
  dispatch = new Dispatch();
}

/**
 * @param type string
 */
export const MyEffect = (type: string) => {
  return function (target: Object, propertyKey: string, descriptionKey: TypedPropertyDescriptor<Function>) {
    dispatch.addEffect(type, target, propertyKey, descriptionKey);
  };
};

