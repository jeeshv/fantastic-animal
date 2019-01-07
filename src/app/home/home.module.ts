import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ResultComponent } from './result/result.component';
import { AboutComponent } from './about/about.component';
import { ProductMenuComponent } from './product-menu/product-menu.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent,
    ResultComponent,
    AboutComponent,
    ProductMenuComponent,
    CarouselComponent,
    ProductListComponent,
  ],
})
export class HomeModule { }
