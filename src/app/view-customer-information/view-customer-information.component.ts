import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-view-customer-information',
  templateUrl: './view-customer-information.component.html',
  styleUrls: ['./view-customer-information.component.css']
})
export class ViewCustomerInformationComponent implements OnInit {
  customers

  constructor(private customerservice: CustomerService) {

    //view all customers
    this.customers = this.customerservice.getAllCustomer();
    console.log("get all customer details", this.customers);
  }
  


  ngOnInit() {
  }

}
