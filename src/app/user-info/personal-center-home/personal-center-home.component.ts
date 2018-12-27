import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-center-home',
  templateUrl: './personal-center-home.component.html',
  styleUrls: ['./personal-center-home.component.css']
})
export class PersonalCenterHomeComponent implements OnInit {
  menu = [
    {name:'个人中心',isActive:true,url:'./userInfo'},
    {name:'我的订单',isActive:false,url:'./myOrder'},
    {name:'修改密码',isActive:false,url:'./modifyPassword'},
  ]
  currentSelectMenu = this.menu[0].name;
  constructor() { }

  ngOnInit() {
  }
  menuClick(item){
    for(let i = 0; i<this.menu.length;i++){
      if(item===this.menu[i].name){
        this.menu[i].isActive = true;
      }else{
        this.menu[i].isActive = false;;
      }
    }
  }

}
