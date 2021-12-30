import { Component, OnInit } from '@angular/core';
import { TestService } from '../../Services/test.service';
import { ActivatedRoute, Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    Id: any;
    constructor(private myservice:TestService, myactivated: ActivatedRoute, private router:Router ) {
       this.Id = myactivated.snapshot.params['id']
    }
     product:any;
     
     Price=" ";
     ourValidation:FormGroup;

  ngOnInit(): void {
    this.ourValidation = new FormGroup({
      Price: new FormControl("", [Validators.required]),
    
    })
    this.myservice.getProductById(this.Id).subscribe(
      (response)=>{
        this.product=response;
        console.log("ressss",response)
      }
    )
  }
  
  changePrice(){
    // this.product={
    //   Price : this.Price,}
     this.product.Price=this.Price; 
    this.myservice.updateProduct(this.product).subscribe(
      (Response)=>{
        
        this.router.navigateByUrl("/dashboard");
        alert("Price has been successfully changed :)");
      }
    )
  }

}
