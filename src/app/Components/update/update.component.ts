import { Component, OnInit } from '@angular/core';
import { TestService } from '../../Services/test.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {
  Id: any;
  constructor(private myservice:TestService, myactivated: ActivatedRoute ) {
     this.Id = myactivated.snapshot.params['id']
  }
   product:any;
   
  ngOnInit(): void {
    
    this.myservice.getProductById(this.Id).subscribe(
      (response)=>{
        this.product=response;
      }
    )
    //   this.myservice.updateProduct(Id, product: {Name:string,Catagory:string, Photo:string, Price: number}).subscribe(
    //   (response)=>{
    //     this.product=response;
    //   }
    // )
  }

}
