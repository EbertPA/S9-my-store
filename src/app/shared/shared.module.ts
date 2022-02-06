import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
// import { BannerComponent } from '../home/components/banner/banner.component';
import { LayoutComponent } from './components/layout/layout.component';

import { MaterialModule } from './../material/material.module'

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    // BannerComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    // BannerComponent
  ]
})
export class SharedModule { }
