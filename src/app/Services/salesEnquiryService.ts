import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SalesEnquiry } from '../Model/SalesEnquiry';


@Injectable({
  providedIn: 'root'
})
export class salesEnquiryService {

  constructor(private http:HttpClient) { }

  // url ="http://localhost:8080/salesEnquiry"
  url ="/api//salesEnquiries"

  getallInqurieInfo() {
    console.log("get all inquriessss ", this.http.get<SalesEnquiry[]>(this.url));
    return this.http.get<SalesEnquiry[]>(this.url);
  }
  

  addNewEnquiry(salesEnquiry) {
    console.log( "send from service",salesEnquiry);
    return this.http.post(this.url,salesEnquiry);
  }


  updateEnquiry(salesEnquiry) {
    console.log("update from front service",salesEnquiry);
    return this.http.put(this.url, salesEnquiry);
  }
  getEnquirybyId(enquiryId){
    console.log("passed from back end id",enquiryId)
    return this.http.get <SalesEnquiry>(this.url + `/${enquiryId}`);

 }

}
