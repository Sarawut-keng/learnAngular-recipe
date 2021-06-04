import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products: Product[];

  constructor() {
    this.products = [];
    this.products.push({
      name: 'tomatoes',
      price: 990
    });
    this.products.push({
      name: 'mango',
      price: 1000
    });
    this.products.push({
      name: 'coconut',
      price: 500
    })
  }

  ngOnInit(): void {
  }

}
