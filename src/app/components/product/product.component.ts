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
      this.myShopingCart = products;
      this.updateButton();
    });
  }

  addProductToCart() {
    this.addProduct.emit(this.product);
    this.wasAddToCart = false;
    this.updateButton();
  }

  updateButton(){
    this.myShopingCart.map(product => {
      if(this.product.id === product.id){
        this.wasAddToCart = true;
      }
    });
  }

}
