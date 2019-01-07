import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie';
import { User } from '../../domain/user.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { equalValidator } from '../../validator/validators';
import { PortalService } from '../../services/portal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userInfo:User;
  minLength = 6;
  updateUserInfo:FormGroup;
  constructor(
    private portalService:PortalService,
    private fb:FormBuilder,
    private cookieService: CookieService,
    private router: Router) {

   }

  ngOnInit() {
    this.updateUserInfo = this.fb.group({
      phone:['',[Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      email:['',Validators.compose([Validators.required,Validators.email])],
      question:['',Validators.required],
      answer:['',Validators.required],
    })
    this.getCookieInfo();
  }

  getCookieInfo(){
    const obj = {
      username:this.cookieService.get("username"),
      password:'',
      phone:this.cookieService.get("phone"),
      email:this.cookieService.get("email"),
      question:this.cookieService.get("question"),
      answer:this.cookieService.get("answer"),
    };
    this.userInfo = obj;
  }

  setCookieInfo(data){
    this.cookieService.put("phone",data.phone);
    this.cookieService.put("email",data.email);
    this.cookieService.put("question",data.question);
    this.cookieService.put("answer",data.answer);
  }

  onSubmit({ value, valid }, ev: Event){
    ev.preventDefault();//默认的行为
    if(valid){
      this.portalService.updateInfo(value).subscribe(result => {
        this.setCookieInfo(value);
        this.getCookieInfo();
        this.router.navigate(["/result",'updateUserInfo']);
      });
    }
  }

}
