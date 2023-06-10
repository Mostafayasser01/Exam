
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../Model/Iuser';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
   baseURL : string = 'http://localhost:3000/students';
   currentUser:Iuser | undefined;
  constructor(private http: HttpClient) { }
  getAllStudents(){
    return this.http.get(this.baseURL)
  }
  login(username:string,password:string){
    this.currentUser ={
      username:username,
      password:password
    }
  }
  get isLoggedIn():boolean{
    if (this.currentUser?.username && this.currentUser.password){
      return true
    }else{
      return false
    }
  }
  logOut(){
    this.currentUser = undefined;
  }
}