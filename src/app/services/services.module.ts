import {NgModule, ModuleWithProviders} from '@angular/core';
import { PortalService } from './portal.service';
import { CategoryService } from './category.service';

export {
  PortalService,
}

@NgModule()
export class ServicesModule {
  static forRoot():ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        PortalService,
        CategoryService
      ]
    };
  }
}
