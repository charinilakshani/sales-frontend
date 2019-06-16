import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { returnOrder } from '../Model/returnOrder';

@Injectable({
  providedIn: 'root'
})
export class ReturnOrderService {

  constructor( private http:HttpClient) {} 
  // url ="  http://localhost:8081/returnOrder"
  url ="/api/returnOrder"

  getAllReturnProducts() {
    console.log("get all customerDetails ", this.http.get<returnOrder[]>(this.url));
    return this.http.get<returnOrder[]>(this.url);
    // return 
  }
   
}
