import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductitemComponent } from './productitem/productitem.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { BackendService } from './services/backend.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductitemComponent,
    ProductlistComponent
  ],
  imports: [BrowserModule],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
