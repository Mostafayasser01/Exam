import { QExamComponent } from './Component/qexam/qexam.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './Component/result/result.component';
import { FooterComponent } from './Component/footer/footer.component';

const routes: Routes = [
  // {path:'',component:ResultComponent},
  {path:'Score',component:ResultComponent},
  {path:'Exam',component:QExamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
