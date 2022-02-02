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

  constructor(

  ) { }

  addProduct(product: Product) {
    this.myShopingCart.push(product);
    this.myCart.next(this.myShopingCart);
  }

  getShoppingCart() {
    return this.myShopingCart
  }

  getProduct(id: string) {
    console.log('id:',id,' ', typeof(id));
    // console.log(this.myShopingCart);
    // this.myShopingCart.map(item => {
    //   if(item.id === id){
    //     console.log(item);
    //   }else{
    //     console.log('NO COINCIDE');
    //   }
    //   console.log(item.id);
    // });
    return this.myShopingCart.find(item => id === item.id);
  }

  getTotal() {
    return this.myShopingCart.reduce((sum, item) => sum+item.price,0);
  }

}
