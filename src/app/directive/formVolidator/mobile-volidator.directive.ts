import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { mobileValidator } from '../../validator/validators';

@Directive({
  selector: '[mobile]',//mobileVolidator = 可以作为属性来用，不用修饰符
  providers:[
    {provide:NG_VALIDATORS,useValue:mobileValidator, multi: true }//将校验器封装成指令,multi=true是固定写法
  ]
})
export class MobileVolidatorDirective {

  constructor() { }

}
