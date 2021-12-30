import { Component, OnInit } from '@angular/core';
import { TestService } from '../../Services/test.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private myservice:TestService) { }
   products:any;
  ngOnInit(): void {
   this.load();
  }

  load(){
    this.myservice.getAllProducts().subscribe(
      (response)=>{
        this.products=response;
      }
    )
  }
  DeleteProd(id){
    this.myservice.deleteProduct(id).subscribe((res)=>{
      this.load();
      alert("Your product has been successfully deleted :)");
    })

  }

}