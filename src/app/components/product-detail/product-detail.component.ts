import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

  // My product list
  // myShopingCart: Product[] = [];

  products: Product[] = [];

  id:string = '';

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
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      console.log('ruta id: ', id);
      this.id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id).subscribe((resp) => {
      this.product = resp;
      console.log(this.product);
    });
  }

  createProduct(){
    const newProduct: Product = {
      id: '222',
      title: 'Nuevo desde angular',
      image: 'assets/images/album.jpg',
      price: 15400,
      description: 'Desde angular',
      category: 'Varios',
    };
    this.productsService.createProduct(newProduct)
    .subscribe(resp => {
      console.log(resp);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      id: '222',
      title: 'Actualizado desde angular',
      image: 'assets/images/album.jpg',
      price: 150000,
      description: 'Edicion',
      category: 'Varios',
    };
    this.productsService.updateProduct('222',updateProduct)
    .subscribe(resp => {
      console.log(resp);
    });
  }

  deleteProduct(){
    this.productsService.deleteProduct(this.id)
    .subscribe(resp => {
      console.log(resp);
    });

  }

}
