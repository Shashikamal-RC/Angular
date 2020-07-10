import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  products : any = [];

  ngOnInit() {
    this.products = [
      {
        image : "https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412551/E-commerce%20landing%20page/products-showcase/product-1-img_3x.jpg",
        name : "cold fashion",
        price : "$ 56.00"
      },
      {
        image : "https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412546/E-commerce%20landing%20page/products-showcase/product-2-img_3x.jpg",
        name : "women fashion",
        price : "$ 84.00"
      },
      {
        image : "https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412550/E-commerce%20landing%20page/products-showcase/product-3-img_3x.jpg",
        name : "women fashion",
        price : "$ 48.00"
      },
      {
        image : "https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412550/E-commerce%20landing%20page/products-showcase/product-4-img_3x.jpg",
        name : "men fashion",
        price : "$ 89.00"
      }
    ]
  }

}
