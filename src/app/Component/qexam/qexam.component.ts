
import { Component } from '@angular/core';
import { ExamService } from 'src/app/Services/exam.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-qexam',
  templateUrl: './qexam.component.html',
  styleUrls: ['./qexam.component.css']
})





export class QExamComponent {
  items:any;
  constructor(private service:ExamService,private router:Router){
    this.items=this.service.getAllQExam().subscribe({
      next:((response)=>{this.items=response;}),
      error:((error)=>{console.log(error)})
    });  
  }
  
  answer:string[]=["","","","","","","","","","","","","","",""];
  result:number=0;
 
  trackByIndex(index: number, obj: any): any {
    return index;
  }


 Result()
 {
  this.result=0;
  for(let i=0;i<15;i++)
  {
    if(this.items[i].Answer===this.answer[i]&&this.answer[i]!="")
    {
      this.result++;
    }
    
  }
  this.service.Score=this.result;
  console.log(this.result);
  this.router.navigate(['/Score']);
 }

 
}
