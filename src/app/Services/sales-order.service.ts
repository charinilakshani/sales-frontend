import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { salesOrder } from '../Model/salesOrder';

@Injectable({
  providedIn: 'root'
})
export class SalesOrderService {
  url =" http://localhost:8080/salesOrder"

  constructor(private http:HttpClient) {}
  getAllSalesDetails() {
    console.log("get all sales ", this.http.get<salesOrder[]>(this.url));
    return this.http.get<salesOrder[]>(this.url);
    // return 
  }
 
    addNewProduct(Products) {
      console.log( Products);
      return this.http.post(this.url,Products);
    }
  
    updateProduct(Products) {
      console.log("update from front service", this.http.put(this.url, Products));
      return this.http.put(this.url, Products);
    }

    getOrderbyId(orderId){
      console.log("passed from back end id",orderId)
      return this.http.get <salesOrder>(this.url + `/${orderId}`);
  
   }
  
  }

  

