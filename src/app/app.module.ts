import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QExamComponent } from './Component/qexam/qexam.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FooterComponent } from './Component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultComponent } from './Component/result/result.component';
import { LoginComponent } from './Component/login/login.component';
import { ContactComponent } from './Component/contact/contact.component';
import { ComponeComponent } from './Component/compone/compone.component';

import { TeamComponent } from './Component/team/team.component';
import { AbouticonsComponent } from './Component/abouticons/abouticons.component';
import { AboutcontentComponent } from './Component/aboutcontent/aboutcontent.component';
import { Section1Component } from './Component/section1/section1.component';
import { Section2Component } from './Component/section2/section2.component';
import { HomeyComponent } from './Component/homey/homey.component';
import { AboutyComponent } from './Component/abouty/abouty.component';
import { AbouttComponent } from './Component/aboutt/aboutt.component';
import { ComptwoComponent } from './Component/comptwo/comptwo.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QExamComponent,
    FooterComponent,
    ResultComponent,
    LoginComponent,
    ContactComponent,
    ComponeComponent,
    TeamComponent,
    AbouticonsComponent,
    AboutcontentComponent,
    Section1Component,
    Section2Component,
    HomeyComponent,
    AboutyComponent,
    AbouttComponent,
    ComptwoComponent
     
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
