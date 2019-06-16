import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { clientInfo } from '../Model/clientInfo';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  // url ="  http://localhost:8080/clientInfo"

  // url1 ="  http://localhost:8080/clientInfo/update"
  url ="/api/clientInfo"
  url1 ="/api/clientInfo/update"


  addNewCient(clienInfo) {  
    return this.http.post(this.url,clienInfo);
  
  }
  updateClient(users) {
    console.log( "send from service",users);   
    return this.http.put(this.url1,users);
  }

  getAllCustomer() {   
    console.log("get all customerDetails ", this.http.get<clientInfo[]>(this.url));
    return this.http.get<clientInfo[]>(this.url);
    // return 
  }

   getcustomerbyId(clientId){
      return this.http.get <clientInfo[]>(this.url + `/${clientId}`);
   }

   getCustomerByEmail(email){
    return this.http.get <clientInfo>(this.url+"/email/"+email);
   }

   DeleteClient(customerId){
    return this.http.delete <clientInfo>(this.url + `/${customerId}`);
   }

}
