import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie';
import { User } from '../../domain/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userInfo:User;
  constructor(
    private cookieService: CookieService,) {

   }

  ngOnInit() {
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

}
