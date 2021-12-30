import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TestService } from '../../Services/test.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public myservice:TestService, private router:Router) { }
  user:any;

  ngOnInit(): void {
  }
  ourValidation = new FormGroup({
    Username: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('[a-zA-Z ]*')]),
    UserPassword: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
    UserAddress: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('[a-zA-Z ]*')]),
    UserEmail: new FormControl("", [Validators.required, Validators.pattern('[A-Za-z0-9.%-]+@[A-Za-z0-9.%-]+\\.[a-z]{2,3}')]),
    UserPhone: new FormControl("", [Validators.required, Validators.maxLength(11),Validators.minLength(11), Validators.pattern('^01[0-2,5]{1}[0-9]{8}$')]),

  })

  get NameValid(){
    return this.ourValidation.controls['Username'].valid
  }
  get PasswordValid(){
    return this.ourValidation.controls['UserPassword'].valid
  }
  get AddressValid(){
    return this.ourValidation.controls['UserAddress'].valid
  }
  get EmailValid(){
    return this.ourValidation.controls['UserEmail'].valid
  }
  get PhoneNumberValid(){
    return this.ourValidation.controls['UserPhone'].valid
  }

  cancel(){
    this.ourValidation.reset();
  }
  submitForm(){
    this.user = {
      Username:this.ourValidation.controls['Username'].value,
      UserPassword:this.ourValidation.controls['UserPassword'].value,
      UserEmail:this.ourValidation.controls['UserEmail'].value,
      UserAddress: this.ourValidation.controls['UserAddress'].value,
      UserPhone: this.ourValidation.controls['UserPhone'].value
    }
    this.myservice.addUser(this.user).subscribe(
      (response)=>{
        this.user=response;
        
      }
    )
    alert("User has been successfully added :) ");
    this.router.navigateByUrl("/");
  }
}


