import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PortalService } from '../../services/portal.service';
import { equalValidator, mobileValidator } from '../../validator/validators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  minLength = 6;
  myFormGroupxx:FormGroup;
  items = [];
  private readonly avatarName = 'avatars';
  constructor(
    private portalService:PortalService,
    private fb:FormBuilder,
    private router: Router,) { }

  ngOnInit() {
    this.myFormGroupxx = this.fb.group({
      username:['',Validators.compose([Validators.required,Validators.minLength(6)])],
      passwordsGroup: this.fb.group({
        password: ['',Validators.minLength(this.minLength)],
        pconfirm: ['']
      }, { validator: equalValidator }),
      phoneNum:['',[Validators.required, Validators.minLength(11), Validators.maxLength(11),mobileValidator]],
      email:['',Validators.compose([Validators.required,Validators.email])],
      question:['',Validators.required],
      answer:['',Validators.required],
    })
  }

  reset() {
    this.myFormGroupxx.reset();
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
        console.log(result);
        /* const data = result.json();
        if(data.status === 0){
          this.router.navigate(["/result",'regist']);
        }else{
          console.log("error");
        } */
      });
    }
  }

}
