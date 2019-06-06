import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { salesEnquiry } from '../Model/salesEnquiry';


@Injectable({
  providedIn: 'root'
})
export class salesEnquiryService {

  constructor(private http:HttpClient) { }

  url ="http://localhost:8080/salesEnquiry"
  getallInqurieInfo() {
    console.log("get all inquriessss ", this.http.get<salesEnquiry[]>(this.url));
    return this.http.get<salesEnquiry[]>(this.url);
    // return 
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
    return this.http.get <salesEnquiry[]>(this.url + `/${enquiryId}`);

 }

}
