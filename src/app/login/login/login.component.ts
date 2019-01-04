import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Quote } from '../../domain/quote.model';
import { PortalService } from '../../services/portal.service';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';
import { AppSettings } from '../../app-setting';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isError = false;
  errorMsg = '';
  quote: Quote;
  myGroup: FormGroup;
  constructor(
    private cookieService: CookieService,
    private router: Router,
    private portalService:PortalService,
    private fb: FormBuilder, ) { 
  }

  ngOnInit() {
    this.myGroup = this.fb.group({
      account: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    })
  }
  onSubmit({ value, valid }, ev: Event) {//valid :boolean是否合法
    ev.preventDefault();//默认的行为
    if(valid){
      this.portalService.userLogin(value.account,value.password).subscribe(data => {
        const result = data.body;
        if(result.success){
          // 保存用户信息到cookie
        this.setCookieInfo(data);
        // 保存token
          this.errorMsg = '';
          this.isError = false;
          this.router.navigate(["/home"]);
        }else{
          this.isError = true;
          this.errorMsg = "账号或密码不匹配";
        }
      });
    }
  }
  setCookieInfo(data){
    const cookieObj = data.body.data;
    this.cookieService.put("username",cookieObj.username);
    this.cookieService.put("phone",cookieObj.phone);
    this.cookieService.put("email",cookieObj.email);
    this.cookieService.put("question",cookieObj.question);
    this.cookieService.put("answer",cookieObj.answer);

    const token = data.headers.get('token');
    this.cookieService.put("token",token);
  }
}
