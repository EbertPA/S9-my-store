import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  imageDefault: string = '../../../assets/images/default.png';

  img: string = '';

  @Input('img')
   set changeImg(newImg: string){
     this.img = newImg;
   };

  @Output() loaded = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  imageLoaded() {
    this.loaded.emit(this.img);
  }

  imageError() {
    this.img = this.imageDefault;
  }

}
