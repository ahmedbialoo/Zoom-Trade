import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ourValidation : FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.ourValidation = new FormGroup({
      Name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('[a-zA-Z ]*')]),
      Password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(10)])
    })
  }
  
  senddata(){
    console.log(this.ourValidation.controls['Name'].valid)
    console.log(this.ourValidation.controls['Password'].valid)
  }
  get NameValid(){
    return this.ourValidation.controls['Name'].valid
  }
  get PasswordValid(){
    return this.ourValidation.controls['Password'].valid
  }
  cancel(){
    this.ourValidation.reset();
  }
  login(){
      let x = this.ourValidation.controls['Name'].value;
      let y = this.ourValidation.controls['Password'].value;
      
      
      if (x=="Admin" && y=="123456"){
        this.router.navigateByUrl("/dashboard");
        
      }
      else {
        alert("TRY AGAIN!");
        this.ourValidation.reset();
      }
    }
      
  }



