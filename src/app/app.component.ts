import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductlistComponent } from './catalog/productlist/productlist.component';
import { BackendService } from './services/backend.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  // constructor(private backendService: BackendService) {} 

  // @ViewChild('productlist', {static: true}) 
  // productlist!: ProductlistComponent;

  ngOnInit(): void {
    // this.productlist.products = this.backendService.getProducts();
  }


}
