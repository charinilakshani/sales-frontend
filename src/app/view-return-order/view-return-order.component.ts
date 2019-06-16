import { Component, OnInit } from '@angular/core';
import { ReturnOrderService } from '../Services/return-order.service';
import { SalesOrderService } from '../Services/sales-order.service';
import { salesOrder } from '../Model/salesOrder';

@Component({
  selector: 'app-view-return-order',
  templateUrl: './view-return-order.component.html',
  styleUrls: ['./view-return-order.component.css']
})
export class ViewReturnOrderComponent implements OnInit {

  returnOrder
  salesOrder: salesOrder;
  constructor( private returnOrderService:ReturnOrderService,
               private salesorderService:SalesOrderService) { 

    this.returnOrder = this.returnOrderService.getAllReturnProducts();
    console.log("get all customer details", this.returnOrder);
  }


  ngOnInit() {
  }

  updateReturnAsCredit(orderId){

  }
  updateReturnAsExchange(orderId){

    let salesOrder = <salesOrder>new Object();
    salesOrder.orderId = salesOrder.orderId;
    // salesOrder.orderDate = salesOrder.orderDate;
    // salesOrder.itemId = salesOrder.itemId;
    // salesOrder.returnType ="exchange"
    // salesOrder.qty = salesOrder.qty;
    
  
    this.salesorderService.updateProduct(salesOrder).subscribe(data => {
      console.log(" update product", data);

      
    // passed To MM under the repire 
    // update the order table 
  });
  }

  updateReturnAsRepire(orderId){
    // passed to mm for repire;
    // update order table;

    let salesOrder = <salesOrder>new Object();
    // salesOrder.orderId = salesOrder.orderId;
    // salesOrder.orderDate = salesOrder.orderDate;
    // salesOrder.itemId = salesOrder.itemId;
    // salesOrder.returnType ="repire"
    // salesOrder.qty = salesOrder.qty;

    this.salesorderService.updateProduct(salesOrder).subscribe(data => {
      console.log(" update product", data);
    });
  }

}
