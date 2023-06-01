import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultComponent } from '../Component/result/result.component';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  BaseURL:string="http://localhost:3000/items";

  Score:number=0;
  constructor(private http:HttpClient) { }
  getAllQExam()
  {
    return this.http.get(this.BaseURL);    
  }

}
