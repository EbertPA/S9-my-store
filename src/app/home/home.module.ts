import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { BannerComponent } from './components/banner/banner.component';
// import { HomeComponent } from './../home/components/home/home.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
