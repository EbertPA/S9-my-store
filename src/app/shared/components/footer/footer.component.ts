import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  email: FormControl;

  constructor() {
    this.email = new FormControl('',
    [
      Validators.required,
      Validators.email,
      Validators.minLength(4),
      Validators.maxLength(320)
    ]);
    this.email.valueChanges
    .subscribe(value => {
    })
  }

  ngOnInit(): void {
  }

  sendEmail() {
    if(this.email.valid){
      this.email.reset();
    }
  }

}
