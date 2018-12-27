import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormComponent } from './testForm/reactive/reactive-form/reactive-form.component';
import { ReactiveRegistComponent } from './testForm/reactive/reactive-regist/reactive-regist.component';
import { TemplateFormComponent } from './testForm/template-form/template-form.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'ReactiveLogin', component: ReactiveFormComponent },//响应式表单demo
    { path: 'ReactiveRegist', component: ReactiveRegistComponent },//响应式表单demo
    { path: 'TemplateForm', component: TemplateFormComponent },//模版式表单demo
    { path: 'register', component: RegisterComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {}
