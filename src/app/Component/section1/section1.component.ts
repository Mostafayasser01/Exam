import { Component } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component {
  images :string[] = ['assets/images/img1.jpg','assets/images/img2.jpg','assets/images/img3.jpg'];
  currentIndex=0;
  
   ngOnInit(){
  
    setInterval(()=>{
  
      this.currentIndex=(this.currentIndex +1)%this.images.length;
    },3000);
   }
  
}
