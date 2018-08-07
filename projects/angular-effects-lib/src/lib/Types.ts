export interface IDispatch {
  type: string;
  payload?: any;
}

export interface IEffect {
  type: string;
  target: Object;
  propertyKey: string;
  descriptionKey: TypedPropertyDescriptor<Function>;
}
