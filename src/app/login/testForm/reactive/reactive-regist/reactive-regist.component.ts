import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { mobileAsyncValidator, mobileValidator, equalValidator } from '../../../../validator/validators';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
/**
 * 响应式表单检验数据
 * 模版式表单只适合做一些简单的校验
 */
export class ReactiveRegistComponent implements OnInit {
  myFormGroup: FormGroup;
  //校验器
  //抽取成公共方法
 /*  mobileValidator(control: FormControl): any {
    var myreg = /^(((13[0-9]{1}|(15[0-9]{1}|(18[0-9]{1}))+\d{8}$)))/;
    let valid = myreg.test(control.value);
    console.log("手机校验 result:" + valid);
    return valid ? null : { mobile: true };
  }
  equalValidator(group: FormGroup): any {
    let password: FormControl = group.get("password") as FormControl;
    let pconfirm: FormControl = group.get("pconfirm") as FormControl;
    let valid: boolean = (password.value === pconfirm.value);
    console.log("密码校验 result:" + valid);
    return valid ? null : { equal: true };
  } */
  minLength = 6;
  constructor(fb: FormBuilder) {
    this.myFormGroup = fb.group({
      username: ['', [Validators.required, Validators.minLength(this.minLength)]],
      mobile: ['', mobileValidator,mobileAsyncValidator],
      passwordsGroup: fb.group({
        password: ['',Validators.minLength(this.minLength)],
        pconfirm: ['']
      }, { validator: equalValidator })
    })
  }

  //v1
  /*  constructor() {
     this.myFormGroup = new FormGroup({
       username: new FormControl(),
       mobile: new FormControl(),
       passwordsGroup: new FormGroup({
         password: new FormControl(),
         pconfirm: new FormControl(),
       })
     })
     
   } */

  onSubmit() {
    //let isValid: boolean = this.myFormGroup.get("username").valid;
    /* if(isValid){
      alert(isValid)
    } */
    //当所有检验通过
    if(this.myFormGroup.valid){
      console.log(this.myFormGroup.value);
    }
  }

  ngOnInit() {
  }

  /* formModel:FormGroup = new FormGroup({
    dataRanger:new FormGroup({
      from:new FormControl(),
      to:new FormControl(),
    }),
    emails:new FormArray([
      new FormControl('a@a.com'),
      new FormControl('a@a.com'),
    ]
    )
  });
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.formModel.value)
  }
  addEmail(){
    let emails = this.formModel.get("emails") as FormArray;
    emails.push(new FormControl());
  } */

}
