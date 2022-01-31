import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // imgParent: string = '../../../assets/images/default.png';
  // imgParent: string = 'https://www.w3schools.com/howto/img_avatar.png';
  // imgParent: string = '';
  // My product list
  myShopingCart: Product[] = [];

  total:number = 0;

  products: Product[] = [
    {
      id: '1',
      title: 'El mejor juguete',
      image: '../assets/images/toy.jpg',
      price: 565,
      description: 'producto 1',
      category: 'clothes'
    },
    {
      id: '2',
      title: 'Bicicleta casi nueva',
      price: 356,
      image: '../assets/images/bike.jpg',
      description: 'producto 2',
      category: 'clothes'
    },
    {
      id: '3',
      title: 'Colleción de albumnes',
      price: 34,
      image: '../assets/images/album.jpg',
      description: 'producto 3',
      category: 'clothes'
    },
    {
      id: '4',
      title: 'Mis libros',
      price: 23,
      image: '../assets/images/books.jpg',
      description: 'producto 4',
      category: 'clothes'
    },
    {
      id: '5',
      title: 'Mis glasses',
      price: 23,
      image: '../assets/images/glasses.jpg',
      description: 'producto 5',
      category: 'clothes'
    },
    {
      id: '6',
      title: 'Mis libros',
      price: 23,
      image: '../assets/images/house.jpg',
      description: 'producto 6',
      category: 'clothes'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  addToShoppingCart(product: Product) {
    this.myShopingCart.push(product);
    console.log(product);
    console.log(this.myShopingCart);
    this.total = this.myShopingCart.reduce((sum, item) => sum+item.price,0);
    // this.total = this.myShopingCart.reduce((sum, item) => sum+item.price, 0);
  }

}
