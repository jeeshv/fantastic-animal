import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PortalService } from '../../services/portal.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myFormGroupxx:FormGroup;
  items = [];
  private readonly avatarName = 'avatars';
  constructor(
    private portalService:PortalService,
    private fb:FormBuilder,
    private router: Router,) { }

  ngOnInit() {
    const img = `${this.avatarName}:svg-${(Math.random() * 16).toFixed()}`;
    const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    this.items = nums.map(d=>`avatars:svg-${d}`);
    this.myFormGroupxx = this.fb.group({
      username:[],
      password:[],
      pconfirm:[],
      phoneNum:[],
      email:[],
      question:[],
      answer:[],
      avatar:[img]
    })
  }

  onSubmit({ value, valid }, ev: Event){
    ev.preventDefault();//默认的行为
    if(valid){
      let obj = {
        username:value.username,
        password:value.password,
      }
      console.log(obj);
      this.portalService.regist(obj).subscribe(result => {
        const data = result.json();
        if(data.status === 0){
          this.router.navigate(["/result",'regist']);
        }else{
          console.log("error");
        }
      });
    }
  }

}
