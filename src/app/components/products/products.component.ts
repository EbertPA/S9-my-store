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

  total:number = 0;
  showSpinner: boolean = true;

  products: Product[] = [];

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe( resp => {
      this.showSpinner = false;
      this.products = resp;
    });
  }

  addToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

}
