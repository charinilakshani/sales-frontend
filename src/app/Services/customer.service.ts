import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { clienInfo } from '../Model/clientInfo';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  url ="  http://localhost:8080/clientInfo"

  getAllCustomer() {
    console.log("get all customerDetails ", this.http.get<clienInfo[]>(this.url));
    return this.http.get<clienInfo[]>(this.url);
    // return 
  }

   getcustomerbyId(pid){
      return this.http.get <clienInfo[]>(this.url);

   }

}
