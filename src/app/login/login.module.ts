import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormComponent } from './testForm/reactive/reactive-form/reactive-form.component';
import { ReactiveRegistComponent } from './testForm/reactive/reactive-regist/reactive-regist.component';
import { TemplateFormComponent } from './testForm/template-form/template-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule,
  ],
  declarations: [
    LoginComponent, 
    RegisterComponent, 
    ReactiveFormComponent, 
    ReactiveRegistComponent, 
    TemplateFormComponent,
  ],
})
export class LoginModule { }
