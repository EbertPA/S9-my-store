import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  // images: string[] = [
  //   '../../../../assets/images/banner-1.jpg',
  //   '../../../../assets/images/banner-2.jpg',
  //   '../../../../assets/images/banner-3.jpg'
  // ];

  // images: string[] = [];


  images: string[] = [
    '../../../../assets/images/banner-1.jpg',
    '../../../../assets/images/banner-2.jpg',
    '../../../../assets/images/banner-3.jpg'
  ];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    // Imagenes productos como slider
    // this.productsService.getAllProducts()
    // .subscribe( resp => {
    //   resp.map( item => {
    //     this.images.push(item.image);
    //   })
    // });
    // console.log(this.images);
  }

}
