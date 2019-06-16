import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderCancellationService {
  url =""

  constructor(private http:HttpClient) { }

  addForCancellatino(salesOrder) {
    console.log( salesOrder);
    return this.http.post(this.url,salesOrder);
  }

 

}
