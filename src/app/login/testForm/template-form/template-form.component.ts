import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
/**
 * 模版型表单校验不好用
 */
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(value:any,valid:boolean){
    console.log(value);
    console.log(valid);
  }
}
