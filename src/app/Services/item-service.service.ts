import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { item } from '../Model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  constructor(private http:HttpClient) {  }
 
  url ="/api/items"

  getAllItem() {  
    console.log("get all client ", this.http.get<item[]>(this.url));
    return this.http.get<item[]>(this.url);
    // return 

  }
}
