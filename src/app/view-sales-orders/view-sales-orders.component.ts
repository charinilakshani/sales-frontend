import { Component, OnInit } from '@angular/core';
import { SalesOrderService } from '../sales-order.service';

@Component({
  selector: 'app-view-sales-orders',
  templateUrl: './view-sales-orders.component.html',
  styleUrls: ['./view-sales-orders.component.css']
})
export class ViewSalesOrdersComponent implements OnInit {
  sales

  constructor( private salesorderService: SalesOrderService) { 
    this.sales = this.salesorderService.getAllSalesDetails();
    console.log("get all customer details", this.sales);
  }

  ngOnInit() {
  }

}
