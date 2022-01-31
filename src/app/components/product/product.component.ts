import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  // @Input() img: string = '';
  // @Output() loaded = new EventEmitter<string>();

  @Output() addProduct = new EventEmitter<Product>();

  // imageDefault: string = '../../../assets/images/default.png';

  @Input() product: Product = {
    id: '',
    title: '',
    image: '',
    price: 0,
    description: '',
    category: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  addProductToCart() {
    this.addProduct.emit(this.product);
  }

  // onLoaded(img: string) {
  //   console.log('log Padre ',img);
  // }


}
