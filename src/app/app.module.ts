import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QExamComponent } from './Component/qexam/qexam.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FooterComponent } from './Component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultComponent } from './Component/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    QExamComponent,
    NavbarComponent,
    FooterComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
