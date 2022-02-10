import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {


  products: Product[] = [];

  id:string = '';

  idSelected: boolean = false;

  product: Product = {
    id: '',
    title: '',
    image: '',
    price: 0,
    description: '',
    category: '',
  };

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.products = this.storeService.getShoppingCart();
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.id = params.id;
      this.fetchProduct(id);
      this.products.map(product => {
        if(product.id == this.id){
          this.idSelected = true;
        }
      });

    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id).subscribe((resp) => {
      this.product = resp;
    });
  }

  addToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.idSelected = true;
  }

}
