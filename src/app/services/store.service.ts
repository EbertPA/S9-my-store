import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  // My product list
  private myShopingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();

  // Variable comprueba producto en myShopingCart
  alreadyProduct: boolean = false;

  constructor(

  ) { }

  addProduct(product: Product) {
    this.alreadyProduct = false;

    this.myShopingCart.map((item) => {
      if(item.id === product.id){
        this.alreadyProduct = true;
      }
    });
    if(!this.alreadyProduct){
      this.myShopingCart = [...this.myShopingCart, product];
      this.myCart.next(this.myShopingCart);
    }
  }

  getShoppingCart() {
    return this.myShopingCart
  }

  getTotal() {
    return this.myShopingCart.reduce((sum, item) => sum+item.price,0);
  }

  resetShoppingCart() {
    this.myShopingCart = [];
    this.myCart.next(this.myShopingCart);
  }


}
