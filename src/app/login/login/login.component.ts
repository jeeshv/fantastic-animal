import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Quote } from '../../domain/quote.model';
import { PortalService } from '../../services/portal.service';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

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
    private fb: FormBuilder, ) { //FormBuilder用于简化数据初始化的工作
   /*  this.quoteService$.getQuote().subscribe(q => this.quote = q);
    this.quoteService$.get("quotes/1").subscribe(result => {
      console.log(result);
    }); */
  }

  ngOnInit() {
    this.myGroup = this.fb.group({
      account: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    })
    //v1
    /* this.myGroup = new FormGroup({
      email:new FormControl('',Validators.compose([Validators.required,Validators.email])),
      password:new FormControl('',Validators.compose([Validators.required,Validators.minLength(6)])),
    }); */
  }
  onSubmit({ value, valid }, ev: Event) {//valid :boolean是否合法
    ev.preventDefault();//默认的行为
    if(valid){
      const obj = { username: value.account, password: value.password }
      this.portalService.userLogin(obj).subscribe(result => {
        const data = result.json();
        this.cookieService.put("username",data.data.username);
        if(data.status === 0){
          this.errorMsg = '';
          this.isError = false;
          this.router.navigate(["/result",'login']);
        }else{
          this.isError = true;
          this.errorMsg = "账号或密码不匹配";
        }
      });
    }
  }

}
