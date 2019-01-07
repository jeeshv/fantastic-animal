import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortalService } from '../../services/portal.service';
import { equalValidator } from '../../validator/validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modify-password',
  templateUrl: './modify-password.component.html',
  styleUrls: ['./modify-password.component.css']
})
export class ModifyPasswordComponent implements OnInit {
  updateUserInfo:FormGroup;
  minLength = 6;
  constructor(private portalService:PortalService,
    private fb:FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.updateUserInfo = this.fb.group({
      oldPassword:['',Validators.required],
      passwordsGroup: this.fb.group({
        password: ['',[Validators.minLength(this.minLength),Validators.required]],
        pconfirm: ['']
      }, { validator: equalValidator }),
    })
  }

  onSubmit({ value, valid }, ev: Event){
    ev.preventDefault();//默认的行为
    if(valid){
      const obj = {
        oldPassword:value.oldPassword,
        password:value.passwordsGroup.password
      }
      this.portalService.resetPassword(obj).subscribe(result => {
        this.router.navigate(["/result",'updatePassword']);
      });
    }
  }

}
