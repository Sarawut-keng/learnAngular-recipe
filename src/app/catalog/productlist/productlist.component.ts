import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Product } from '../../product';
import { ProductitemComponent } from '../productitem/productitem.component';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  @ViewChildren(ProductitemComponent)
  productitems!: QueryList<ProductitemComponent>

  products!: Product[];

  constructor() {}

  ngOnInit() {}
  
  selectedProduct(productComponent: ProductitemComponent) {
    alert(`You choose ${productComponent.product.name}`);
    this.productitems.forEach(p => { p.isSelected = false; });
    productComponent.isSelected = true;
  }

}
