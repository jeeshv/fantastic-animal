import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ResultComponent } from './result/result.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent,
    ResultComponent,
    AboutComponent,
  ],
})
export class HomeModule { }
