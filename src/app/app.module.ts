import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { UserInfoModule } from './user-info/userInfo.module';
import { CookieBackendService } from 'angular2-cookie/services/cookies.backend.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpInterceptorService } from './services/Interceptor';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MatSidenavModule,
    CoreModule,
    LoginModule,
    HomeModule,
    UserInfoModule,
  ],
  providers: [
    CookieService,
    CookieBackendService,
    HttpInterceptorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
