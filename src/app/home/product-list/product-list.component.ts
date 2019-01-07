import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList = []
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategoryService();
  }

  getCategoryService(){
    this.categoryService.getCategoryList().subscribe(data => {
      if(data.success){
        this.productList = data.data;
        console.log(this.productList)
      }
    });
  }

}
