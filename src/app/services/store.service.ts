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

  // Producto ya existe en myShopingCart
  alreadyProduct: boolean = false;

  constructor(

  ) { }

  addProduct(product: Product) {
    // this.myShopingCart.push(product);
    // console.log(product);
    this.alreadyProduct = false;

    this.myShopingCart.map((item) => {
      // console.log(item);
      if(item.id === product.id){
        // console.log(item);
        // console.log('item.id: ',item.id, ' = ','product.id: ',product.id);
        this.alreadyProduct = true;
      }
    });
    // console.log(this.alreadyProduct);
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

}
