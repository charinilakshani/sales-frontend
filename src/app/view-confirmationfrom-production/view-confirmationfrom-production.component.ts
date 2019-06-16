import { Component, OnInit } from '@angular/core';
import { salesOrder } from '../Model/salesOrder';
import { ReturnOrderService } from '../Services/return-order.service';
import { SalesOrderService } from '../Services/sales-order.service';

@Component({
  selector: 'app-view-confirmationfrom-production',
  templateUrl: './view-confirmationfrom-production.component.html',
  styleUrls: ['./view-confirmationfrom-production.component.css']
})
export class ViewConfirmationfromProductionComponent implements OnInit {
  returnOrder
  salesOrder: salesOrder;
  constructor( private returnOrderService:ReturnOrderService,
               private salesorderService:SalesOrderService) { 

    this.returnOrder = this.returnOrderService.getAllReturnProducts();
    console.log("get all customer details", this.returnOrder);
  }


  ngOnInit() {
  }

  // updateReturnAsCredit(orderId){

  // }
  // updateReturnAsExchange(orderId){
  //    console.log("order Id",orderId);
  //   let salesOrder = <salesOrder>new Object();
  //   salesOrder.orderId = salesOrder.orderId;
  //   salesOrder.orderDate = salesOrder.orderDate;
  //   salesOrder.itemId = salesOrder.itemId;
  //   salesOrder.returnType ="exchange"
  //   salesOrder.qty = salesOrder.qty;

  //    console.log("salesOrder",salesOrder);
  
  //   this.salesorderService.updateProduct(salesOrder).subscribe(data => {
  //     console.log(" update product", data);
  
    

      
  //   // passed To MM under the repire 
  //   // update the order table 
  // });
  // }

  // updateReturnAsRepire(orderId){
  //   console.log("order Id for for new order ",orderId);
  //   // passed to mm for repire;
  //   // update order table;

  //   let salesOrder = <salesOrder>new Object();
  //   salesOrder.orderId = salesOrder.orderId;
  //   salesOrder.orderDate = salesOrder.orderDate;
  //   salesOrder.itemId = salesOrder.itemId;
  //   salesOrder.returnType ="repire"
  //   salesOrder.qty = salesOrder.qty;

  //   this.salesorderService.updateProduct(salesOrder).subscribe(data => {
  //     console.log(" update product", data);
  //   });
  // }

}
