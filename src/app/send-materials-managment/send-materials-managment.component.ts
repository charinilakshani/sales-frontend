import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SalesOrderService } from '../Services/sales-order.service';
import{ take } from 'rxjs/operators';
import { salesOrder } from '../Model/salesOrder';

@Component({
  selector: 'app-send-materials-managment',
  templateUrl: './send-materials-managment.component.html',
  styleUrls: ['./send-materials-managment.component.css']
})
export class SendMaterialsManagmentComponent implements OnInit {
  salesOrder ={}
  enquiry
  orderId
  constructor(private router:Router,
     private route:ActivatedRoute,
     private salesOrderService:SalesOrderService) {


    this.orderId =this.route.snapshot.paramMap.get('orderId');
    console.log("get order Id",this.orderId)
    if(this.orderId){
      console.log("enquire Id",this.orderId)
      this.salesOrderService.getOrderbyId( this.orderId).pipe(take(1)).subscribe(p =>this.salesOrder = p);
    }

    // update sales table  Meterail Management template.

  }

  save(salesOrder) {
    
  console.log(" sales order",salesOrder)

    if (this.orderId) {

      this.salesOrderService.getOrderbyId(this.orderId).subscribe(order => {
        console.log("get one product",order);
        let salesOrder1 = <salesOrder>new Object();
        salesOrder1.orderId =salesOrder.orderId
        salesOrder1.materialManagementStatus ="done";
       console.log("slaes order 1",salesOrder1)
        //  salesOrder.push[salesOrder1]
        this.salesOrderService.updateProduct(salesOrder1).subscribe(res =>{
         
        })
        this.salesOrderService.updateProduct(salesOrder).subscribe(res =>{
          console.log("updated",res)
        })

    
         
        }, err => {
          console.log(err);
        });
  

      
     

    } else {
      this.salesOrderService.addNewProduct(salesOrder).subscribe(data => {
        console.log(" add new product", data);
      });
    }
  
}
sendT(){
  console.log("send")

}

  ngOnInit() {
  }

}
