import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TestService } from '../../Services/test.service';
import { RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public myservice:TestService, private router:Router) { }
product:any;
  ngOnInit(): void {
  }
  ourValidation = new FormGroup({
    Name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('[a-zA-Z ]*')]),
    Category: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    Price: new FormControl("", [Validators.required, Validators.minLength(1), Validators.maxLength(4)]),
    Image: new FormControl("")

  })
  senddata(){
    // console.log(this.ourValidation.controls['Name'].valid)
    // console.log(this.ourValidation.controls['Category'].valid)
    // console.log(this.ourValidation.controls['Price'].valid)
    // console.log(this.ourValidation.controls['Image'].valid)
  }
  get NameValid(){
    return this.ourValidation.controls['Name'].valid
  }
  get CategoryValid(){
    return this.ourValidation.controls['Category'].valid
  }
  get PriceValid(){
    return this.ourValidation.controls['Price'].valid
  }
  get ImageValid(){
    return this.ourValidation.controls['Image'].valid
  }
  
  cancel(){
    this.ourValidation.reset();
  }
 

  submitForm(){
    this.product = {
      Name:this.ourValidation.controls['Name'].value,
      Price:this.ourValidation.controls['Price'].value,
      Category:this.ourValidation.controls['Category'].value,
      Image: this.ourValidation.controls['Image'].value
    }
    this.myservice.addProduct(this.product).subscribe(
      (response)=>{
        this.product=response;
        
      }
    )
    this.router.navigateByUrl("/dashboard");
  }
  
  
}
