import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourierInfo } from '../Model/CourierInfo';

@Injectable({
  providedIn: 'root'
})
export class CourierInfoServiceService {

  constructor(private http:HttpClient) {  }

  url ="/api/courierInfo"

  getByCourierEmail(email) {

    return this.http.get <CourierInfo>(this.url+"/email/"+ email);
   }
}
