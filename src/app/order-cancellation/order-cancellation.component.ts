import { Component, OnInit } from '@angular/core';
import { SalesOrderService } from '../Services/sales-order.service';
import { salesOrder } from '../Model/salesOrder';
import { OrderCancellationService } from '../Services/order-cancellation.service';

@Component({
  selector: 'app-order-cancellation',
  templateUrl: './order-cancellation.component.html',
  styleUrls: ['./order-cancellation.component.css']
})
export class OrderCancellationComponent implements OnInit {

  sales
  salesOrder: salesOrder;



  constructor( private salesorderService: SalesOrderService,
               private ordercancellationService:OrderCancellationService) { 
    this.sales = this.salesorderService.getAllSalesDetails();
    console.log("get all customer details", this.sales);
  }

  ngOnInit() {
  }
  filter(query: string){
    console.log("query",query);

  }

  sendForPenalty(orderId){
    console.log("send for panalty", orderId);
    // get from the back end
    this.salesorderService.getOrderbyId(orderId).subscribe(order => {
      console.log("get one product");
      let salesOrder = <salesOrder>new Object();
      salesOrder.orderId  =order.orderId;
      salesOrder.orderDate =order.orderDate;
      salesOrder.returnType ="cancel order";
      
      this.salesorderService.updateProduct(salesOrder).subscribe(res =>{
        console.log("updated",res)
      })
  
       
      }, err => {
        console.log(err);
      });









    // set return type as cancel order

   

  }

  updateSatus(orderId){
    console.log("send for panalty", orderId);
    // get from the back end
    this.salesorderService.getOrderbyId(orderId).subscribe(order => {

      console.log("get one product");

      let salesOrder = <salesOrder>new Object();
      salesOrder.orderId  =order.orderId;
      salesOrder.orderDate =order.orderDate;
      salesOrder.returnType ="cancel";
      
      this.salesorderService.updateProduct(salesOrder).subscribe(res =>{
        console.log("updated",res)
      })
  
       
      }, err => {
        console.log(err);
      });

    }
  }



