import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
/**
 * 响应式表单Demo
 * formGroup>formGroupName>formControlName
 * formGroup>formArrayName
 * formControl只能单独使用
 */
export class ReactiveFormComponent implements OnInit {
  username = '';
  formModel:FormGroup = new FormGroup({
    'username': new FormControl(this.username, [
      Validators.required,
      Validators.minLength(4),
    ]),
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
  get name() { return this.username; }
  ngOnInit() {
  }
  onSubmit(){
    console.log(this.formModel.value)
  }
  addEmail(){
    let emails = this.formModel.get("emails") as FormArray;
    emails.push(new FormControl());
  }

}
