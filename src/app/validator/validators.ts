import { FormControl, FormGroup } from "@angular/forms";

//校验器
export function mobileValidator(control: FormControl): any {
    var myreg = /^(((13[0-9]{1}|(15[0-9]{1}|(18[0-9]{1}))+\d{8}$)))/;
    let valid = myreg.test(control.value);
    console.log("手机校验 result:" + valid);
    return valid ? null : { mobile: true };
}
export function equalValidator(group: FormGroup): any {
    let password: FormControl = group.get("password") as FormControl;
    let pconfirm: FormControl = group.get("pconfirm") as FormControl;
    let valid: boolean = (password.value === pconfirm.value);
    console.log("密码校验 result:" + valid);
    /* return valid ? null : { equal: true }; */
    return valid ? null : { equal: {descxxx:"密码和确认的密码不匹配"} };
}
//异步校验器
export function mobileAsyncValidator(control: FormControl): any {
    var myreg = /^(((13[0-9]{1}|(15[0-9]{1}|(18[0-9]{1}))+\d{8}$)))/;
    let valid = myreg.test(control.value);
    console.log("手机校验 result:" + valid);
    return valid ? null : { mobile: true };//版本不支持所以没有写了，主要是模拟请求后台的数据
}