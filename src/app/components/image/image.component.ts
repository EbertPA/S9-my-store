import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit, OnChanges {

  imageDefault: string = '../../../assets/images/default.png';

  img: string = '';

  @Input('img')
   set changeImg(newImg: string){
     this.img = newImg;
    //  console.log('change just img =>', this.img);
   };
  @Output() loaded = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('ngOnChanges, imgValue=> ', this.img);
    // console.log('changes: ',changes);
    // if(changes.){
      // code
    // }
  }

  imageLoaded() {
    // console.log('log hijo');
    this.loaded.emit(this.img);
  }

  imageError() {
    // console.log('imageError');
    this.img = this.imageDefault;
  }



}
