import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  msg = '';
  constructor(private router: Router,private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    const key = this.routeInfo.snapshot.params['key'];
    if("login" === key){
      this.msg = "登录成功！";
    }else if("regist" === key){
      this.msg = "注册成功！";
    }
  }

  backToHome(){
    this.router.navigate(["/home"]);
  }

}
