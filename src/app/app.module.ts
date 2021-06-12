import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CatalogModule } from './catalog/catalog.module';
import { BackendService } from './services/backend.service';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './catalog/productlist/productlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'product',
    component: ProductlistComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CatalogModule, HomeModule, RouterModule.forRoot(routes), BrowserAnimationsModule, MatButtonModule],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
