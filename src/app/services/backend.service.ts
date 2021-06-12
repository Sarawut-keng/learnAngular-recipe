import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() {}

  getProducts(): Product[] {
    return [
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
    ]
  }
}
