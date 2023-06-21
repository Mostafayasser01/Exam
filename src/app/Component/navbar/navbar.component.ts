
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private x:LoginService,private router:Router){}
  
  get getUsername(){
      
      return  this.x.currentUser?.username;
  }
  get isLoggedIn(){
    
    return this.x.isLoggedIn;
  }
  logout(){
    this.x.logOut();
    
  }
}
