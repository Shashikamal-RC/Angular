import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  product_list : any = [];

  ngOnInit() {
    this.product_list = [
      {
        title : "Model Name 1",
        items : [
          {
            image : "https://i.ibb.co/2Pvg3yh/images.jpg",
            name : "Product name",
            description : "Product desription Product desription Product desription",
            rating : "4",
            no_of_raters : "8545",
            original_price : "$3500",
            discount_price : "$2500"
          },
          {
            image : "https://i.ibb.co/2Pvg3yh/images.jpg",
            name : "Product name",
            description : "Product desription Product desription Product desription",
            rating : "3",
            no_of_raters : "3232",
            original_price : "$6800",
            discount_price : "$6000"
          },
          {
            image : "https://i.ibb.co/2Pvg3yh/images.jpg",
            name : "Product name",
            description : "Product desription Product desription Product desription",
            rating : "5",
            no_of_raters : "5343",
            original_price : "$6000",
            discount_price : "$4500"
          }
        ]
      } ,

      {
        title : "Model Name 2",
        items : [
          {
            image : "https://i.ibb.co/2Pvg3yh/images.jpg",
            name : "Product name",
            description : "Product desription Product desription Product desription",
            rating : "4",
            no_of_raters : "4322",
            original_price : "$6500",
            discount_price : "$5000"
          },
          {
            image : "https://i.ibb.co/2Pvg3yh/images.jpg",
            name : "Product name",
            description : "Product desription Product desription Product desription",
            rating : "3",
            no_of_raters : "4324",
            original_price : "$6500",
            discount_price : "$5000"
          },
          {
            image : "https://i.ibb.co/2Pvg3yh/images.jpg",
            name : "Product name",
            description : "Product desription Product desription Product desription ",
            rating : "5",
            no_of_raters : "8745",
            original_price : "$2500",
            discount_price : "$2000"
          }
        ]
      }
    ]
  }

}
