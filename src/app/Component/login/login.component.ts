
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string='';
  password:string='';
  students:any;
  constructor(private x:LoginService,private router:Router){
    this.students=this.x.getAllStudents().subscribe({
      next: (Response)=>{
        console.log(Response)
      },
      error: (myError)=>{
        console.log(myError)
      },
    });
    console.log(this.students);
  }

  loginForm= new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(3)]),
    pass: new FormControl('',[Validators.required,Validators.minLength(3)]),
  });
  ngOnInit(): void{
  }
  get getUsername(){
    return this.loginForm.controls['username']
  }
  get getPassword(){
    return this.loginForm.controls['pass']
  }
  login(e:Event){
    this.x.login(this.username,this.password)
    this.router.navigate(['/home'])
  }

}
