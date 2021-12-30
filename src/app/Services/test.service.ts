import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
 

  constructor(private myClient :HttpClient) { }

  baseUrl='http://localhost:52056/api' 

 
  getAllProducts(){
    return this.myClient.get(`${this.baseUrl}/products`)

  }
  addProduct(Product: {Name:string,Catagory:string, Photo:string, Price: number}){
    return this.myClient.post(`${this.baseUrl}/Postproduct`, Product)
  }
  addUser(user: {Username:string,UserPassword:string, UserAddress:string, UserEmail:string,UserPhone: string}){
    return this.myClient.post(`${this.baseUrl}/user/Postuser`, user)
  }
  updateProduct(Product: {Name:string,Catagory:string, Photo:string, Price: number}){
    return this.myClient.post(`${this.baseUrl}/update`,Product)
  }
  deleteProduct(Id:number){
    return this.myClient.get(`${this.baseUrl}/prod/${Id}`)
  }
  getProductById(Id: number){
    return this.myClient.get(`${this.baseUrl}/products/${Id}`)
  }

}
