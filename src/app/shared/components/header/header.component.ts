import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  showMenu: boolean = false;
  counter:number = 0;

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe( products => {
      this.counter = products.length;
    });
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
    console.log('toggleMenu');
  }

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    console.log(valor);
    this.txtBuscar.nativeElement.value = '';
  }
}
