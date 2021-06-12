import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatalogModule } from './catalog/catalog.module';
import { BackendService } from './services/backend.service';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CatalogModule, HomeModule],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
