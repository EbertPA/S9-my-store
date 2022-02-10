import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  emailContact: FormControl;

  constructor() {
    this.emailContact = new FormControl('',
    [
      Validators.required,
      Validators.email,
      Validators.minLength(4),
      Validators.maxLength(320)
    ]);
    this.emailContact.valueChanges
    .subscribe(value => {
    })
  }

  ngOnInit(): void {
  }

  sendEmail() {
    if(this.emailContact.valid){
      this.emailContact.reset();
    }
  }

}
