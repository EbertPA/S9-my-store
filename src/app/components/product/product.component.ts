import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Output() addProduct = new EventEmitter<Product>();

  @Input() product: Product = {
    id: '',
    title: '',
    image: '',
    price: 0,
    description: '',
    category: ''
  };

  private myShopingCart: Product[] = [];

  wasAddToCart: boolean = false;

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe( products => {
      console.log('products store service: ',products);
      this.myShopingCart = products;
      console.log('this.myShopingCart: ',this.myShopingCart);
    });
  }

  addProductToCart() {
    // this.storeService.addProduct(this.product);
    this.addProduct.emit(this.product);

    console.log('addProductToCart');
    this.wasAddToCart = false;

    // this.storeService.getShoppingCart().map(product => {
    this.myShopingCart.map(product => {
      console.log('product ',product);
      if(this.product.id === product.id){
        this.wasAddToCart = true;
        console.log('this.wasAddToCart: ',this.wasAddToCart);
      }
    });


  }


}
