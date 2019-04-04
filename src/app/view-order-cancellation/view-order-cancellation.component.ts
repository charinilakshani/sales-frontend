import { Component, OnInit } from '@angular/core';
import { SalesOrderService } from '../sales-order.service';

@Component({
  selector: 'app-view-order-cancellation',
  templateUrl: './view-order-cancellation.component.html',
  styleUrls: ['./view-order-cancellation.component.css']
})
export class ViewOrderCancellationComponent implements OnInit {
sales
  constructor( private salesorderService: SalesOrderService) { 
    this.sales = this.salesorderService.getAllSalesDetails();
    console.log("get all customer details", this.sales);
  }


  ngOnInit() {
  }

}
