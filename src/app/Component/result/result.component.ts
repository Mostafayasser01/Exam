import { Component } from '@angular/core';
import { QExamComponent } from '../qexam/qexam.component';
import { ExamService } from 'src/app/Services/exam.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
result:number=0;
  constructor(private service:ExamService)
{
  this.result=this.service.Score;
}
}
