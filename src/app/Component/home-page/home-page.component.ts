import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  images :string[] = ['assets/images/img1.jpg','assets/images/img2.jpg','assets/images/img3.jpg'];
currentIndex=0;

 ngOnInit(){

  setInterval(()=>{

    this.currentIndex=(this.currentIndex +1)%this.images.length;
  },3000)};


  i: number;
  imgSrc;
  constructor() {
    this.i = 0;
    this.imgSrc = 'assets/images/about-1.jpg';
  }
  
  imgsList: string[] = [
    'assets/images/about-1.jpg',
    'assets/images/about-2.jpg',
    'assets/images/about-3.jpg'
  ];
  show(): void {
   
    this.i++;
    if (this.imgsList.length == this.i) {
      this.i = 0;
    }
    this.imgSrc = this.imgsList[this.i];
  }



}
