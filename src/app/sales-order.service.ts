import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { salesOrder } from './salesOrder';

@Injectable({
  providedIn: 'root'
})
export class SalesOrderService {
  url =" http://localhost:8081//allSales"

  constructor(private http:HttpClient) {}
  getAllSalesDetails() {
    console.log("get all inquriessss ", this.http.get<salesOrder[]>(this.url));
    return this.http.get<salesOrder[]>(this.url);
    // return 
  }
}
