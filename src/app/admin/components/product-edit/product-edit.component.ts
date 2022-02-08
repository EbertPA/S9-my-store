import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form!: FormGroup;
  id: string ='';

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (params: Params) => {
      // const id = params.id;
      // console.log(id);
      this.id = params.id;
      this.productsService.getProduct(this.id)
      .subscribe( product => {
        console.log(product);
        this.form.patchValue(product)
      })
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if(this.form.valid){
      const product = this.form.value;
      this.productsService.updateProduct(this.id, product)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigate(['./admin/products']);
      });
    }
    // console.log(this.form.value);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['',[Validators.required]],
      price: ['',[Validators.required]],
      image: [''],
      description: ['',[Validators.required, Validators.maxLength(300)]]
    });
  }

}
