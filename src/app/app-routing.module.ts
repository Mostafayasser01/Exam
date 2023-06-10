import { QExamComponent } from './Component/qexam/qexam.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './Component/result/result.component';
import { FooterComponent } from './Component/footer/footer.component';
import { LoginComponent } from './Component/login/login.component';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { ContactComponent } from './Component/contact/contact.component';
import { HomeyComponent } from './Component/homey/homey.component';
import { AboutyComponent } from './Component/abouty/abouty.component';

const routes: Routes = [
   {path:'',component:LoginComponent},
   {path:'login',component:LoginComponent},
   {path:'home',component:HomeyComponent},
   {path:'about',component:AboutyComponent},
   {path:'contact',component:ContactComponent},
  {path:'Score',component:ResultComponent},
  {path:'Exam',component:QExamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
