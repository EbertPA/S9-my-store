import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // My product list
  myShopingCart: Product[] = [];

  total:number = 0;

  products: Product[] = [];

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    // this.myShopingCart = this.storeService.getShoppingCart();

   }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe( resp => {
      console.log('items ', resp);
      this.products = resp;
    });
  }

  addToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }


}
