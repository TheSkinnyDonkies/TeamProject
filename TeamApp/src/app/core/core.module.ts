import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  providers: []
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parent: CoreModule) {
      if (parent) {
        throw new Error('Core module has already been provided elswhere!');
      }
  }
}
