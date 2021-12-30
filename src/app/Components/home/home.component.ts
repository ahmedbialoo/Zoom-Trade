import { Component, OnInit } from '@angular/core';
import { TestService } from '../../Services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private myservice:TestService) { }
   products:any;
  ngOnInit(): void {
    this.myservice.getAllProducts().subscribe(
      (response)=>{
        this.products=response;
      }
    )
  }

}