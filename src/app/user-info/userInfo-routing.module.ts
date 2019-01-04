import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalCenterHomeComponent } from './personal-center-home/personal-center-home.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { ModifyPasswordComponent } from './modify-password/modify-password.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { LoginGuard } from '../guard/login.guard';

const routes: Routes = [
    { path: 'personalCenter', component: PersonalCenterHomeComponent,
        children:[
            {path:'userInfo',component:UserInfoComponent},
            {path:'myOrder',component:MyOrderComponent},
            {path:'modifyPassword',component:ModifyPasswordComponent},
        ],canActivate:[LoginGuard] 
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers:[LoginGuard]
})
export class UserInfoRoutingModule {}
