import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  url ="  http://localhost:8081/allclient"

  getAllCustomer() {
    console.log("get all customerDetails ", this.http.get<customer[]>(this.url));
    return this.http.get<customer[]>(this.url);
    // return 
  }

   getcustomerbyId(pid){
      return this.http.get <customer[]>(this.url);

   }

}
