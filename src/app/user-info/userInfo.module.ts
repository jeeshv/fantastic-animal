import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserInfoRoutingModule } from './userInfo-routing.module';
import { PersonalCenterHomeComponent } from './personal-center-home/personal-center-home.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { ModifyPasswordComponent } from './modify-password/modify-password.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  imports: [
    SharedModule,
    UserInfoRoutingModule
  ],
  declarations: [
    UserInfoComponent,
    PersonalCenterHomeComponent,
    MyOrderComponent,
    ModifyPasswordComponent,
  ],
})
export class UserInfoModule { }
