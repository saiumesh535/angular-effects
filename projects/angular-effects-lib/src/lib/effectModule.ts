import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { Dispatch } from './dispatch';

@NgModule({
  declarations: [],
  exports: [],
  entryComponents: []
})
export class EffectsModule {
  static forRoot(effectsArray): ModuleWithProviders {
    return {
      ngModule: EffectsModule,
      providers: [ effectsArray, Dispatch ]
    };
  }
}
