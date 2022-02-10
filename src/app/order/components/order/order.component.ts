import { Component, OnInit } from '@angular/core';
import { Product } from './../../../models/product.model';
import { StoreService } from 'src/app/services/store.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  imageDefault: string = './../../../../assets/images/default.png';

  formName!: FormGroup;
  formCard!: FormGroup;
  isEditable = false;
  total:number = 0;

  products: Product[] = [];

  constructor(
    private storeService: StoreService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe( product => {
      this.products = product;
    });

    this.total = this.storeService.getTotal();

    this.formName = this.formBuilder.group({
      firstCtrl: ['', Validators.required],
      secondCtrl: ['', Validators.required],
    });
    this.formCard = this.formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  imageError(event: any){
    event.target.src = this.imageDefault;
  }

  cleanShoppingCart(){
    this.storeService.resetShoppingCart();
  }

}
