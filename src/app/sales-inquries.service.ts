import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { salesInquries } from './salesInquries';

@Injectable({
  providedIn: 'root'
})
export class SalesInquriesService {

  constructor(private http:HttpClient) { }
  url ="http://localhost:8081/allInquries"
  getallInqurieInfo() {
    console.log("get all inquriessss ", this.http.get<salesInquries[]>(this.url));
    return this.http.get<salesInquries[]>(this.url);
    // return 
  }

}
