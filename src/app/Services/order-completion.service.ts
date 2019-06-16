import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderCompletionNote } from '../Model/OrderCompletionNote';

@Injectable({
  providedIn: 'root'
})
export class OrderCompletionService {

  constructor(private http:HttpClient) {}

   url ="/api/completionNote"


   getALlNote() {  

     console.log("get all client ", this.http.get<OrderCompletionNote[]>(this.url));
     return this.http.get<OrderCompletionNote[]>(this.url);
     // return 
 
   }
}
