import { Component } from '@angular/core';

@Component({
  selector: 'app-comptwo',
  templateUrl: './comptwo.component.html',
  styleUrls: ['./comptwo.component.css']
})
export class ComptwoComponent {
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
