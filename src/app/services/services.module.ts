import {NgModule, ModuleWithProviders} from '@angular/core';
import { PortalService } from './portal.service';

export {
  PortalService,
}

@NgModule()
export class ServicesModule {
  static forRoot():ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        PortalService
      ]
    };
  }
}
