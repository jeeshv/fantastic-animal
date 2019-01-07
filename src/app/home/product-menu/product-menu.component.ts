import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.css']
})
export class ProductMenuComponent implements OnInit {
  menu = [
    [
      {name:'手机',isActive:false},
      {name:'数码',isActive:false},
    ],
    [
      {name:'电脑',isActive:false},
      {name:'办公配件',isActive:false},
    ],
    [
      {name:'电视',isActive:false},
      {name:'空调',isActive:false},
      {name:'冰箱',isActive:false},
      {name:'洗衣机',isActive:false},
    ],
    [
      {name:'厨卫家电',isActive:false},
      {name:'小家电',isActive:false},
    ],
    [
      {name:'家居',isActive:false},
      {name:'家具',isActive:false},
      {name:'家装',isActive:false},
    ],
    [
      {name:'个护化妆',isActive:false},
      {name:'清洁',isActive:false},
      {name:'纸品',isActive:false},
    ],
    [
      {name:'母婴',isActive:false},
      {name:'玩具',isActive:false},
      {name:'童装童鞋',isActive:false},
    ],
    [
      {name:'鞋靴',isActive:false},
      {name:'箱包',isActive:false},
      {name:'钟表',isActive:false},
      {name:'珠宝',isActive:false},
    ],
    [
      {name:'运动户外',isActive:false},
      {name:'足球',isActive:false},
      {name:'汽车生活',isActive:false},
    ],
    [
      {name:'图书',isActive:false},
      {name:'音像',isActive:false},
      {name:'电子书',isActive:false},
    ]
  ]
  constructor() { }

  ngOnInit() {
  }

}
