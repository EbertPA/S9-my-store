import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StoreService } from './../../../services/store.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  showMenu: boolean = false;
  counter: number = 0;

  user: string | null | undefined = '';

  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.storeService.myCart$.subscribe((products) => {
      this.counter = products.length;
    });
    this.viewUser();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['./home']);
    });
  }

  viewUser() {
    this.authService.loginUser()
    .forEach(item => {
      this.user = item?.email;
    });
  }

}
