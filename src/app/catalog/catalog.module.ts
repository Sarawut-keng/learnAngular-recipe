import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductitemComponent } from './productitem/productitem.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { BackendService } from '../services/backend.service';

@NgModule({
  declarations: [ProductlistComponent, ProductitemComponent],
  imports: [CommonModule],
  providers: [BackendService],
  exports: [ProductlistComponent]
})
export class CatalogModule { }
