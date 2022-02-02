import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

    // My product list
    myShopingCart: Product[] = [];

    products: Product[] = [];

    product?: Product = {
      id: '',
      title: '',
      image: '',
      price: 0,
      description: '',
      category: ''
    };

  // product: Product | undefined = {
  //   id: '',
  //   title: '',
  //   image: '',
  //   price: 0,
  //   description: '',
  //   category: ''
  // };

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    console.log('this.product ',this.product);

    this.productsService.getAllProducts()
    .subscribe( resp => {
      console.log('items ', resp);
      this.products = resp;
      this.viewProduct();
    });


    // this.route.params.subscribe((params: Params) => {
    //   const id = params.id;
    //   console.log('ruta id: ',id);
    //   const product = this.products.find(item => id === item.id);
    //   console.log(product);
    // });

  }

  viewProduct(){
    this.route.params.subscribe((params: Params) => {
      // const id = parseInt(params.id);
      const id = params.id;
      console.log('ruta id: ',id);
      const product = this.storeService.getProduct(id);
      // this.products.map(i => {
      //   console.log(i.id,' ',typeof(i.id));
      // });
      this.product = this.products.find(item => id == item.id);
      console.log(this.product);
    });

  }

}
