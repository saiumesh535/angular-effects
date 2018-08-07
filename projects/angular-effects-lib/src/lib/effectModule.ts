import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { Dispatch } from './dispatch';

@NgModule({
  declarations: [],
  exports: [],
  entryComponents: []
})
export class EffectModule {
  static forRoot(effectsArray): ModuleWithProviders {
    return {
      ngModule: EffectModule,
      providers: [ effectsArray, Dispatch ]
    };
  }
}
