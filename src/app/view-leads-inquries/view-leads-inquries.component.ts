import { Component, OnInit } from '@angular/core';
import {  salesEnquiryService } from '../Services/salesEnquiryService';

@Component({
  selector: 'app-view-leads-inquries',
  templateUrl: './view-leads-inquries.component.html',
  styleUrls: ['./view-leads-inquries.component.css']
})
export class ViewLeadsInquriesComponent implements OnInit {
inquries
  constructor(private  salesinqurieservice : salesEnquiryService ) { 
       //view all inquries
       this.inquries = this.salesinqurieservice.getallInqurieInfo();
       console.log("get all inquries details", this.inquries);
  }


  ngOnInit() {
  }

}
