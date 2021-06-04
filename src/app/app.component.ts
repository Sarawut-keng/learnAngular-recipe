import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductlistComponent } from './productlist/productlist.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('productlist', {static: true}) productlist!: ProductlistComponent;

  ngOnInit(): void {

    this.productlist.products = [
      {
        name: 'mango',
        price: 299
      },
      {
        name: 'coconut',
        price: 399
      },
      {
        name: 'Watermelon',
        price: 300
      }
    ];
  }

  constructor() {
    
  }
}
