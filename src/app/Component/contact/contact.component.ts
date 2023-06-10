import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm = new FormGroup({
    fName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    lName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
 get getfName(){
  return this.contactForm.controls['fName'];
 }
 get getlName(){
  return this.contactForm.controls['lName'];
 }
 get getEmail(){
  return this.contactForm.controls['email'];
 } get getPassword(){
  return this.contactForm.controls['password'];
 }

  contact(e:Event){
      e.preventDefault()
        if (this.contactForm.status == 'VALID') {
          console.log(this.contactForm.value);
        } else {
          console.log('Please enter valid data');
        }
  }

}
